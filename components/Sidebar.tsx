"use client";

import { MapPin } from "lucide-react";
import Image from "next/image";
import { navItems, profile } from "@/data/portfolio";
import type { TabId } from "./PortfolioTabs";

type SidebarProps = {
  activeTab: TabId;
  setActiveTab: (tab: TabId) => void;
};

export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  return (
    <aside className="z-10 w-full min-w-0 lg:sticky lg:top-8 lg:h-[calc(100vh-4rem)]">
      <div className="terminal-card flex h-full flex-col rounded-md border border-terminal-line/70 bg-black/70 p-4 shadow-terminal backdrop-blur-sm">
        <button
          type="button"
          onClick={() => setActiveTab("home")}
          className="group flex items-center gap-4 rounded border border-terminal-line/50 p-3 text-left transition hover:border-terminal-glow/70 hover:bg-terminal-glow/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terminal-glow"
          aria-label="Go to home tab"
        >
          <div className="grid h-14 w-14 shrink-0 place-items-center overflow-hidden border border-terminal-glow/70 bg-terminal-glow/5 shadow-[0_0_24px_rgba(55,255,120,0.16)]">
            <Image
              src="/logo.png"
              alt="Khalil Asaad Mustafa logo"
              width={56}
              height={56}
              priority
              className="h-full w-full object-cover"
            />
          </div>
          <div className="min-w-0">
            <p className="text-xs uppercase tracking-[0.22em] text-terminal-dim">
              khalil.dev
            </p>
            <h1 className="mt-1 break-words text-base font-semibold leading-tight text-terminal-text">
              {profile.name}
            </h1>
          </div>
        </button>

        <div className="mt-4 space-y-3 text-sm text-terminal-dim">
          <p className="leading-relaxed text-terminal-text">{profile.title}</p>
          <p className="flex items-start gap-2">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-terminal-glow" />
            <span>{profile.location}</span>
          </p>
        </div>

        <nav
          aria-label="Primary navigation"
          role="tablist"
          className="mt-5 grid grid-cols-2 gap-2 lg:grid-cols-1"
        >
          {navItems.map((item, index) => {
            const tab = item.href.replace("#", "") as TabId;
            const isActive = activeTab === tab;

            return (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(tab)}
                className={`rounded border px-3 py-2 text-left text-xs tracking-[0.12em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terminal-glow ${
                  isActive
                    ? "border-terminal-glow bg-terminal-glow/10 text-terminal-glow shadow-[0_0_20px_rgba(55,255,120,0.12)]"
                    : "border-terminal-line/40 text-terminal-dim hover:border-terminal-glow hover:bg-terminal-glow/5 hover:text-terminal-glow"
                }`}
              >
                {String(index + 1).padStart(2, "0")}_{item.label}
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
