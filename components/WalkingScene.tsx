"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

const GUY_SEQUENCE = [0, 1, 2, 3, 4];
const GOAL_SEQUENCE = [0, 1, 2, 3, 4];
const SHEET_COLUMNS = 5;
const WRAP_OFFSET = 120;
const START_X = 80;
const GAP = 100;
const SPEED_PX_PER_SECOND = 72;

export function WalkingScene() {
  const sceneRef = useRef<HTMLDivElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const guyFrameTimeRef = useRef<number | null>(null);
  const goalFrameTimeRef = useRef<number | null>(null);
  const [guyX, setGuyX] = useState(START_X);
  const [goalX, setGoalX] = useState(START_X + GAP);
  const [guyFrameStep, setGuyFrameStep] = useState(0);
  const [goalFrameStep, setGoalFrameStep] = useState(0);

  useEffect(() => {
    const tick = (time: number) => {
      const previous = lastTimeRef.current ?? time;
      const deltaSeconds = Math.min((time - previous) / 1000, 0.05);
      const sceneWidth = sceneRef.current?.clientWidth ?? 0;

      if (guyFrameTimeRef.current === null) {
        guyFrameTimeRef.current = time;
      }

      if (goalFrameTimeRef.current === null) {
        goalFrameTimeRef.current = time;
      }

      setGuyX((currentGuyX) => {
        const nextGuyX = currentGuyX + SPEED_PX_PER_SECOND * deltaSeconds;

        if (sceneWidth > 0 && nextGuyX > sceneWidth + WRAP_OFFSET) {
          setGoalX(-WRAP_OFFSET + GAP);
          return -WRAP_OFFSET;
        }

        setGoalX(nextGuyX + GAP);
        return nextGuyX;
      });

      if (time - guyFrameTimeRef.current >= 100) {
        guyFrameTimeRef.current = time;
        setGuyFrameStep((current) => (current + 1) % GUY_SEQUENCE.length);
      }

      if (time - goalFrameTimeRef.current >= 110) {
        goalFrameTimeRef.current = time;
        setGoalFrameStep((current) => (current + 1) % GOAL_SEQUENCE.length);
      }

      lastTimeRef.current = time;
      animationFrameRef.current = window.requestAnimationFrame(tick);
    };

    animationFrameRef.current = window.requestAnimationFrame(tick);

    return () => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
      animationFrameRef.current = null;
      lastTimeRef.current = null;
      guyFrameTimeRef.current = null;
      goalFrameTimeRef.current = null;
    };
  }, []);

  const guyFrameIndex = GUY_SEQUENCE[guyFrameStep] ?? 0;
  const goalFrameIndex = GOAL_SEQUENCE[goalFrameStep] ?? 0;
  const guyCol = guyFrameIndex % SHEET_COLUMNS;
  const guyRow = Math.floor(guyFrameIndex / SHEET_COLUMNS);
  const goalCol = goalFrameIndex % SHEET_COLUMNS;
  const goalRow = Math.floor(goalFrameIndex / SHEET_COLUMNS);

  return (
    <div
      ref={sceneRef}
      aria-hidden="true"
      className="walking-scene"
      style={
        {
          /*
            Walking scene manual controls:
            - Increase --guy-size to make the guy bigger
            - Increase --goal-size to make goal.exe bigger
            - Increase --bg-opacity to make bg2 more visible
            - Increase --path-bottom to move the whole walking line upward
            - Increase --scene-height if characters get clipped
          */
          "--scene-height": "220px",
          "--path-bottom": "65px",
          "--guy-size": "104px",
          "--goal-size": "150px",
          "--portal-height": "74px",
          "--bg-opacity": "0.25",
          "--bg-height": "175px",
          "--bg-dark-top": "0.28",
          "--bg-dark-mid": "0.10",
          "--bg-dark-bottom": "0.02",
          "--path-opacity": "0.85",
        } as CSSProperties
      }
    >
      <div className="walking-bg" />
      <div className="path-line" />
      <div
        className="guy-mover"
        style={{ transform: `translateX(${guyX}px)` }}
      >
        <div
          className="guy-sprite"
          style={{
            backgroundPosition: `calc(var(--guy-size) * ${-guyCol}) calc(var(--guy-size) * ${-guyRow})`,
          }}
        />
      </div>
      <div
        className="goal-mover"
        style={{ transform: `translateX(${goalX}px)` }}
      >
        <div
          className="goal-sprite"
          style={{
            backgroundPosition: `calc(var(--goal-size) * ${-goalCol}) calc(var(--goal-size) * ${-goalRow})`,
          }}
        />
      </div>
    </div>
  );
}
