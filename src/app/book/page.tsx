import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getBookingUrl } from "@/components/booking-link";
import { SiteHeader } from "@/components/site-header";

const bookingUrl = getBookingUrl();

const valuePoints = [
  "Private 1:1 coaching",
  "Daily support",
  "Focused practice",
];

export const metadata: Metadata = {
  title: "Book a Start Call | Game Dev Glory",
  description:
    "Book a start call for the Private Game Programming Track from Game Dev Glory.",
};

export default function BookPage() {
  if (bookingUrl) {
    redirect(bookingUrl);
  }

  return (
    <div id="top" className="min-h-dvh bg-background text-foreground">
      <SiteHeader ctaLabel="Book a Start Call" />
      <main className="px-5 py-7 sm:px-6 sm:py-9 lg:px-8">
        <section className="mx-auto max-w-6xl">
          <div className="max-w-4xl">
            <p className="mb-4 inline-flex rounded border border-brand-yellow/35 bg-brand-yellow-soft px-3 py-1 text-sm font-semibold text-brand-yellow">
              The Private Game Programming Track
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-foreground sm:text-6xl">
              Book a start call.
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-8 text-muted">
              We will look at where you are now, where you want game development to take you, and
              the right way to start.
            </p>

            <div className="mt-7">
              {bookingUrl ? (
                <a
                  className="inline-flex min-h-12 w-full items-center justify-center whitespace-nowrap rounded-md border border-brand-yellow bg-brand-yellow px-5 py-3 text-sm font-semibold text-background shadow-[4px_4px_0_0_var(--brand-blue)] transition hover:-translate-y-0.5 hover:bg-[#ffd95f] hover:shadow-[5px_5px_0_0_var(--brand-blue)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-yellow sm:w-auto"
                  href={bookingUrl}
                >
                  Book a Start Call
                </a>
              ) : (
                <p className="rounded border border-border bg-surface px-4 py-3 text-sm text-muted">
                  Booking is not configured yet.
                </p>
              )}
            </div>
          </div>
        </section>

        <section className="mx-auto mt-6 max-w-6xl border-t border-border pt-5">
          <ul className="grid gap-3 text-sm font-semibold text-foreground sm:grid-cols-3">
            {valuePoints.map((item) => (
              <li
                key={item}
                className="border-l-4 border-brand-yellow pl-3 leading-6"
              >
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-6 max-w-3xl text-base leading-7 text-muted">
            Coached by Matt Noone: commercial game programmer since 2018, with five years teaching
            university game development and computer science.
          </p>
        </section>
      </main>
    </div>
  );
}
