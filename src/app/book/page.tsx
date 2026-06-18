import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL ?? "";

const policyPoints = [
  "This call is for people considering the paid 4-week Game Programming Fundamentals program.",
  "Booking the call does not reserve a coaching spot; a spot is confirmed only after payment.",
  "The call is for goals, schedule, and fit rather than a lesson, code review, or consulting session.",
];

export const metadata: Metadata = {
  title: "Book a 15-Minute Call | Game Dev Glory",
  description:
    "Book a free 15-minute fit call for the paid Game Programming Fundamentals private coaching program.",
};

export default function BookPage() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <SiteHeader bookHref="/book" ctaHref="/book" ctaLabel="Book a 15-minute call" />
      <main className="px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
        <section className="mx-auto max-w-5xl">
          <div className="mb-8 max-w-3xl">
            <p className="mb-4 inline-flex rounded border border-brand-yellow/35 bg-brand-yellow-soft px-3 py-1 text-sm font-semibold text-brand-yellow">
              Free 15-Minute Fit Call
            </p>
            <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">
              Book a fit call for Game Programming Fundamentals
            </h1>
            <p className="mt-4 text-lg leading-8 text-muted">
              This call is for people considering the paid 4-week Game Programming Fundamentals
              program. We will talk through your goal, current experience, available practice time,
              and whether the program is the right fit. If it is not a good match, I will tell you
              directly.
            </p>
          </div>

          <div className="mb-8">
            {bookingUrl ? (
              <a
                className="inline-flex min-h-12 w-full items-center justify-center whitespace-nowrap rounded-md border border-brand-yellow bg-brand-yellow px-5 py-3 text-sm font-semibold text-background shadow-[4px_4px_0_0_var(--brand-blue)] transition hover:-translate-y-0.5 hover:bg-[#ffd95f] hover:shadow-[5px_5px_0_0_var(--brand-blue)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-yellow sm:w-auto"
                href={bookingUrl}
              >
                Choose a Time
              </a>
            ) : (
              <p className="rounded border border-border bg-surface px-4 py-3 text-sm text-muted">
                Booking is not configured yet.
              </p>
            )}
            <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">
              Founding-student price: <span className="font-semibold text-foreground">USD $900</span>.
              Payment is only arranged after the call if the program is a fit.
            </p>
          </div>

          <section className="rounded-md border border-brand-yellow/35 bg-surface p-5 shadow-[6px_6px_0_0_var(--brand-yellow-soft)]">
            <h2 className="text-xl font-semibold text-foreground">Guarantee</h2>
            <p className="mt-4 text-sm leading-6 text-muted">
              If you attend the calls, complete the weekly tasks, ask for help when you get stuck, and
              still do not have a small playable C# project running by the end of
              Week 4, you receive up to two additional weekly coaching calls at no extra cost.
            </p>
          </section>

          <section className="mt-8 border-t border-border pt-6">
            <h2 className="text-xl font-semibold text-foreground">Program and booking details</h2>
            <ul className="mt-4 grid gap-3 text-sm leading-6 text-muted">
              {policyPoints.map((point) => (
                <li key={point} className="border-l-4 border-border pl-3">
                  {point}
                </li>
              ))}
            </ul>
          </section>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
