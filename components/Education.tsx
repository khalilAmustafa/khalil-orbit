import { certifications, education } from "@/data/portfolio";
import { TerminalCard } from "./TerminalCard";

export function Education() {
  return (
    <TerminalCard
      id="education"
      eyebrow="03_EDUCATION"
      title="Education & Certifications"
      label="> credentials verified"
      className="lg:col-span-6"
    >
      <div className="space-y-5">
        <div className="space-y-4">
          {education.map((item) => (
            <article
              key={item.school}
              className="rounded border border-terminal-line/35 bg-terminal-bg/45 p-3"
            >
              <h3 className="text-base font-semibold text-terminal-text">
                {item.school}
              </h3>
              <p className="mt-1 text-sm text-terminal-glow">
                {item.credential}
              </p>
              <p className="mt-2 text-sm text-terminal-dim">
                {item.location} | {item.period}
              </p>
              {item.details ? (
                <p className="mt-1 text-sm text-terminal-dim">
                  {item.details}
                </p>
              ) : null}
            </article>
          ))}
        </div>

        <div className="space-y-3">
          {certifications.map((item) => (
            <article
              key={item.name}
              className="rounded border border-terminal-line/35 bg-terminal-bg/45 p-3"
            >
              <h3 className="text-base font-semibold text-terminal-text">
                {item.name}
              </h3>
              <p className="mt-1 text-sm text-terminal-glow">{item.issuer}</p>
              <p className="mt-2 text-sm leading-7 text-terminal-dim">
                {item.details}
              </p>
            </article>
          ))}
        </div>
      </div>
    </TerminalCard>
  );
}
