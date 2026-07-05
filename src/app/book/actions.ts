"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";

export type BookingFormState = {
  errors?: Partial<Record<BookingField, string>>;
  message?: string;
  values?: Partial<BookingSubmission>;
};

type BookingField =
  | "name"
  | "email"
  | "experience"
  | "helpWith"
  | "message";

type BookingSubmission = Record<BookingField, string>;

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

type PostmarkMessage = {
  From: string;
  To: string;
  ReplyTo?: string;
  Subject: string;
  TextBody: string;
  HtmlBody: string;
  MessageStream: string;
};

type PostmarkBatchResult = {
  To?: string;
  MessageID?: string;
  ErrorCode?: number;
  Message?: string;
};

const postmarkBatchEndpoint = "https://api.postmarkapp.com/email/batch";
const oneHourMs = 60 * 60 * 1000;
const maxSubmissionsPerHour = 5;
const rateLimitStore = new Map<string, RateLimitEntry>();
const missingEmailConfigMessage = "Booking email is not configured.";

function getValue(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function getClientIp() {
  const headerList = await headers();
  const forwardedFor = headerList.get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return (
    headerList.get("x-real-ip") ||
    headerList.get("cf-connecting-ip") ||
    "unknown"
  );
}

async function isRateLimited() {
  const clientIp = await getClientIp();
  const now = Date.now();
  const entry = rateLimitStore.get(clientIp);

  if (!entry || entry.resetAt <= now) {
    rateLimitStore.set(clientIp, { count: 1, resetAt: now + oneHourMs });
    return false;
  }

  if (entry.count >= maxSubmissionsPerHour) {
    return true;
  }

  entry.count += 1;
  return false;
}

function validateSubmission(submission: BookingSubmission) {
  const errors: BookingFormState["errors"] = {};

  if (!submission.name) {
    errors.name = "Enter your name.";
  }

  if (!submission.email) {
    errors.email = "Enter your email.";
  } else if (!isValidEmail(submission.email)) {
    errors.email = "Enter a valid email.";
  }

  if (submission.experience.length < 10) {
    errors.experience = "Share a little about your current experience.";
  }

  if (submission.helpWith.length < 10) {
    errors.helpWith = "Share what you want help with.";
  }

  return errors;
}

function formatNotificationPlainText(submission: BookingSubmission) {
  return [
    "New Game Dev Glory portfolio roadmap call request",
    "",
    `Name: ${submission.name}`,
    `Email: ${submission.email}`,
    "",
    "Current experience:",
    submission.experience,
    "",
    "What they want help with:",
    submission.helpWith,
    "",
    "Optional message:",
    submission.message || "Not provided",
  ].join("\n");
}

function formatNotificationHtml(submission: BookingSubmission) {
  const rows = [
    ["Name", submission.name],
    ["Email", submission.email],
    ["Current experience", submission.experience],
    ["What they want help with", submission.helpWith],
    ["Optional message", submission.message || "Not provided"],
  ];

  return `
    <h1>New Game Dev Glory portfolio roadmap call request</h1>
    ${rows
      .map(
        ([label, value]) => `
          <p>
            <strong>${escapeHtml(label)}</strong><br />
            ${escapeHtml(value).replaceAll("\n", "<br />")}
          </p>
        `,
      )
      .join("")}
  `;
}

function formatConfirmationPlainText(submission: BookingSubmission) {
  return [
    `Hi ${submission.name},`,
    "",
    "Thanks for requesting a free Game Dev Glory portfolio roadmap call.",
    "",
    "I have received your details and will read through them before replying. If it looks like a fit, I will send through the calendar link for a 15-minute call.",
    "",
    "You do not need to do anything else right now.",
    "",
    "Thanks,",
    "Matt",
    "Game Dev Glory",
  ].join("\n");
}

function formatConfirmationHtml(submission: BookingSubmission) {
  return `
    <p>Hi ${escapeHtml(submission.name)},</p>
    <p>Thanks for requesting a free Game Dev Glory portfolio roadmap call.</p>
    <p>
      I have received your details and will read through them before replying.
      If it looks like a fit, I will send through the calendar link for a
      15-minute call.
    </p>
    <p>You do not need to do anything else right now.</p>
    <p>
      Thanks,<br />
      Matt<br />
      Game Dev Glory
    </p>
  `;
}

async function sendBookingEmail(submission: BookingSubmission) {
  const serverToken = process.env.POSTMARK_SERVER_TOKEN;
  const to = process.env.BOOKING_TO_EMAIL;
  const from = process.env.BOOKING_FROM_EMAIL;
  const messageStream = process.env.POSTMARK_MESSAGE_STREAM || "outbound";

  if (!serverToken || !to || !from) {
    throw new Error(missingEmailConfigMessage);
  }

  const messages: PostmarkMessage[] = [
    {
      From: from,
      To: to,
      ReplyTo: submission.email,
      Subject: `Portfolio roadmap call request from ${submission.name}`,
      TextBody: formatNotificationPlainText(submission),
      HtmlBody: formatNotificationHtml(submission),
      MessageStream: messageStream,
    },
    {
      From: from,
      To: submission.email,
      ReplyTo: to,
      Subject: "Your Game Dev Glory call request was received",
      TextBody: formatConfirmationPlainText(submission),
      HtmlBody: formatConfirmationHtml(submission),
      MessageStream: messageStream,
    },
  ];

  const response = await fetch(postmarkBatchEndpoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-Postmark-Server-Token": serverToken,
    },
    body: JSON.stringify(messages),
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(
      `Postmark email failed with status ${response.status}: ${details}`,
    );
  }

  const results = (await response.json()) as PostmarkBatchResult[];
  const failures = results.filter((result) => result.ErrorCode !== 0);

  if (failures.length > 0) {
    throw new Error(
      `Postmark email failed: ${failures
        .map((failure) => `${failure.To ?? "unknown"}: ${failure.Message}`)
        .join("; ")}`,
    );
  }
}

export async function submitBookingRequest(
  _prevState: BookingFormState,
  formData: FormData,
): Promise<BookingFormState> {
  const honeypot = getValue(formData, "company");

  if (honeypot) {
    redirect("/book/confirmed");
  }

  if (await isRateLimited()) {
    return {
      message: "Too many requests from this connection. Please try again later.",
    };
  }

  const submission: BookingSubmission = {
    name: getValue(formData, "name"),
    email: getValue(formData, "email"),
    experience: getValue(formData, "experience"),
    helpWith: getValue(formData, "helpWith"),
    message: getValue(formData, "message"),
  };

  const errors = validateSubmission(submission);

  if (Object.keys(errors).length > 0) {
    return {
      errors,
      message: "Please check the highlighted fields.",
      values: submission,
    };
  }

  try {
    await sendBookingEmail(submission);
  } catch (error) {
    if (
      error instanceof Error &&
      error.message === missingEmailConfigMessage
    ) {
      return {
        message:
          "Booking email is not configured yet. Please try again later.",
        values: submission,
      };
    }

    console.error(error);

    return {
      message:
        "Something went wrong sending your details. Please try again later.",
      values: submission,
    };
  }

  redirect("/book/confirmed");
}
