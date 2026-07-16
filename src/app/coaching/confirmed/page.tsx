import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Details Received | Game Dev Glory",
  description: "Confirmation for Game Dev Glory coaching requests.",
};

export default function CoachingConfirmedPage() {
  return (
    <div id="top" className="min-h-dvh bg-background text-foreground">
      <SiteHeader ctaHref="/roadmap" ctaLabel="Get the Free Roadmap" />
      <main className="px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
        <section className="mx-auto max-w-3xl border border-border bg-surface p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-yellow sm:text-sm">
            Details received
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
            Thanks. I&apos;ll read it manually.
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted">
            If it looks like coaching is a fit, I&apos;ll email next steps.
            Check your inbox and spam/promotions folder.
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
