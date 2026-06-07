export type LinkItem = {
  label: string;
  href: string;
  display: string;
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export type Project = {
  title: string;
  category: string;
  description: string;
  details: string[];
  tech: string[];
  links: {
    label: string;
    href: string;
    todo?: boolean;
  }[];
};

export const profile = {
  name: "Khalil Asaad Mustafa",
  title:
    "Third-Year Computer Science Student | Backend & Mobile Developer | AWS Certified Cloud Practitioner",
  location: "Amman, Jordan / Valencia, Spain",
  email: "khalil.asad.2005@gmail.com",
  systemInfo: [
    ["user", "khalil.dev"],
    ["role", "backend & mobile developer"],
    ["status", "building"],
    ["location", "Amman / Valencia"],
    ["focus", "backend, mobile, cloud, AI features"]
  ],
  hero: {
    subheadline:
      "Backend systems. Flutter apps. Cloud-ready products. AI-powered features.",
    intro:
      "Third-year Computer Science student building practical software across backend APIs, mobile applications, cloud deployment workflows, and AI-powered product features."
  },
  about:
    "Third-year Computer Science student focused on backend development, cloud deployment, mobile applications, and AI-powered product features. Built full-stack and mobile projects with authentication, dashboards, database-backed workflows, payment-based access, and structured user journeys. AWS Certified Cloud Practitioner with hands-on experience in backend APIs, Flutter development, data fundamentals, and practical software delivery."
};

export const links: LinkItem[] = [
  {
    label: "Email",
    href: "mailto:khalil.asad.2005@gmail.com",
    display: "khalil.asad.2005@gmail.com"
  },
  {
    label: "GitHub",
    href: "https://github.com/khalilAmustafa",
    display: "github.com/khalilAmustafa"
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/khalil-mustafa-7722382b0",
    display: "linkedin.com/in/khalil-mustafa-7722382b0"
  },
  {
    label: "Portfolio",
    href: "#home",
    display: "Portfolio: placeholder"
  }
];

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" }
];

export const skills: SkillGroup[] = [
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication",
      "Role-based access control",
      "API design"
    ]
  },
  {
    title: "Databases & Infrastructure",
    skills: [
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Docker",
      "Docker Compose",
      "Git / GitHub",
      "Linux / CLI",
      "Deployment workflows"
    ]
  },
  {
    title: "Mobile Development",
    skills: [
      "Dart",
      "Flutter",
      "Mobile UI",
      "Navigation",
      "API integration",
      "Progression logic"
    ]
  },
  {
    title: "Web Development",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS"
    ]
  },
  {
    title: "Cloud",
    skills: [
      "AWS Cloud fundamentals",
      "Deployment planning",
      "Environment configuration"
    ]
  },
  {
    title: "AI & Data",
    skills: [
      "AI-powered feature development",
      "LLM APIs",
      "Data analysis",
      "SQL",
      "Python",
      "Jupyter Notebook"
    ]
  },
  {
    title: "Software Engineering",
    skills: [
      "Algorithms",
      "Debugging",
      "Documentation",
      "Testing",
      "Project structuring"
    ]
  }
];

export const projects: Project[] = [
  {
    title: "Asad Math Platform",
    category: "Full-Stack Arabic Education Platform",
    description:
      "Built a full-stack paid Arabic math education platform for Grade 12 Cambridge A-Level students in Oman, supporting student registration, email verification, secure login, payment-based enrollment, and protected course access.",
    details: [
      "Implemented course features including video lessons, quizzes, PDFs, announcements, live sessions, student progress tracking, and real-time payment status updates.",
      "Developed an admin dashboard for managing students, payment approvals, course content, groups, analytics, and access permissions."
    ],
    tech: [
      "Next.js",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "Socket.io",
      "JWT/CSRF-secured authentication"
    ],
    links: [
      { label: "GitHub TODO", href: "#projects", todo: true },
      { label: "Live Demo TODO", href: "#projects", todo: true }
    ]
  },
  {
    title: "Vision Career / Masar",
    category: "AI-Powered Career Guidance Mobile Application",
    description:
      "Developed a Flutter mobile application that helps university students choose a specialization, follow prerequisite-based learning paths, complete quiz-gated subject progress, and prepare for target career roles.",
    details: [
      "Integrated AI-powered guidance for specialization recommendations, assessments, learning-path support, and career-readiness planning.",
      "Built controlled progression logic with local validation, progress persistence, ranked learning-resource retrieval, and API-ready architecture."
    ],
    tech: [
      "Flutter",
      "Dart",
      "AI APIs",
      "Mobile UI",
      "Progression logic",
      "API-ready architecture"
    ],
    links: [
      { label: "GitHub TODO", href: "#projects", todo: true },
      { label: "Live Demo TODO", href: "#projects", todo: true }
    ]
  }
];

export const experience = {
  role: "IT / AI Team Member",
  organization: "MENA ORG",
  location: "Jordan / Remote",
  period: "May 2026 to Present",
  bullets: [
    "Contributing to backend and cloud foundations for organization web systems, including API structure, authentication flows, deployment setup, and database-backed feature requirements.",
    "Contributing to the development of AI-powered features for organization systems, including feature design, prompt workflows, backend integration planning, and technical feasibility research.",
    "Currently implementing cloud-ready deployment workflows, including Docker setup, environment configuration, hosting preparation, domain setup, and AWS infrastructure mapping."
  ]
};

export const education = [
  {
    school: "Applied Science Private University",
    credential: "BSc Computer Science",
    location: "Amman, Jordan",
    period: "Third-Year Student | Expected Graduation: 2027",
    details: "GPA: 87/100 | Credits Completed: 89/132"
  },
  {
    school: "Universitat Politècnica de València",
    credential: "Erasmus Exchange Student, Informatics Engineering",
    location: "Valencia, Spain",
    period: "2025 to 2026",
    details: ""
  }
];

export const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    details: "Expires May 2029"
  },
  {
    name: "IBM Data Science Professional Certificate",
    issuer: "Coursera / IBM Skills Network",
    details:
      "8/12 courses completed, including Python for Data Science, Data Analysis with Python, SQL for Data Science, Data Visualization with Python, and Python Project for Data Science."
  }
];

export const contact = {
  title: "Contact Portal",
  text:
    "Open to software engineering internships, backend roles, mobile development opportunities, and AI/product-focused technical projects."
};
