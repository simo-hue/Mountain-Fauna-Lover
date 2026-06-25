"use client";

import { useEffect, useRef, useState } from "react";
import {
  m,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

export function ObservationLens() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 28 });
  const springY = useSpring(y, { stiffness: 180, damping: 28 });
  // The lens reveals the alpine scene aligned to the viewport. Previously this
  // was driven by animating background-position, which forces a CPU repaint of
  // the filtered lens every frame. Instead we move an inner background layer by
  // the same offset with a GPU transform — visually identical, but composited.
  const bgX = useTransform(springX, (value) => -value + 132);
  const bgY = useTransform(springY, (value) => -value + 132);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element || reducedMotion) return;

    const positionCenter = () => {
      const bounds = element.getBoundingClientRect();
      x.set(bounds.width * 0.66);
      y.set(bounds.height * 0.5);
    };

    positionCenter();
    window.addEventListener("resize", positionCenter);
    return () => window.removeEventListener("resize", positionCenter);
  }, [reducedMotion, x, y]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0"
      data-cursor="lens"
      onPointerMove={(event) => {
        if (event.pointerType !== "mouse" || reducedMotion) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        x.set(event.clientX - bounds.left);
        y.set(event.clientY - bounds.top);
      }}
      onPointerEnter={() => setActive(true)}
      onPointerLeave={() => setActive(false)}
      aria-hidden="true"
    >
      <m.div
        style={{ x: springX, y: springY }}
        animate={{ opacity: active ? 1 : 0.74, scale: active ? 1 : 0.92 }}
        transition={{ duration: 0.35 }}
        className="observation-lens absolute top-0 left-0 hidden size-64 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border border-white/45 shadow-[0_0_0_10px_rgba(255,255,255,0.025),0_30px_100px_rgba(0,0,0,0.8)] lg:block"
      >
        <m.div
          style={{ x: bgX, y: bgY }}
          className="alpine-night-bg absolute top-0 left-0 h-screen w-screen bg-[length:100vw_100vh] bg-no-repeat"
        />
        <span className="absolute inset-3 rounded-full border border-white/20" />
        <span className="absolute top-1/2 right-0 left-0 h-px bg-white/30" />
        <span className="absolute top-0 bottom-0 left-1/2 w-px bg-white/30" />
        <span className="absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white" />
        <span className="absolute right-7 bottom-5 font-mono text-[0.5rem] tracking-[0.15em] text-white/60">
          60× / REC
        </span>
      </m.div>
      <div className="absolute top-[52%] left-[68%] grid size-44 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-black/10 shadow-[0_0_60px_rgba(255,255,255,0.06)] lg:hidden">
        <span className="absolute inset-3 rounded-full border border-white/10" />
        <span className="h-px w-full bg-white/20" />
        <span className="absolute h-full w-px bg-white/20" />
      </div>
    </div>
  );
}
