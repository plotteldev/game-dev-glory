import Image from "next/image";
import Link from "next/link";
import { getBookingUrl } from "@/components/booking-link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const applyLabel = "Book 1:1 Coaching";
const bookingHref = getBookingUrl();

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
                tutorial.
              </p>
              <p className="text-sm leading-6 text-brand-yellow sm:text-base">
                Hours of videos leave you overwhelmed and stranded without
                clear next steps.
              </p>

              <p className="text-xl font-extrabold leading-8 text-foreground sm:text-2xl">
                Only 1:1 coaching puts{" "}
                <span className="underline decoration-brand-yellow decoration-4 underline-offset-4">
                  you
                </span>{" "}
                first.
              </p>
              <p className="text-sm leading-6 text-brand-yellow sm:text-base">
                Build the kind of game projects that prove your skills, with
                technical feedback instead of guessing through tutorials alone.
              </p>
            </div>

            <p className="mx-auto mt-5 max-w-2xl text-sm font-extrabold leading-6 text-foreground sm:text-base">
              Learn how to build games now!
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
              <Link
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-brand-yellow bg-brand-yellow px-5 py-3 text-sm font-semibold text-background transition hover:bg-[#ffd95f]"
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
                I&apos;m Matt. I help beginners learn game development without
                getting lost in tutorials.
              </h2>
              <div className="mt-5 grid gap-4 text-base leading-7 text-muted sm:text-lg sm:leading-8">
                <p>
                  I&apos;ve built games professionally and taught game development
                  at university, but the real focus here is simple: helping you
                  understand what to do next, why it matters, and how to keep
                  building.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Eyebrow>Build</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-5xl">
              Get direct help learning game development.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
              Get direct technical feedback, project direction, and
              beginner-friendly guidance so you can build game projects that
              prove what you can do.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
              <Link
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-brand-yellow bg-brand-yellow px-5 py-3 text-sm font-semibold text-background transition hover:bg-[#ffd95f]"
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
