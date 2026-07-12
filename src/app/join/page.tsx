import type { Metadata } from "next";
import { getStripeCheckoutUrl } from "@/components/booking-link";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Join Async Unity Coaching | Game Dev Glory",
  description:
    "Join async Unity coaching in a private Discord channel for $99/month USD.",
};

const includedItems = [
  "Private Discord coaching channel",
  "Responses within 12 hours",
  "Code feedback and debug help",
  "Planning help and project direction",
];

const nextSteps = [
  "Pay $99/month through Stripe.",
  "Use the Discord invite after payment.",
  "Ask your first question.",
  "Get clear next steps within 12 hours.",
];

export default function JoinPage() {
  const checkoutUrl = getStripeCheckoutUrl();

  return (
    <div id="top" className="min-h-dvh bg-background text-foreground">
      <SiteHeader showNav={false} showCta={false} />
      <main className="px-5 py-8 sm:px-6 sm:py-12 lg:px-8">
        <section className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,1fr)_390px] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-yellow sm:text-sm">
              Async Unity Coaching
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
              Join for $99/month.
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">
              Get a private Discord coaching channel for your Unity project.
              Send questions, code, screenshots, clips, errors, or design
              problems while you build.
            </p>

            <div className="mt-8 border-y border-border py-6">
              <h2 className="text-2xl font-semibold text-foreground">
                What happens after payment
              </h2>
              <ol className="mt-5 grid gap-4 text-sm leading-6 text-muted">
                {nextSteps.map((item) => (
                  <li key={item} className="border-l-4 border-brand-yellow pl-3">
                    {item}
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <article className="border border-border bg-background/55 p-5">
                <h3 className="text-xl font-semibold text-foreground">
                  Response guarantee
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">
                  I reply within 12 hours. If I miss an active question for 48
                  hours, you get a free 1:1 call up to 1 hour.
                </p>
              </article>
              <article className="border border-border bg-background/55 p-5">
                <h3 className="text-xl font-semibold text-foreground">
                  First-week refund
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">
                  Try it for 7 days. If it is not a fit, email me for a refund.
                </p>
              </article>
            </div>
          </div>

          <aside className="border border-border bg-surface/80 p-5 sm:p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-yellow">
              Async coaching
            </p>
            <div className="mt-3 flex items-end gap-3">
              <p className="text-5xl font-semibold leading-none text-foreground">
                $99
              </p>
              <p className="pb-1 text-sm font-semibold uppercase tracking-[0.14em] text-muted">
                USD / month
              </p>
            </div>

            <p className="mt-5 text-sm leading-6 text-muted">
              Founding member price. A full month costs less than a 1-hour
              call. Keep this rate while you stay subscribed. The price will go
              up later.
            </p>

            <ul className="mt-6 grid gap-3 text-sm leading-6 text-muted">
              {includedItems.map((item) => (
                <li key={item} className="border-l-4 border-brand-yellow pl-3">
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-7">
              <a
                className="inline-flex min-h-12 w-full items-center justify-center rounded-md border border-brand-yellow bg-brand-yellow px-5 py-3 text-sm font-semibold text-background transition hover:bg-[#ffd95f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-yellow"
                href={checkoutUrl}
              >
                Join for $99/month
              </a>
            </div>

            <p className="mt-5 text-xs leading-5 text-muted">
              Billing is handled by Stripe. You can cancel anytime through the
              Stripe customer portal.
            </p>
          </aside>
        </section>
      </main>
    </div>
  );
}
