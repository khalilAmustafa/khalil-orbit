"use client";

import { ArrowDownRight, Github, Linkedin, Mail } from "lucide-react";
import {
  certifications,
  contact,
  education,
  experience,
  links,
  profile,
  projects,
  skills
} from "@/data/portfolio";

export type TabId =
  | "home"
  | "about"
  | "skills"
  | "projects"
  | "experience"
  | "education"
  | "contact";

type HomeTabProps = {
  setActiveTab: (tab: TabId) => void;
};

export function HomeTab({ setActiveTab }: HomeTabProps) {
  return (
    <div className="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-end">
      <div className="min-w-0">
        <h1 className="max-w-4xl break-words text-3xl font-semibold leading-tight text-terminal-text sm:text-4xl lg:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-4 max-w-4xl break-words text-2xl font-semibold leading-tight text-terminal-glow sm:text-3xl lg:text-4xl">
          {profile.hero.subheadline}
        </p>
        <p className="mt-5 max-w-3xl text-sm leading-7 text-terminal-dim sm:text-base">
          {profile.hero.intro}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            className="terminal-button"
            type="button"
            onClick={() => setActiveTab("projects")}
          >
            <ArrowDownRight className="h-4 w-4" />
            View Projects
          </button>
          <button
            className="terminal-button"
            type="button"
            onClick={() => setActiveTab("contact")}
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </button>
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
      <div className="rounded border border-emerald-500/35 bg-black/90 p-4 text-xs leading-6 text-terminal-dim">
        <p className="text-terminal-glow">&gt; loading identity...</p>
        <p>name: Khalil Asaad Mustafa</p>
        <p>track: backend / mobile / cloud</p>
        <p>cert: AWS Cloud Practitioner</p>
        <p className="mt-2 text-terminal-glow">&gt; status: ready</p>
      </div>
    </div>
  );
}

export function AboutTab() {
  return (
    <article className="max-w-3xl rounded border border-emerald-500/35 bg-black/88 p-4">
      <h2 className="text-xl font-semibold text-terminal-text">Profile</h2>
      <p className="mt-4 text-sm leading-7 text-terminal-dim">
        {profile.about}
      </p>
    </article>
  );
}

export function SkillsTab() {
  return (
    <div className="grid min-w-0 gap-3 sm:grid-cols-2 xl:grid-cols-3">
      {skills.map((group) => (
        <article
          key={group.title}
          className="min-w-0 rounded border border-emerald-500/35 bg-black/88 p-3"
        >
          <h2 className="text-sm font-semibold text-terminal-glow">
            {group.title}
          </h2>
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
  );
}

export function ProjectsTab() {
  return (
    <div className="grid min-w-0 gap-4 xl:grid-cols-2">
      {projects.map((project) => (
        <article
          key={project.title}
          className="flex min-w-0 flex-col rounded border border-emerald-500/35 bg-black/88 p-4"
        >
          <p className="text-xs uppercase tracking-[0.16em] text-terminal-glow">
            {project.category}
          </p>
          <h2 className="mt-2 text-lg font-semibold text-terminal-text">
            {project.title}
          </h2>
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
                className="max-w-full break-words rounded border border-terminal-line/35 px-2 py-1 text-[0.7rem] leading-5 text-terminal-dim"
              >
                {item}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}

export function ExperienceTab() {
  return (
    <article className="max-w-4xl rounded border border-emerald-500/35 bg-black/88 p-4">
      <p className="text-xs uppercase tracking-[0.16em] text-terminal-glow">
        {experience.organization}
      </p>
      <h2 className="mt-2 text-lg font-semibold text-terminal-text">
        {experience.role}
      </h2>
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
  );
}

export function EducationTab() {
  return (
    <div className="grid min-w-0 gap-4 lg:grid-cols-2">
      <section className="space-y-3">
        {education.map((item) => (
          <article
            key={item.school}
            className="rounded border border-emerald-500/35 bg-black/88 p-4"
          >
            <h2 className="text-base font-semibold text-terminal-text">
              {item.school}
            </h2>
            <p className="mt-1 text-sm text-terminal-glow">{item.credential}</p>
            <p className="mt-2 text-sm leading-6 text-terminal-dim">
              {item.location} | {item.period}
            </p>
            {item.details ? (
              <p className="mt-1 text-sm leading-6 text-terminal-dim">
                {item.details}
              </p>
            ) : null}
          </article>
        ))}
      </section>
      <section className="space-y-3">
        {certifications.map((item) => (
          <article
            key={item.name}
            className="rounded border border-emerald-500/35 bg-black/88 p-4"
          >
            <h2 className="text-base font-semibold text-terminal-text">
              {item.name}
            </h2>
            <p className="mt-1 text-sm text-terminal-glow">{item.issuer}</p>
            <p className="mt-2 text-sm leading-7 text-terminal-dim">
              {item.details}
            </p>
          </article>
        ))}
      </section>
    </div>
  );
}

export function ContactTab() {
  const contactLinks = links.filter((link) =>
    ["Email", "GitHub", "LinkedIn"].includes(link.label)
  );

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_1.15fr] lg:items-start">
      <article className="rounded border border-emerald-500/35 bg-black/88 p-4">
        <h2 className="text-xl font-semibold text-terminal-text">
          {contact.title}
        </h2>
        <p className="mt-4 text-sm leading-7 text-terminal-dim">
          {contact.text}
        </p>
      </article>
      <div className="grid gap-3">
        {contactLinks.map((link) => {
          const Icon = link.label === "GitHub" ? Github : link.label === "LinkedIn" ? Linkedin : Mail;

          return (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("https://") ? "_blank" : undefined}
              rel={
                link.href.startsWith("https://")
                  ? "noreferrer noopener"
                  : undefined
              }
              className="flex min-w-0 items-center gap-3 rounded border border-emerald-500/35 bg-black/88 p-4 transition hover:border-terminal-glow/75 hover:text-terminal-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terminal-glow"
              aria-label={`${link.label}: ${link.display}`}
            >
              <Icon className="h-5 w-5 shrink-0 text-terminal-glow" />
              <div className="min-w-0">
                <p className="text-sm font-semibold text-terminal-text">
                  {link.label}
                </p>
                <p className="mt-1 break-all text-xs leading-5 text-terminal-dim">
                  {link.display}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
