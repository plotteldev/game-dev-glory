import { NextResponse } from "next/server";

export const submissionErrorMessages = {
  configuration:
    "This form is not connected yet. Please email info@gamedevglory.com for now.",
  delivery:
    "Something went wrong while sending this. Please try again or email info@gamedevglory.com.",
  validation: "Please check the form fields and try again.",
} as const;

export type SubmissionError = keyof typeof submissionErrorMessages;

export function getSubmissionErrorMessage(error?: string | string[]) {
  const errorKey = Array.isArray(error) ? error[0] : error;

  if (!errorKey || !(errorKey in submissionErrorMessages)) {
    return null;
  }

  return submissionErrorMessages[errorKey as SubmissionError];
}

export function getFormString(formData: FormData, name: string) {
  const value = formData.get(name);

  if (typeof value !== "string") {
    return "";
  }

  return value.trim();
}

export function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getFirstHeaderValue(value: string | null) {
  return value?.split(",")[0]?.trim() || "";
}

export function getPublicOrigin(request: Request) {
  const forwardedHost = getFirstHeaderValue(request.headers.get("x-forwarded-host"));
  const forwardedProto = getFirstHeaderValue(request.headers.get("x-forwarded-proto"));
  const requestUrl = new URL(request.url);

  if (forwardedHost) {
    return `${forwardedProto || requestUrl.protocol.replace(":", "")}://${forwardedHost}`;
  }

  return requestUrl.origin;
}

export function getPublicUrl(request: Request, pathname: string) {
  return new URL(pathname, getPublicOrigin(request));
}

export function redirectTo(request: Request, pathname: string) {
  return NextResponse.redirect(getPublicUrl(request, pathname), { status: 303 });
}

export function redirectWithError(
  request: Request,
  pathname: string,
  error: SubmissionError,
) {
  const url = getPublicUrl(request, pathname);
  url.searchParams.set("error", error);

  return NextResponse.redirect(url, { status: 303 });
}
