import type { Metadata } from "next";
import { CalBookingEmbed } from "@/components/cal-booking-embed";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const startLearningBookingUrl =
  process.env.NEXT_PUBLIC_START_LEARNING_BOOKING_URL ??
  process.env.NEXT_PUBLIC_BOOKING_URL ??
  "";

export const metadata: Metadata = {
  title: "Book a Game Programming Starter Session | Game Dev Glory",
  description:
    "Book a focused beginner game programming session to choose your first learning path and first project.",
  openGraph: {
    title: "Book a Game Programming Starter Session | Game Dev Glory",
    description:
      "Beginner-friendly 1-on-1 guidance for choosing a first engine, first project, and practical learning path.",
    type: "website",
    images: [
      {
        url: "/logo-icon.png",
        width: 512,
        height: 512,
        alt: "Game Dev Glory logo",
      },
    ],
  },
};

export default function StartLearningBookPage() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <SiteHeader
        bookHref="/book/start-learning"
        ctaHref="/book/start-learning"
        ctaLabel="Book starter"
      />
      <main className="px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
        <section className="mx-auto max-w-6xl">
          <div className="mb-8 max-w-3xl">
            <p className="mb-4 inline-flex rounded border border-brand-yellow/35 bg-brand-yellow-soft px-3 py-1 text-sm font-semibold text-brand-yellow">
              Beginner session &middot; 60 minutes &middot; USD $150 &middot; Online
            </p>
            <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">
              Book a game programming starter session
            </h1>
            <p className="mt-4 text-lg leading-8 text-muted">
              Pick a time for one focused session on your first engine, first project, and next few
              weeks of learning.
            </p>
          </div>
          <CalBookingEmbed
            bookingUrl={startLearningBookingUrl}
            namespace="game-dev-glory-start-learning"
            embedId="start-learning-cal-booking-embed"
            offerName="game_programming_starter_session"
            viewedEventName="starter_booker_viewed"
            bookedEventName="starter_session_booked"
          />
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
