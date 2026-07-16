import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getSubmissionErrorMessage } from "@/lib/form-submissions";

export const metadata: Metadata = {
  title: "1-on-1 Game Dev Coaching | Game Dev Glory",
  description:
    "Tell me your goals, experience level, and first game path for 1-on-1 game dev coaching.",
};

const experienceOptions = [
  "I am brand new",
  "I have followed tutorials",
  "I have started small projects",
  "I have finished at least one small project",
  "I am already working in software or games",
];

const pathOptions = [
  "Indie dev path",
  "Career / portfolio path",
  "Both",
  "Not sure yet",
];

const paidServiceOptions = [
  "Yes, that works for me.",
  "No, that does not work for me.",
];

const offerItems = [
  "Weekly 1:1 coaching call.",
  "Daily 1:1 support between calls.",
  "Help turning the roadmap into a realistic first-game plan.",
  "Feedback on scope, code, bugs, design decisions, and next steps.",
  "Guidance for your indie-dev path, career/portfolio path, or both.",
  "Manual review before next steps.",
];

const fitItems = [
  "You want to build games, not just watch game-dev videos.",
  "You want feedback on your game, not generic advice for everyone.",
  "You want a plan you can follow, not another folder full of unfinished projects.",
];

const bulletMarkerClass =
  "relative pl-4 before:absolute before:left-0 before:top-1 before:h-6 before:w-1 before:bg-brand-yellow";

function TextInput({
  label,
  name,
  type = "text",
  required = true,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-foreground">
      {label}
      <input
        className="min-h-12 rounded-md border border-border bg-background px-4 py-3 text-base font-normal text-foreground outline-none transition placeholder:text-muted focus:border-brand-yellow"
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
      />
    </label>
  );
}

function TextArea({
  label,
  name,
  placeholder,
  rows = 5,
}: {
  label: string;
  name: string;
  placeholder: string;
  rows?: number;
}) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-foreground">
      {label}
      <textarea
        className="rounded-md border border-border bg-background px-4 py-3 text-base font-normal leading-7 text-foreground outline-none transition placeholder:text-muted focus:border-brand-yellow"
        name={name}
        required
        rows={rows}
        placeholder={placeholder}
      />
    </label>
  );
}

function SelectInput({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-foreground">
      {label}
      <select
        className="min-h-12 rounded-md border border-border bg-background px-4 py-3 text-base font-normal text-foreground outline-none transition focus:border-brand-yellow"
        name={name}
        required
        defaultValue=""
      >
        <option value="" disabled>
          Choose one
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

type CoachingPageProps = {
  searchParams: Promise<{
    error?: string | string[];
  }>;
};

export default async function CoachingPage({ searchParams }: CoachingPageProps) {
  const errorMessage = getSubmissionErrorMessage((await searchParams).error);

  return (
    <div id="top" className="min-h-dvh bg-background text-foreground">
      <SiteHeader ctaHref="/roadmap" ctaLabel="Get the Free Roadmap" />
      <main className="px-5 py-10 sm:px-6 sm:py-16 lg:px-8">
        <section className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-yellow sm:text-sm">
            Coaching fit
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-foreground sm:text-6xl">
            Tell me where you want game dev to take you.
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted sm:text-xl sm:leading-9">
            This helps me understand your goals, experience level, and what kind
            of progress you want to accelerate. If it looks like a fit, I&apos;ll
            email next steps. No sales call.
          </p>

          <section className="mt-8 border border-border bg-surface/70 p-5 sm:p-6">
            <h2 className="text-xl font-semibold leading-tight text-foreground">
              What Coaching Includes
            </h2>
            <p className="mt-3 text-base leading-7 text-muted">
              1-on-1 coaching for beginners who want to move through the Gamer
              to Game Dev Roadmap faster, with personal feedback and support
              while they build.
            </p>
            <ul className="mt-5 grid gap-3 text-sm leading-6 text-muted sm:grid-cols-2">
              {offerItems.map((item) => (
                <li key={item} className={bulletMarkerClass}>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-border pt-5">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-yellow">
                Best fit if
              </p>
              <ul className="mt-3 grid gap-3 text-sm leading-6 text-muted">
                {fitItems.map((item) => (
                  <li key={item} className={bulletMarkerClass}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <form
            action="/api/coaching"
            method="post"
            className="mt-10 grid gap-5 border border-border bg-surface/70 p-5 sm:p-6"
          >
            <input type="hidden" name="source" value="coaching" />
            <input type="hidden" name="_next" value="/coaching/confirmed" />
            <label className="sr-only" htmlFor="coaching-website">
              Website
            </label>
            <input
              aria-hidden="true"
              autoComplete="off"
              className="hidden"
              id="coaching-website"
              name="website"
              tabIndex={-1}
              type="text"
            />

            {errorMessage ? (
              <p className="border border-brand-yellow/40 bg-brand-yellow-soft px-4 py-3 text-sm leading-6 text-foreground">
                {errorMessage}
              </p>
            ) : null}

            <div className="grid gap-5 sm:grid-cols-2">
              <TextInput label="Name" name="name" placeholder="Your name" />
              <TextInput label="Email" name="email" type="email" placeholder="you@example.com" />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <SelectInput
                label="Current experience level"
                name="experience_level"
                options={experienceOptions}
              />
              <SelectInput label="Which path are you aiming for?" name="path" options={pathOptions} />
            </div>

            <TextArea
              label="Where do you want game dev to take you?"
              name="game_dev_goal"
              placeholder="For example: indie dev side project, first commercial game, career portfolio, technical confidence, or proving I can finish a game."
            />

            <TextArea
              label="What kind of first game do you want to build?"
              name="first_game_goal"
              placeholder="Describe the type of game, the feeling you want, or the games that inspire it. It can be rough."
            />

            <TextArea
              label="What have you already done?"
              name="current_progress"
              placeholder="Tutorials watched, tools tried, projects started, code written, art/design work, or anything else that gives context."
            />

            <label className="grid gap-2 text-sm font-semibold text-foreground">
              <span>How much time can you commit most weeks?</span>
              <span className="text-sm font-normal leading-6 text-muted">
                It is okay if you cannot commit a lot. This helps me shape the
                coaching around the time you actually have.
              </span>
              <input
                className="min-h-12 rounded-md border border-border bg-background px-4 py-3 text-base font-normal text-foreground outline-none transition placeholder:text-muted focus:border-brand-yellow"
                name="weekly_time"
                required
                placeholder="Example: 3 hours, 5-7 hours, weekends only"
              />
            </label>

            <SelectInput
              label="Coaching is a paid service. Does that work for you?"
              name="paid_service_fit"
              options={paidServiceOptions}
            />

            <button
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-brand-yellow bg-brand-yellow px-5 py-3 text-sm font-semibold text-background transition hover:bg-[#ffd95f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-yellow"
              type="submit"
            >
              Let&apos;s Build Games
            </button>
          </form>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
