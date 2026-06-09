"use client";

import { Github, Linkedin, Mail, SendHorizonal } from "lucide-react";
import { useState, type ChangeEvent, type ElementType, type FormEvent } from "react";
import { contactSection, links } from "@/data/portfolio";
import { TerminalCard } from "./TerminalCard";

const contactLinks = links.filter((link) =>
  ["Email", "GitHub", "LinkedIn"].includes(link.label)
);

const icons: Record<string, ElementType> = {
  Email: Mail,
  GitHub: Github,
  LinkedIn: Linkedin
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FormFields = {
  name: string;
  email: string;
  message: string;
  website: string;
};

type FormErrors = Partial<Record<keyof FormFields, string>>;
type FormStatus = "ready" | "sending" | "success" | "error";

const initialFields: FormFields = {
  name: "",
  email: "",
  message: "",
  website: ""
};

const statusCopy: Record<FormStatus, string> = {
  ready: "> ready",
  sending: "> sending...",
  success: "> message sent",
  error: "> failed to send"
};

function validateFields(fields: FormFields) {
  const errors: FormErrors = {};

  if (!fields.name.trim()) {
    errors.name = "Name is required.";
  }

  if (!fields.email.trim()) {
    errors.email = "Email is required.";
  } else if (!emailPattern.test(fields.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!fields.message.trim()) {
    errors.message = "Message is required.";
  }

  return errors;
}

export function Contact() {
  const [fields, setFields] = useState<FormFields>(initialFields);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("ready");

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFields((current) => ({
      ...current,
      [name]: value
    }));

    setErrors((current) => {
      if (!current[name as keyof FormFields]) {
        return current;
      }

      const next = { ...current };
      delete next[name as keyof FormFields];
      return next;
    });

    if (status !== "ready") {
      setStatus("ready");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validateFields(fields);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("error");
      return;
    }

    const apiUrl = process.env.NEXT_PUBLIC_PORTFOLIO_API_URL;

    if (!apiUrl) {
      console.error(
        "Missing NEXT_PUBLIC_PORTFOLIO_API_URL. Contact form submission aborted."
      );
      setStatus("error");
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
          name: fields.name.trim(),
          email: fields.email.trim(),
          message: fields.message.trim(),
          page: "contact",
          website: fields.website
        })
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      setFields(initialFields);
      setStatus("success");
    } catch (error) {
      console.error("Contact form request failed.", error);
      setStatus("error");
    }
  };

  return (
    <TerminalCard
      id="contact"
      eyebrow="07_CONTACT_PORTAL"
      title={contactSection.title}
      label="> channel open"
      className="lg:col-span-12"
    >
      <div className="grid gap-5 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        <div className="rounded border border-terminal-line/45 bg-terminal-bg/45 p-4">
          <p className="max-w-2xl text-sm leading-7 text-terminal-dim">
            {contactSection.text}
          </p>

          <form className="mt-4 grid gap-3" onSubmit={handleSubmit} noValidate>
            <input
              type="text"
              name="website"
              value={fields.website}
              onChange={handleChange}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            <div className="grid gap-3 sm:grid-cols-2">
              <label className="grid gap-1.5 text-xs uppercase tracking-[0.12em] text-terminal-muted">
                Name
                <input
                  type="text"
                  name="name"
                  value={fields.name}
                  onChange={handleChange}
                  required
                  aria-invalid={errors.name ? "true" : "false"}
                  aria-describedby={errors.name ? "contact-name-error" : undefined}
                  className="rounded border border-terminal-line/55 bg-black/35 px-3 py-2 text-sm text-terminal-text outline-none transition placeholder:text-terminal-muted/70 focus:border-terminal-glow focus:shadow-[0_0_0_1px_rgba(74,222,128,0.45),0_0_16px_rgba(74,222,128,0.12)]"
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
                  value={fields.email}
                  onChange={handleChange}
                  required
                  aria-invalid={errors.email ? "true" : "false"}
                  aria-describedby={errors.email ? "contact-email-error" : undefined}
                  className="rounded border border-terminal-line/55 bg-black/35 px-3 py-2 text-sm text-terminal-text outline-none transition placeholder:text-terminal-muted/70 focus:border-terminal-glow focus:shadow-[0_0_0_1px_rgba(74,222,128,0.45),0_0_16px_rgba(74,222,128,0.12)]"
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
                value={fields.message}
                onChange={handleChange}
                required
                rows={5}
                aria-invalid={errors.message ? "true" : "false"}
                aria-describedby={
                  errors.message ? "contact-message-error" : undefined
                }
                className="resize-y rounded border border-terminal-line/55 bg-black/35 px-3 py-2 text-sm leading-6 text-terminal-text outline-none transition placeholder:text-terminal-muted/70 focus:border-terminal-glow focus:shadow-[0_0_0_1px_rgba(74,222,128,0.45),0_0_16px_rgba(74,222,128,0.12)]"
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

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 rounded border border-terminal-line/55 bg-terminal-bg/60 px-3 py-2 text-sm font-medium text-terminal-text transition hover:border-terminal-glow/75 hover:text-terminal-glow disabled:cursor-not-allowed disabled:opacity-60"
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
                {statusCopy[status]}
              </p>
            </div>
          </form>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {contactLinks.map((link) => {
            const Icon = icons[link.label] ?? Mail;
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
                className="rounded border border-terminal-line/45 bg-terminal-bg/45 p-4 transition hover:border-terminal-glow/75 hover:text-terminal-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terminal-glow"
                aria-label={`${link.label}: ${link.display}`}
              >
                <Icon className="h-5 w-5 text-terminal-glow" />
                <p className="mt-3 text-sm font-semibold text-terminal-text">
                  {link.label}
                </p>
                <p className="mt-1 break-words text-xs leading-5 text-terminal-dim">
                  {link.display}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </TerminalCard>
  );
}
