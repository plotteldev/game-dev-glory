import { BookingLink } from "@/components/booking-link";
import { LandingSection } from "@/components/landing-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const starterTopics = [
  "Choosing a first engine",
  "Learning C# or C++",
  "First project scope",
  "Game loop basics",
  "Input and movement",
  "Collisions and physics",
  "Debugging habits",
  "What to learn next",
];

const outcomes = [
  {
    title: "A practical learning path",
    body: "A short, realistic sequence of topics and projects matched to your background and goals.",
  },
  {
    title: "A first project you can finish",
    body: "A small game idea with clear boundaries, so you practise programming instead of drowning in scope.",
  },
  {
    title: "Tooling direction",
    body: "Guidance on engine, language, editor, and workflow choices before you sink weeks into the wrong setup.",
  },
];

const beginnerFaqs = [
  {
    question: "Do I need programming experience?",
    answer:
      "No. We can start from your current level and choose a first path that will not overload you.",
  },
  {
    question: "Do I need to know Unity already?",
    answer:
      "No. Unity can be a good starting point, but we can also talk through other engines and programming paths.",
  },
  {
    question: "Will this replace a full course?",
    answer:
      "No. This is a focused planning and coaching session. The goal is to make your next few weeks of learning concrete.",
  },
  {
    question: "What should I bring?",
    answer:
      "Bring your goals, any experience you already have, and examples of games you would like to make. If you have tried tutorials before, bring those too.",
  },
];

export function StartLearningPage() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <SiteHeader
        bookHref="/start-learning-game-programming#book"
        ctaHref="/book/start-learning"
        ctaLabel="Book starter"
      />
      <main>
        <section className="relative overflow-hidden px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="absolute right-6 top-10 hidden grid-cols-4 gap-2 opacity-70 md:grid">
            {Array.from({ length: 12 }).map((_, index) => (
              <span
                key={index}
                className={`h-2.5 w-2.5 ${
                  index % 4 === 0 ? "bg-brand-yellow" : "bg-surface-raised"
                }`}
              />
            ))}
          </div>
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="max-w-3xl">
              <p className="mb-5 inline-flex rounded border border-brand-yellow/35 bg-brand-yellow-soft px-3 py-1 text-sm font-semibold text-brand-yellow">
                Beginner session &middot; 60 minutes &middot; Online
              </p>
              <h1 className="text-4xl font-semibold text-foreground sm:text-6xl">
                Start learning game programming with a clear first path
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
                Book a focused 1-on-1 session to choose what to learn, what to build first, and
                how to avoid getting stuck in endless tutorials.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <BookingLink href="/book/start-learning" className="w-full sm:w-auto">
                  Book starter session
                </BookingLink>
                <p className="text-sm text-muted">
                  No portfolio required. No finished project required. Just a starting point and a
                  direction.
                </p>
              </div>
            </div>

            <div className="rounded-md border border-border bg-surface p-6 shadow-[8px_8px_0_0_var(--brand-blue-soft)]">
              <div className="border-l-4 border-brand-yellow pl-5">
                <p className="text-sm font-semibold uppercase text-muted">
                  Beginner roadmap session
                </p>
                <p className="mt-3 text-2xl font-semibold text-foreground">
                  Know what to do first.
                </p>
                <p className="mt-4 leading-7 text-muted">
                  We will turn vague interest into a small learning plan, a first project, and a
                  sensible next step.
                </p>
              </div>
            </div>
          </div>
        </section>

        <LandingSection id="starter-topics" title="What we can work on" className="bg-brand-blue-pale/80">
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {starterTopics.map((item) => (
              <li
                key={item}
                className="rounded border border-border bg-surface px-4 py-4 text-sm font-medium text-foreground shadow-[3px_3px_0_0_var(--brand-blue-soft)] transition hover:-translate-y-0.5 hover:border-brand-yellow/60 hover:shadow-[4px_4px_0_0_var(--brand-yellow)]"
              >
                {item}
              </li>
            ))}
          </ul>
        </LandingSection>

        <LandingSection id="roadmap" title="A better start than another random tutorial">
          <div className="mt-8 max-w-3xl space-y-5 text-lg leading-8 text-muted">
            <p>
              Beginners often lose time trying to learn an engine, programming language, art tool,
              and full game design process all at once.
            </p>
            <p>
              This session narrows the field. We work out what you actually need to learn first,
              what you can ignore for now, and what kind of tiny game will teach the right skills.
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {outcomes.map((item) => (
              <article
                key={item.title}
                className="rounded border border-border bg-surface px-4 py-4 text-sm text-foreground shadow-[3px_3px_0_0_var(--brand-blue-soft)] transition hover:-translate-y-0.5 hover:border-brand-yellow/60 hover:shadow-[4px_4px_0_0_var(--brand-yellow)]"
              >
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 leading-6 text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </LandingSection>

        <section id="book" className="scroll-mt-10 px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-6xl rounded-md border border-brand-yellow/35 bg-surface-raised p-8 shadow-[8px_8px_0_0_var(--brand-yellow-soft)] sm:p-10">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
                  Book a starter session
                </h2>
                <p className="mt-4 text-lg text-muted">60 minutes. Online.</p>
                <p className="mt-3 text-sm text-muted">
                  Bring your goals and current experience. We will turn them into a concrete first
                  learning plan.
                </p>
              </div>
              <BookingLink href="/book/start-learning" className="w-full md:w-auto">
                Book starter session
              </BookingLink>
            </div>
          </div>
        </section>

        <LandingSection id="faq" title="FAQ">
          <div className="mt-8 divide-y divide-border border-y border-border">
            {beginnerFaqs.map((faq) => (
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
