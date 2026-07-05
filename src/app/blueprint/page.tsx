import type { Metadata } from "next";
import { BookingLink } from "@/components/booking-link";
import { SiteHeader } from "@/components/site-header";

const blueprintHref =
  process.env.NEXT_PUBLIC_BLUEPRINT_BOOKING_URL ??
  "https://cal.com/matt-noone-avjm8m/blueprint";
const ctaLabel = "Book My Blueprint Call";

const includedItems = [
  "30-minute private call",
  "Project idea matched to your level",
  "2-week build plan",
  "What to build first",
  "What to leave out",
  "Written plan after the call",
];

const fitItems = [
  "Tutorial-stuck beginners",
  "Overscoped project ideas",
  "Students who need portfolio proof",
];

const proofItems = [
  "Cities: Skylines",
  "Age of Mythology: Retold",
  "University teaching experience",
];

export const metadata: Metadata = {
  title: "Portfolio Project Blueprint | Game Dev Glory",
  description:
    "Get a custom 2-week game project blueprint from a working games programmer so you know exactly what to build next.",
  openGraph: {
    title: "Portfolio Project Blueprint | Game Dev Glory",
    description:
      "Get a custom 2-week game project blueprint from a working games programmer so you know exactly what to build next.",
    type: "website",
  },
};

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="inline-flex rounded border border-brand-yellow/35 bg-brand-yellow-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-yellow">
      {children}
    </p>
  );
}

function CheckList({
  items,
  muted = false,
}: {
  items: string[];
  muted?: boolean;
}) {
  return (
    <ul
      className={`grid gap-2 text-sm font-semibold leading-6 ${
        muted ? "text-muted" : "text-foreground"
      }`}
    >
      {items.map((item) => (
        <li
          key={item}
          className={`border-l-4 pl-3 ${
            muted ? "border-border" : "border-brand-yellow"
          }`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function BlueprintPage() {
  return (
    <div id="top" className="min-h-dvh overflow-x-hidden bg-background text-foreground">
      <SiteHeader
        ctaHref={blueprintHref}
        ctaLabel={ctaLabel}
        showNav={false}
      />
      <main className="px-5 py-6 sm:px-6 lg:px-8">
        <section className="relative mx-auto grid min-h-[calc(100dvh-129px)] max-w-6xl gap-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:items-center">
          <div className="absolute right-0 top-0 hidden grid-cols-4 gap-2 opacity-70 md:grid">
            {Array.from({ length: 12 }).map((_, index) => (
              <span
                key={index}
                className={`h-2.5 w-2.5 ${
                  index % 4 === 0 ? "bg-brand-yellow" : "bg-surface-raised"
                }`}
              />
            ))}
          </div>

          <section>
            <Eyebrow>$49 AUD Project Blueprint Call</Eyebrow>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.04] text-foreground sm:text-6xl lg:text-7xl">
              Stop picking game projects that are too big.
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted sm:text-xl sm:leading-9">
              In 30 minutes, we turn your current skill level into one small
              portfolio project with a 2-week build plan.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <BookingLink className="w-full sm:w-auto" href={blueprintHref}>
                {ctaLabel}
              </BookingLink>
              <p className="text-sm font-semibold leading-6 text-muted">
                Choose a time and pay on Cal.com.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-x-3 gap-y-2 text-sm font-semibold leading-6 text-foreground">
              {proofItems.map((item, index) => (
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
          </section>

          <aside className="rounded-md border border-border bg-surface/80 p-5 shadow-[4px_4px_0_0_var(--brand-blue)] sm:p-6">
            <div className="grid gap-5">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-yellow">
                  What you get
                </p>
                <div className="mt-3 flex items-end gap-3">
                  <p className="text-5xl font-semibold leading-none text-foreground">
                    $49
                  </p>
                  <p className="pb-1 text-sm font-semibold uppercase tracking-[0.14em] text-muted">
                    AUD
                  </p>
                </div>
                <p className="mt-3 text-sm leading-6 text-muted">
                  Leave with one project idea, a build order, and the traps to
                  avoid.
                </p>
              </div>

              <CheckList items={includedItems} />

              <div className="border-t border-border pt-4">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-yellow">
                  Best for
                </p>
                <div className="mt-3">
                  <CheckList items={fitItems} muted />
                </div>
              </div>

              <p className="border-t border-border pt-4 text-sm font-semibold leading-6 text-foreground">
                If you do not leave with a clear project plan, you get the $49
                back.
              </p>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}
