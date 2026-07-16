import type { ReactNode } from "react";

type BookingLinkProps = {
  children: ReactNode;
  className?: string;
  href?: string;
};

const roadmapPath = "/roadmap";
const coachingPath = "/coaching";
const gamerRoadmapPdfPath = "/downloads/gamer-to-game-dev-roadmap.pdf";
const fallbackBillingUrl =
  "mailto:info@gamedevglory.com?subject=Manage%20my%20Game%20Dev%20Glory%20subscription";
const stripePaymentLink =
  "https://buy.stripe.com/3cIfZi2oT2YYet3flr1kA01";
const fallbackDiscordInviteUrl = "https://discord.gg/NQeegWAAJM";

function isUsableHref(value: string) {
  return (
    !value.includes("...") &&
    (value.startsWith("https://") ||
      value.startsWith("http://") ||
      value.startsWith("mailto:") ||
      value.startsWith("/"))
  );
}

export function getBookingUrl() {
  return roadmapPath;
}

export function getFreeQuestionUrl() {
  return roadmapPath;
}

export function getGamerRoadmapPdfUrl() {
  return gamerRoadmapPdfPath;
}

export function getGamerRoadmapSignupUrl() {
  return "/api/roadmap";
}

export function getRoadmapSessionUrl() {
  return roadmapPath;
}

export function getCoachingUrl() {
  return coachingPath;
}

export function getCoachingRequestUrl() {
  return "/api/coaching";
}

export function getStripeCheckoutUrl() {
  return process.env.NEXT_PUBLIC_STRIPE_COACHING_PAYMENT_LINK || stripePaymentLink;
}

export function getBillingPortalUrl() {
  const billingPortalUrl = process.env.NEXT_PUBLIC_STRIPE_CUSTOMER_PORTAL_URL;

  if (billingPortalUrl && isUsableHref(billingPortalUrl)) {
    return billingPortalUrl;
  }

  return fallbackBillingUrl;
}

export function getDiscordInviteUrl() {
  const discordInviteUrl = process.env.NEXT_PUBLIC_DISCORD_INVITE_URL;

  if (discordInviteUrl && isUsableHref(discordInviteUrl)) {
    return discordInviteUrl;
  }

  return fallbackDiscordInviteUrl;
}

export function BookingLink({
  children,
  className = "",
  href = roadmapPath,
}: BookingLinkProps) {
  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center whitespace-nowrap rounded-md border border-brand-yellow bg-brand-yellow px-5 py-3 text-sm font-semibold text-background transition hover:bg-[#ffd95f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-yellow ${className}`}
      href={href}
    >
      {children}
    </a>
  );
}

