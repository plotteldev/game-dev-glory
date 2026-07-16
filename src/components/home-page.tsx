import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const applyLabel = "I'm Ready To Build Games";

const supportItems = [
  "We choose a first game you can actually finish and feel proud of.",
  "You get a clear weekly plan, so the next step is never a mystery.",
  "Code, bugs, scope, design choices, and stuck points all get handled with you.",
  "Daily 1:1 support keeps momentum alive between coaching calls.",
  "Your path stays pointed at the outcome you care about: indie, portfolio, or both.",
  "You stop collecting tutorials and start stacking real game-dev wins.",
];

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-yellow sm:text-sm">
      {children}
    </p>
  );
}

export function HomePage() {
  return (
    <div id="top" className="min-h-dvh overflow-x-hidden bg-background text-foreground">
      <SiteHeader ctaHref="/coaching" ctaLabel={applyLabel} />

      <main>
        <section className="px-5 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mx-auto max-w-3xl text-5xl font-extrabold uppercase leading-[1.1] text-foreground sm:text-7xl">
              DO YOU WANT TO BUILD GAMES?
            </h1>

            <div className="mx-auto mt-6 grid max-w-3xl gap-4">
              <p className="text-xl font-extrabold leading-8 text-foreground sm:text-2xl">
                You don&apos;t need a{" "}
                <span className="underline decoration-brand-yellow decoration-4 underline-offset-4">
                  degree
                </span>
                .
              </p>
              <p className="text-sm leading-6 text-brand-yellow sm:text-base">
                Degrees are expensive, take years, and struggle to give you
                personalized feedback.
              </p>

              <p className="text-xl font-extrabold leading-8 text-foreground sm:text-2xl">
                You don&apos;t need{" "}
                <span className="underline decoration-brand-yellow decoration-4 underline-offset-4">
                  another
                </span>{" "}
                online course.
              </p>
              <p className="text-sm leading-6 text-brand-yellow sm:text-base">
                Hours of videos leave you overwhelmed and stranded in Tutorial Hell.
              </p>

              <p className="text-xl font-extrabold leading-8 text-foreground sm:text-2xl">
                Only 1-on-1 coaching puts{" "}
                <span className="underline decoration-brand-yellow decoration-4 underline-offset-4">
                  you
                </span>{" "}
                first.
              </p>
              <p className="text-sm leading-6 text-brand-yellow sm:text-base">
                Get help choosing a path, scoping your first game, and building
                with feedback instead of guessing alone.
              </p>
            </div>

            <p className="mx-auto mt-5 max-w-2xl text-sm font-extrabold leading-6 text-foreground sm:text-base">
              You know what you&apos;re capable of. Learn to build games today.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
              <Link
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-brand-yellow bg-brand-yellow px-5 py-3 text-sm font-semibold text-background transition hover:bg-[#ffd95f]"
                href="/coaching"
              >
                {applyLabel}
              </Link>
              <Link
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-border px-5 py-3 text-sm font-semibold text-foreground transition hover:border-brand-yellow hover:text-brand-yellow"
                href="/roadmap"
              >
                Get the Free Roadmap
              </Link>
            </div>
          </div>
        </section>

        <section className="border-t border-border px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start">
            <div>
              <Eyebrow>Accelerate Your Roadmap</Eyebrow>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                You bring the dream. I&apos;ll help clear the path.
              </h2>
              <p className="mt-5 text-base leading-7 text-muted sm:text-lg sm:leading-8">
                The free roadmap shows where you&apos;re going. 1-on-1 coaching
                makes sure you keep moving: the confusing decisions get simpler,
                the project gets scoped properly, the bugs stop feeling
                impossible, and you always know what to build next.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {supportItems.map((item) => (
                <article key={item} className="border border-border bg-surface/65 p-5">
                  <p className="text-sm font-semibold leading-6 text-foreground">
                    {item}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:items-center">
            <Image
              src="/headshot-transparent.png"
              alt="Matt from Game Dev Glory"
              width={1200}
              height={1600}
              unoptimized
              className="h-auto w-44 border border-border sm:w-56"
            />
            <div className="max-w-3xl">
              <Eyebrow>Your Coach</Eyebrow>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                I&apos;m Matt. I&apos;ve built real games and taught beginners
                how to start.
              </h2>
              <div className="mt-5 grid gap-4 text-base leading-7 text-muted sm:text-lg sm:leading-8">
                <p>
                  I have a Computer Science degree and have worked across the full
                  spread of game development: indie-scale teams, AAA studios,
                  brand-new projects, live games, post-release support, Unity,
                  Unreal, custom engines, C#, C, C++, Python, and custom
                  scripting languages. My credits include Cities: Skylines, Age
                  of Mythology: Retold, LEGO 2K Drive, and WWZ: Aftermath.
                </p>
                <p>
                  I have also taught game development at university, helping
                  hundreds of students with very different backgrounds get
                  projects over the line. I know first-hand what university can
                  offer, and where it breaks down: slow feedback, limited
                  personal attention, and not enough help on the exact game you
                  are trying to build.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Eyebrow>Next Step</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-5xl">
              Tell me where you want game dev to take you.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
              Tell me your goals, experience level, and whether you are aiming
              for an indie path, a career/portfolio path, or both.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
              <Link
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-brand-yellow bg-brand-yellow px-5 py-3 text-sm font-semibold text-background transition hover:bg-[#ffd95f]"
                href="/coaching"
              >
                {applyLabel}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
