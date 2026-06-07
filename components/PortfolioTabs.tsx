"use client";

import { useEffect, useState } from "react";
import { ArrowDownRight, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { AboutGuy } from "@/components/AboutGuy";
import { FrameAnimation } from "@/components/FrameAnimation";
import {
  portfolioCredentials,
  contactSection,
  education,
  experience,
  links,
  profile,
  projects,
  skills
} from "@/data/portfolio";

export type TabId =
  | "home"
  | "skills"
  | "projects"
  | "experience"
  | "education"
  | "contact"
  | "certifications";

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
          {profile.hero.headline}
        </p>
        <p className="mt-3 max-w-3xl break-words text-base leading-7 text-terminal-dim sm:text-lg">
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
        <p>name: Khalil Mustafa</p>
        <p>role: backend &amp; cloud-focused developer</p>
        <p>stack: Node.js / PostgreSQL / Docker</p>
        <p>cloud: AWS foundations</p>
        <p>mode: building reliable systems</p>
        <p className="mt-2 text-terminal-glow">&gt; status: ready</p>
      </div>
    </div>
  );
}

export function ExperienceTab() {
  return (
    <section
      className="about-layout relative min-h-[560px] overflow-hidden"
      style={
        {
          "--about-bg-opacity": "0.9",
          "--about-bg-size": "contain",
          "--about-bg-position-x": "right",
          "--about-bg-position-y": "bottom",
          "--about-bg-fade-left": "0.82",
          "--about-bg-fade-bottom": "0.32",
          "--about-guy-size": "460px",
          "--about-guy-right": "4%",
          "--about-guy-bottom": "56px",
          "--about-guy-opacity": "0.92",
          "--about-guy-glow": "0.28",
          "--about-float-distance": "10px",
          "--about-drift-distance": "6px",
          "--about-float-duration": "4.5s",
        } as React.CSSProperties
      }
    >
      <div className="about-bg" />
      <div className="about-bg-fade" />
      <article className="about-profile-card about-text-soft-bg relative z-10 max-w-[760px] p-6 lg:w-[58%]">
        <p className="text-xs uppercase tracking-[0.16em] text-terminal-glow">
          {experience.organization}
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-terminal-text">
          {experience.role}
        </h2>
        <p className="mt-2 text-sm text-terminal-dim">
          {experience.location} | {experience.period}
        </p>
        <ul className="mt-5 space-y-3 text-sm leading-7 text-terminal-dim">
          {experience.bullets.map((bullet) => (
            <li key={bullet} className="terminal-list-item">
              {bullet}
            </li>
          ))}
        </ul>
      </article>
      <AboutGuy />
    </section>
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
    <div className="min-w-0">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs uppercase tracking-[0.16em] text-terminal-dim">
          Selected projects
        </p>
        <a
          className="terminal-button"
          href="https://github.com/khalilAmustafa"
          target="_blank"
          rel="noreferrer noopener"
        >
          &gt; more projects
        </a>
      </div>
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
            {project.links.length > 0 ? (
              <div className="mt-5 flex flex-wrap gap-3">
                {project.links.map((link) =>
                  link.todo ? (
                    <span
                      key={`${project.title}-${link.label}`}
                      className={`terminal-button-disabled ${link.hoverLabel ? "terminal-button-tease" : ""}`}
                    >
                      {link.hoverLabel ? (
                        <>
                          <span className="tease-default">{link.label}</span>
                          <span className="tease-hover">{link.hoverLabel}</span>
                        </>
                      ) : (
                        link.label
                      )}
                    </span>
                  ) : (
                    <a
                      key={`${project.title}-${link.label}`}
                      className="terminal-button"
                      href={link.href}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {link.label}
                    </a>
                  ),
                )}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </div>
  );
}

export function CertificationsTab() {
  const [selectedCredential, setSelectedCredential] = useState<
    (typeof portfolioCredentials)[number] | null
  >(null);
  const certificationCount = portfolioCredentials.filter(
    (item) => item.type === "Certification" || item.type === "Certificate",
  ).length;
  const achievementCount = portfolioCredentials.filter(
    (item) => item.type === "Competition" || item.type === "Hackathon",
  ).length;
  const featuredCount = portfolioCredentials.filter((item) => item.featured).length;

  useEffect(() => {
    if (!selectedCredential) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedCredential(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedCredential]);

  return (
    <>
      <div className="min-w-0">
        <div className="mb-5 grid gap-3 md:grid-cols-3">
          <article className="rounded border border-emerald-500/30 bg-black/55 p-3">
            <p className="text-[0.65rem] uppercase tracking-[0.18em] text-terminal-glow">
              Certifications
            </p>
            <p className="mt-2 text-xl font-semibold text-terminal-text">
              {certificationCount}
            </p>
          </article>
          <article className="rounded border border-emerald-500/30 bg-black/55 p-3">
            <p className="text-[0.65rem] uppercase tracking-[0.18em] text-terminal-glow">
              Competitions/Hackathons
            </p>
            <p className="mt-2 text-xl font-semibold text-terminal-text">
              {achievementCount}
            </p>
          </article>
          <article className="rounded border border-emerald-500/30 bg-black/55 p-3">
            <p className="text-[0.65rem] uppercase tracking-[0.18em] text-terminal-glow">
              Featured
            </p>
            <p className="mt-2 text-xl font-semibold text-terminal-text">
              {featuredCount}
            </p>
          </article>
        </div>

        <div className="mb-2">
          <h2 className="text-xl font-semibold text-terminal-text">
            Certifications & Achievements
          </h2>
          <p className="mt-2 text-sm text-terminal-dim">
            Compact record of certifications, hackathons, and competition participation.
          </p>
        </div>

        <div className="mt-4 grid min-w-0 gap-3 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {portfolioCredentials.map((credential) => (
            <article
              key={`${credential.title}-${credential.issuer}`}
              className="group rounded border border-emerald-500/30 bg-black/65 p-3 transition hover:border-terminal-glow/75 hover:bg-black/80"
            >
              <button
                type="button"
                className="group relative block w-full overflow-hidden rounded border border-terminal-line/25 bg-black/70 text-left aspect-[16/10]"
                onClick={() => setSelectedCredential(credential)}
              >
                <Image
                  src={credential.image}
                  alt={credential.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="h-full w-full object-contain opacity-80 transition duration-300 group-hover:scale-[1.02] group-hover:opacity-100"
                  unoptimized
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/45 opacity-0 transition group-hover:opacity-100">
                  <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-terminal-glow">
                    View Certificate
                  </span>
                </div>
              </button>
              <div className="mt-4 flex items-center justify-between gap-3">
                <span className="rounded border border-terminal-line/35 px-2 py-1 text-[0.68rem] uppercase tracking-[0.12em] text-terminal-glow">
                  {credential.type}
                </span>
                <span className="text-xs text-terminal-dim">{credential.date}</span>
              </div>
              <h3 className="mt-3 text-sm font-semibold leading-5 text-terminal-text">
                {credential.title}
              </h3>
              <p className="mt-1 text-xs leading-5 text-terminal-dim">{credential.issuer}</p>
              {credential.description &&
              (credential.type === "Competition" || credential.type === "Hackathon") ? (
                <p className="mt-2 line-clamp-2 text-xs leading-5 text-terminal-dim">
                  {credential.description}
                </p>
              ) : null}
              <div className="mt-3">
                <button
                  type="button"
                  className="inline-flex items-center rounded border border-terminal-line/50 px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-terminal-text transition hover:border-terminal-glow hover:text-terminal-glow"
                  onClick={() => setSelectedCredential(credential)}
                >
                  View Certificate
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
      {selectedCredential ? (
        <div
          className="certificate-modal-backdrop"
          onClick={() => setSelectedCredential(null)}
        >
          <div
            className="certificate-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="certificate-modal-header">
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-[0.14em] text-terminal-glow">
                  {selectedCredential.type}
                </p>
                <h3 className="mt-1 text-base font-semibold text-terminal-text">
                  {selectedCredential.title}
                </h3>
                <p className="mt-1 text-sm text-terminal-dim">
                  {selectedCredential.issuer} | {selectedCredential.date}
                </p>
              </div>
              <button
                type="button"
                className="terminal-button"
                onClick={() => setSelectedCredential(null)}
              >
                Close
              </button>
            </div>
            <div className="certificate-modal-body">
              <Image
                className="certificate-modal-image"
                src={selectedCredential.image}
                alt={selectedCredential.title}
                width={1600}
                height={1200}
                unoptimized
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export function EducationTab() {
  return (
    <section
      className="education-tab-shell"
      style={
        {
          "--education-bg-opacity": "0.55",
            } as React.CSSProperties
          }
      >
        <div className="education-bg" />
        <div className="education-content">
        <div className="education-layout">
          <div className="education-list">
            {education.map((item) => (
              <article
              key={item.school}
              className="education-card"
            >
              <div className="education-card-inner">
                {item.image ? (
                  <div className="education-logo-wrap">
                    <Image
                      src={item.image}
                      alt={`${item.school} logo`}
                      width={96}
                      height={96}
                      className="education-logo-image"
                      unoptimized
                    />
                  </div>
                ) : null}
                <div className="education-card-copy min-w-0">
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
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="education-visual" aria-hidden="true">
          <FrameAnimation
            framePath="/animations/study_idle"
            frameCount={25}
            fps={8}
            loop
            alt="Study idle animation"
            className="education-study-animation"
          />
        </div>
      </div>
      </div>
    </section>
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
          {contactSection.title}
        </h2>
        <p className="mt-4 text-sm leading-7 text-terminal-dim">
          {contactSection.text}
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
