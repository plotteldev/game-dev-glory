import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Terms | Game Dev Glory",
  description: "Program terms for Game Dev Glory async Unity coaching.",
};

const terms = [
  {
    title: "Offer",
    body: "Async Unity coaching is delivered through a private Discord channel for Unity and C# questions, debugging direction, code feedback, project planning, architecture feedback, and practical next steps while you build.",
  },
  {
    title: "Payment",
    body: "Async Unity coaching is offered at $99/month USD. Payment, subscription billing, invoices, card updates, and receipts are handled by Stripe.",
  },
  {
    title: "Response time",
    body: "Coaching questions receive a response within 12 hours. If an active question goes unanswered for 48 hours, a free 1:1 call up to 1 hour will be offered to discuss that question.",
  },
  {
    title: "Member responsibilities",
    body: "Members should provide enough context to answer questions, such as Unity version, platform, screenshots, relevant code snippets, exact errors, and what has already been tried.",
  },
  {
    title: "Scope",
    body: "Support is guidance-focused. Full feature implementation, production ownership, emergency support, and guaranteed same-hour responses are outside the monthly async coaching scope.",
  },
  {
    title: "Refund window",
    body: "The first month includes a 7-day refund window. If async coaching is the wrong fit, email info@gamedevglory.com within 7 days of subscribing to request a refund.",
  },
  {
    title: "Outcomes",
    body: "Coaching is designed to improve decisions, direction, and project momentum. Employment, income, portfolio, publishing, and technical outcomes are not guaranteed.",
  },
  {
    title: "Cancellation",
    body: "Async coaching can be cancelled anytime through the Stripe customer portal. Cancellation takes effect at the end of the current paid billing period unless otherwise confirmed in writing.",
  },
];

export default function TermsPage() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
        <section className="mx-auto max-w-4xl">
          <p className="mb-4 inline-flex rounded border border-brand-yellow/35 bg-brand-yellow-soft px-3 py-1 text-sm font-semibold text-brand-yellow">
            Program terms
          </p>
          <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">Terms</h1>
          <p className="mt-4 text-lg leading-8 text-muted">
            These terms summarize how Game Dev Glory async Unity coaching works.
          </p>

          <div className="mt-8 divide-y divide-border border-y border-border">
            {terms.map((term) => (
              <section key={term.title} className="py-5">
                <h2 className="text-xl font-semibold text-foreground">{term.title}</h2>
                <p className="mt-3 leading-7 text-muted">{term.body}</p>
              </section>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
