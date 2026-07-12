import type { Metadata } from "next";
import { getBillingPortalUrl } from "@/components/booking-link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Manage Subscription | Game Dev Glory",
  description:
    "Manage Game Dev Glory async Unity coaching billing, invoices, payment methods, and cancellations through Stripe.",
};

export default function BillingPage() {
  const billingPortalUrl = getBillingPortalUrl();

  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <SiteHeader showNav={false} />
      <main className="px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
        <section className="mx-auto max-w-3xl rounded-md border border-border bg-surface p-6 sm:p-8">
          <p className="mb-4 inline-flex rounded border border-brand-yellow/35 bg-brand-yellow-soft px-3 py-1 text-sm font-semibold text-brand-yellow">
            Billing
          </p>
          <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">
            Manage your subscription in Stripe.
          </h1>
          <p className="mt-4 text-lg leading-8 text-muted">
            Stripe handles billing, invoices, payment methods, and cancellation
            for Game Dev Glory async Unity coaching.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-brand-yellow bg-brand-yellow px-5 py-3 text-sm font-semibold text-background transition hover:bg-[#ffd95f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-yellow"
              href={billingPortalUrl}
            >
              Open Stripe billing portal
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-border px-5 py-3 text-sm font-semibold text-foreground transition hover:border-brand-yellow hover:text-brand-yellow"
              href="mailto:info@gamedevglory.com?subject=Billing%20question"
            >
              Email billing question
            </a>
          </div>

          <p className="mt-6 text-sm leading-6 text-muted">
            You can cancel anytime through Stripe. Access continues until the
            end of your current paid billing period.
          </p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
