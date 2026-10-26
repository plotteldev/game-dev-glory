import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const title = "Learn Game Programming | Game Dev Glory";
const description =
  "Learn programming from the ground up with the 4 Week Coding Foundations Course and personal support from Matt at Game Dev Glory.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url: "/book" },
};

const products = [
  {
    title: "4 Week Coding Foundations Course",
    format: "Ground Up Game Dev",
    duration: "4 weeks",
    price: "$699",
    description:
      "Learn programming fundamentals from the ground up. Write the code yourself and build an understanding of how it works, with personal support along the way.",
    label: "Take This Course",
    href: "https://cal.com/matt-noone-avjm8m/coding-foundations",
    event: "coding_foundations_booking_click",
  },
];

export default function BookPage() {
  return (
    <div id="top" className="flex min-h-dvh flex-col bg-background text-foreground">
      <SiteHeader showCta={false} />
      <main className="flex-1 px-5 py-12 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-center text-4xl font-extrabold leading-tight sm:text-6xl">
            LEARN TO BUILD GAMES
          </h1>
          <div className="mt-10 grid gap-6 sm:mt-12">
            {products.map((product) => (
              <article
                key={product.href}
                className="grid gap-6 rounded-2xl border border-border bg-linear-to-br from-surface to-background p-6 sm:p-8 md:grid-cols-[minmax(0,1fr)_220px] md:items-center md:gap-10"
              >
                <div>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-yellow">
                    {product.format}
                  </p>
                  <span className="rounded-full border border-border bg-background px-3 py-1 text-sm text-muted">
                    {product.duration}
                  </span>
                </div>
                <h2 className="mt-6 text-2xl font-semibold leading-tight sm:text-3xl">
                  {product.title}
                </h2>
                <p className="mt-4 text-base leading-7 text-muted">
                  {product.description}
                </p>
                </div>
                <div className="flex flex-col gap-4 md:border-l md:border-border md:pl-8">
                <p className="text-3xl font-bold text-foreground">
                  {product.price}{" "}
                  <span className="text-sm font-medium text-muted">USD</span>
                </p>
                <a
                  className="inline-flex min-h-12 items-center justify-center rounded-md border border-brand-yellow bg-brand-yellow px-5 py-3 text-center text-sm font-semibold text-background transition hover:bg-[#ffd95f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-yellow"
                  data-analytics-event={product.event}
                  href={product.href}
                >
                  {product.label}
                </a>
                </div>
              </article>
            ))}
          </div>
          <section
            aria-labelledby="course-inclusions-heading"
            className="mt-10 border-t border-border pt-8 sm:mt-12 sm:pt-10"
          >
            <h2 id="course-inclusions-heading" className="text-2xl font-semibold leading-tight sm:text-3xl">
              All Course enrolments include:
            </h2>
            <ul className="mt-6 max-w-3xl list-disc space-y-4 pl-5 text-base leading-7 text-muted marker:text-brand-yellow">
              <li>
                <strong className="font-semibold text-foreground">Weekly calls with me.</strong>{" "}
                Talk through what you&apos;re learning, ask questions, and work
                through anything that hasn&apos;t clicked.
              </li>
              <li>
                <strong className="font-semibold text-foreground">Daily chat check-ins.</strong>{" "}
                Share your progress and get help between calls so you don&apos;t
                have to stay stuck until the next session.
              </li>
              <li>
                <strong className="font-semibold text-foreground">Finish early? We keep learning.</strong>{" "}
                If you finish the course in less than 4 weeks, I guarantee
                we&apos;ll move on to extra content beyond the course scope for
                the rest of your 4 weeks.
              </li>
              <li>
                <strong className="font-semibold text-foreground">Need more time? Get 2 extra weeks free.</strong>{" "}
                If you&apos;re struggling to complete the course in 4 weeks,
                I&apos;ll give you an extra 2 weeks of support completely free.
              </li>
            </ul>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
