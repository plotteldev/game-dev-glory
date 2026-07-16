import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Terms | Game Dev Glory",
  description: "Program terms for Game Dev Glory roadmap resources and coaching.",
};

const terms = [
  {
    title: "Offers",
    body: "Game Dev Glory offers beginner game programming resources and coaching focused on helping students build small, complete first games.",
  },
  {
    title: "Payment",
    body: "Paid coaching packages may be handled through third-party checkout, payment links, or invoicing tools. The price and terms shown at checkout or in writing for the specific offer apply.",
  },
  {
    title: "Roadmap",
    body: "The free Gamer to Game Dev Roadmap is an educational resource. It is not personalized coaching, career advice, or a guarantee of results.",
  },
  {
    title: "Coaching",
    body: "First Game Coaching is guidance-focused support. It can include scope planning, project feedback, code review, debugging help, check-ins, and roadmap support while you build.",
  },
  {
    title: "Student responsibilities",
    body: "Students should provide enough context to make support useful, such as their goal, current code, screenshots, errors, what they tried, and where they are stuck.",
  },
  {
    title: "Scope",
    body: "Support does not include promised full feature implementation, production ownership, emergency response, publishing services, or completion of a project on the student's behalf unless separately agreed in writing.",
  },
  {
    title: "Outcomes",
    body: "Resources and coaching are designed to improve clarity, understanding, decisions, and project momentum. Employment, income, publishing, portfolio, and technical outcomes are not promised.",
  },
  {
    title: "Questions",
    body: "For terms, payment, or access questions, email info@gamedevglory.com.",
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
            These terms summarize how Game Dev Glory beginner game programming
            resources and coaching work.
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
