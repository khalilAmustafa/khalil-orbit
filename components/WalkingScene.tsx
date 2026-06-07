"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { FrameAnimation } from "@/components/FrameAnimation";

const RUN_FRAME_COUNT = 25;
const GOAL_RUN_FRAME_COUNT = 25;
const RUN_FPS = 10;
const GOAL_RUN_FPS = 10;
const WRAP_OFFSET = 110;
const START_X = -50;
const GAP = 200;
const SPEED_PX_PER_SECOND = 100;

export function WalkingScene() {
  const sceneRef = useRef<HTMLDivElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const [guyX, setGuyX] = useState(START_X);
  const [goalX, setGoalX] = useState(START_X + GAP);

  useEffect(() => {
    const tick = (time: number) => {
      const previous = lastTimeRef.current ?? time;
      const deltaSeconds = Math.min((time - previous) / 1000, 0.05);
      const sceneWidth = sceneRef.current?.clientWidth ?? 0;

      setGuyX((currentGuyX) => {
        const nextGuyX = currentGuyX + SPEED_PX_PER_SECOND * deltaSeconds;

        if (sceneWidth > 0 && nextGuyX > sceneWidth + WRAP_OFFSET) {
          setGoalX(-WRAP_OFFSET + GAP);
          return -WRAP_OFFSET;
        }

        setGoalX(nextGuyX + GAP);
        return nextGuyX;
      });

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
    };
  }, []);

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
            - Increase --path-bottom to move the path line upward
            - Increase --guy-bottom to move only the guy upward
            - Increase --goal-bottom to move only the goal upward
            - Increase --scene-height if characters get clipped
          */
          "--scene-height": "300px",
          "--path-bottom": "65px",
          "--guy-bottom": "55px",
          "--goal-bottom": "50px",
          "--guy-size": "180px",
          "--goal-size": "210px",
          "--portal-height": "200px",
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
        <FrameAnimation
          framePath="/animations/Run"
          frameCount={RUN_FRAME_COUNT}
          fps={RUN_FPS}
          loop
          alt="Running animation"
          className="guy-frame-animation"
        />
      </div>
      <div
        className="goal-mover"
        style={{ transform: `translateX(${goalX}px)` }}
      >
        <FrameAnimation
          framePath="/animations/running with goal visible"
          frameCount={GOAL_RUN_FRAME_COUNT}
          fps={GOAL_RUN_FPS}
          loop
          alt="Goal running animation"
          className="goal-frame-animation"
        />
      </div>
    </div>
  );
}
