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

    await sendLoopsEvent({
      email,
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
