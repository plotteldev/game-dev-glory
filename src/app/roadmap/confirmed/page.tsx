import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Roadmap Sent | Game Dev Glory",
  description: "Confirmation for the free Gamer to Game Dev Roadmap.",
};

export default function RoadmapConfirmedPage() {
  return (
    <div id="top" className="min-h-dvh bg-background text-foreground">
      <SiteHeader />
      <main className="px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
        <section className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-yellow sm:text-sm">
            Roadmap requested
          </p>
          <h1 className="mx-auto mt-4 max-w-3xl text-5xl font-extrabold uppercase leading-[1.1] text-foreground sm:text-7xl">
            Check Your Inbox
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl sm:leading-9">
            The Gamer to Game Dev Roadmap should arrive by email. Check spam or
            promotions if it does not show up after a few minutes.
          </p>
          <div className="mt-8">
            <Link
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-border px-5 py-3 text-sm font-semibold text-foreground transition hover:border-brand-yellow hover:text-brand-yellow"
              href="/"
            >
              Back to Game Dev Glory
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
