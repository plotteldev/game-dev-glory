import type { Metadata } from "next";
import { getBillingPortalUrl, getDiscordInviteUrl } from "@/components/booking-link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "You Are In | Game Dev Glory",
  description:
    "Confirmation page for Game Dev Glory coaching subscriptions.",
};

const nextSteps = [
  "Check your inbox for the Stripe receipt and subscription email.",
  "Join Discord using the invite below.",
  "Post your project context and first question in your private channel.",
  "Add screenshots, code, errors, logs, or short clips if they help.",
];

export default function JoinConfirmedPage() {
  const billingPortalUrl = getBillingPortalUrl();
  const discordInviteUrl = getDiscordInviteUrl();

  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <SiteHeader showNav={false} />
      <main className="px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
        <section className="mx-auto max-w-3xl rounded-md border border-border bg-surface p-6 sm:p-8">
          <p className="mb-4 inline-flex rounded border border-brand-yellow/35 bg-brand-yellow-soft px-3 py-1 text-sm font-semibold text-brand-yellow">
            Subscription started
          </p>
          <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">
            You are in.
          </h1>
          <p className="mt-4 text-lg leading-8 text-muted">
            Thanks for joining Game Dev Glory coaching. Stripe has handled your
            payment and billing. Join Discord and send your first project
            question when you are ready.
          </p>

          <div className="mt-8 rounded border border-border bg-background/45 p-5">
            <h2 className="text-xl font-semibold text-foreground">
              What happens next
            </h2>
            <ul className="mt-4 grid gap-3 text-sm leading-6 text-muted">
              {nextSteps.map((item) => (
                <li key={item} className="border-l-4 border-brand-yellow pl-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-brand-yellow bg-brand-yellow px-5 py-3 text-sm font-semibold text-background transition hover:bg-[#ffd95f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-yellow"
              href={discordInviteUrl}
            >
              Join Discord
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-border px-5 py-3 text-sm font-semibold text-foreground transition hover:border-brand-yellow hover:text-brand-yellow"
              href={billingPortalUrl}
            >
              Manage subscription
            </a>
          </div>

          <p className="mt-6 text-sm leading-6 text-muted">
            You can cancel anytime through Stripe. Cancellation takes effect at
            the end of your current paid billing period.
          </p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
