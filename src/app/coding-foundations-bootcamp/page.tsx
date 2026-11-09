import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  description:
    "Learn to write and run code, work with user input, variables, functions, conditions, and loops, and build your own console program from scratch in 4 weeks.",
};

const benefits = [
  {
    title: "Weekly calls with me",
    description: "We'll dig into your code, unpack the tricky concepts, and work through them together until you understand. Leave each call with stronger skills, fresh confidence, and a clear plan to tackle the week ahead.",
  },
  {
    title: "Daily chat check-ins",
    description: "Stay on track every single day with personal check-ins from me. Share your progress, get unstuck, and know what to focus on next, so you keep moving forward between calls.",
  },
  {
    title: "Extra support guarantee",
    description: "If you're struggling to finish in 4 weeks, I guarantee you'll get 2 extra weeks of support at no extra cost.",
  },
];

export default function CodingFoundationsBootcampPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground">
      <SiteHeader showCta={false} />
      <main className="flex-1 px-5 py-12 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="mx-auto max-w-3xl text-center text-4xl font-extrabold uppercase leading-tight text-foreground sm:text-6xl">
            Build your coding foundations in 4 weeks
          </h1>
          <p className="mt-6 text-center text-xl font-semibold leading-8 text-brand-yellow sm:text-2xl sm:leading-9">
            Set yourself up for success
          </p>
          <section aria-labelledby="foundations-heading" className="mt-10 border-t border-border pt-8">
            <h2 id="foundations-heading" className="text-2xl font-semibold sm:text-3xl">
              Start where computer science degrees start
            </h2>
          <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
            You&apos;ll build text-based programs in the console, learning one
            concept at a time. Keeping the visuals simple lets you focus on how
            the code works. These foundations will help you learn faster when
            you move on to making visual games in a window.
          </p>
          </section>

          <section aria-labelledby="understanding-heading" className="mt-10 border-t border-border pt-8">
            <h2 id="understanding-heading" className="text-2xl font-semibold sm:text-3xl">
              What you&apos;ll learn
            </h2>
            <ul className="mt-5 list-disc space-y-2 pl-5 text-base leading-7 text-muted marker:text-brand-yellow sm:text-lg">
              <li>Set up your tools, write code, and turn it into a running program.</li>
              <li>Get user input and store information in variables.</li>
              <li>Organise your code with functions.</li>
              <li>Make decisions with conditions.</li>
              <li>Repeat actions with loops.</li>
              <li>Put it all together to build your own custom program from scratch.</li>
            </ul>
          </section>

          <section aria-labelledby="support-heading" className="mt-10 border-t border-border pt-8">
            <h2 id="support-heading" className="text-2xl font-semibold sm:text-3xl">
              Support included
            </h2>
            <ul className="mt-5 list-disc space-y-3 pl-5 text-base leading-7 text-muted marker:text-brand-yellow sm:text-lg">
              {benefits.map((benefit) => (
                <li key={benefit.title}>
                  <strong className="font-semibold text-foreground">{benefit.title}.</strong>{" "}
                  {benefit.description}
                </li>
              ))}
            </ul>
          </section>

          <section aria-label="Bootcamp enrolment" className="mt-10 w-fit max-w-full rounded-xl border border-border bg-linear-to-br from-surface to-background p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-5">
              <p className="text-3xl font-bold">
                $1,097 <span className="text-sm font-medium text-muted">USD</span>
              </p>
              <a
                href="https://cal.com/matt-noone-avjm8m/coding-foundations"
                data-analytics-event="coding_foundations_booking_click"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-brand-yellow bg-brand-yellow px-5 py-3 text-sm font-semibold text-background transition hover:bg-[#ffd95f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-yellow"
              >
                Take This Course
              </a>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
