import Image from "next/image";
import { BookingLink } from "@/components/booking-link";
import { LandingSection } from "@/components/landing-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const projectCredits = [
  "Age of Mythology: Retold",
  "Cities: Skylines",
  "WWZ: Aftermath",
  "LEGO 2K Drive",
];

const experienceHighlights = [
  ...projectCredits,
  "Taught game programming at Swinburne",
];

const blockerExamples = [
  "My gameplay system works, but every new feature breaks something.",
  "I have a bug that makes no sense from the tutorials I have watched.",
  "My prototype is growing, but the code structure is starting to collapse.",
  "I do not know whether to rewrite, refactor, cut scope, or keep pushing.",
];

const fitItems = [
  "You already have a Unity project or prototype",
  "You are blocked by code, systems, architecture, bugs, or scope",
  "You want expert diagnosis, not another generic tutorial",
];

const notFitItems = [
  "You want someone to build the whole game for you",
  "You need art, marketing, publishing, or legal advice",
  "You are looking for a complete course instead of a focused consult",
];

const deliverables = [
  "A direct diagnosis of the highest-priority issue",
  "A practical explanation of what is happening",
  "Tradeoffs explained in plain language",
  "A prioritized next step you can act on",
  "A short written action plan after the session",
];

const processSteps = [
  {
    title: "Before the call",
    body: "Send the project context, screenshots, code snippets, repo link, build, notes, or a rough explanation of what is going wrong.",
  },
  {
    title: "During the call",
    body: "We prioritize the problems, inspect the relevant code or system, and work through the most important decision or bug together.",
  },
  {
    title: "After the call",
    body: "You leave with what to change, what to avoid, and what to do next so the project can move again.",
  },
];

const faqs = [
  {
    question: "Do I need to be advanced?",
    answer:
      "No. You need a Unity project and a real problem. I can meet you at your current level.",
  },
  {
    question: "Will you write the code for me?",
    answer:
      "This is a consult, not a done-for-you development service. I can review code, explain issues, suggest fixes, and help you reason through implementation.",
  },
  {
    question: "Can you help with non-Unity problems?",
    answer:
      "The main offer is for Unity projects, but I can also help with general game programming, architecture, AI, gameplay systems, and scope decisions.",
  },
  {
    question: "What should I bring?",
    answer:
      "Bring the project, code, screenshots, error messages, notes, or a clear description of what is going wrong. If the problem is vague, clarifying it can be part of the session.",
  },
  {
    question: "What if I have several problems?",
    answer:
      "Bring the list. We will prioritize the issue that is blocking the most progress.",
  },
  {
    question: "Is this for beginners?",
    answer:
      "It can be, but it works best when you have already started something and are stuck. If you have no project yet, we can use the session to choose a realistic first project and learning path.",
  },
  {
    question: "What is the refund policy?",
    answer:
      "Cancellations should be made at least 24 hours before the session. If I do not think I can help with the problem, I will say so.",
  },
];

export function HomePage() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden px-5 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="absolute right-6 top-10 hidden grid-cols-4 gap-2 opacity-70 md:grid">
            {Array.from({ length: 12 }).map((_, index) => (
              <span
                key={index}
                className={`h-2.5 w-2.5 ${
                  index % 5 === 0 ? "bg-brand-yellow" : "bg-surface-raised"
                }`}
              />
            ))}
          </div>

          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-semibold text-foreground sm:text-6xl">
                Stuck on your Unity game?
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
                Book a 1-on-1 consult with Matt Noone, a commercial game programmer and university
                educator.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
                Bring your code, prototype, bug, design problem, or architecture issue. We will sort
                the highest-impact problems and leave you with a clear action plan.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <BookingLink className="w-full sm:w-auto">Book a Unity consult</BookingLink>
                <p className="text-sm text-muted">
                  Bring the issues slowing the project down. Leave with a plan.
                </p>
              </div>
            </div>

            <aside className="rounded-md border border-border bg-surface p-6 shadow-[8px_8px_0_0_var(--brand-blue-soft)]">
              <div className="grid gap-5 sm:grid-cols-[160px_1fr] sm:items-stretch">
                <div className="relative min-h-56 w-full max-w-40 overflow-hidden rounded-md border border-border sm:h-full sm:max-w-none">
                  <Image
                    src="/headshot.jpg"
                    alt="Matt Noone"
                    fill
                    sizes="160px"
                    className="object-cover object-[50%_34%]"
                    priority
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase text-muted">Experience</p>
                  <p className="mt-3 text-2xl font-semibold text-foreground">
                    Shipped games. University teaching.
                  </p>
                  <ul className="mt-6 space-y-3">
                    {experienceHighlights.map((credit) => (
                      <li
                        key={credit}
                        className="border-l-4 border-brand-yellow pl-4 text-sm font-semibold text-foreground"
                      >
                        {credit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <LandingSection id="help" title="When tutorials stop helping">
          <div className="mt-8 max-w-3xl space-y-5 text-lg leading-8 text-muted">
            <p>
              Tutorials can teach the basics, but they rarely cover the exact code, systems, and
              tradeoffs in front of you.
            </p>
            <p>
              If your next technical decision is unclear, we can use the session to sort the issues,
              inspect the relevant system, and decide what to do next.
            </p>
          </div>
          <ul className="mt-10 grid gap-x-8 gap-y-4 md:grid-cols-2">
            {blockerExamples.map((item) => (
              <li
                key={item}
                className="border-l-4 border-brand-yellow pl-4 text-sm font-medium leading-6 text-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </LandingSection>

        <LandingSection id="fit" title="Who this is for" className="bg-brand-blue-pale/80">
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <div className="rounded-md border border-border bg-surface p-5">
              <h3 className="text-lg font-semibold text-foreground">Best fit if</h3>
              <ul className="mt-5 space-y-3">
                {fitItems.map((item) => (
                  <li key={item} className="border-l-4 border-brand-yellow pl-4 text-sm text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-md border border-border bg-background/55 p-5">
              <h3 className="text-lg font-semibold text-foreground">Not a fit if</h3>
              <ul className="mt-5 space-y-3">
                {notFitItems.map((item) => (
                  <li key={item} className="border-l-4 border-border pl-4 text-sm text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </LandingSection>

        <LandingSection id="deliverables" title="What you get in the session">
          <div className="mt-8 max-w-3xl text-lg leading-8 text-muted">
            <p>
              A focused 60-minute session using your project, constraints, and questions. We find
              the highest-priority issue and turn it into a practical next-step plan.
            </p>
          </div>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((item) => (
              <li
                key={item}
                className="border-l-4 border-brand-yellow bg-surface px-4 py-4 text-sm font-medium text-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </LandingSection>

        <LandingSection id="process" title="How it works">
          <div className="mt-10 grid gap-3 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <article
                key={step.title}
                className="rounded border border-border bg-surface p-5 shadow-[3px_3px_0_0_var(--brand-blue-soft)]"
              >
                <p className="text-sm font-semibold text-brand-yellow">Step {index + 1}</p>
                <h3 className="mt-3 text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{step.body}</p>
              </article>
            ))}
          </div>
        </LandingSection>

        <section id="book" className="scroll-mt-10 px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-6xl rounded-md border border-brand-yellow/35 bg-surface-raised p-8 shadow-[8px_8px_0_0_var(--brand-yellow-soft)] sm:p-10">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="text-sm font-semibold uppercase text-brand-yellow">
                  Unity Project Rescue Consult
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
                  Stop guessing through tutorials
                </h2>
                <p className="mt-4 text-lg text-muted">60 minutes. Online.</p>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
                  Bring the issues slowing the project down. We will focus on the ones that matter
                  most.
                </p>
              </div>
              <BookingLink className="w-full md:w-auto">Book a Unity consult</BookingLink>
            </div>
          </div>
        </section>

        <LandingSection id="faq" title="FAQ">
          <div className="mt-8 divide-y divide-border border-y border-border">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-base font-semibold text-foreground">
                  {faq.question}
                  <span className="text-brand-yellow transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-3xl leading-7 text-muted">{faq.answer}</p>
              </details>
            ))}
          </div>
        </LandingSection>
      </main>
      <SiteFooter />
    </div>
  );
}
