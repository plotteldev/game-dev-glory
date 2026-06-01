import { BookingLink } from "@/components/booking-link";
import { LandingSection } from "@/components/landing-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const helpItems = [
  "Messy Unity code",
  "Confusing bugs",
  "Gameplay systems",
  "Architecture decisions",
  "Multiplayer direction",
  "Scope problems",
  "Unfinished prototypes",
  '"I don\'t know what to do next"',
];

const steps = [
  {
    title: "Book a time",
    body: "Choose a slot and pay.",
  },
  {
    title: "Bring one problem",
    body: "Code, notes, screenshots, or a rough explanation are fine.",
  },
  {
    title: "Leave with a plan",
    body: "We turn the problem into clear next steps.",
  },
];

const faqs = [
  {
    question: "Do I need to be advanced?",
    answer: "No. You just need a Unity project and a problem to work through.",
  },
  {
    question: "Can I bring code?",
    answer: "Yes. Code, screenshots, builds, notes, or a rough explanation are all fine.",
  },
  {
    question: "Will you build it for me?",
    answer: "No. This is coaching and problem-solving, not a done-for-you service.",
  },
  {
    question: "What if my problem is vague?",
    answer: "That is fine. We can start by making it clearer.",
  },
];

export function HomePage() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
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
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="max-w-3xl">
              <p className="mb-5 inline-flex rounded border border-brand-yellow/35 bg-brand-yellow-soft px-3 py-1 text-sm font-semibold text-brand-yellow">
                60 minutes &middot; USD $150 &middot; Online
              </p>
              <h1 className="text-4xl font-semibold text-foreground sm:text-6xl">
                Stuck on your Unity game?
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
                Book a focused 1-on-1 consult and leave with a clearer next step.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <BookingLink className="w-full sm:w-auto">Book a $150 consult</BookingLink>
                <p className="text-sm text-muted">
                  No subscription. No sales call. Just one focused session.
                </p>
              </div>
            </div>

            <div className="rounded-md border border-border bg-surface p-6 shadow-[8px_8px_0_0_var(--brand-blue-soft)]">
              <div className="border-l-4 border-brand-yellow pl-5">
                <p className="text-sm font-semibold uppercase text-muted">Focused consult</p>
                <p className="mt-3 text-2xl font-semibold text-foreground">One project problem.</p>
                <p className="mt-4 leading-7 text-muted">
                  A practical session for code, bugs, systems, architecture, scope, or next-step
                  clarity.
                </p>
              </div>
            </div>
          </div>
        </section>

        <LandingSection id="help" title="What we can work on" className="bg-brand-blue-pale/80">
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {helpItems.map((item) => (
              <li
                key={item}
                className="rounded border border-border bg-surface px-4 py-4 text-sm font-medium text-foreground shadow-[3px_3px_0_0_var(--brand-blue-soft)] transition hover:-translate-y-0.5 hover:border-brand-yellow/60 hover:shadow-[4px_4px_0_0_var(--brand-yellow)]"
              >
                {item}
              </li>
            ))}
          </ul>
        </LandingSection>

        <LandingSection id="how-it-works" title="How it works">
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-md border border-border bg-surface p-6 shadow-[5px_5px_0_0_var(--brand-blue-soft)]"
              >
                <p className="mb-5 flex h-9 w-9 items-center justify-center bg-brand-yellow text-sm font-semibold text-brand-blue">
                  {index + 1}
                </p>
                <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="mt-3 leading-7 text-muted">{step.body}</p>
              </article>
            ))}
          </div>
        </LandingSection>

        <LandingSection
          id="about"
          title="Practical help for stuck Unity devs"
          className="border-y border-border bg-brand-blue text-white"
        >
          <div className="mt-8 max-w-3xl space-y-5 text-lg leading-8 text-white/80">
            <p>
              Game Dev Glory is 1-on-1 coaching for Unity developers who need help making sense of
              a stuck project.
            </p>
            <p>
              No hype. No generic advice. Just a focused working session on the problem in front of
              you.
            </p>
          </div>
        </LandingSection>

        <section id="book" className="scroll-mt-10 px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-6xl rounded-md border border-brand-yellow/35 bg-surface-raised p-8 shadow-[8px_8px_0_0_var(--brand-yellow-soft)] sm:p-10">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
                  Book a paid consult
                </h2>
                <p className="mt-4 text-lg text-muted">60 minutes. $150 USD. Online.</p>
                <p className="mt-3 text-sm text-muted">
                  Bring one main problem. We&apos;ll focus the session around that.
                </p>
              </div>
              <BookingLink className="w-full md:w-auto">Book a $150 consult</BookingLink>
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
