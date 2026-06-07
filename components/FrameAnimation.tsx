"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

type FrameAnimationProps = {
  framePath: string;
  frameCount: number;
  fps?: number;
  loop?: boolean;
  alt: string;
  className?: string;
};

function padFrameNumber(value: number) {
  return String(value).padStart(2, "0");
}

export function FrameAnimation({
  framePath,
  frameCount,
  fps = 8,
  loop = true,
  alt,
  className,
}: FrameAnimationProps) {
  const [frameIndex, setFrameIndex] = useState(0);
  const frameDuration = Math.max(1, Math.round(1000 / fps));

  useEffect(() => {
    const preloaders: HTMLImageElement[] = [];

    for (let index = 1; index <= frameCount; index += 1) {
      const image = new window.Image();
      image.src = `${framePath}/${padFrameNumber(index)}.png`;
      preloaders.push(image);
    }

    return () => {
      preloaders.length = 0;
    };
  }, [frameCount, framePath]);

  useEffect(() => {
    if (frameCount <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setFrameIndex((current) => {
        if (current >= frameCount - 1) {
          return loop ? 0 : current;
        }

        return current + 1;
      });
    }, frameDuration);

    return () => {
      window.clearInterval(timer);
    };
  }, [frameCount, frameDuration, loop]);

  const src = useMemo(() => {
    const frameNumber = Math.min(frameIndex + 1, frameCount);
    return `${framePath}/${padFrameNumber(frameNumber)}.png`;
  }, [frameCount, frameIndex, framePath]);

  return (
    <div className={className}>
      <div className="relative h-full w-full">
        <Image
          src={src}
          alt={alt}
          fill
          unoptimized
          sizes="(max-width: 1024px) 80vw, 360px"
          className="frame-animation-image object-contain"
          loading="eager"
          draggable={false}
        />
      </div>
    </div>
  );
}
