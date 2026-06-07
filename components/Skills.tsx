import { skills } from "@/data/portfolio";
import { TerminalCard } from "./TerminalCard";

export function Skills() {
  return (
    <TerminalCard
      id="skills"
      eyebrow="03_KNOWN_ABILITIES"
      title="Skills"
      label="> indexing stack"
      className="lg:col-span-7"
    >
      <div className="grid min-w-0 gap-3 sm:grid-cols-2">
        {skills.map((group) => (
          <article
            key={group.title}
            className="min-w-0 rounded border border-terminal-line/35 bg-terminal-bg/45 p-3"
          >
            <h3 className="text-sm font-semibold text-terminal-glow">
              {group.title}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="max-w-full break-words rounded border border-terminal-line/35 px-2 py-1 text-[0.7rem] leading-5 text-terminal-dim"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </TerminalCard>
  );
}
