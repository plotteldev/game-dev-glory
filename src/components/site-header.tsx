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
    <header className="border-b border-border bg-white/95">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-8">
        <a className="flex items-center gap-3" href="#top" aria-label="Game Dev Glory home">
          <Image
            src="/logo.jpg"
            alt="Game Dev Glory logo"
            width={44}
            height={44}
            className="h-11 w-11 rounded-md object-cover"
            priority
          />
          <span className="text-base font-semibold text-brand-blue">Game Dev Glory</span>
        </a>

        <nav
          className="hidden items-center gap-8 text-sm font-medium text-muted md:flex"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <a key={item.href} className="transition hover:text-brand-blue" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <BookingLink className="hidden sm:inline-flex">Book a $150 consult</BookingLink>
      </div>
    </header>
  );
}
