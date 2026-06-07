import { profile } from "@/data/portfolio";
import { TerminalCard } from "./TerminalCard";

export function About() {
  return (
    <TerminalCard
      id="about"
      eyebrow="02_PROFILE"
      title="Profile"
      label="> profile loaded"
      className="lg:col-span-5"
    >
      <p className="text-sm leading-7 text-terminal-dim">{profile.about}</p>
    </TerminalCard>
  );
}
