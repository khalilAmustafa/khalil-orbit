import Link from "next/link";
import BackgroundScene from "@/components/BackgroundScene";

const sections = [
  {
    title: "Information collected",
    body: "This portfolio may collect contact form data such as name, email address, message content, page or source of submission, browser user-agent, and submission time. It may also collect basic privacy-safe analytics such as page visited, portfolio section viewed, referrer if available, browser user-agent, country if provided by hosting or proxy infrastructure, time of visit, and a hashed visitor identifier. Raw IP addresses are not stored."
  },
  {
    title: "How information is used",
    body: "Information is used to respond to contact messages, send contact form notifications, measure basic portfolio traffic, understand which sections are viewed, protect the site from spam or abuse, debug issues, and improve reliability. This website does not sell personal data, does not use behavioral advertising, and does not use tracking cookies."
  },
  {
    title: "Contact form",
    body: "When you submit the contact form, your name, email address, and message are used only to receive and respond to your message. Email delivery may be handled through Resend. Contact form data is not used for newsletters, marketing lists, automated sales campaigns, or resale."
  },
  {
    title: "Visitor analytics",
    body: "This site may use privacy-safe visitor tracking to understand basic portfolio usage, such as total visits, section views, contact section visits, and traffic trends. Raw IP addresses are not stored. If an IP address is used to estimate unique visitors, it is hashed on the server using a private server-side secret before storage."
  },
  {
    title: "Hosting and third-party services",
    body: "This portfolio may use Vercel for frontend hosting, Microsoft Azure for backend hosting, database, and possible asset storage, and Resend for email delivery. These providers may process technical data as necessary to operate, secure, and deliver their services."
  },
  {
    title: "Data retention",
    body: "Contact form messages may be kept as long as needed to respond, manage communication, or maintain project records. Basic analytics data may be kept for portfolio improvement and traffic analysis. Data that is no longer needed may be deleted periodically."
  },
  {
    title: "Your rights",
    body: "Depending on your location, you may request access, correction, or deletion of your contact form data. To make a request, contact the website owner using the email address listed in this policy."
  },
  {
    title: "Contact",
    body: "For privacy-related questions or data requests, contact Khalil Mustafa at khalil.asad.2005@gmail.com."
  }
];

function slugify(value: string) {
  return value.toLowerCase().replaceAll(" ", "-");
}

export default function PrivacyPage() {
  return (
    <main className="portfolio-fade-in relative min-h-screen overflow-x-hidden px-4 py-6 text-terminal-text sm:px-6 lg:px-10 lg:py-12">
      <BackgroundScene />

      <article className="relative z-10 mx-auto max-w-4xl rounded-md border border-emerald-500/35 bg-black/90 px-5 py-6 shadow-terminal backdrop-blur-sm sm:px-8 sm:py-8 lg:px-10">
        <header className="border-b border-emerald-500/25 pb-6">
          <Link
            href="/"
            className="inline-flex text-xs font-semibold uppercase tracking-[0.14em] text-terminal-dim transition hover:text-terminal-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terminal-glow"
          >
            Back to portfolio
          </Link>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-terminal-glow">
            Privacy
          </p>

          <h1 className="mt-3 text-3xl font-semibold leading-tight text-terminal-text sm:text-4xl">
            Privacy Policy
          </h1>

          <p className="mt-3 text-sm text-terminal-dim">
            Last updated: June 2026
          </p>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-terminal-dim sm:text-base">
            This page explains how this portfolio handles contact form
            submissions, privacy-safe analytics, hosting infrastructure, and
            visitor data.
          </p>
        </header>

        <nav
          aria-label="Privacy policy table of contents"
          className="border-b border-emerald-500/25 py-6"
        >
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-terminal-text">
            Table of contents
          </h2>

          <ol className="mt-4 grid gap-2 text-sm leading-6 text-terminal-dim sm:grid-cols-2">
            {sections.map((section, index) => (
              <li key={section.title}>
                <a
                  href={`#${slugify(section.title)}`}
                  className="transition hover:text-terminal-glow"
                >
                  <span className="mr-2 text-terminal-glow">
                    {index + 1}.
                  </span>
                  {section.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="text-sm leading-7 text-terminal-dim sm:text-base">
          {sections.map((section, index) => (
            <section
              key={section.title}
              id={slugify(section.title)}
              className="border-b border-emerald-500/20 py-6 last:border-b-0"
            >
              <h2 className="text-lg font-semibold leading-snug text-terminal-text">
                <span className="mr-2 text-terminal-glow">
                  {index + 1}.
                </span>
                {section.title}
              </h2>

              <p className="mt-3">
                {section.body}
              </p>
            </section>
          ))}
        </div>

        <footer className="border-t border-emerald-500/25 pt-5">
          <Link
            href="/"
            className="inline-flex text-xs font-semibold uppercase tracking-[0.14em] text-terminal-dim transition hover:text-terminal-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terminal-glow"
          >
            Back to portfolio
          </Link>
        </footer>
      </article>
    </main>
  );
}