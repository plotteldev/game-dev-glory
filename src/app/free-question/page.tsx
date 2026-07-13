import type { Metadata } from "next";
import { BookingLink } from "@/components/booking-link";
import { SiteHeader } from "@/components/site-header";
import { FreeQuestionForm } from "./free-question-form";

export const metadata: Metadata = {
  title: "Ask One Unity Question Free | Game Dev Glory",
  description:
    "Send one Unity problem and get a concrete next step from Game Dev Glory.",
};

export default function FreeQuestionPage() {
  return (
    <div id="top" className="min-h-dvh bg-background text-foreground">
      <SiteHeader ctaLabel="Join for $99/month" showNav={false} />
      <main className="px-5 py-8 sm:px-6 sm:py-14 lg:px-8">
        <section className="mx-auto max-w-2xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-yellow sm:text-sm">
              Free Unity Question
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
              Ask one Unity question free.
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted">
              Send the problem. I will reply with the next step.
            </p>
          </div>

          <div className="mt-8 border border-border bg-surface/80 p-5 sm:p-6">
            <FreeQuestionForm />
          </div>

          <div className="mt-6 text-center">
            <BookingLink>Start coaching for $99/month</BookingLink>
          </div>
        </section>
      </main>
    </div>
  );
}
