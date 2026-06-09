"use client";

import { FrameAnimation } from "@/components/FrameAnimation";

const IDLE_FRAME_COUNT = 25;
const IDLE_FPS = 6;

export function AboutGuy() {
  return (
    <div className="about-guy-float hidden sm:block" aria-hidden="true">
      <div className="about-guy-frame">
        <FrameAnimation
          framePath="/animations/Idle"
          frameCount={IDLE_FRAME_COUNT}
          fps={IDLE_FPS}
          loop
          alt="Idle animation"
          className="about-guy-animation"
        />
      </div>
      <div className="about-guy-shadow" />
    </div>
  );
}
