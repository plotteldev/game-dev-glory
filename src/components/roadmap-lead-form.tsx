const ctaLabel = "LET'S START";

type RoadmapLeadFormProps = {
  action: string;
  errorMessage?: string | null;
  source: string;
};

export function RoadmapLeadForm({
  action,
  errorMessage,
  source,
}: RoadmapLeadFormProps) {
  return (
    <form
      id="roadmap-pdf"
      action={action}
      method="post"
      className="mx-auto mt-8 max-w-3xl"
    >
      <input type="hidden" name="lead_magnet" value="gamer-to-game-dev-roadmap" />
      <input type="hidden" name="source" value={source} />
      <label className="sr-only" htmlFor={`${source}-roadmap-website`}>
        Website
      </label>
      <input
        aria-hidden="true"
        autoComplete="off"
        className="hidden"
        id={`${source}-roadmap-website`}
        name="website"
        tabIndex={-1}
        type="text"
      />
      <p className="text-center text-sm font-semibold leading-6 text-foreground">
        Get Your Roadmap in Less than 30 Seconds
      </p>
      {errorMessage ? (
        <p className="mx-auto mt-3 max-w-2xl border border-brand-yellow/40 bg-brand-yellow-soft px-4 py-3 text-center text-sm leading-6 text-foreground">
          {errorMessage}
        </p>
      ) : null}
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        <label className="sr-only" htmlFor={`${source}-roadmap-name`}>
          Name
        </label>
        <input
          id={`${source}-roadmap-name`}
          name="name"
          type="text"
          autoComplete="name"
          required
          className="min-h-12 rounded-md border border-border bg-background px-4 py-3 text-base font-normal text-foreground outline-none transition placeholder:text-muted focus:border-brand-yellow"
          placeholder="Name"
        />
        <label className="sr-only" htmlFor={`${source}-roadmap-email`}>
          Email
        </label>
        <input
          id={`${source}-roadmap-email`}
          name="email"
          type="email"
          autoComplete="email"
          required
          className="min-h-12 rounded-md border border-border bg-background px-4 py-3 text-base font-normal text-foreground outline-none transition placeholder:text-muted focus:border-brand-yellow"
          placeholder="Email"
        />
      </div>
      <div className="mt-3 flex justify-center">
        <button
          type="submit"
          className="inline-flex min-h-12 w-full items-center justify-center rounded-md border border-brand-yellow bg-brand-yellow px-6 py-3 text-sm font-semibold uppercase text-background transition hover:bg-[#ffd95f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-yellow sm:w-auto"
        >
          {ctaLabel}
        </button>
      </div>
      <p className="mx-auto mt-3 max-w-2xl text-center text-xs leading-5 text-muted">
        By submitting, you agree to receive email from Game Dev Glory. You can
        unsubscribe anytime. See the{" "}
        <a className="underline hover:text-foreground" href="/privacy">
          Privacy
        </a>{" "}
        and{" "}
        <a className="underline hover:text-foreground" href="/terms">
          Terms
        </a>
        .
      </p>
    </form>
  );
}
