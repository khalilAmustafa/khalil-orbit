"use client";

import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { Menu } from "lucide-react";
import BackgroundScene from "@/components/BackgroundScene";
import { AssetPreloader } from "@/components/AssetPreloader";
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
import { trackEvent } from "@/lib/analytics";

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

const tabViewLabels: Record<TabId, string> = {
  home: "01_Home",
  experience: "02_Experience",
  education: "03_Education",
  skills: "04_Skills",
  projects: "05_Projects",
  certifications: "06_Certifications",
  contact: "07_Contact"
};

export function PortfolioShell() {
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<TabId>("home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const hasTrackedPageView = useRef(false);
  const showWalkingScene = activeTab === "home" || activeTab === "contact";
  const showPanelBackground = activeTab === "home" || activeTab === "contact";
  const panelBackgroundClass =
    showPanelBackground ? "bg-transparent" : "bg-black/[0.92]";

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

  useEffect(() => {
    if (!isSidebarOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isSidebarOpen]);

  useEffect(() => {
    if (!assetsLoaded) {
      return;
    }

    if (!hasTrackedPageView.current) {
      hasTrackedPageView.current = true;
      trackEvent({
        event: "page_view",
        tab: activeTab,
        label: "initial_load"
      });
    }

    trackEvent({
      event: "tab_view",
      tab: activeTab,
      label: tabViewLabels[activeTab]
    });
  }, [activeTab, assetsLoaded]);

  if (!assetsLoaded) {
    return <AssetPreloader onComplete={() => setAssetsLoaded(true)} />;
  }

  return (
    <main className="portfolio-fade-in relative min-h-screen overflow-x-hidden text-terminal-text">
      <BackgroundScene />
      {!isSidebarOpen && (
        <button
          type="button"
          aria-label="Open navigation"
          aria-expanded={false}
          onClick={() => setIsSidebarOpen(true)}
          className="fixed left-3 top-3 z-[60] inline-flex h-11 w-11 items-center justify-center rounded border border-terminal-line/60 bg-black/90 text-terminal-text shadow-terminal transition hover:border-terminal-glow hover:text-terminal-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terminal-glow lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
      )}
      {isSidebarOpen && (
        <button
          type="button"
          aria-label="Close navigation"
          className="fixed inset-0 z-40 bg-black/55 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      <div className="relative mx-auto grid w-full max-w-[1500px] grid-cols-1 gap-5 px-4 pb-4 pt-16 sm:px-6 lg:h-screen lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-8 lg:overflow-hidden lg:px-10 lg:py-8 xl:px-12">
        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
        <div className="min-w-0 lg:h-[calc(100vh-4rem)]">
          <section
            className={`terminal-card relative min-w-0 overflow-hidden rounded-md border border-emerald-500/40 ${panelBackgroundClass} shadow-terminal lg:h-full`}
            style={
              showPanelBackground
                ? ({
                    "--home-bg-top": "0.04",
                    "--home-bg-upper": "0.08",
                    "--home-bg-mid": "0.22",
                    "--home-bg-bottom": "0.85",
                  } as CSSProperties)
                : undefined
            }
          >
            {showPanelBackground && <div className="home-panel-bg" />}
            <div className="relative z-10 flex flex-wrap items-start justify-between gap-3 border-b border-terminal-line/35 bg-black/[0.92] p-4 sm:p-5">
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
                className={`active-panel relative z-10 min-w-0 ${showWalkingScene ? "pb-[160px] sm:pb-[220px] lg:pb-[300px]" : ""}`}
              >
                {activeContent}
              </div>
            </div>
            {showWalkingScene ? <WalkingScene /> : null}
          </section>
        </div>
      </div>
    </main>
  );
}
