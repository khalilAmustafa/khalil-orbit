import { experience } from "@/data/portfolio";
import { TerminalCard } from "./TerminalCard";

export function Experience() {
  return (
    <TerminalCard
      id="experience"
      eyebrow="02_EXPERIENCE"
      title="Experience"
      label="> reading timeline"
      className="lg:col-span-6"
    >
      <article className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.16em] text-terminal-glow">
          {experience.organization}
        </p>
        <h3 className="mt-1 text-lg font-semibold text-terminal-text">
          {experience.role}
        </h3>
        <p className="mt-1 text-sm text-terminal-dim">
          {experience.location} | {experience.period}
        </p>
        <ul className="mt-4 space-y-3 text-sm leading-7 text-terminal-dim">
          {experience.bullets.map((bullet) => (
            <li key={bullet} className="terminal-list-item">
              {bullet}
            </li>
          ))}
        </ul>
      </article>
    </TerminalCard>
  );
}
