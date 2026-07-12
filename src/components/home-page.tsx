import Image from "next/image";
import { BookingLink, getBookingUrl } from "@/components/booking-link";
import { SiteHeader } from "@/components/site-header";

const ctaLabel = "Join for $99/month";

const credibilityPoints = [
  "10+ years with Unity",
  "5 years teaching game dev",
  "Hundreds of student projects",
];

const coachingSteps = [
  {
    title: "Private Discord channel",
    copy: "You get a private Discord channel for your Unity project.",
  },
  {
    title: "Send useful context",
    copy: "Send code, screenshots, clips, logs, notes, or rough questions.",
  },
  {
    title: "Clear next steps",
    copy: "Get code feedback, debug help, planning help, or a better way to build the system.",
  },
];

const offerCards = [
  {
    title: "Plan systems that can grow",
    copy: "Build systems that can grow without constant rewrites.",
  },
  {
    title: "Go beyond tutorial code",
    copy: "Turn tutorial ideas into systems that fit your game.",
  },
  {
    title: "Make prototypes playable",
    copy: "Turn rough mechanics into something people can test.",
  },
  {
    title: "Get unstuck faster",
    copy: "Bring bugs, weird Unity issues, or confusing code. I will help you find the next step.",
  },
];

const guarantees = [
  "Reply within 12 hours",
  "Free call if an active question goes unanswered for 48 hours",
  "7-day refund window",
];

const faqs = [
  {
    question: "What happens after I pay?",
    answer:
      "You get the Discord invite and your own private channel. Send project context and your first question when you are ready.",
  },
  {
    question: "Where does coaching happen?",
    answer:
      "In Discord. After you join, you get your own private channel.",
  },
  {
    question: "What can I send?",
    answer:
      "Code, screenshots, clips, errors, logs, design questions, or rough notes.",
  },
  {
    question: "Who is this for?",
    answer:
      "Unity devs, indie builders, students, and solo devs who want feedback on their real project.",
  },
  {
    question: "How does debugging fit in?",
    answer:
      "Debug help is included, along with code review, planning, and feedback while you build.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. Billing is handled through Stripe, and you can cancel through the customer portal.",
  },
];

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-yellow sm:text-sm">
      {children}
    </p>
  );
}

function SectionTitle({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {copy ? (
        <p className="mt-4 text-base leading-7 text-muted sm:text-lg sm:leading-8">
          {copy}
        </p>
      ) : null}
    </div>
  );
}

export function HomePage() {
  const joinUrl = getBookingUrl();

  return (
    <div id="top" className="min-h-dvh overflow-x-hidden bg-background text-foreground">
      <a
        className="block border-b border-border bg-brand-yellow px-5 py-2 text-center text-xs font-semibold uppercase tracking-[0.14em] text-background transition hover:bg-[#ffd95f]"
        href={joinUrl}
      >
        New: private Discord coaching for Unity devs
      </a>
      <SiteHeader ctaLabel={ctaLabel} showNav={false} />

      <main>
        <section className="px-5 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <Eyebrow>Async Unity Coaching</Eyebrow>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.03] text-foreground sm:text-6xl lg:text-7xl">
              Want to actually finish your Unity game?
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted sm:text-xl sm:leading-9">
              Send what you&apos;re stuck on and get clear Unity feedback
              within 12 hours.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
              <BookingLink className="w-full sm:w-auto">{ctaLabel}</BookingLink>
              <a
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-border px-5 py-3 text-sm font-semibold text-foreground transition hover:border-brand-yellow hover:text-brand-yellow"
                href="#faq"
              >
                Read FAQ
              </a>
            </div>
            <div className="mx-auto mt-5 flex max-w-3xl flex-wrap justify-center gap-x-4 gap-y-2 text-sm font-semibold leading-6 text-muted">
              <span>Reply within 12 hours</span>
              <span>Free call if I miss 48 hours</span>
              <span>7-day refund window</span>
            </div>

            <div className="mt-10 border-y border-border py-4 text-sm font-semibold text-muted">
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
                {credibilityPoints.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionTitle
              eyebrow="How It Works"
              title="Private Discord coaching built around your project."
            />

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {coachingSteps.map((step) => (
                <article key={step.title} className="border border-border bg-background/55 p-5">
                  <h3 className="text-xl font-semibold leading-tight text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{step.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionTitle
              eyebrow="What You Get"
              title="Help when tutorials stop helping."
              copy="I help you decide what to build next, how to build it, and what to avoid."
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {offerCards.map((card) => (
                <article key={card.title} className="border border-border bg-background/55 p-5">
                  <h3 className="text-lg font-semibold leading-tight text-foreground">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{card.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start">
            <div>
              <Eyebrow>Why $99/month</Eyebrow>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                Founding member price.
              </h2>
            </div>
            <div>
              <p className="text-lg leading-8 text-muted sm:text-xl sm:leading-9">
                Early members pay $99/month. That is less than a 1-hour call.
                Keep this rate while you stay subscribed. The price will go up
                later.
              </p>
              <ul className="mt-6 grid gap-3 text-sm leading-6 text-muted">
                {guarantees.map((item) => (
                  <li key={item} className="border-l-4 border-brand-yellow pl-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="border-t border-border px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-center">
            <Image
              src="/headshot-transparent.png"
              alt="Matt from Game Dev Glory"
              width={1200}
              height={1600}
              className="h-auto w-40 border border-border sm:w-48"
            />
            <div className="max-w-3xl">
              <Eyebrow>Who You&apos;re Learning From</Eyebrow>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                I&apos;m Matt.
              </h2>
              <div className="mt-5 grid gap-4 text-base leading-7 text-muted sm:text-lg sm:leading-8">
                <p>
                  I&apos;ve spent 10+ years making games in Unity, other
                  engines, proprietary tech, and plenty of languages. I&apos;ve
                  taken projects from rough prototypes to shipped commercial
                  games. My credits include Cities: Skylines (Unity) and Age
                  of Mythology: Retold.
                </p>
                <p>
                  I also taught game dev at university for 5 years. Hundreds of
                  students built portfolio projects in my classes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="scroll-mt-10 border-t border-border px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <SectionTitle eyebrow="FAQs" title="Common questions" />

            <div className="mt-10 divide-y divide-border border-y border-border">
              {faqs.map((item) => (
                <section key={item.question} className="py-6">
                  <h3 className="text-xl font-semibold text-foreground">
                    {item.question}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-muted">{item.answer}</p>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Eyebrow>Join Async Unity Coaching</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-5xl">
              Ready to build with feedback?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
              Join for $99/month and get a private Discord coaching channel for
              your Unity project.
            </p>
            <div className="mt-8">
              <BookingLink className="w-full sm:w-auto">{ctaLabel}</BookingLink>
            </div>
          </div>
        </section>

        <section className="border-t border-border px-5 py-10 sm:px-6 sm:py-12 lg:px-8">
          <footer className="mx-auto flex max-w-6xl flex-col gap-2 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
            <p className="font-medium text-foreground">Game Dev Glory</p>
            <div className="flex flex-col gap-2 sm:items-end">
              <a className="transition hover:text-foreground" href="mailto:info@gamedevglory.com">
                Contact: info@gamedevglory.com
              </a>
              <div className="flex gap-4">
                <a className="transition hover:text-foreground" href="/terms">
                  Terms
                </a>
                <a className="transition hover:text-foreground" href="/privacy">
                  Privacy
                </a>
                <a className="transition hover:text-foreground" href="/billing">
                  Billing
                </a>
              </div>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
}
