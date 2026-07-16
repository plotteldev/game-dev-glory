import {
  getFormString,
  isValidEmail,
  redirectTo,
  redirectWithError,
} from "@/lib/form-submissions";
import {
  LoopsConfigurationError,
  sendLoopsEvent,
  sendLoopsTransactionalEmail,
} from "@/lib/loops";

function getNotificationRecipient() {
  return process.env.COACHING_REQUEST_RECIPIENT_EMAIL || "info@gamedevglory.com";
}

function getCoachingNotificationId() {
  const transactionalId = process.env.LOOPS_COACHING_NOTIFICATION_TRANSACTIONAL_ID;

  if (!transactionalId) {
    throw new LoopsConfigurationError(
      "LOOPS_COACHING_NOTIFICATION_TRANSACTIONAL_ID is not set.",
    );
  }

  return transactionalId;
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const spamTrap = getFormString(formData, "website");

  if (spamTrap) {
    return redirectTo(request, "/coaching/confirmed");
  }

  const name = getFormString(formData, "name");
  const email = getFormString(formData, "email").toLowerCase();
  const experienceLevel = getFormString(formData, "experience_level");
  const path = getFormString(formData, "path");
  const gameDevGoal = getFormString(formData, "game_dev_goal");
  const firstGameGoal = getFormString(formData, "first_game_goal");
  const currentProgress = getFormString(formData, "current_progress");
  const weeklyTime = getFormString(formData, "weekly_time");
  const paidServiceFit = getFormString(formData, "paid_service_fit");

  if (
    !name ||
    !isValidEmail(email) ||
    !experienceLevel ||
    !path ||
    !gameDevGoal ||
    !firstGameGoal ||
    !currentProgress ||
    !weeklyTime ||
    !paidServiceFit
  ) {
    return redirectWithError(request, "/coaching", "validation");
  }

  const submittedAt = new Date().toISOString();
  const coachingSummary = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Experience level: ${experienceLevel}`,
    `Path: ${path}`,
    `Weekly time: ${weeklyTime}`,
    `Paid service works for them: ${paidServiceFit}`,
    "",
    "What game dev should become:",
    gameDevGoal,
    "",
    "First game goal:",
    firstGameGoal,
    "",
    "Current progress:",
    currentProgress,
  ].join("\n");

  try {
    await sendLoopsEvent({
      email,
      firstName: name,
      source: "website-coaching",
      userGroup: "Coaching request",
      eventName:
        process.env.LOOPS_COACHING_REQUEST_EVENT_NAME ||
        "coaching_request_submitted",
      mailingListId: process.env.LOOPS_COACHING_REQUEST_MAILING_LIST_ID,
      eventProperties: {
        experienceLevel,
        path,
        paidServiceFit,
        weeklyTime,
        submittedAt,
      },
    });

    await sendLoopsTransactionalEmail({
      email: getNotificationRecipient(),
      transactionalId: getCoachingNotificationId(),
      dataVariables: {
        leadName: name,
        leadEmail: email,
        experienceLevel,
        path,
        paidServiceFit,
        weeklyTime,
        gameDevGoal,
        firstGameGoal,
        currentProgress,
        coachingSummary,
        submittedAt,
      },
    });

    if (process.env.LOOPS_COACHING_CONFIRMATION_TRANSACTIONAL_ID) {
      await sendLoopsTransactionalEmail({
        email,
        transactionalId: process.env.LOOPS_COACHING_CONFIRMATION_TRANSACTIONAL_ID,
        addToAudience: true,
        dataVariables: {
          name,
          submittedAt,
        },
      }).catch((error) => {
        console.error("Coaching confirmation email failed", error);
      });
    }

    return redirectTo(request, "/coaching/confirmed");
  } catch (error) {
    console.error("Coaching submission failed", error);

    return redirectWithError(
      request,
      "/coaching",
      error instanceof LoopsConfigurationError ? "configuration" : "delivery",
    );
  }
}
