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

  if (!isValidEmail(email)) {
    return redirectWithError(request, "/roadmap", "validation");
  }

  try {
    const pdfUrl = getPublicUrl(
      request,
      "/downloads/gamer-to-game-dev-roadmap.pdf",
    ).toString();
    const bookingUrl = getPublicUrl(request, "/book").toString();
    const submittedAt = new Date().toISOString();

    await sendPostmarkEmail({
      to: email,
      subject: "Your Game Dev Glory roadmap",
      textBody: [
        "Here is your free Gamer to Game Dev Roadmap:",
        "",
        pdfUrl,
        "",
        "Want help taking the first step? Book a 1:1 coaching session:",
        "",
        bookingUrl,
        "",
        "Matt",
        "Game Dev Glory",
      ].join("\n"),
      htmlBody: [
        "<p>Here is your free Gamer to Game Dev Roadmap:</p>",
        `<p><a href="${escapeHtml(pdfUrl)}">Download the roadmap</a></p>`,
        "<p>Want help taking the first step? Book a 1:1 coaching session:</p>",
        `<p><a href="${escapeHtml(bookingUrl)}">Book a coaching session</a></p>`,
        "<p>Matt<br />Game Dev Glory</p>",
      ].join(""),
      replyTo: "info@gamedevglory.com",
    });

    await sendPostmarkEmail({
      to: getRoadmapNotificationRecipient(),
      subject: "New roadmap signup",
      textBody: [
        "New Gamer to Game Dev Roadmap signup",
        "",
        `Email: ${email}`,
        `Roadmap: ${pdfUrl}`,
        `Submitted: ${submittedAt}`,
      ].join("\n"),
      htmlBody: [
        "<h1>New roadmap signup</h1>",
        `<p><strong>Email:</strong> ${escapeHtml(email)}</p>`,
        `<p><strong>Roadmap:</strong> <a href="${escapeHtml(pdfUrl)}">${escapeHtml(
          pdfUrl,
        )}</a></p>`,
        `<p><strong>Submitted:</strong> ${escapeHtml(submittedAt)}</p>`,
      ].join(""),
      replyTo: email,
    }).catch((error) => {
      console.error("Roadmap signup notification failed", error);
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
