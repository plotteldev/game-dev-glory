import type { ReactNode } from "react";

type LandingSectionProps = {
  id?: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export function LandingSection({ id, title, children, className = "" }: LandingSectionProps) {
  return (
    <section id={id} className={`scroll-mt-10 px-5 py-16 sm:px-6 sm:py-20 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold text-brand-blue sm:text-4xl">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}
