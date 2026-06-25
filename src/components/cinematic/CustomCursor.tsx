"use client";

import { useEffect, useRef, useState } from "react";
import { m } from "framer-motion";
import { Bike, Crosshair, Play, Scan } from "lucide-react";

type CursorMode =
  | "default"
  | "lens"
  | "play"
  | "technical"
  | "bike"
  | "magnetic";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState<CursorMode>("default");
  const [active, setActive] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!finePointer || reducedMotion) return;

    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    let frame = 0;
    let lastMode: CursorMode = "default";
    let lastActive = false;
    const onMove = (event: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (!cursorRef.current) return;
        cursorRef.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;

        const target = (event.target as HTMLElement).closest<HTMLElement>(
          "[data-cursor]",
        );
        const nextMode =
          (target?.dataset.cursor as CursorMode | undefined) ?? "default";
        const nextActive = Boolean(target);
        // Only touch React state when the value actually changes. Plain movement
        // over non-interactive areas then costs nothing beyond the rAF-throttled
        // transform update above — no re-render, no DOM thrash.
        if (nextMode !== lastMode) {
          lastMode = nextMode;
          setMode(nextMode);
        }
        if (nextActive !== lastActive) {
          lastActive = nextActive;
          setActive(nextActive);
        }
      });
    };

    const onLeave = () => cursorRef.current?.classList.add("cursor-hidden");
    const onEnter = () => cursorRef.current?.classList.remove("cursor-hidden");

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      cancelAnimationFrame(frame);
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  if (!enabled) return null;

  const icon = {
    default: <Crosshair className="size-3" />,
    lens: <Scan className="size-5" />,
    play: <Play className="size-4 fill-current" />,
    technical: <Crosshair className="size-5" />,
    bike: <Bike className="size-4" />,
    magnetic: <span className="size-1.5 rounded-full bg-current" />,
  }[mode];

  return (
    <div
      ref={cursorRef}
      className="custom-cursor pointer-events-none fixed top-0 left-0 z-[200] -translate-x-1/2 -translate-y-1/2 text-white mix-blend-difference"
      aria-hidden="true"
    >
      <m.div
        animate={{
          width: mode === "lens" ? 62 : active ? 42 : 26,
          height: mode === "lens" ? 62 : active ? 42 : 26,
          borderColor: active
            ? "rgba(255,255,255,.72)"
            : "rgba(255,255,255,.35)",
        }}
        transition={{ type: "spring", stiffness: 420, damping: 30 }}
        className="grid place-items-center rounded-full border bg-black/5"
      >
        {icon}
      </m.div>
    </div>
  );
}
