import type { Metadata } from "next";
import { BookingForm } from "./booking-form";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Book a Free Portfolio Roadmap Call | Game Dev Glory",
  description:
    "Book a free 15-minute portfolio roadmap call for coaching that helps you escape tutorial loops and build portfolio-ready game projects.",
};

export default function BookPage() {
  return (
    <div id="top" className="min-h-dvh bg-background text-foreground">
      <SiteHeader showNav={false} showCta={false} />
      <main className="px-5 py-8 sm:px-6 sm:py-10 lg:px-8">
        <section className="mx-auto max-w-2xl">
          <div className="mb-6">
            <h1 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              Book a free portfolio roadmap call.
            </h1>
            <p className="mt-3 text-base leading-7 text-muted sm:text-lg sm:leading-8">
              Answer a few questions and I&apos;ll reply with next steps for a
              free 15-minute call.
            </p>
          </div>

          <div className="rounded-md border border-border bg-surface/80 p-5 sm:p-6">
            <BookingForm />
          </div>
        </section>
      </main>
    </div>
  );
}
