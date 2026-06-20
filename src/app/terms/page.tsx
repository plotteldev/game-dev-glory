import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Terms | Game Dev Glory",
  description: "Program terms for Game Dev Glory private coaching.",
};

const terms = [
  {
    title: "Program",
    body: "The Private Game Programming Track is private coaching for people learning game programming through focused practice, direct feedback, and small playable projects.",
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
    body: "Students need to attend scheduled calls, complete assigned practice, ask for help when blocked, and protect enough focused time to make progress between calls.",
  },
  {
    title: "Scope",
    body: "The coaching focuses on game programming skill, debugging, project scope, and small playable projects. Specific tools, topics, schedule, support, and deliverables are confirmed before payment.",
  },
  {
    title: "Guarantees",
    body: "Any guarantee or additional support terms must be confirmed in writing before payment. No employment, income, portfolio, or admission outcome is guaranteed.",
  },
  {
    title: "Missed calls and rescheduling",
    body: "Students should give as much notice as possible when rescheduling. Missed calls may not be replaced when there is no reasonable notice.",
  },
];

export default function TermsPage() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
        <section className="mx-auto max-w-4xl">
          <p className="mb-4 inline-flex rounded border border-brand-yellow/35 bg-brand-yellow-soft px-3 py-1 text-sm font-semibold text-brand-yellow">
            Program terms
          </p>
          <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">Terms</h1>
          <p className="mt-4 text-lg leading-8 text-muted">
            These terms summarize how Game Dev Glory private coaching works.
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
