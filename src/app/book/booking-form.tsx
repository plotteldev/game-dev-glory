"use client";

import { useActionState } from "react";
import { submitBookingRequest, type BookingFormState } from "./actions";

const initialState: BookingFormState = {};

function FieldError({ message }: { message?: string }) {
  if (!message) {
    return null;
  }

  return <p className="mt-2 text-sm font-semibold text-brand-yellow">{message}</p>;
}

export function BookingForm() {
  const [state, formAction, pending] = useActionState(
    submitBookingRequest,
    initialState,
  );
  const values = state.values ?? {};

  return (
    <form action={formAction} className="grid gap-4">
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-sm font-semibold text-foreground" htmlFor="name">
            Name
          </label>
          <input
            className="mt-2 min-h-11 w-full rounded-md border border-border bg-background/70 px-3 py-2.5 text-base text-foreground outline-none transition placeholder:text-muted/70 focus:border-brand-yellow"
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            defaultValue={values.name}
            aria-invalid={Boolean(state.errors?.name)}
            required
          />
          <FieldError message={state.errors?.name} />
        </div>

        <div>
          <label className="text-sm font-semibold text-foreground" htmlFor="email">
            Email
          </label>
          <input
            className="mt-2 min-h-11 w-full rounded-md border border-border bg-background/70 px-3 py-2.5 text-base text-foreground outline-none transition placeholder:text-muted/70 focus:border-brand-yellow"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            defaultValue={values.email}
            aria-invalid={Boolean(state.errors?.email)}
            required
          />
          <FieldError message={state.errors?.email} />
        </div>
      </div>

      <div>
        <label className="text-sm font-semibold text-foreground" htmlFor="experience">
          Current game-dev or programming level
        </label>
        <textarea
          className="mt-2 min-h-20 w-full rounded-md border border-border bg-background/70 px-3 py-2.5 text-base leading-6 text-foreground outline-none transition placeholder:text-muted/70 focus:border-brand-yellow"
          id="experience"
          name="experience"
          placeholder="Tell me where you're at now."
          defaultValue={values.experience}
          aria-invalid={Boolean(state.errors?.experience)}
          minLength={10}
          required
        />
        <FieldError message={state.errors?.experience} />
      </div>

      <div>
        <label className="text-sm font-semibold text-foreground" htmlFor="helpWith">
          What do you want help with?
        </label>
        <textarea
          className="mt-2 min-h-20 w-full rounded-md border border-border bg-background/70 px-3 py-2.5 text-base leading-6 text-foreground outline-none transition placeholder:text-muted/70 focus:border-brand-yellow"
          id="helpWith"
          name="helpWith"
          placeholder="What are you trying to learn, build, or get unstuck on?"
          defaultValue={values.helpWith}
          aria-invalid={Boolean(state.errors?.helpWith)}
          minLength={10}
          required
        />
        <FieldError message={state.errors?.helpWith} />
      </div>

      <div>
        <label className="text-sm font-semibold text-foreground" htmlFor="message">
          Anything else? <span className="text-muted">(optional)</span>
        </label>
        <textarea
          className="mt-2 min-h-20 w-full rounded-md border border-border bg-background/70 px-3 py-2.5 text-base leading-6 text-foreground outline-none transition placeholder:text-muted/70 focus:border-brand-yellow"
          id="message"
          name="message"
          placeholder="Add anything useful before the call."
          defaultValue={values.message}
          aria-invalid={Boolean(state.errors?.message)}
        />
        <FieldError message={state.errors?.message} />
      </div>

      {state.message ? (
        <p className="rounded border border-brand-yellow/35 bg-brand-yellow-soft px-4 py-3 text-sm font-semibold text-brand-yellow" aria-live="polite">
          {state.message}
        </p>
      ) : null}

      <button
        className="inline-flex min-h-11 w-full items-center justify-center rounded-md border border-brand-yellow bg-brand-yellow px-5 py-2.5 text-center text-sm font-semibold text-background transition hover:bg-[#ffd95f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-yellow disabled:cursor-not-allowed disabled:opacity-70"
        type="submit"
        disabled={pending}
      >
        {pending ? "Sending..." : "Submit Request"}
      </button>
    </form>
  );
}
