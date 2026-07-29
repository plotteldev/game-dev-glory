type PostmarkResponse = {
  ErrorCode?: number;
  Message?: string;
};

type SendPostmarkEmailInput = {
  to: string;
  subject: string;
  textBody: string;
  htmlBody: string;
  replyTo?: string;
};

export class PostmarkConfigurationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "PostmarkConfigurationError";
  }
}

export class PostmarkApiError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "PostmarkApiError";
  }
}

function getPostmarkConfig() {
  const token = process.env.POSTMARK_SERVER_TOKEN;
  const from = process.env.POSTMARK_FROM_EMAIL ?? process.env.BOOKING_FROM_EMAIL;
  const messageStream =
    process.env.POSTMARK_MESSAGE_STREAM ??
    process.env.POSTMARK_MESSAGE_STEAM ??
    "outbound";

  if (!token) {
    throw new PostmarkConfigurationError("POSTMARK_SERVER_TOKEN is not set.");
  }

  if (!from) {
    throw new PostmarkConfigurationError("POSTMARK_FROM_EMAIL is not set.");
  }

  return { from, messageStream, token };
}

export function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function sendPostmarkEmail({
  to,
  subject,
  textBody,
  htmlBody,
  replyTo,
}: SendPostmarkEmailInput) {
  const { from, messageStream, token } = getPostmarkConfig();

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
      ReplyTo: replyTo,
      Subject: subject,
      TextBody: textBody,
      HtmlBody: htmlBody,
      MessageStream: messageStream,
    }),
  });

  const data = (await response.json().catch(() => ({}))) as PostmarkResponse;

  if (!response.ok || (data.ErrorCode && data.ErrorCode !== 0)) {
    throw new PostmarkApiError(
      data.Message || `Postmark request failed with status ${response.status}.`,
    );
  }

  return data;
}
