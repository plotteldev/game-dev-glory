import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Application Call Confirmed | Game Dev Glory",
  description:
    "Confirmation and preparation details for a Game Programming Fundamentals application call with Game Dev Glory.",
};

const prepItems = [
  "What you have already tried when learning programming",
  "What you would like to build by the end of the 4 weeks",
  "Whether you can set aside weekly call and practice time",
];

export default function BookingConfirmedPage() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <SiteHeader bookHref="/book" ctaHref="/book" ctaLabel="Apply for 1-on-1 Coaching" />
      <main className="px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
        <section className="mx-auto max-w-3xl rounded-md border border-border bg-surface p-6 sm:p-8">
          <p className="mb-4 inline-flex rounded border border-brand-yellow/35 bg-brand-yellow-soft px-3 py-1 text-sm font-semibold text-brand-yellow">
            Application call confirmed
          </p>
          <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">
            Your application call is booked
          </h1>
          <p className="mt-4 text-lg leading-8 text-muted">
            Your confirmation email will include the calendar invite and call link. The call is a
            short application call for Game Programming Fundamentals private coaching.
          </p>

          <div className="mt-8 rounded border border-border bg-background/45 p-5">
            <h2 className="text-xl font-semibold text-foreground">Optional prep</h2>
            <p className="mt-2 text-sm leading-6 text-muted">
              No code setup is needed. Come ready to discuss your goal, current experience,
              schedule, and whether the 4-week coaching program fits your next step.
            </p>
            <ul className="mt-4 grid gap-3 text-sm leading-6 text-muted">
              {prepItems.map((item) => (
                <li key={item} className="border-l-4 border-brand-yellow pl-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-6 text-sm leading-6 text-muted">
            Use the confirmation email or calendar invite for rescheduling or cancellation.
          </p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
