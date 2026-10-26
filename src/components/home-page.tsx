import Image from "next/image";
import Link from "next/link";
import { getBookingUrl } from "@/components/booking-link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const applyLabel = "Learn To Build Games";
const bookingHref = getBookingUrl();

const professionalGames = [
  { title: "Age of Mythology: Retold", cover: "age-of-mythology-retold" },
  { title: "Cities: Skylines", cover: "cities-skylines" },
  { title: "LEGO 2K Drive", cover: "lego-2k-drive" },
  { title: "World War Z: Aftermath", cover: "world-war-z-aftermath-cover" },
  { title: "Matchpoint: Tennis Championships", cover: "matchpoint-tennis-championships" },
  { title: "Castlepult", cover: "castlepult" },
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
      <SiteHeader ctaHref={bookingHref} ctaLabel={applyLabel} />

      <main>
        <section className="px-5 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mx-auto max-w-3xl text-4xl font-extrabold uppercase leading-tight text-foreground sm:text-6xl">
              DO YOU WANT TO BUILD GAMES?
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-xl font-semibold leading-8 text-brand-yellow sm:text-2xl sm:leading-9">
              You don&apos;t need a degree, just skills and a portfolio
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
              Hands-on fundamentals from the ground up. No AI. No fluff.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
              <Link
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-brand-yellow bg-brand-yellow px-5 py-3 text-sm font-semibold text-background transition hover:bg-[#ffd95f]"
                data-analytics-event="free_chat_cta_click"
                href={bookingHref}
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

        <section aria-labelledby="professional-games-heading" className="border-t border-border px-5 py-8 sm:px-6 sm:py-10 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 id="professional-games-heading" className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-muted sm:text-left">
              Games I&apos;ve worked on
            </h2>
              <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-5 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
                {professionalGames.map((game) => (
                  <li key={game.cover} className="min-w-0">
                    <figure>
                      <Image
                        src={`/games/${game.cover}.webp`}
                        alt=""
                        width={460}
                        height={215}
                        sizes="(max-width: 639px) calc((100vw - 52px) / 2), (max-width: 1023px) 31vw, (max-width: 1215px) 15vw, 179px"
                        className="aspect-460/215 w-full rounded-lg border border-white/10 bg-surface shadow-lg"
                      />
                      <figcaption className="mt-2 text-center text-xs font-medium leading-5 text-foreground sm:text-left sm:text-sm">
                        {game.title}
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
          </div>
        </section>

        <section aria-labelledby="your-coach-heading" className="border-t border-border bg-linear-to-br from-brand-blue-pale via-background to-background px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 id="your-coach-heading" className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">
              Industry and Educational Experience
              <span className="block text-brand-yellow">Personal guidance</span>
            </h2>
            <div className="mt-6 flow-root text-left text-base leading-7 text-muted sm:text-lg sm:leading-8 [&>p+p]:mt-5">
              <div className="float-right mb-4 ml-5 w-28 overflow-hidden rounded-2xl border border-border bg-linear-to-t from-brand-blue-soft to-surface sm:mb-6 sm:ml-8 sm:w-48 lg:w-56">
                <Image
                  src="/headshot-transparent.png"
                  alt="Matt, games programmer and educator"
                  width={1200}
                  height={1600}
                  sizes="(max-width: 639px) 112px, (max-width: 1023px) 192px, 224px"
                  className="h-auto w-full"
                />
              </div>
                  <p>
                    Hi, I&apos;m Matt! I&apos;ve been making games professionally since 2018 and taught degree-level games programming at university for 5 years.
                  </p>
                  <p>
                    During this time, I became really frustrated seeing courses across all levels of education shift away from teaching from the ground up and towards quick and dirty solutions that aimed to help students pass, rather than understand.
                  </p>
                  <p>
                    This set them up for failure and a massive shock when they tried to apply for jobs or create their own projects. If you never dig in to how things work, the harsh reality is that you simply won&apos;t have the skills to succeed. Employers expect you to have mastered the fundamentals and beyond (even for junior positions), and building your own game is a massive undertaking that requires a deep understanding of what you're building.
                  </p>
                  <p>
                    My frustration has only grown in the world of generative AI. Social Media (and even some courses now) would have you believe that AI means you don&apos;t need to understand how things work because you don&apos;t need to write code anymore.
                  </p>
                  <p>
                    This is simply not true. Without the fundamental understanding, trying to build a project with AI feels like running around in circles, fixing one problem but creating another, and not understanding why. Forget about using it to get a games programming job in the industry - most companies won&apos;t even let you use it due to privacy concerns!
                  </p>
                  <p>
                    That&apos;s why I made Game Dev Glory and the Ground Up Game Dev course series. It&apos;s my mission to teach you the fundamentals of programming and games development so you can stand out from the crowd with a genuine understanding of what it takes to make games.
                  </p>
                  <p className="font-medium text-foreground">
                    Let&apos;s learn to build games together!
                  </p>
            </div>
          </div>
        </section>

        <section className="border-t border-border px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Eyebrow>Coding Foundations</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-5xl">
              Learn to code from the ground up.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
              Start with the Coding Foundations course. Learn how code works by
              writing it yourself, with personal feedback to help you understand
              each step.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
              <Link
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-brand-yellow bg-brand-yellow px-5 py-3 text-sm font-semibold text-background transition hover:bg-[#ffd95f]"
                data-analytics-event="free_chat_cta_click"
                href={bookingHref}
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
