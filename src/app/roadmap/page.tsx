import type { Metadata } from "next";
import Image from "next/image";
import { RoadmapLeadForm } from "@/components/roadmap-lead-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getSubmissionErrorMessage } from "@/lib/form-submissions";

export const metadata: Metadata = {
  title: "Free Gamer to Game Dev Roadmap | Game Dev Glory",
  description:
    "Get the free Gamer to Game Dev Roadmap in under 30 seconds.",
  openGraph: {
    title: "Free Gamer to Game Dev Roadmap | Game Dev Glory",
    description:
      "A free roadmap for beginners who want to build games without getting stranded in Tutorial Hell.",
    type: "website",
  },
};

type RoadmapPageProps = {
  searchParams: Promise<{
    error?: string | string[];
  }>;
};

export default async function RoadmapPage({ searchParams }: RoadmapPageProps) {
  const errorMessage = getSubmissionErrorMessage((await searchParams).error);

  return (
    <div id="top" className="min-h-dvh bg-background text-foreground">
      <SiteHeader />
      <main className="px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
        <section className="mx-auto max-w-7xl text-center">
          <h1 className="mx-auto max-w-3xl text-5xl font-extrabold uppercase leading-[1.1] text-foreground sm:text-7xl">
            Get Your Free Game Dev Roadmap
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-semibold leading-8 text-brand-yellow sm:text-2xl sm:leading-9">
            See the path from gamer to game dev in under 30 seconds.
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
            For beginners who want to build games without an expensive degree or
            another online course.
          </p>

          <RoadmapLeadForm
            action="/api/roadmap"
            errorMessage={errorMessage}
            source="roadmap"
          />

          <div className="mt-12 overflow-hidden rounded-lg border border-border bg-surface shadow-2xl shadow-black/25">
            <Image
              src="/downloads/gamer-to-game-dev-roadmap.png"
              alt="From Gamer to Game Dev portfolio and tech demo roadmap"
              width={2400}
              height={1600}
              className="h-auto w-full"
              priority
            />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
