import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const title = "Learn Game Programming | Game Dev Glory";
const description =
  "Book a 60 minute individual consult or learn programming from the ground up with the 4-Week Coding Foundations Bootcamp at Game Dev Glory.";

export const metadata: Metadata = {
  description,
  openGraph: { title, description, url: "/book" },
};

const products = [
  {
    title: "Free Intro Call",
    price: "Free",
    description:
      "New to Game Dev Glory? Let's talk about where you are, where you want to be, and the best path to get you there.",
    label: "Book Now",
    href: "https://cal.com/matt-noone-avjm8m/15min",
    event: "free_intro_call_booking_click",
  },
  {
    title: "60 minute Individual Consult",
    price: "$147",
    description:
      "Bring any questions or problems to me and we'll work through them to accelerate your game dev journey.",
    label: "Book Now",
    href: "https://cal.com/matt-noone-avjm8m/60min",
    event: "one_on_one_booking_click",
  },
  {
    title: "4-Week Coding Foundations Bootcamp",
    price: "$1,097",
    description:
      "Learn programming fundamentals from the ground up. Write the code yourself and build an understanding of how it works, with personal support along the way.",
    label: "More Info",
    href: "/coding-foundations-bootcamp",
    event: "coding_foundations_info_click",
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
          <div className="mt-8 grid gap-4 sm:mt-10">
            {products.map((product) => (
              <article
                key={product.href}
                className="grid gap-4 rounded-xl border border-border bg-linear-to-br from-surface to-background p-5 sm:p-6 md:grid-cols-[minmax(0,1fr)_200px] md:items-center md:gap-6"
              >
                <div>
                <h2 className="text-xl font-semibold leading-tight sm:text-2xl">
                  {product.title}
                </h2>
                <p className="mt-2 text-base leading-6 text-muted">
                  {product.description}
                </p>
                </div>
                <div className="flex items-center justify-between gap-4 md:flex-col md:items-stretch md:gap-3 md:border-l md:border-border md:pl-6">
                <p className="text-2xl font-bold text-foreground">
                  {product.price}{" "}
                  {product.price !== "Free" && (
                    <span className="text-sm font-medium text-muted">USD</span>
                  )}
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
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
