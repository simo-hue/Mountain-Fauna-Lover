"use client";

import { useRef } from "react";
import { m, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";

export function ScopeStudy() {
  const t = useTranslations("digiscoping.scope");
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.82, 1.08, 0.92]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.24, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-10, 12]);

  return (
    <div ref={ref} className="relative py-12 sm:py-20" data-cursor="lens">
      <m.div
        style={{ scale }}
        className="relative mx-auto aspect-square w-[min(82vw,42rem)] rounded-full border border-white/26 p-4 shadow-[0_0_120px_rgba(190,233,255,.06)]"
      >
        <m.span
          style={{ rotate }}
          className="absolute -inset-5 rounded-full border border-dashed border-white/12"
        />
        <span className="absolute top-1/2 -right-[12%] -left-[12%] h-px bg-gradient-to-r from-transparent via-white/32 to-transparent" />
        <span className="absolute -top-[12%] -bottom-[12%] left-1/2 w-px bg-gradient-to-b from-transparent via-white/32 to-transparent" />
        <div className="relative size-full overflow-hidden rounded-full border border-white/15 bg-black">
          <m.div
            style={{ scale: imageScale }}
            className="alpine-night-bg absolute inset-0 bg-cover bg-center grayscale"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_28%,rgba(0,0,0,.88)_100%)]" />
          <span className="absolute inset-[11%] rounded-full border border-white/16" />
          <span className="absolute inset-[22%] rounded-full border border-white/8" />
          <span className="absolute top-1/2 right-0 left-0 h-px bg-white/25" />
          <span className="absolute top-0 bottom-0 left-1/2 w-px bg-white/25" />
          <span className="absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white" />
          <span className="absolute top-[12%] left-1/2 -translate-x-1/2 font-mono text-[0.52rem] tracking-[0.18em] text-white/45">
            {t("north")}
          </span>
          <span className="absolute right-[13%] bottom-[12%] text-right font-mono text-[0.5rem] leading-5 tracking-[0.14em] text-white/45">
            {t("distance")}
            <br />
            {t("magnification")}
          </span>
        </div>
      </m.div>
    </div>
  );
}
