"use client";

import { useMemo, useState } from "react";
import { BackgroundScene } from "@/components/BackgroundScene";
import {
  AboutTab,
  ContactTab,
  EducationTab,
  ExperienceTab,
  HomeTab,
  ProjectsTab,
  SkillsTab,
  type TabId
} from "@/components/PortfolioTabs";
import { Sidebar } from "@/components/Sidebar";

const panelMeta: Record<TabId, { label: string; command: string }> = {
  home: {
    label: "01_HOME",
    command: "> initializing portfolio..."
  },
  about: {
    label: "02_PROFILE",
    command: "> reading profile.txt"
  },
  skills: {
    label: "03_KNOWN_ABILITIES",
    command: "> indexing stack"
  },
  projects: {
    label: "04_PROJECTS",
    command: "> loading projects.log"
  },
  experience: {
    label: "05_EXPERIENCE",
    command: "> reading timeline"
  },
  education: {
    label: "06_EDUCATION",
    command: "> checking credentials"
  },
  contact: {
    label: "07_CONTACT_PORTAL",
    command: "> opening portal"
  }
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabId>("home");

  const activeContent = useMemo(() => {
    switch (activeTab) {
      case "about":
        return <AboutTab />;
      case "skills":
        return <SkillsTab />;
      case "projects":
        return <ProjectsTab />;
      case "experience":
        return <ExperienceTab />;
      case "education":
        return <EducationTab />;
      case "contact":
        return <ContactTab />;
      case "home":
      default:
        return <HomeTab setActiveTab={setActiveTab} />;
    }
  }, [activeTab]);

  const meta = panelMeta[activeTab];

  return (
    <main className="relative min-h-screen overflow-x-hidden text-terminal-text">
      <BackgroundScene />
      <div className="relative z-10 mx-auto grid w-full max-w-[1500px] grid-cols-1 gap-5 px-4 py-4 sm:px-6 lg:h-screen lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-8 lg:overflow-hidden lg:px-10 lg:py-8 xl:px-12">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <section className="terminal-card min-w-0 overflow-hidden rounded-md border border-terminal-line/60 bg-black/65 shadow-terminal backdrop-blur-sm lg:h-[calc(100vh-4rem)]">
          <div className="flex flex-wrap items-start justify-between gap-3 border-b border-terminal-line/35 p-4 sm:p-5">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terminal-glow">
                {meta.label}
              </p>
              <p className="mt-1 text-sm text-terminal-dim">{meta.command}</p>
            </div>
            <span className="rounded border border-terminal-line/50 px-2 py-1 text-[0.68rem] uppercase tracking-[0.12em] text-terminal-dim">
              active: {activeTab}
            </span>
          </div>
          <div className="h-full min-w-0 overflow-x-hidden overflow-y-auto p-4 sm:p-5 lg:h-[calc(100%-76px)]">
            <div key={activeTab} className="active-panel min-w-0">
              {activeContent}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
