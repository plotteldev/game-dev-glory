import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Terms | Game Dev Glory",
  description: "Program terms for Game Programming Fundamentals private coaching.",
};

const terms = [
  {
    title: "Program",
    body: "Game Programming Fundamentals is a 4-week private coaching program for beginners learning C# programming through a small playable 2D project.",
  },
  {
    title: "Payment",
    body: "Payment is handled after the start call if you want to join. A coaching spot is confirmed once payment is complete.",
  },
  {
    title: "Start call",
    body: "The call is a short conversation about goals, schedule, setup, expectations, and next steps. It is not a lesson, code review, or consulting session.",
  },
  {
    title: "Student responsibilities",
    body: "Students need to attend weekly calls, complete weekly tasks, ask for help when blocked, and set aside time for 3-5 focused practice sessions each week.",
  },
  {
    title: "Scope",
    body: "The program covers beginner C# programming fundamentals and small raylib-C# projects. It does not cover Unity, Unreal, 3D, multiplayer, publishing, art production, marketing, or commercial game development.",
  },
  {
    title: "Guarantee",
    body: "If a student attends the calls, completes the weekly tasks, asks for help when blocked, and still does not have a small playable C# project running by the end of Week 4, Game Dev Glory will provide up to two additional weekly coaching calls at no extra cost.",
  },
  {
    title: "Missed calls and rescheduling",
    body: "Students should give as much notice as possible when rescheduling. Missed calls may not be replaced when there is no reasonable notice.",
  },
];

export default function TermsPage() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <SiteHeader bookHref="/book" ctaHref="/book" ctaLabel="Book a 15-minute start call" />
      <main className="px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
        <section className="mx-auto max-w-4xl">
          <p className="mb-4 inline-flex rounded border border-brand-yellow/35 bg-brand-yellow-soft px-3 py-1 text-sm font-semibold text-brand-yellow">
            Program terms
          </p>
          <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">Terms</h1>
          <p className="mt-4 text-lg leading-8 text-muted">
            These terms summarize how the 4-week Game Programming Fundamentals program works.
          </p>

          <div className="mt-8 divide-y divide-border border-y border-border">
            {terms.map((term) => (
              <section key={term.title} className="py-5">
                <h2 className="text-xl font-semibold text-foreground">{term.title}</h2>
                <p className="mt-3 leading-7 text-muted">{term.body}</p>
              </section>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
