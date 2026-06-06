import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Booking Confirmed | Game Dev Glory",
  description:
    "Confirmation and preparation details for a Unity Project Rescue Consult with Game Dev Glory.",
};

const prepItems = [
  "Code snippets or a repo link",
  "Screenshots, video, build link, or error logs",
  "Notes on anything that has changed since booking",
];

export default function BookingConfirmedPage() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <SiteHeader bookHref="/book" />
      <main className="px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
        <section className="mx-auto max-w-3xl rounded-md border border-border bg-surface p-6 sm:p-8">
          <p className="mb-4 inline-flex rounded border border-brand-yellow/35 bg-brand-yellow-soft px-3 py-1 text-sm font-semibold text-brand-yellow">
            Booking confirmed
          </p>
          <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">
            Your session is booked
          </h1>
          <p className="mt-4 text-lg leading-8 text-muted">
            Your confirmation email will include the calendar invite, call link, and booking
            details. If you have extra context, send it before the session.
          </p>

          <div className="mt-8 rounded border border-border bg-background/45 p-5">
            <h2 className="text-xl font-semibold text-foreground">Optional prep</h2>
            <p className="mt-2 text-sm leading-6 text-muted">
              The intake form already covers the basics. Add anything else that would make the
              problem easier to inspect.
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
            The session works best when we can look at the real problem, not just talk around it.
            Use the confirmation email or calendar invite for rescheduling or cancellation.
          </p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
