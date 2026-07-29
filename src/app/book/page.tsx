import type { Metadata } from "next";
import { getAppointmentBookingUrl } from "@/components/booking-link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Book 1:1 Game Programming Coaching | Game Dev Glory",
  description:
    "Book a 60-minute 1:1 game programming coaching session and leave with clear next steps.",
};

const sessionPoints = [
  "Bring the messy version: questions, code, ideas, bugs, or uncertainty.",
  "We will sort through what matters and what can wait.",
  "Leave knowing what to do next.",
];

const faqs = [
  {
    question: "What happens in the 60-minute session?",
    answer:
      "We talk through where you are now, what you want to build, and what is getting in the way. The goal is to turn that into clear next steps you can act on.",
  },
  {
    question: "What should I bring?",
    answer:
      "Bring your game idea, current project, code, screenshots, errors, or just the rough problem you are trying to solve. It does not need to be polished.",
  },
  {
    question: "What if you cannot help me?",
    answer:
      "If I don't think I can help with your situation, you get a full refund. No questions asked.",
  },
  {
    question: "Is this only for complete beginners?",
    answer:
      "No. It is for beginner and early-stage game programmers who want focused technical feedback, project direction, or help getting unstuck.",
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
              60-minute 1:1 coaching
            </p>
            <h1 className="mx-auto mt-4 max-w-3xl text-5xl font-extrabold uppercase leading-[1.1] text-foreground sm:text-7xl">
              Are you ready to build games?
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg font-semibold leading-8 text-brand-yellow sm:text-2xl sm:leading-9">
              You don&apos;t need to have it all figured out before you book.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-base font-extrabold leading-7 text-foreground sm:text-lg sm:leading-8">
              If I can&apos;t help you, you get a full refund. No questions
              asked.
            </p>

            <ul className="mx-auto mt-7 grid max-w-3xl gap-3 text-left text-sm leading-6 text-muted sm:text-base">
              {sessionPoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex justify-center">
              <a
                className="inline-flex min-h-12 w-full items-center justify-center rounded-md border border-brand-yellow bg-brand-yellow px-5 py-3 text-sm font-semibold text-background transition hover:bg-[#ffd95f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-yellow sm:w-auto"
                href={bookingUrl}
              >
                Book a 60-minute session
              </a>
            </div>
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
