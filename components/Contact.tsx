import { Github, Linkedin, Mail } from "lucide-react";
import type { ElementType } from "react";
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

export function Contact() {
  return (
    <TerminalCard
      id="contact"
      eyebrow="07_CONTACT_PORTAL"
      title={contactSection.title}
      label="> channel open"
      className="lg:col-span-12"
    >
      <div className="grid gap-5 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <p className="max-w-2xl text-sm leading-7 text-terminal-dim">
          {contactSection.text}
        </p>
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
