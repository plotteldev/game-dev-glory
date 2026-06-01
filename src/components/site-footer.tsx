import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background/80 px-5 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="Game Dev Glory logo"
            width={36}
            height={36}
            className="h-9 w-9 rounded object-cover"
          />
          <span className="font-medium text-foreground">Game Dev Glory</span>
        </div>
        <p>60 minutes. $150 USD. Online.</p>
      </div>
    </footer>
  );
}
