import type { Metadata } from "next";
import { CalBookingEmbed } from "@/components/cal-booking-embed";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Book a Unity Consult | Game Dev Glory",
  description:
    "Book a focused 60-minute Unity consult for code, systems, scope, or technical blockers.",
};

export default function BookPage() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
        <section className="mx-auto max-w-6xl">
          <div className="mb-8 max-w-3xl">
            <p className="mb-4 inline-flex rounded border border-brand-yellow/35 bg-brand-yellow-soft px-3 py-1 text-sm font-semibold text-brand-yellow">
              60 minutes &middot; USD $150 &middot; Online
            </p>
            <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">
              Book a Unity consult
            </h1>
            <p className="mt-4 text-lg leading-8 text-muted">
              Pick a time for one focused session on the code, system, scope, or technical decision
              blocking your Unity project.
            </p>
          </div>
          <CalBookingEmbed />
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
