import { Github, Linkedin, Mail, Terminal, UserRound } from "lucide-react";
import type { ElementType } from "react";
import { links, profile } from "@/data/portfolio";

const linkIcons: Record<string, ElementType> = {
  Email: Mail,
  GitHub: Github,
  LinkedIn: Linkedin,
  Portfolio: Terminal
};

export function Footer() {
  return (
    <footer className="terminal-card min-w-0 rounded-md border border-terminal-line/60 bg-terminal-panel/80 p-4 shadow-terminal backdrop-blur-sm">
      <div className="grid min-w-0 gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_180px]">
        <section
          aria-labelledby="footer-system-info"
          className="rounded border border-terminal-line/40 bg-terminal-bg/50 p-3"
        >
          <div
            id="footer-system-info"
            className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-terminal-glow"
          >
            <UserRound className="h-4 w-4" />
            system_info
          </div>
          <dl className="grid gap-2 text-xs sm:grid-cols-2">
            {profile.systemInfo.map(([key, value]) => (
              <div key={key}>
                <dt className="text-terminal-muted">{key}:</dt>
                <dd className="mt-1 text-terminal-text">{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section
          aria-label="Footer contact links"
          className="grid content-start gap-2 rounded border border-terminal-line/40 bg-terminal-bg/50 p-3"
        >
          {links.map((link) => {
            const Icon = linkIcons[link.label] ?? Terminal;

            return (
              <a
                key={link.label}
                href={link.href}
                className="flex min-w-0 items-center gap-2 rounded border border-transparent px-2 py-1.5 text-xs text-terminal-dim transition hover:border-terminal-line/50 hover:text-terminal-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terminal-glow"
                aria-label={`${link.label}: ${link.display}`}
                target={link.href.startsWith("https://") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("https://")
                    ? "noreferrer noopener"
                    : undefined
                }
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span className="min-w-0 break-all leading-5">
                  {link.display}
                </span>
              </a>
            );
          })}
        </section>

        <section className="rounded border border-terminal-line/40 bg-terminal-bg/50 p-3 text-[0.68rem] leading-relaxed text-terminal-muted">
          <pre aria-label="ASCII avatar" className="font-mono">
            {String.raw`  [ KHALIL ]
  \  O  /
   \ | /
    / \
  build.log`}
          </pre>
        </section>
      </div>
    </footer>
  );
}
