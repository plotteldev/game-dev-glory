import { BookingLink } from "@/components/booking-link";
import { SiteHeader } from "@/components/site-header";

const ctaLabel = "Book a Free Portfolio Roadmap Call";

const offerBullets = [
  "Personalized roadmap for your current level and goal",
  "Personalized game project scoped so you can finish",
  "Weekly 1:1 calls",
  "Daily 1:1 chat support",
  "2-week finish-line guarantee if the project needs a final push",
  "Fundamentals-first learning through real project work",
];

const proofPoints = [
  "Cities: Skylines",
  "Age of Mythology: Retold",
  "University CS/game dev teaching",
  "Beginner-to-first-job path",
];

const firstWeeks = [
  "Scope a small portfolio-focused game you can finish.",
  "Build the mechanics while learning the fundamentals.",
  "Polish it into something you can show people.",
];

const nextPath = [
  "Programming fundamentals",
  "Game systems and debugging",
  "Architecture and workflow",
  "Portfolio and industry direction",
];

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="mb-3 inline-flex rounded border border-brand-yellow/35 bg-brand-yellow-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-yellow sm:text-sm">
      {children}
    </p>
  );
}

function CompactCard({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="rounded-md border border-border bg-background/55 p-3 shadow-[4px_4px_0_0_var(--brand-blue)] sm:p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-yellow">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-xl font-semibold leading-tight text-foreground">
        {title}
      </h2>
      {children}
    </article>
  );
}

export function HomePage() {
  return (
    <div id="top" className="min-h-dvh overflow-x-hidden bg-background text-foreground">
      <SiteHeader ctaLabel={ctaLabel} showNav={false} />
      <main>
        <section className="relative flex min-h-[calc(100dvh-81px)] items-center px-5 py-8 sm:px-6 sm:py-10 lg:px-8">
          <div className="absolute right-5 top-6 hidden grid-cols-4 gap-2 opacity-70 md:grid">
            {Array.from({ length: 12 }).map((_, index) => (
              <span
                key={index}
                className={`h-2.5 w-2.5 ${
                  index % 4 === 0 ? "bg-brand-yellow" : "bg-surface-raised"
                }`}
              />
            ))}
          </div>

          <div className="mx-auto w-full max-w-6xl">
            <section className="max-w-5xl">
              <Eyebrow>Portfolio-first game programming coaching</Eyebrow>
              <h1 className="max-w-5xl text-4xl font-semibold leading-[1.04] text-foreground sm:text-6xl lg:text-7xl">
                Escape tutorial hell.
                <br />
                Finish a game project.
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-muted sm:text-xl sm:leading-9">
                I used a portfolio to get my first game programming job. If you
                are anywhere from &quot;I&apos;ve never coded&quot; to
                &quot;I&apos;m applying for my first games role,&quot; I help
                you build the proof your next step needs.
              </p>

              <p className="mt-4 max-w-3xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                You will build a small finished game, learn the programming
                fundamentals behind it, and avoid the oversized scope that keeps
                projects stuck in limbo.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <BookingLink className="w-full sm:w-auto">{ctaLabel}</BookingLink>
              </div>

              <ul className="mt-6 grid max-w-5xl gap-3 text-sm font-semibold text-foreground sm:grid-cols-2">
                {offerBullets.map((item) => (
                  <li key={item} className="border-l-4 border-brand-yellow pl-3 leading-6">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </section>

        <section className="border-y border-border bg-surface/35 px-5 py-6 sm:px-6 sm:py-10 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 border-b border-border pb-6">
              <div className="flex flex-wrap gap-x-3 gap-y-2 text-sm font-semibold leading-6 text-brand-yellow">
                {proofPoints.map((item, index) => (
                  <span key={item} className="inline-flex items-center gap-3">
                    {index > 0 ? (
                      <span aria-hidden="true" className="text-brand-yellow">
                        &bull;
                      </span>
                    ) : null}
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6 grid gap-5 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-start">
                <h2 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                  The route I teach is the route I used.
                </h2>

                <div className="grid gap-4 text-base leading-7 text-muted sm:text-lg sm:leading-8">
                  <p>
                    I got my first game programming job without a degree because
                    I could show finished work.
                  </p>
                  <p>
                    Since then I&apos;ve programmed on games including Cities:
                    Skylines and Age of Mythology: Retold, and taught computer
                    science and game development at university level.
                  </p>
                  <p>
                    You do not need a degree. You do not need another tutorial.
                  </p>
                  <p>
                    Degrees are expensive and take years. Tutorials can leave
                    you stranded when it is time to move beyond the lesson and
                    apply it to your own game.
                  </p>
                  <p>
                    1:1 coaching gives you a project, a roadmap, and direct
                    help every step of the way.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              <CompactCard eyebrow="First 6 weeks" title="Finish the first project.">
                <ul className="mt-4 grid gap-2 text-sm leading-6 text-muted">
                  {firstWeeks.map((item) => (
                    <li key={item} className="border-l-4 border-brand-yellow pl-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </CompactCard>

              <CompactCard eyebrow="Then keep going" title="Build real programming depth.">
                <ul className="mt-4 grid gap-2 text-sm leading-6 text-muted sm:grid-cols-2 lg:grid-cols-1">
                  {nextPath.map((item) => (
                    <li key={item} className="border-l-4 border-brand-yellow pl-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </CompactCard>
            </div>

            <div className="mt-4 rounded-md border border-border bg-background/45 p-3 sm:p-5">
              <p className="text-sm leading-6 text-muted">
                Best for complete beginners, self-taught programmers, students,
                and first-job applicants who want structure, practical projects,
                and direct feedback. Not for passive video-only learners or
                anyone looking for a job guarantee.
              </p>
            </div>

            <div className="mt-6 grid gap-4 border-t border-border pt-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
              <div>
                <h2 className="text-2xl font-semibold leading-tight text-foreground sm:text-3xl">
                  Get unstuck. Make faster progress. Finish something you can
                  show.
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-muted sm:text-base sm:leading-7">
                  Book a free 15-minute portfolio roadmap call and share where
                  you are now, what you want to build, and where you want game
                  development to take you.
                </p>
              </div>
              <BookingLink className="w-full sm:w-auto">{ctaLabel}</BookingLink>
            </div>

            <footer className="mt-4 flex flex-col gap-2 border-t border-border pt-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
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
                </div>
              </div>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}
