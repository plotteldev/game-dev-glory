import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background/80 px-5 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/logo-mark.png"
            alt="Game Dev Glory logo"
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
          />
          <span className="font-medium text-foreground">Game Dev Glory</span>
        </div>
        <div className="flex flex-col gap-2 sm:items-end">
          <a className="transition hover:text-foreground" href="mailto:info@gamedevglory.com">
            Contact: info@gamedevglory.com
          </a>
          <div className="flex flex-wrap gap-x-4 gap-y-2 sm:justify-end">
            <Link className="transition hover:text-foreground" href="/roadmap">
              Roadmap
            </Link>
            <Link className="transition hover:text-foreground" href="/coaching">
              Coaching
            </Link>
            <a className="transition hover:text-foreground" href="/terms">
              Terms
            </a>
            <a className="transition hover:text-foreground" href="/privacy">
              Privacy
            </a>
            <a className="transition hover:text-foreground" href="/billing">
              Billing
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
