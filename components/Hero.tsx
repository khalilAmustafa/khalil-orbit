import { ArrowDownRight, Github, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";
import { TerminalCard } from "./TerminalCard";

export function Hero() {
  return (
    <TerminalCard
      id="home"
      eyebrow="01_HOME"
      title={profile.name}
      label="> initializing portfolio..."
      className="lg:col-span-12"
    >
      <div className="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-end">
        <div className="min-w-0">
          <p className="max-w-4xl break-words text-3xl font-semibold leading-tight text-terminal-glow sm:text-4xl lg:text-5xl xl:text-6xl">
            {profile.hero.subheadline}
          </p>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-terminal-dim sm:text-base lg:text-[0.95rem]">
            {profile.hero.intro}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="terminal-button" href="#projects">
              <ArrowDownRight className="h-4 w-4" />
              View Projects
            </a>
            <a className="terminal-button" href="#contact">
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
            <a
              className="terminal-button"
              href="https://github.com/khalilAmustafa"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>
        <div className="rounded border border-terminal-line/50 bg-terminal-bg/60 p-4 text-xs leading-6 text-terminal-dim">
          <p className="text-terminal-glow">&gt; loading identity...</p>
          <p>name: Khalil Asaad Mustafa</p>
          <p>track: backend / mobile / cloud</p>
          <p>cert: AWS Cloud Practitioner</p>
          <p className="mt-2 text-terminal-glow">&gt; status: ready</p>
        </div>
      </div>
    </TerminalCard>
  );
}
