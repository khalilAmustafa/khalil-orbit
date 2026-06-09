"use client";

type TrackEventInput = {
  event: string;
  tab?: string;
  label?: string;
  path?: string;
  referrer?: string;
};

const dedupeWindowMs = 2000;
const recentEvents = new Map<string, number>();

export function trackEvent({
  event,
  tab,
  label,
  path,
  referrer
}: TrackEventInput) {
  const apiUrl = process.env.NEXT_PUBLIC_PORTFOLIO_API_URL;

  if (!apiUrl || typeof window === "undefined") {
    return;
  }

  const dedupeKey = [event, tab ?? "", label ?? ""].join("|");
  const now = Date.now();
  const lastSentAt = recentEvents.get(dedupeKey);

  if (lastSentAt && now - lastSentAt < dedupeWindowMs) {
    return;
  }

  recentEvents.set(dedupeKey, now);

  const payload = {
    event,
    path: path ?? window.location.pathname,
    tab,
    label,
    referrer: (referrer ?? document.referrer) || undefined
  };

  void fetch(`${apiUrl}/api/track`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload),
    keepalive: true
  }).catch((error) => {
    if (process.env.NODE_ENV === "development") {
      console.warn("Portfolio analytics request failed.", error);
    }
  });
}
