import { BookingLink } from "@/components/booking-link";
import { SiteHeader } from "@/components/site-header";

const ctaLabel = "Book a Start Call";

const pathProblems = [
  "Costs are high.",
  "Standards are low.",
  "Feedback is limited.",
  "You don't control the pace.",
];

export function HomePage() {
  return (
    <div id="top" className="min-h-dvh overflow-hidden bg-background text-foreground">
      <SiteHeader ctaLabel={ctaLabel} showNav={false} />
      <main className="relative flex h-[calc(100dvh-81px)] items-center px-5 py-3 sm:px-6 sm:py-5 lg:px-8">
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

        <div className="mx-auto grid w-full max-w-6xl gap-7 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
          <section className="max-w-4xl">
            <p className="mb-3 inline-flex rounded border border-brand-yellow/35 bg-brand-yellow-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-yellow sm:mb-4 sm:text-sm">
              The Private Game Programming Track
            </p>
            <h1 className="max-w-4xl text-3xl font-semibold leading-[1.05] text-foreground min-[390px]:text-4xl sm:text-6xl lg:text-6xl">
              A structured alternative to university and tutorial hell.
            </h1>

            <ul className="mt-4 grid max-w-3xl gap-x-8 gap-y-2 text-sm font-semibold text-foreground min-[390px]:text-base sm:mt-5 sm:grid-cols-2 sm:text-lg">
              {pathProblems.map((item) => (
                <li key={item} className="border-l-4 border-brand-yellow pl-3 leading-7">
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
              The next step is not more content. Work 1:1 with daily support, so you can
              move quickly without getting stuck alone.
            </p>

            <div className="mt-5 flex flex-col gap-4 sm:mt-7 sm:flex-row sm:items-center">
              <BookingLink className="w-full sm:w-auto">
                {ctaLabel}
              </BookingLink>
              <p className="hidden max-w-xs text-sm font-semibold leading-6 text-muted sm:block">
                Private coaching. Daily support. Real feedback.
              </p>
            </div>

            <p className="mt-4 text-base font-semibold text-foreground sm:hidden">
              Private coaching. Daily support. Real feedback.
            </p>

            <p className="mt-4 hidden border-l-4 border-brand-yellow pl-3 text-xs leading-5 text-muted sm:block lg:hidden">
              Coached by Matt Noone: commercial game programmer since 2018 and former university
              game-dev educator.
            </p>
          </section>

          <aside className="hidden border-l-4 border-brand-yellow pl-5 lg:block">
            <p className="text-sm font-semibold uppercase text-brand-yellow">Coached by Matt Noone</p>
            <p className="mt-3 text-sm leading-6 text-muted">
              Commercial game programmer since 2018. Five years teaching university game
              development and computer science.
            </p>
            <p className="mt-5 border-t border-border pt-5 text-sm font-semibold leading-6 text-foreground">
              A faster path with direct feedback and focused practice.
            </p>
          </aside>
        </div>
      </main>
    </div>
  );
}
