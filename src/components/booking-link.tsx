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
      className={`pixel-corners inline-flex min-h-12 items-center justify-center bg-brand-blue px-5 py-3 text-sm font-semibold text-white shadow-[4px_4px_0_0_var(--brand-yellow)] transition hover:-translate-y-0.5 hover:bg-[#183b70] hover:shadow-[5px_5px_0_0_var(--brand-yellow)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-yellow ${className}`}
      href={getBookingUrl()}
    >
      {children}
    </a>
  );
}
