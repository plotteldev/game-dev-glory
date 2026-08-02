import {
  getFormString,
  getPublicUrl,
  isValidEmail,
  redirectTo,
  redirectWithError,
} from "@/lib/form-submissions";
import {
  LoopsConfigurationError,
  sendLoopsEvent,
  sendLoopsTransactionalEmail,
} from "@/lib/loops";

function getRoadmapNotificationRecipient() {
  return process.env.ROADMAP_SIGNUP_RECIPIENT_EMAIL || "info@gamedevglory.com";
}

async function getSignupIdempotencyKey(email: string, purpose: string) {
  const value = new TextEncoder().encode(`roadmap:${purpose}:${email}`);
  const digest = await crypto.subtle.digest("SHA-256", value);
  const hash = Array.from(new Uint8Array(digest), (byte) =>
    byte.toString(16).padStart(2, "0"),
  ).join("");

  return `roadmap-${purpose}-${hash}`;
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const spamTrap = getFormString(formData, "website");

  if (spamTrap) {
    return redirectTo(request, "/roadmap/confirmed");
  }

  const email = getFormString(formData, "email").toLowerCase();
  const source = getFormString(formData, "source") || "roadmap";

  if (!isValidEmail(email)) {
    return redirectWithError(request, "/roadmap", "validation");
  }

  try {
    const pdfUrl = getPublicUrl(
      request,
      "/downloads/gamer-to-game-dev-roadmap.pdf",
    ).toString();
    const submittedAt = new Date().toISOString();
    const [deliveryIdempotencyKey, notificationIdempotencyKey] =
      await Promise.all([
        getSignupIdempotencyKey(email, "delivery"),
        getSignupIdempotencyKey(email, "notification"),
      ]);

    await sendLoopsEvent({
      email,
      idempotencyKey: deliveryIdempotencyKey,
      source: "website-roadmap",
      userGroup: "Roadmap",
      eventName: process.env.LOOPS_ROADMAP_EVENT_NAME || "roadmap_signup",
      mailingListId: process.env.LOOPS_ROADMAP_MAILING_LIST_ID,
      eventProperties: {
        source,
        leadMagnet: "gamer-to-game-dev-roadmap",
        pdfUrl,
        submittedAt,
      },
    });

    const notificationTransactionalId =
      process.env.LOOPS_ROADMAP_NOTIFICATION_TRANSACTIONAL_ID;

    if (notificationTransactionalId) {
      await sendLoopsTransactionalEmail({
        email: getRoadmapNotificationRecipient(),
        transactionalId: notificationTransactionalId,
        idempotencyKey: notificationIdempotencyKey,
        dataVariables: {
          leadEmail: email,
          source,
          submittedAt,
          pdfUrl,
        },
      }).catch((error) => {
        console.error("Roadmap signup notification failed", error);
      });
    } else {
      console.warn(
        "Roadmap signup notification skipped: LOOPS_ROADMAP_NOTIFICATION_TRANSACTIONAL_ID is not set.",
      );
    }

    return redirectTo(request, "/roadmap/confirmed");
  } catch (error) {
    console.error("Roadmap submission failed", error);

    return redirectWithError(
      request,
      "/roadmap",
      error instanceof LoopsConfigurationError ? "configuration" : "delivery",
    );
  }
}
