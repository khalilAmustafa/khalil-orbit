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
    hoverLabel?: string;
  }[];
};

export type Credential = {
  title: string;
  issuer: string;
  date: string;
  type: "Certification" | "Certificate" | "Competition" | "Hackathon";
  image: string;
  description?: string;
  featured?: boolean;
};

export const profile = {
  name: "Khalil Mustafa",
  title:
    "Backend & Cloud-Focused Developer | Full-Stack Systems | AWS Certified Cloud Practitioner",
  location: "Amman, Jordan ",
  email: "khalil.asad.2005@gmail.com",
  systemInfo: [
    ["user", "khalil"],
    ["role", "backend & cloud-focused developer"],
    ["status", "building"],
    ["location", "Amman / Valencia"],
    ["focus", "backend, cloud, full-stack, AI features"]
  ],
  hero: {
    headline: "Backend & Cloud-Focused Developer",
    subheadline:
      "Building APIs, deployment workflows, full-stack systems, and AI-powered product features.",
    intro:
      "I build practical software systems with a focus on backend architecture, cloud-ready deployment, authentication, database-backed workflows, and usable full-stack products."
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
  { label: "01_Home", href: "#home" },
  { label: "02_Experience", href: "#experience" },
  { label: "03_Education", href: "#education" },
  { label: "04_Skills", href: "#skills" },
  { label: "05_Projects", href: "#projects" },
  { label: "06_Certifications", href: "#certifications" },
  { label: "07_Contact", href: "#contact" },
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
    title: "Cloud",
    skills: [
      "AWS Cloud fundamentals",
      "Deployment planning",
      "Environment configuration"
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
      {
        label: "> live demo",
        href: "#projects",
        todo: true,
        hoverLabel: "soon"
      }
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
      {
        label: "> showcase",
        href: "https://www.linkedin.com/posts/khalil-mustafa-7722382b0_%D8%A7%D8%AE%D9%8A%D9%8A%D8%B1%D8%A7-%D9%86%D8%B4%D8%A7%D8%B1%D9%83%D9%83%D9%85-%D8%A7%D9%86%D8%A7-%D9%88%D8%B2%D9%85%D9%8A%D9%84%D9%8A-raed-khalil-%D9%85%D8%B4%D8%B1%D9%88%D8%B9-activity-7455331015943823362--aHw?utm_source=share&utm_medium=member_desktop&rcm=ACoAAErJBUYBptdJ2zsfH80p8W51YH3sf7Rjfag"
      }
    ]
  },
  {
    title: "VisionPulse AI",
    category: "AI-Powered Financial Market Intelligence",
    description:
      "Built an educational decision-support prototype that maps financial news, macroeconomic events, and market data into structured AI-generated asset reaction predictions.",
    details: [
      "Developed an event-to-asset prediction flow using market events, rule-based impact mapping, and Gemini-generated reasoning.",
      "Integrated support for asset watchlists, macro/event calendars, prediction cards, and post-event review logic.",
      "Built backend fallback behavior so the app can still run with seeded/mock data when external API keys are unavailable."
    ],
    tech: [
      "Node.js",
      "Express.js",
      "JavaScript",
      "Google Gemini",
      "Market APIs",
      "JSON storage",
      "Rule-based fallback logic"
    ],
    links: [
      {
        label: "> github",
        href: "https://github.com/RKA14406/Vision_Pulse"
      }
    ]
  },
  {
    title: "Abyss of the Loss",
    category: "2D Psychological Horror Game",
    description:
      "Built a 2D psychological horror and mystery game in Godot, focused on exploration, story progression, interactive environments, and atmospheric dark-forest visuals.",
    details: [
      "Implemented player movement, idle/walk animations, companion entities, and scene-based interaction logic.",
      "Built multiple environments including forest and house scenes, with interactive doors, openable objects, and area detection.",
      "Added lighting state changes, HUD/UI layer elements, and Godot scene/script structure using GDScript."
    ],
    tech: [
      "Godot",
      "GDScript",
      "2D Game Development",
      "Sprite Animation",
      "Scene Management",
      "Interactive Objects",
      "Lighting States"
    ],
    links: [
      {
        label: "> github",
        href: "https://github.com/khalilAmustafa/Abyss-of-the-Loss"
      }
    ]
  }
];

export const experience = {
  role: "IT / AI Team Member @ MENA ORG",
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
    details: "GPA: 87/100 | Credits Completed: 89/132",
    image: "/ASU.png"
  },
  {
    school: "Universitat Politècnica de València",
    credential: "Erasmus Exchange Student, Informatics Engineering",
    location: "Valencia, Spain",
    period: "2025 to 2026",
    details: "",
    image: "/UPV.png"
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

export const portfolioCredentials: Credential[] = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "May 2026",
    type: "Certification",
    image: "/certificates/AWS Certified Cloud Practitioner certificate.png",
    featured: true
  },
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services / Coursera",
    date: "May 2026",
    type: "Certificate",
    image: "/certificates/AWS Cloud Practitioner Essentials.png"
  },
  {
    title: "Amman CPC 2025",
    issuer: "ICPC / JCPC",
    date: "July 2025",
    type: "Competition",
    description:
      "Contestant in the 2025 Amman Collegiate Programming Contest.",
    image: "/certificates/ammancpc.jpg",
    featured: true
  },
  {
    title: "IEEEXtreme 19.0",
    issuer: "IEEE",
    date: "October 2025",
    type: "Competition",
    description: "Participated in IEEEXtreme 19.0 Programming Competition.",
    image: "/certificates/IEEEXTREME.png"
  },
  {
    title: "AI Week Hackathon 2025",
    issuer: "IEEE / University of Jordan Computational Intelligence Society",
    date: "September 2025",
    type: "Hackathon",
    description: "Participated in the AI Week Hackathon.",
    image: "/certificates/AI-Week.jpg"
  },
  {
    title: "Hack Ramadan Jordan 2026",
    issuer: "Smart Summit for Training and Data Analysis / Yarmouk University",
    date: "2026",
    type: "Hackathon",
    description: "Participated in Hack Ramadan Jordan 2026.",
    image: "/certificates/hack-ramadan-jordan-2026.jpg"
  },
  {
    title: "UNI Agents Hackathon 2025",
    issuer: "IEEE TTU Student Branch / Qafza Tech",
    date: "2025",
    type: "Hackathon",
    description:
      "Achievement certificate for participation in UNI Agents Hackathon 2025.",
    image: "/certificates/UNI-agents-hackathon.jpg"
  },
  {
    title: "Python for Data Science, AI & Development",
    issuer: "IBM / Coursera",
    date: "May 2024",
    type: "Certificate",
    image: "/certificates/Python for Data Science, AI & Development.png"
  },
  {
    title: "Python Project for Data Science",
    issuer: "IBM / Coursera",
    date: "2024",
    type: "Certificate",
    image: "/certificates/Python Project for Data Science.png"
  },
  {
    title: "Data Analysis with Python",
    issuer: "IBM / Coursera",
    date: "June 2026",
    type: "Certificate",
    image: "/certificates/Data Analysis with Python.png"
  },
  {
    title: "Data Science Methodology",
    issuer: "IBM / Coursera",
    date: "June 2026",
    type: "Certificate",
    image: "/certificates/Data Science Methodology.png"
  },
  {
    title: "Data Visualization with Python",
    issuer: "IBM / Coursera",
    date: "June 2026",
    type: "Certificate",
    image: "/certificates/Data Visualization with Python.png"
  },
  {
    title: "Databases and SQL for Data Science with Python",
    issuer: "IBM / Coursera",
    date: "June 2026",
    type: "Certificate",
    image: "/certificates/Databases and SQL for Data Science with Python.png"
  },
  {
    title: "What is Data Science?",
    issuer: "IBM / Coursera",
    date: "May 2024",
    type: "Certificate",
    image: "/certificates/What is Data Science.png"
  },
  {
    title: "Foundations: Data, Data, Everywhere",
    issuer: "Google / Coursera",
    date: "April 2024",
    type: "Certificate",
    image: "/certificates/Foundations Data, Data, Everywhere.png"
  },
  {
    title: "Ask Questions to Make Data-Driven Decisions",
    issuer: "Google / Coursera",
    date: "April 2024",
    type: "Certificate",
    image: "/certificates/Ask Questions to Make Data-Driven Decisions.png"
  },
  {
    title: "Prepare Data for Exploration",
    issuer: "Google / Coursera",
    date: "April 2024",
    type: "Certificate",
    image: "/certificates/Prepare Data for Exploration.png"
  },
  {
    title: "Introduction to Front-End Development",
    issuer: "Meta / Coursera",
    date: "March 2024",
    type: "Certificate",
    image: "/certificates/Introduction to Front-End Development.png"
  },

];

export const contactSection = {
  title: "Contact Portal",
  text: "Open to software engineering internships, backend roles, mobile development opportunities, and AI/product-focused technical projects."
};
