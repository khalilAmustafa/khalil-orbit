import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/portfolio";
import { TerminalCard } from "./TerminalCard";

export function Projects() {
  return (
    <TerminalCard
      id="projects"
      eyebrow="05_PROJECTS"
      title="Projects"
      label="> loading projects..."
      className="lg:col-span-12"
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col rounded border border-terminal-line/40 bg-terminal-bg/50 p-4 transition hover:border-terminal-glow/70 hover:bg-terminal-glow/[0.03]"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-terminal-text">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-terminal-glow">
                  {project.category}
                </p>
              </div>
              <span className="rounded border border-terminal-line/40 px-2 py-1 text-[0.65rem] uppercase text-terminal-muted">
                project
              </span>
            </div>
            <p className="mt-4 text-sm leading-7 text-terminal-dim">
              {project.description}
            </p>
            <div className="mt-3 space-y-2">
              {project.details.map((detail) => (
                <p key={detail} className="text-sm leading-7 text-terminal-dim">
                  {detail}
                </p>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded border border-terminal-line/35 px-2 py-1 text-[0.72rem] text-terminal-dim"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              {project.links.map((link) =>
                link.todo ? (
                  <span
                    key={link.label}
                    className="terminal-button-disabled"
                    aria-label={`${link.label}, placeholder link to update later`}
                  >
                    {link.label.toLowerCase().includes("github") ? (
                      <Github className="h-4 w-4" />
                    ) : (
                      <ExternalLink className="h-4 w-4" />
                    )}
                    {link.label}
                  </span>
                ) : (
                  <a
                    key={link.label}
                    className="terminal-button"
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <ExternalLink className="h-4 w-4" />
                    {link.label}
                  </a>
                )
              )}
            </div>
          </article>
        ))}
      </div>
      <p className="mt-5 rounded border border-terminal-line/35 bg-terminal-bg/45 p-3 text-sm text-terminal-dim">
        Additional projects available on GitHub:{" "}
        <a
          href="https://github.com/khalilAmustafa"
          target="_blank"
          rel="noreferrer noopener"
          className="text-terminal-glow underline decoration-terminal-line underline-offset-4 hover:text-terminal-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terminal-glow"
        >
          github.com/khalilAmustafa
        </a>
      </p>
    </TerminalCard>
  );
}
