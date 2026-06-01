import Image from "next/image";
import { BookingLink } from "@/components/booking-link";

const navItems = [
  { href: "#help", label: "Help" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#about", label: "About" },
  { href: "#book", label: "Book" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-8">
        <a className="flex items-center gap-3" href="#top" aria-label="Game Dev Glory home">
          <Image
            src="/logo.jpg"
            alt="Game Dev Glory logo"
            width={44}
            height={44}
            className="pixel-corners h-11 w-11 object-cover"
            priority
          />
          <span className="text-base font-semibold text-foreground">Game Dev Glory</span>
        </a>

        <nav
          className="hidden items-center gap-8 text-sm font-medium text-muted md:flex"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              className="relative transition hover:text-foreground after:absolute after:-bottom-2 after:left-0 after:h-1 after:w-0 after:bg-brand-yellow after:transition-all hover:after:w-full"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden sm:block">
          <BookingLink>Book a $150 consult</BookingLink>
        </div>
      </div>
    </header>
  );
}
