"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import {
  type FreeQuestionFormState,
  submitFreeQuestion,
} from "@/app/free-question/actions";

const initialFreeQuestionFormState: FreeQuestionFormState = {
  status: "idle",
  message: "",
  fields: {
    email: "",
    question: "",
  },
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="inline-flex min-h-12 w-full items-center justify-center rounded-md border border-brand-yellow bg-brand-yellow px-5 py-3 text-sm font-semibold text-background transition hover:bg-[#ffd95f] disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-yellow"
      disabled={pending}
      type="submit"
    >
      {pending ? "Sending..." : "Send question"}
    </button>
  );
}

export function FreeQuestionForm() {
  const [state, formAction] = useActionState(
    submitFreeQuestion,
    initialFreeQuestionFormState,
  );

  return (
    <form action={formAction} className="grid gap-5">
      <input
        aria-hidden="true"
        autoComplete="off"
        className="hidden"
        name="website"
        tabIndex={-1}
        type="text"
      />

      <div className="grid gap-2">
        <label className="text-sm font-semibold text-foreground" htmlFor="email">
          Email
        </label>
        <input
          className="min-h-12 rounded-md border border-border bg-background px-4 py-3 text-base text-foreground outline-none transition placeholder:text-muted/70 focus:border-brand-yellow"
          defaultValue={state.fields.email}
          id="email"
          name="email"
          placeholder="you@example.com"
          required
          type="email"
        />
        {state.fieldErrors?.email ? (
          <p className="text-sm leading-6 text-brand-yellow">
            {state.fieldErrors.email}
          </p>
        ) : null}
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-semibold text-foreground" htmlFor="question">
          Unity problem
        </label>
        <textarea
          className="min-h-52 rounded-md border border-border bg-background px-4 py-3 text-base leading-7 text-foreground outline-none transition placeholder:text-muted/70 focus:border-brand-yellow"
          defaultValue={state.fields.question}
          id="question"
          name="question"
          placeholder="What are you stuck on? Include your Unity version, what you tried, and any useful screenshot, clip, repo, or file links."
          required
        />
        {state.fieldErrors?.question ? (
          <p className="text-sm leading-6 text-brand-yellow">
            {state.fieldErrors.question}
          </p>
        ) : null}
      </div>

      <SubmitButton />

      {state.message ? (
        <p
          aria-live="polite"
          className={`text-sm font-semibold leading-6 ${
            state.status === "success" ? "text-foreground" : "text-brand-yellow"
          }`}
        >
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
