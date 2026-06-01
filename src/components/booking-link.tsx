import type { ReactNode } from "react";

type BookingLinkProps = {
  children: ReactNode;
  className?: string;
};

export function getBookingUrl() {
  return process.env.NEXT_PUBLIC_BOOKING_URL ?? "";
}

export function BookingLink({ children, className = "" }: BookingLinkProps) {
  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center rounded-md bg-brand-blue px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#183b70] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-yellow ${className}`}
      href={getBookingUrl()}
    >
      {children}
    </a>
  );
}
