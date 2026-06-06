import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL ?? "";

export const metadata: Metadata = {
  title: "Book a Unity Project Rescue Consult | Game Dev Glory",
  description:
    "Book a focused 60-minute Unity project rescue consult for code, systems, architecture, bugs, or scope blockers.",
};

export default function BookPage() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <SiteHeader bookHref="/book" />
      <main className="px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
        <section className="mx-auto max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_380px] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase text-brand-yellow">
                60 minutes &middot; USD $150 &middot; Online
              </p>
              <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">
                Book a Unity project rescue consult
              </h1>
              <p className="mt-4 text-lg leading-8 text-muted">
                Pick a time for one focused session on the code, system, architecture, bug, or
                scope problem blocking your Unity project.
              </p>
              <p className="mt-5 max-w-2xl text-sm leading-6 text-muted">
                The booking form asks a few short project questions so I can prepare. Rough notes
                are fine.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <section className="rounded-md border border-border bg-surface p-5">
                  <h2 className="text-lg font-semibold text-foreground">After booking</h2>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    You will receive the call link and booking confirmation. You can add code,
                    screenshots, a build, or notes later if they would help.
                  </p>
                </section>
                <section className="rounded-md border border-border bg-surface p-5">
                  <h2 className="text-lg font-semibold text-foreground">Cancellation and fit</h2>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    Cancellations should be made at least 24 hours before the session. If the problem
                    is clearly not a fit, I will cancel and refund the booking.
                  </p>
                </section>
              </div>
            </div>
            <aside className="rounded-md border border-brand-yellow/35 bg-surface-raised p-5">
              <p className="text-sm font-semibold uppercase text-brand-yellow">Book your session</p>
              <p className="mt-3 text-3xl font-semibold text-foreground">USD $150</p>
              <p className="mt-2 text-sm leading-6 text-muted">
                60-minute online consult. Payment is collected during booking.
              </p>
              {bookingUrl ? (
                <a
                  className="mt-5 inline-flex min-h-12 w-full items-center justify-center whitespace-nowrap rounded-md border border-brand-yellow bg-brand-yellow px-5 py-3 text-sm font-semibold text-background shadow-[4px_4px_0_0_var(--brand-blue)] transition hover:-translate-y-0.5 hover:bg-[#ffd95f] hover:shadow-[5px_5px_0_0_var(--brand-blue)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-yellow"
                  href={bookingUrl}
                >
                  Choose a time
                </a>
              ) : (
                <p className="mt-5 rounded border border-border bg-background/45 px-4 py-3 text-sm text-muted">
                  Booking is not configured yet.
                </p>
              )}
            </aside>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
