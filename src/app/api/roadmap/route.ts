import {
  getFormString,
  getPublicUrl,
  isValidEmail,
  redirectTo,
  redirectWithError,
} from "@/lib/form-submissions";
import { LoopsConfigurationError, sendLoopsEvent } from "@/lib/loops";

export async function POST(request: Request) {
  const formData = await request.formData();
  const spamTrap = getFormString(formData, "website");

  if (spamTrap) {
    return redirectTo(request, "/roadmap/confirmed");
  }

  const name = getFormString(formData, "name");
  const email = getFormString(formData, "email").toLowerCase();
  const source = getFormString(formData, "source") || "roadmap";

  if (!name || !isValidEmail(email)) {
    return redirectWithError(request, "/roadmap", "validation");
  }

  try {
    await sendLoopsEvent({
      email,
      firstName: name,
      source: "website-roadmap",
      userGroup: "Roadmap",
      eventName: process.env.LOOPS_ROADMAP_EVENT_NAME || "roadmap_signup",
      mailingListId: process.env.LOOPS_ROADMAP_MAILING_LIST_ID,
      eventProperties: {
        source,
        leadMagnet: "gamer-to-game-dev-roadmap",
        pdfUrl: getPublicUrl(
          request,
          "/downloads/gamer-to-game-dev-roadmap.pdf",
        ).toString(),
        submittedAt: new Date().toISOString(),
      },
    });

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
