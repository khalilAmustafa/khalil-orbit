"use client";

import { MapPin, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { navItems, profile } from "@/data/portfolio";
import type { TabId } from "./PortfolioTabs";

type SidebarProps = {
  activeTab: TabId;
  setActiveTab: (tab: TabId) => void;
  isOpen: boolean;
  onClose: () => void;
};

export function Sidebar({
  activeTab,
  setActiveTab,
  isOpen,
  onClose
}: SidebarProps) {
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 w-[min(340px,86vw)] min-w-0 transform overflow-y-auto p-3 transition-transform duration-200 ease-out lg:sticky lg:top-8 lg:z-10 lg:h-[calc(100vh-4rem)] lg:w-full lg:translate-x-0 lg:p-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="terminal-card flex min-h-full flex-col rounded-md border border-emerald-500/40 bg-black/95 p-4 shadow-terminal lg:h-full lg:bg-black/90">
        {/* Header row: profile button + close button (mobile only) */}
        <div className="flex items-start gap-2">
          <button
            type="button"
            onClick={() => {
              setActiveTab("home");
              onClose();
            }}
            className="group flex min-w-0 flex-1 items-center gap-3 rounded border border-terminal-line/50 p-3 text-left transition hover:border-terminal-glow/70 hover:bg-terminal-glow/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terminal-glow"
            aria-label="Go to home tab"
          >
            <div className="grid h-12 w-12 shrink-0 place-items-center overflow-hidden border border-terminal-glow/70 bg-terminal-glow/5 shadow-[0_0_24px_rgba(55,255,120,0.16)]">
              <Image
                src="/logo.png"
                alt="Khalil Mustafa logo"
                width={48}
                height={48}
                priority
                className="h-full w-full object-cover"
              />
            </div>
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-[0.22em] text-terminal-dim">
                khalil.dev
              </p>
              <h1 className="mt-1 break-words text-sm font-semibold leading-tight text-terminal-text">
                {profile.name}
              </h1>
            </div>
          </button>

          <button
            type="button"
            aria-label="Close navigation"
            onClick={onClose}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded border border-terminal-line/50 bg-black/80 text-terminal-text transition hover:border-terminal-glow hover:text-terminal-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terminal-glow lg:hidden"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

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
          {navItems.map((item) => {
            const tab = item.href.replace("#", "") as TabId;
            const isActive = activeTab === tab;

            return (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => {
                  setActiveTab(tab);
                  onClose();
                }}
                className={`rounded border px-3 py-2 text-left text-xs tracking-[0.12em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terminal-glow ${
                  isActive
                    ? "border-terminal-glow bg-terminal-glow/10 text-terminal-glow shadow-[0_0_20px_rgba(55,255,120,0.12)]"
                    : "border-terminal-line/40 text-terminal-dim hover:border-terminal-glow hover:bg-terminal-glow/5 hover:text-terminal-glow"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="mt-auto border-t border-terminal-line/25 pt-3">
          <Link
            href="/privacy"
            onClick={onClose}
            className="text-[0.68rem] uppercase tracking-[0.16em] text-terminal-dim/65 transition hover:text-terminal-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terminal-glow"
          >
            Privacy
          </Link>
        </div>
      </div>
    </aside>
  );
}
