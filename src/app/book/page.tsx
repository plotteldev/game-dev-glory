import type { Metadata } from "next";
import { getAppointmentBookingUrl } from "@/components/booking-link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Plan Your First Playable Game | Game Dev Glory",
  description:
    "Book a free call to plan your first playable game and what to focus on over the next 30 days.",
};

const faqs = [
  {
    question: "What happens in the call?",
    answer:
      "We will talk about what you want to build, narrow it into a realistic first project, and identify what to focus on next.",
  },
  {
    question: "Do I need to prepare anything?",
    answer:
      "No. Come as you are. You can bring an idea or a current project if you have one, but you do not need to have anything figured out.",
  },
  {
    question: "Who is the plan for?",
    answer:
      "It is for complete beginners who want a clear path to their first playable game, whether you have an idea already or need help choosing one.",
  },
];

export default function BookPage() {
  const bookingUrl = getAppointmentBookingUrl();

  return (
    <div id="top" className="flex min-h-dvh flex-col bg-background text-foreground">
      <SiteHeader showCta={false} />
      <main className="flex-1">
        <section className="px-5 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-yellow sm:text-sm">
              Free First Game Plan
            </p>
            <h1 className="mx-auto mt-4 max-w-3xl text-5xl font-extrabold uppercase leading-[1.1] text-foreground sm:text-7xl">
              Plan your first playable game
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg font-semibold leading-8 text-brand-yellow sm:text-2xl sm:leading-9">
              Start with a clear path to building it in 30 days.
            </p>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
              We&apos;ll talk through your idea, choose a realistic scope, and get
              clear on your first steps.
            </p>

            <div className="mt-8 flex justify-center">
              <a
                className="inline-flex min-h-12 w-full items-center justify-center rounded-md border border-brand-yellow bg-brand-yellow px-5 py-3 text-sm font-semibold text-background transition hover:bg-[#ffd95f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-yellow sm:w-auto"
                data-analytics-event="free_chat_booking_click"
                href={bookingUrl}
              >
                Plan My First Game
              </a>
            </div>
            <p className="mt-3 text-sm leading-6 text-muted">
              Choose a time and tell me what you would like to build.
            </p>
          </div>
        </section>

        <section className="border-t border-border px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-yellow sm:text-sm">
                Questions
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground">
                Before you book
              </h2>
            </div>

            <div className="mt-7 grid gap-x-10 gap-y-7 md:grid-cols-2">
              {faqs.map((faq) => (
                <div key={faq.question} className="border-t border-border pt-5">
                  <h3 className="text-base font-semibold text-foreground">
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
