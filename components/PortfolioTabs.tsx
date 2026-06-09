"use client";

import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { ArrowDownRight, Github, Linkedin, Mail, SendHorizonal } from "lucide-react";
import Image from "next/image";
import { AboutGuy } from "@/components/AboutGuy";
import { FrameAnimation } from "@/components/FrameAnimation";
import { trackEvent } from "@/lib/analytics";
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
    <div className="min-w-0">
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
            onClick={() =>
              trackEvent({
                event: "external_link_click",
                tab: "home",
                label: "GitHub"
              })
            }
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export function ExperienceTab() {
  return (
    <section
      className="about-layout relative min-h-[300px] overflow-hidden lg:min-h-[560px]"
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
      <article className="about-profile-card about-text-soft-bg relative z-10 max-w-[760px] p-4 sm:p-6 lg:w-[58%]">
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
          onClick={() =>
            trackEvent({
              event: "external_link_click",
              tab: "projects",
              label: "more projects"
            })
          }
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
                      onClick={() =>
                        trackEvent({
                          event: "project_link_click",
                          tab: "projects",
                          label: project.title
                        })
                      }
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
                  loading="eager"
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
                        loading="eager"
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<"ready" | "sending" | "success" | "error">(
    "ready"
  );
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const handleFieldChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name: fieldName, value } = event.target;

    if (fieldName === "name") {
      setName(value);
    } else if (fieldName === "email") {
      setEmail(value);
    } else if (fieldName === "message") {
      setMessage(value);
    } else if (fieldName === "website") {
      setWebsite(value);
    }

    setErrors((current) => {
      if (!(fieldName in current)) {
        return current;
      }

      const next = { ...current };
      delete next[fieldName as keyof typeof next];
      return next;
    });

    if (status !== "ready") {
      setStatus("ready");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: {
      name?: string;
      email?: string;
      message?: string;
    } = {};

    if (!name.trim()) {
      nextErrors.name = "Name is required.";
    }

    if (!email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!message.trim()) {
      nextErrors.message = "Message is required.";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("error");
      return;
    }

    trackEvent({
      event: "contact_submit_started",
      tab: "contact",
      label: "contact_form"
    });

    const apiUrl = process.env.NEXT_PUBLIC_PORTFOLIO_API_URL;

    if (!apiUrl) {
      console.error(
        "Missing NEXT_PUBLIC_PORTFOLIO_API_URL. Contact form submission aborted."
      );
      setStatus("error");
      trackEvent({
        event: "contact_submit_failed",
        tab: "contact",
        label: "contact_form"
      });
      return;
    }

    setErrors({});
    setStatus("sending");

    try {
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          page: "contact",
          website
        })
      });

      if (!response.ok) {
        setStatus("error");
        trackEvent({
          event: "contact_submit_failed",
          tab: "contact",
          label: "contact_form"
        });
        return;
      }

      setName("");
      setEmail("");
      setMessage("");
      setWebsite("");
      setStatus("success");
      trackEvent({
        event: "contact_submit_success",
        tab: "contact",
        label: "contact_form"
      });
    } catch (error) {
      console.error("Contact form request failed.", error);
      setStatus("error");
      trackEvent({
        event: "contact_submit_failed",
        tab: "contact",
        label: "contact_form"
      });
    }
  };

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_1.15fr] lg:items-stretch">
      <article className="h-full rounded border border-emerald-500/35 bg-black/70 p-4 backdrop-blur-[2px]">
        <h2 className="text-xl font-semibold text-terminal-text">
          {contactSection.title}
        </h2>
        <form className="mt-3 grid gap-2 pb-1" onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            name="website"
            value={website}
            onChange={handleFieldChange}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />
          <div className="grid gap-2 sm:grid-cols-2">
            <label className="grid gap-1.5 text-xs uppercase tracking-[0.12em] text-terminal-muted">
              Name
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleFieldChange}
                required
                aria-invalid={errors.name ? "true" : "false"}
                aria-describedby={errors.name ? "contact-name-error" : undefined}
                className="rounded border border-emerald-500/35 bg-black/75 px-3 py-2 text-sm text-terminal-text outline-none transition placeholder:text-terminal-muted/70 focus:border-terminal-glow focus:shadow-[0_0_0_1px_rgba(74,222,128,0.45),0_0_16px_rgba(74,222,128,0.12)]"
                placeholder="Your name"
              />
              {errors.name ? (
                <span
                  id="contact-name-error"
                  className="text-[0.68rem] normal-case tracking-normal text-rose-300/90"
                >
                  {errors.name}
                </span>
              ) : null}
            </label>
            <label className="grid gap-1.5 text-xs uppercase tracking-[0.12em] text-terminal-muted">
              Email
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleFieldChange}
                required
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "contact-email-error" : undefined}
                className="rounded border border-emerald-500/35 bg-black/75 px-3 py-2 text-sm text-terminal-text outline-none transition placeholder:text-terminal-muted/70 focus:border-terminal-glow focus:shadow-[0_0_0_1px_rgba(74,222,128,0.45),0_0_16px_rgba(74,222,128,0.12)]"
                placeholder="your@email.com"
              />
              {errors.email ? (
                <span
                  id="contact-email-error"
                  className="text-[0.68rem] normal-case tracking-normal text-rose-300/90"
                >
                  {errors.email}
                </span>
              ) : null}
            </label>
          </div>
          <label className="grid gap-1.5 text-xs uppercase tracking-[0.12em] text-terminal-muted">
            Message
            <textarea
              name="message"
              value={message}
              onChange={handleFieldChange}
              required
              rows={5}
              spellCheck={false}
              aria-invalid={errors.message ? "true" : "false"}
              aria-describedby={errors.message ? "contact-message-error" : undefined}
              className="h-[120px] resize-none rounded border border-emerald-500/35 bg-black/75 px-3 py-2 text-sm leading-6 text-terminal-text outline-none transition placeholder:text-terminal-muted/70 focus:border-terminal-glow focus:shadow-[0_0_0_1px_rgba(74,222,128,0.45),0_0_16px_rgba(74,222,128,0.12)]"
              placeholder="Tell me a bit about the role or project."
            />
            {errors.message ? (
              <span
                id="contact-message-error"
                className="text-[0.68rem] normal-case tracking-normal text-rose-300/90"
              >
                {errors.message}
              </span>
            ) : null}
          </label>
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-2 rounded border border-emerald-500/35 bg-black/70 px-3 py-2 text-sm font-medium text-terminal-text transition hover:border-terminal-glow/75 hover:text-terminal-glow disabled:cursor-not-allowed disabled:opacity-60"
            >
              <SendHorizonal className="h-4 w-4" />
              Send message
            </button>
            <p
              className={`text-xs ${
                status === "error" ? "text-rose-300/90" : "text-terminal-dim"
              }`}
              aria-live="polite"
            >
              {status === "sending"
                ? "> sending..."
                : status === "success"
                  ? "> message sent"
                  : status === "error"
                    ? "> failed to send"
                    : "> ready"}
            </p>
          </div>
        </form>
      </article>
      <div className="h-full rounded border border-emerald-500/35 bg-black/80 p-3 backdrop-blur-[2px] sm:p-4">
        <div className="flex h-full flex-col gap-3">
          {contactLinks.map((link) => {
            const Icon =
              link.label === "GitHub" ? Github : link.label === "LinkedIn" ? Linkedin : Mail;

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
                className="flex min-h-0 flex-1 items-center gap-3 rounded border border-emerald-500/35 bg-black/78 p-4 transition hover:border-terminal-glow/75 hover:text-terminal-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terminal-glow"
                aria-label={`${link.label}: ${link.display}`}
                onClick={() =>
                  trackEvent({
                    event: "external_link_click",
                    tab: "contact",
                    label: link.label
                  })
                }
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
    </div>
  );
}
