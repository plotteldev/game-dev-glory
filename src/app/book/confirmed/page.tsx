import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Request Sent | Game Dev Glory",
  description:
    "Confirmation that your Game Dev Glory portfolio roadmap call request has been sent.",
};

const prepItems = [
  "What you have already tried while learning programming",
  "Where you want game development to take you",
  "How much focused practice time you can protect each week",
];

export default function BookingConfirmedPage() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
        <section className="mx-auto max-w-3xl rounded-md border border-border bg-surface p-6 sm:p-8">
          <p className="mb-4 inline-flex rounded border border-brand-yellow/35 bg-brand-yellow-soft px-3 py-1 text-sm font-semibold text-brand-yellow">
            Request sent
          </p>
          <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">
            Thanks, I will read this and reply by email.
          </h1>
          <p className="mt-4 text-lg leading-8 text-muted">
            The free 15-minute portfolio roadmap call is a short conversation
            about where you are now, where you want game development to take
            you, and whether Game Dev Glory private coaching is the right fit.
          </p>

          <div className="mt-8 rounded border border-border bg-background/45 p-5">
            <h2 className="text-xl font-semibold text-foreground">Optional prep</h2>
            <p className="mt-2 text-sm leading-6 text-muted">
              No code setup is needed. If you want to prepare, think through
              these before the call:
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
            If the details look like a fit, I will send the calendar link in my reply.
          </p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
