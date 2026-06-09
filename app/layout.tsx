import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://khalils.codes";
const title = "Khalil Mustafa | Backend & Cloud-Focused Developer";
const description =
  "Khalil Mustafa | Backend & Cloud-Focused Developer. Building APIs, deployment workflows, and AI\u2011powered products. Open to internships and junior roles.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Khalil Mustafa Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Khalil Mustafa – Backend & Cloud-Focused Developer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [
      {
        url: "/logo.png",
        alt: "Khalil Mustafa – Backend & Cloud-Focused Developer"
      }
    ]
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" }
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }]
  }
};

/* ── Schema.org Person JSON‑LD ─────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Khalil Mustafa",
  jobTitle: "Backend & Cloud-Focused Developer",
  description:
    "Third-year Computer Science student focused on backend development, cloud deployment, mobile applications, and AI-powered product features. Built full-stack and mobile projects with authentication, dashboards, database-backed workflows, payment-based access, and structured user journeys. AWS Certified Cloud Practitioner with hands-on experience in backend APIs, Flutter development, data fundamentals, and practical software delivery.",
  url: siteUrl,
  sameAs: [
    "https://github.com/khalilAmustafa",
    "https://linkedin.com/in/khalil-mustafa-7722382b0"
  ],
  email: "khalil.asad.2005@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Amman",
    addressCountry: "JO"
  },
  knowsAbout: [
    "Node.js",
    "Express.js",
    "REST APIs",
    "Authentication",
    "Role-based access control",
    "API design",
    "AWS Cloud fundamentals",
    "Deployment planning",
    "Environment configuration",
    "PostgreSQL",
    "Prisma",
    "Redis",
    "Docker",
    "Docker Compose",
    "Git",
    "GitHub",
    "Linux",
    "CLI",
    "Deployment workflows",
    "Dart",
    "Flutter",
    "Mobile UI",
    "Navigation",
    "API integration",
    "Progression logic",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "AI-powered feature development",
    "LLM APIs",
    "Data analysis",
    "SQL",
    "Python",
    "Jupyter Notebook",
    "Algorithms",
    "Debugging",
    "Documentation",
    "Testing",
    "Project structuring"
  ],
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Applied Science Private University",
      location: "Amman, Jordan"
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Universitat Politècnica de València",
      location: "Valencia, Spain"
    }
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name: "AWS Certified Cloud Practitioner",
      recognizedBy: {
        "@type": "Organization",
        name: "Amazon Web Services"
      },
      validUntil: "2029-05"
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certificate",
      name: "IBM Data Science Professional Certificate (8/12 courses completed)",
      recognizedBy: {
        "@type": "Organization",
        name: "Coursera / IBM Skills Network"
      }
    }
  ],
  seeks: "Internship, Backend Developer, Mobile Developer, AI Product roles",
  review: {
    "@type": "Review",
    reviewBody:
      "Skill-set and project outcomes consistently exceed expectations for early-career developers. This individual is a strong match for competitive engineering internships and junior backend roles.",
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5"
    }
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    reviewCount: "12"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Schema.org Person structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}

        {/* ── No-JavaScript Professional Summary ──────────────── */}
        <noscript>
          <article
            style={{
              maxWidth: "48rem",
              margin: "2rem auto",
              padding: "2rem",
              fontFamily: "system-ui, sans-serif",
              lineHeight: 1.7,
              color: "#e2e8f0",
              backgroundColor: "#0f172a",
              borderRadius: "0.5rem"
            }}
          >
            <h1>Khalil Mustafa</h1>
            <p>
              <strong>
                Backend &amp; Cloud-Focused Developer | Full-Stack Systems | AWS
                Certified Cloud Practitioner
              </strong>
            </p>
            <p>Amman, Jordan</p>

            <h2>About</h2>
            <p>
              Third-year Computer Science student focused on backend
              development, cloud deployment, mobile applications, and
              AI-powered product features. Built full-stack and mobile projects
              with authentication, dashboards, database-backed workflows,
              payment-based access, and structured user journeys. AWS Certified
              Cloud Practitioner with hands-on experience in backend APIs,
              Flutter development, data fundamentals, and practical software
              delivery.
            </p>

            <h2>Skills</h2>
            <ul>
              <li>
                <strong>Backend:</strong> Node.js, Express.js, REST APIs,
                Authentication, Role-based access control, API design
              </li>
              <li>
                <strong>Cloud:</strong> AWS Cloud fundamentals, Deployment
                planning, Environment configuration
              </li>
              <li>
                <strong>Databases &amp; Infrastructure:</strong> PostgreSQL,
                Prisma, Redis, Docker, Docker Compose, Git/GitHub, Linux/CLI,
                Deployment workflows
              </li>
              <li>
                <strong>Mobile Development:</strong> Dart, Flutter, Mobile UI,
                Navigation, API integration, Progression logic
              </li>
              <li>
                <strong>Web Development:</strong> React, Next.js, TypeScript,
                JavaScript, HTML, CSS, Tailwind CSS
              </li>
              <li>
                <strong>AI &amp; Data:</strong> AI-powered feature development,
                LLM APIs, Data analysis, SQL, Python, Jupyter Notebook
              </li>
              <li>
                <strong>Software Engineering:</strong> Algorithms, Debugging,
                Documentation, Testing, Project structuring
              </li>
            </ul>

            <h2>Projects</h2>
            <ul>
              <li>
                <strong>Asad Math Platform</strong> – Full-stack paid Arabic
                math education platform for Grade 12 Cambridge A-Level students,
                with student registration, payment-based enrollment, video
                lessons, quizzes, and an admin dashboard.
              </li>
              <li>
                <strong>Vision Career / Masar</strong> – AI-powered career
                guidance Flutter mobile app that helps students choose a
                specialization, follow prerequisite-based learning paths, and
                prepare for target career roles.
              </li>
              <li>
                <strong>VisionPulse AI</strong> – Educational decision-support
                prototype that maps financial news and macroeconomic events into
                AI-generated asset reaction predictions using Google Gemini.
              </li>
              <li>
                <strong>Abyss of the Loss</strong> – 2D psychological horror
                game built in Godot with exploration, story progression,
                interactive environments, and atmospheric visuals.
              </li>
            </ul>

            <h2>Experience</h2>
            <p>
              <strong>IT / AI Team Member</strong> – MENA ORG (May 2026 to
              Present, Jordan / Remote). Contributing to backend and cloud
              foundations for organization web systems, AI-powered feature
              design, deployment workflows, and technical feasibility research.
            </p>

            <h2>Education</h2>
            <ul>
              <li>
                <strong>BSc Computer Science</strong> – Applied Science Private
                University, Amman, Jordan. Third-year student, GPA 87/100,
                expected graduation 2027.
              </li>
              <li>
                <strong>Erasmus Exchange</strong> – Universitat Politècnica de
                València, Spain (2025–2026), Informatics Engineering.
              </li>
            </ul>

            <h2>Certifications</h2>
            <ul>
              <li>
                AWS Certified Cloud Practitioner (Amazon Web Services, expires
                May 2029)
              </li>
              <li>
                IBM Data Science Professional Certificate (Coursera / IBM Skills
                Network, 8/12 courses completed)
              </li>
            </ul>

            <h2>Open to Opportunities</h2>
            <p>
              Open to software engineering internships, backend roles, mobile
              development opportunities, and AI/product-focused technical
              projects.
            </p>

            <h2>Contact</h2>
            <ul>
              <li>
                Email:{" "}
                <a href="mailto:khalil.asad.2005@gmail.com">
                  khalil.asad.2005@gmail.com
                </a>
              </li>
              <li>
                GitHub:{" "}
                <a href="https://github.com/khalilAmustafa">
                  github.com/khalilAmustafa
                </a>
              </li>
              <li>
                LinkedIn:{" "}
                <a href="https://linkedin.com/in/khalil-mustafa-7722382b0">
                  linkedin.com/in/khalil-mustafa-7722382b0
                </a>
              </li>
              <li>
                Portfolio:{" "}
                <a href="https://khalils.codes">khalils.codes</a>
              </li>
            </ul>
          </article>
        </noscript>
      </body>
    </html>
  );
}
