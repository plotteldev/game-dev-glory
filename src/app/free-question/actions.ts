"use server";

export type FreeQuestionFormState = {
  status: "idle" | "success" | "error";
  message: string;
  fields: {
    email: string;
    question: string;
  };
  fieldErrors?: {
    email?: string;
    question?: string;
  };
};

const emptyFields = {
  email: "",
  question: "",
};

function getString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function asParagraphs(value: string) {
  return escapeHtml(value)
    .split(/\n{2,}/)
    .map((paragraph) => `<p>${paragraph.replaceAll("\n", "<br />")}</p>`)
    .join("");
}

type PostmarkResponse = {
  ErrorCode?: number;
  Message?: string;
};

async function sendFreeQuestionEmail({
  email,
  question,
}: {
  email: string;
  question: string;
}) {
  const token = process.env.POSTMARK_SERVER_TOKEN;
  const from = process.env.POSTMARK_FROM_EMAIL ?? process.env.BOOKING_FROM_EMAIL;
  const to = process.env.FREE_QUESTION_TO_EMAIL ?? process.env.BOOKING_TO_EMAIL ?? "info@gamedevglory.com";
  const messageStream =
    process.env.POSTMARK_MESSAGE_STREAM ?? process.env.POSTMARK_MESSAGE_STEAM ?? "outbound";

  if (!token || !from) {
    return {
      ok: false,
      reason: "missing_config",
    };
  }

  const text = [
    "New free Unity question",
    "",
    `Email: ${email}`,
    "",
    "Question:",
    question,
  ].join("\n");

  const html = [
    "<h1>New free Unity question</h1>",
    `<p><strong>Email:</strong> ${escapeHtml(email)}</p>`,
    "<h2>Question</h2>",
    asParagraphs(question),
  ].join("");

  const response = await fetch("https://api.postmarkapp.com/email", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-Postmark-Server-Token": token,
    },
    body: JSON.stringify({
      From: from,
      To: to,
      ReplyTo: email,
      Subject: "Free Unity question",
      TextBody: text,
      HtmlBody: html,
      MessageStream: messageStream,
    }),
  });

  if (!response.ok) {
    return {
      ok: false,
      reason: "postmark_error",
    };
  }

  const result = (await response.json()) as PostmarkResponse;

  if (result.ErrorCode && result.ErrorCode !== 0) {
    return {
      ok: false,
      reason: "postmark_error",
    };
  }

  return {
    ok: true,
  };
}

export async function submitFreeQuestion(
  _previousState: FreeQuestionFormState,
  formData: FormData,
): Promise<FreeQuestionFormState> {
  const email = getString(formData, "email");
  const question = getString(formData, "question");
  const website = getString(formData, "website");

  const fields = { email, question };

  if (website) {
    return {
      status: "success",
      message: "Thanks. Your question has been sent.",
      fields: emptyFields,
    };
  }

  const fieldErrors: FreeQuestionFormState["fieldErrors"] = {};

  if (!isEmail(email)) {
    fieldErrors.email = "Enter a valid email address.";
  }

  if (question.length < 20) {
    fieldErrors.question = "Add a little more detail so I can give you a useful next step.";
  } else if (question.length > 4000) {
    fieldErrors.question = "Keep the question under 4000 characters.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Check the highlighted fields.",
      fields,
      fieldErrors,
    };
  }

  const result = await sendFreeQuestionEmail({ email, question });

  if (!result.ok) {
    return {
      status: "error",
      message:
        result.reason === "missing_config"
          ? "This form is not configured yet. Please try again later."
          : "The question could not be sent. Please try again in a minute.",
      fields,
    };
  }

  return {
    status: "success",
    message: "Thanks. Your question has been sent.",
    fields: emptyFields,
  };
}
