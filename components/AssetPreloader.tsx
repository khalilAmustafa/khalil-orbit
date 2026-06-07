"use client";

import { useEffect, useMemo, useState } from "react";

type AssetPreloaderProps = {
  onComplete: () => void;
};

const MINIMUM_LOADING_MS = 700;
const MAX_LOADING_MS = 5000;
const BOOT_COMPLETE_MS = 250;
const SESSION_KEY = "khalil-portfolio-assets-ready";

function makeFrames(path: string, count: number) {
  return Array.from({ length: count }, (_, index) =>
    `${path}/${String(index + 1).padStart(2, "0")}.png`,
  );
}

const criticalAssets = [
  "/logo.png",
  "/ASU.png",
  "/UPV.png",
  "/backgrounds/terminal-landscape.png",
  "/backgrounds/bg2.png",
  "/backgrounds/aboutbg.png",
  "/backgrounds/edubg.png",
  ...makeFrames("/animations/Run", 25),
  ...makeFrames("/animations/Idle", 25),
  ...makeFrames("/animations/study_idle", 25),
  ...makeFrames("/animations/running%20with%20goal%20visible", 25),
];

function preloadImage(src: string) {
  return new Promise<void>((resolve) => {
    const image = new window.Image();

    image.onload = () => resolve();
    image.onerror = () => {
      console.warn(`Failed to preload asset: ${src}`);
      resolve();
    };

    image.src = src;
  });
}

export function AssetPreloader({ onComplete }: AssetPreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [bootComplete, setBootComplete] = useState(false);
  const progressWidth = useMemo(() => `${progress}%`, [progress]);

  useEffect(() => {
    if (window.sessionStorage.getItem(SESSION_KEY) === "true") {
      onComplete();
      return;
    }

    let cancelled = false;
    let loadedCount = 0;
    const startedAt = window.performance.now();

    const finalize = async () => {
      if (cancelled) {
        return;
      }

      const elapsed = window.performance.now() - startedAt;
      const remainingDelay = Math.max(0, MINIMUM_LOADING_MS - elapsed);

      if (remainingDelay > 0) {
        await new Promise((resolve) => window.setTimeout(resolve, remainingDelay));
      }

      if (cancelled) {
        return;
      }

      setProgress(100);
      setBootComplete(true);
      window.sessionStorage.setItem(SESSION_KEY, "true");

      window.setTimeout(() => {
        if (!cancelled) {
          onComplete();
        }
      }, BOOT_COMPLETE_MS);
    };

    const loadAssets = async () => {
      await Promise.all(
        criticalAssets.map(async (asset) => {
          await preloadImage(asset);
          loadedCount += 1;

          if (!cancelled) {
            setProgress(Math.round((loadedCount / criticalAssets.length) * 100));
          }
        }),
      );

      await finalize();
    };

    const timeoutId = window.setTimeout(() => {
      void finalize();
    }, MAX_LOADING_MS);

    void loadAssets();

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
    };
  }, [onComplete]);

  return (
    <div className="loading-screen">
      <div className="loading-panel">
        <p className="text-xs uppercase tracking-[0.22em] text-terminal-glow">
          KHALIL.DEV
        </p>
        <div className="mt-4 space-y-2 text-sm text-terminal-dim">
          <p>&gt; loading interface...</p>
          <p>&gt; caching visual assets...</p>
          <p>
            progress: <span className="text-terminal-glow">{progress}%</span>
          </p>
          {bootComplete ? (
            <p className="text-terminal-glow">&gt; boot complete</p>
          ) : null}
        </div>
        <div className="loading-bar mt-5">
          <div
            className="loading-bar-fill"
            style={{ "--progress": progressWidth } as React.CSSProperties}
          />
        </div>
      </div>
    </div>
  );
}
