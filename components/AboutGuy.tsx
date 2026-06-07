"use client";

import { useEffect, useRef, useState } from "react";

const FRAME_SIZE = 256;
const SHEET_COLUMNS = 5;

const IDLE_SEQUENCE = [0, 5, 6, 7, 12, 13, 14, 15, 16, 15, 14, 13, 12, 7, 6, 5];
const FRAME_DURATION = 130;

export function AboutGuy() {
  const animationFrameRef = useRef<number | null>(null);
  const lastFrameTimeRef = useRef<number | null>(null);
  const [sequenceStep, setSequenceStep] = useState(0);

  useEffect(() => {
    const tick = (time: number) => {
      if (lastFrameTimeRef.current === null) {
        lastFrameTimeRef.current = time;
      }

      if (time - lastFrameTimeRef.current >= FRAME_DURATION) {
        lastFrameTimeRef.current = time;
        setSequenceStep((current) => (current + 1) % IDLE_SEQUENCE.length);
      }

      animationFrameRef.current = window.requestAnimationFrame(tick);
    };

    animationFrameRef.current = window.requestAnimationFrame(tick);

    return () => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
      animationFrameRef.current = null;
      lastFrameTimeRef.current = null;
    };
  }, []);

  const frameIndex = IDLE_SEQUENCE[sequenceStep] ?? 0;
  const col = frameIndex % SHEET_COLUMNS;
  const row = Math.floor(frameIndex / SHEET_COLUMNS);

  return (
    <div className="about-guy-float hidden lg:block" aria-hidden="true">
      <div className="about-guy-frame">
        <div
          className="about-guy-sprite"
          style={{
            backgroundPosition: `calc(var(--about-guy-size) * ${-col}) calc(var(--about-guy-size) * ${-row})`,
          }}
        />
      </div>
      <div className="about-guy-shadow" />
    </div>
  );
}
