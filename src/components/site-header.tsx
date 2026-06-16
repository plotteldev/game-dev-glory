import Image from "next/image";
import Link from "next/link";
import { BookingLink } from "@/components/booking-link";

type SiteHeaderProps = {
  bookHref?: string;
  ctaHref?: string;
  ctaLabel?: string;
};

function getNavItems(bookHref: string) {
  return [
    { href: "/#build", label: "Build" },
    { href: "/#fit", label: "Fit" },
    { href: "/#included", label: "Included" },
    { href: bookHref, label: "Apply" },
  ];
}

export function SiteHeader({
  bookHref = "/book",
  ctaHref = "/book",
  ctaLabel = "Apply For 1-on-1 Coaching",
}: SiteHeaderProps) {
  const navItems = getNavItems(bookHref);

  return (
    <header className="border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-8">
        <Link className="flex items-center gap-3" href="/" aria-label="Game Dev Glory home">
          <Image
            src="/logo-mark.png"
            alt="Game Dev Glory logo"
            width={44}
            height={44}
            className="h-11 w-11 object-contain"
            priority
          />
          <span className="text-base font-semibold text-foreground">Game Dev Glory</span>
        </Link>

        <nav
          className="hidden items-center gap-8 text-sm font-medium text-muted md:flex"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              className="relative transition hover:text-foreground after:absolute after:-bottom-2 after:left-0 after:h-1 after:w-0 after:bg-brand-yellow after:transition-all hover:after:w-full"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden sm:block">
          <BookingLink href={ctaHref}>{ctaLabel}</BookingLink>
        </div>
      </div>
    </header>
  );
}
