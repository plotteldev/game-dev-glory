import Image from "next/image";
import { BookingLink } from "@/components/booking-link";
import { LandingSection } from "@/components/landing-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const ctaLabel = "Book a 15-minute call";

const buildMilestones = [
  {
    title: "Week 1 console project",
    body: "Set up your C# workflow and write small programs that make variables, input, conditions, loops, functions, and debugging feel concrete.",
  },
  {
    title: "Week 2 game window",
    body: "Move those same ideas into a simple 2D window so you can draw, update, and respond to player input.",
  },
  {
    title: "Week 3 playable prototype",
    body: "Add movement, collision, state, timers, scoring, and rules inside a deliberately small project.",
  },
  {
    title: "Week 4 mini-capstone",
    body: "Finish a scoped playable C# game you can run, explain, debug, and improve after the program.",
  },
];

const fitItems = [
  "You are new to programming or have only copied tutorial code",
  "You want coding fundamentals before taking on a heavy engine",
  "You can attend one private coaching call each week for 4 weeks",
  "You can complete 3-5 focused practice sessions between calls",
  "You want direct feedback instead of another recorded video course",
];

const notFitItems = [
  "You want a finished commercial game in 4 weeks",
  "You specifically want a course that starts inside Unity or Unreal right now",
  "You want 3D, multiplayer, advanced tooling, art, marketing, or publishing help",
  "You want someone else to build the game for you",
  "You cannot set aside weekly practice time during the program",
];

const includedItems = [
  "4 private weekly coaching calls",
  "Beginner-friendly C# starter projects",
  "Weekly project feedback",
  "A small task ladder so each week has a clear finish line",
  "Same-day chat support between weekly calls",
  "Final review of the playable project",
  "Up to two extra weekly coaching calls if you complete the weekly tasks and still do not have a small playable project running",
];

const faqs = [
  {
    question: "I am a total beginner. Is that okay?",
    answer:
      "Yes. The program starts with coding fundamentals before graphics, engines, or large project structure. You do need to write code, make mistakes, ask questions, and practise between calls.",
  },
  {
    question: "Why not Unity or Unreal?",
    answer:
      "Unity and Unreal are useful later, but they add engine complexity before the programming basics are clear. This program teaches fundamentals first, then uses lightweight C# projects for fast visual feedback.",
  },
  {
    question: "Can I build my own game idea?",
    answer:
      "Your interests matter, but the 4-week project must stay small. We will shape the idea into a tiny playable version that teaches the right programming skills without letting the scope take over.",
  },
  {
    question: "How much time do I need?",
    answer:
      "Plan for one private call each week plus 3-5 focused practice sessions. If you cannot make that time over the next 4 weeks, it is better to wait.",
  },
  {
    question: "Is this a video course?",
    answer:
      "No. This is private 1-on-1 coaching with starter projects, feedback, support, and a small weekly build target. It is not a recorded video course.",
  },
  {
    question: "What happens if I get stuck?",
    answer:
      "Send the error, code, screenshot, or a clear description of what happened. The point of the coaching is to help you learn how to diagnose problems instead of staying blocked on your own.",
  },
  {
    question: "What do I finish with?",
    answer:
      "You finish with a small playable C# project you can run and explain, plus a clearer understanding of input, loops, functions, state, collision, debugging, and scope control.",
  },
  {
    question: "How much does it cost?",
    answer:
      "We talk through goals, schedule, and whether the program is a good match before anything is confirmed.",
  },
];

export function HomePage() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <SiteHeader ctaHref="/book" ctaLabel={ctaLabel} />
      <main>
        <section className="relative overflow-hidden px-5 py-16 sm:px-6 sm:py-24 lg:px-8">
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

          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="max-w-3xl">
              <p className="mb-5 inline-flex rounded border border-brand-yellow/35 bg-brand-yellow-soft px-3 py-1 text-sm font-semibold text-brand-yellow">
                Game Programming Fundamentals
              </p>
              <h1 className="text-4xl font-semibold text-foreground sm:text-6xl">
                Game Programming Fundamentals, Taught 1-on-1
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
                Build your first small playable C# game in 4 weeks with private 1-on-1 coaching.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
                Start with programming fundamentals, move into a simple 2D game loop, and finish
                with a scoped project you can run, debug, and explain.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <BookingLink href="/book" className="w-full sm:w-auto">
                  {ctaLabel}
                </BookingLink>
                <p className="text-sm text-muted">
                  A quick call helps us decide whether this is the right next step.
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
                  <p className="text-sm font-semibold uppercase text-muted">Private coaching</p>
                  <p className="mt-3 text-2xl font-semibold text-foreground">
                    Learn the programming underneath the game.
                  </p>
                  <ul className="mt-6 space-y-3">
                    {[
                      "One call per week",
                      "Same-day chat support",
                      "Starter projects",
                      "Project feedback",
                      "Small playable finish",
                    ].map((item) => (
                        <li
                          key={item}
                          className="border-l-4 border-brand-yellow pl-4 text-sm font-semibold text-foreground"
                        >
                          {item}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <LandingSection id="build" title="What You Will Build">
          <div className="mt-8 max-w-3xl text-lg leading-8 text-muted">
            <p>
              The goal is not a huge game. The goal is a small playable C# game that proves you
              understand the core programming pieces well enough to keep learning.
            </p>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {buildMilestones.map((item) => (
              <article
                key={item.title}
                className="rounded border border-border bg-surface p-5 shadow-[3px_3px_0_0_var(--brand-blue-soft)]"
              >
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </LandingSection>

        <LandingSection id="fit" title="Who This Is For" className="bg-brand-blue-pale/80">
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <div className="rounded-md border border-border bg-surface p-5">
              <h3 className="text-lg font-semibold text-foreground">Good fit if</h3>
              <ul className="mt-5 space-y-3">
                {fitItems.map((item) => (
                  <li
                    key={item}
                    className="border-l-4 border-brand-yellow pl-4 text-sm text-muted"
                  >
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

        <LandingSection id="included" title="What Is Included">
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {includedItems.map((item) => (
              <li
                key={item}
                className="border-l-4 border-brand-yellow bg-surface px-4 py-4 text-sm font-medium text-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </LandingSection>

        <LandingSection id="not-unity" title="Why This Is Not A Unity Course" className="bg-brand-blue-pale/80">
          <div className="mt-8 max-w-3xl space-y-5 text-lg leading-8 text-muted">
            <p>
              Engines are useful, but they can hide the fundamentals beginners most need: state,
              loops, input, collision, functions, debugging, and scope control.
            </p>
            <p>
              This program teaches the programming first, then gives you fast visual feedback in a
              small C# game project. That foundation makes engine work easier later because you
              understand more of the code underneath.
            </p>
          </div>
        </LandingSection>

        <LandingSection id="guarantee" title="Guarantee">
          <div className="mt-8 max-w-3xl rounded-md border border-brand-yellow/35 bg-surface p-6 shadow-[6px_6px_0_0_var(--brand-yellow-soft)]">
            <p className="text-lg leading-8 text-muted">
              If you attend the calls, complete the weekly tasks, ask for help when you get stuck,
              and still do not have a small playable C# project running by the end of Week
              4, I will keep coaching you for up to two additional weekly calls at no extra cost
              until you have a running playable project.
            </p>
          </div>
        </LandingSection>

        <LandingSection id="faq" title="FAQ" className="bg-brand-blue-pale/80">
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

        <section id="book" className="scroll-mt-10 px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-6xl rounded-md border border-brand-yellow/35 bg-surface-raised p-8 shadow-[8px_8px_0_0_var(--brand-yellow-soft)] sm:p-10">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="text-sm font-semibold uppercase text-brand-yellow">Ready to talk?</p>
                <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
                  Book a short call
                </h2>
                <p className="mt-4 max-w-2xl text-lg text-muted">
                  We will talk through your goal, schedule, setup, and whether 1-on-1 coaching
                  makes sense for where you are now.
                </p>
                <p className="mt-3 text-sm text-muted">
                  A quick call helps us decide whether this is the right next step.
                </p>
              </div>
              <BookingLink href="/book" className="w-full md:w-auto">
                {ctaLabel}
              </BookingLink>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
