import type { ReactNode } from "react";

type TerminalCardProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  label?: string;
  className?: string;
  children: ReactNode;
};

export function TerminalCard({
  id,
  eyebrow,
  title,
  label = "> status: ready",
  className = "",
  children
}: TerminalCardProps) {
  return (
    <section
      id={id}
      className={`terminal-card min-w-0 scroll-mt-6 overflow-hidden rounded-md border border-terminal-line/60 bg-terminal-panel/80 p-4 shadow-terminal backdrop-blur-sm transition duration-200 hover:border-terminal-glow/70 hover:shadow-terminal-hover sm:p-5 lg:scroll-mt-8 ${className}`}
    >
      <div className="mb-4 flex flex-wrap items-start justify-between gap-3 border-b border-terminal-line/35 pb-3">
        <div className="min-w-0">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terminal-glow">
              {eyebrow}
            </p>
          ) : null}
          {title ? (
            <h2 className="mt-1 break-words text-xl font-semibold leading-tight text-terminal-text sm:text-2xl">
              {title}
            </h2>
          ) : null}
        </div>
        <span className="max-w-full rounded border border-terminal-line/50 px-2 py-1 text-[0.68rem] uppercase tracking-[0.12em] text-terminal-dim">
          {label}
        </span>
      </div>
      {children}
    </section>
  );
}
