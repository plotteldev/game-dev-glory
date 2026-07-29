import {
  getFormString,
  getPublicUrl,
  isValidEmail,
  redirectTo,
  redirectWithError,
} from "@/lib/form-submissions";
import {
  escapeHtml,
  PostmarkConfigurationError,
  sendPostmarkEmail,
} from "@/lib/postmark";

export async function POST(request: Request) {
  const formData = await request.formData();
  const spamTrap = getFormString(formData, "website");

  if (spamTrap) {
    return redirectTo(request, "/roadmap/confirmed");
  }

  const email = getFormString(formData, "email").toLowerCase();

  if (!isValidEmail(email)) {
    return redirectWithError(request, "/roadmap", "validation");
  }

  try {
    const pdfUrl = getPublicUrl(
      request,
      "/downloads/gamer-to-game-dev-roadmap.pdf",
    ).toString();

    await sendPostmarkEmail({
      to: email,
      subject: "Your Game Dev Glory roadmap",
      textBody: [
        "Here is your free Gamer to Game Dev Roadmap:",
        "",
        pdfUrl,
        "",
        "Matt",
        "Game Dev Glory",
      ].join("\n"),
      htmlBody: [
        "<p>Here is your free Gamer to Game Dev Roadmap:</p>",
        `<p><a href="${escapeHtml(pdfUrl)}">Download the roadmap</a></p>`,
        "<p>Matt<br />Game Dev Glory</p>",
      ].join(""),
      replyTo: "info@gamedevglory.com",
    });

    return redirectTo(request, "/roadmap/confirmed");
  } catch (error) {
    console.error("Roadmap submission failed", error);

    return redirectWithError(
      request,
      "/roadmap",
      error instanceof PostmarkConfigurationError ? "configuration" : "delivery",
    );
  }
}
