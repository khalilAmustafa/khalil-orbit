"use client";

import { useMemo, useState, type CSSProperties } from "react";
import BackgroundScene from "@/components/BackgroundScene";
import {
  CertificationsTab,
  ContactTab,
  EducationTab,
  ExperienceTab,
  HomeTab,
  ProjectsTab,
  SkillsTab,
  type TabId
} from "@/components/PortfolioTabs";
import { Sidebar } from "@/components/Sidebar";
import { WalkingScene } from "@/components/WalkingScene";

const panelMeta: Record<TabId, { label: string; command: string }> = {
  home: {
    label: "01_HOME",
    command: "> initializing portfolio..."
  },
  experience: {
    label: "02_EXPERIENCE",
    command: "> reading organization.log"
  },
  education: {
    label: "03_EDUCATION",
    command: "> loading education.log"
  },
  skills: {
    label: "04_SKILLS",
    command: "> scanning stack"
  },
  projects: {
    label: "05_PROJECTS",
    command: "> loading projects.log"
  },
  certifications: {
    label: "06_CERTIFICATIONS",
    command: "> loading credentials.log"
  },
  contact: {
    label: "07_CONTACT_PORTAL",
    command: "> opening portal"
  }
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabId>("home");
  const showWalkingScene = activeTab === "home" || activeTab === "contact";
  const panelBackgroundClass =
    activeTab === "home" ? "bg-transparent" : "bg-black/[0.92]";

  const activeContent = useMemo(() => {
    switch (activeTab) {
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
      case "certifications":
        return <CertificationsTab />;
      case "home":
      default:
        return <HomeTab setActiveTab={setActiveTab} />;
    }
  }, [activeTab]);

  const meta = panelMeta[activeTab];
  const activeBadgeLabel: Record<TabId, string> = {
    home: "HOME",
    experience: "EXPERIENCE",
    education: "EDUCATION",
    skills: "SKILLS",
    projects: "PROJECTS",
    certifications: "CERTIFICATIONS",
    contact: "CONTACT"
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden text-terminal-text">
      <BackgroundScene />
      <div className="relative z-10 mx-auto grid w-full max-w-[1500px] grid-cols-1 gap-5 px-4 py-4 sm:px-6 lg:h-screen lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-8 lg:overflow-hidden lg:px-10 lg:py-8 xl:px-12">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <section
          className={`terminal-card relative min-w-0 overflow-hidden rounded-md border border-emerald-500/40 ${panelBackgroundClass} shadow-terminal lg:h-[calc(100vh-4rem)]`}
          style={
            activeTab === "home"
              ? ({
                  "--home-bg-top": "0.04",
                  "--home-bg-upper": "0.08",
                  "--home-bg-mid": "0.22",
                  "--home-bg-bottom": "0.85",
                } as CSSProperties)
              : undefined
          }
        >
          {activeTab === "home" && <div className="home-panel-bg" />}
          <div className="relative z-10 flex flex-wrap items-start justify-between gap-3 border-b border-terminal-line/35 p-4 sm:p-5">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terminal-glow">
                {meta.label}
              </p>
              <p className="mt-1 text-sm text-terminal-dim">{meta.command}</p>
            </div>
            <span className="rounded border border-terminal-line/50 px-2 py-1 text-[0.68rem] uppercase tracking-[0.12em] text-terminal-dim">
              active: {activeBadgeLabel[activeTab]}
            </span>
          </div>
          <div className="relative z-10 h-full min-w-0 overflow-x-hidden overflow-y-auto p-4 sm:p-5 lg:h-[calc(100%-76px)]">
            <div
              key={activeTab}
              className={`active-panel relative z-10 min-w-0 ${showWalkingScene ? "pb-[220px]" : ""}`}
            >
              {activeContent}
            </div>
          </div>
          {showWalkingScene ? <WalkingScene /> : null}
        </section>
      </div>
    </main>
  );
}
