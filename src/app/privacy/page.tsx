import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Privacy | Game Dev Glory",
  description: "Privacy notice for Game Dev Glory booking and coaching enquiries.",
};

const privacyItems = [
  {
    title: "What is collected",
    body: "When you book an enrolment call, the booking system may collect details such as your name, email address, answers to booking questions, timezone, meeting details, and technical information needed to provide the booking service.",
  },
  {
    title: "Why it is collected",
    body: "This information is used to assess whether Game Programming Fundamentals is a suitable fit, schedule the enrolment call, communicate about enrolment, and deliver coaching if you enrol.",
  },
  {
    title: "Where it is handled",
    body: "Booking information is handled through the booking system and any connected calendar or video meeting tools. Email enquiries are handled through the email address shown on this site.",
  },
  {
    title: "How it is used",
    body: "Your information is not sold. It may be used to respond to your enquiry, run the enrolment call, manage enrolment, provide support, and keep basic business records.",
  },
  {
    title: "Questions",
    body: "For privacy questions or requests, contact info@gamedevglory.com.",
  },
];

export default function PrivacyPage() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <SiteHeader bookHref="/book" ctaHref="/book" ctaLabel="Apply For 1-on-1 Coaching" />
      <main className="px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
        <section className="mx-auto max-w-4xl">
          <p className="mb-4 inline-flex rounded border border-brand-yellow/35 bg-brand-yellow-soft px-3 py-1 text-sm font-semibold text-brand-yellow">
            Privacy notice
          </p>
          <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">Privacy</h1>
          <p className="mt-4 text-lg leading-8 text-muted">
            This notice explains how booking and enquiry information is used for Game Dev Glory.
          </p>

          <div className="mt-8 divide-y divide-border border-y border-border">
            {privacyItems.map((item) => (
              <section key={item.title} className="py-5">
                <h2 className="text-xl font-semibold text-foreground">{item.title}</h2>
                <p className="mt-3 leading-7 text-muted">{item.body}</p>
              </section>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
