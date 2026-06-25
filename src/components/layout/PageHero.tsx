import type { ReactNode } from "react";

import { FogLayer } from "../cinematic/FogLayer";
import { SnowParticles } from "../cinematic/SnowParticles";
import { BrandMark } from "../ui/BrandMark";

export function PageHero({
  eyebrow,
  title,
  description,
  code,
  compact = false,
  breadcrumb,
}: {
  eyebrow: string;
  title: string;
  description: string;
  code: string;
  compact?: boolean;
  breadcrumb?: ReactNode;
}) {
  return (
    <section
      className={`noise relative overflow-hidden border-b border-white/8 px-5 pt-36 sm:px-8 sm:pt-44 ${
        compact ? "pb-20 sm:pb-24" : "pb-28 sm:pb-36"
      }`}
    >
      <div className="alpine-night-bg absolute inset-0 bg-cover bg-center opacity-28" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-[#030303]/70 to-[#030303]" />
      <div className="scope-grid absolute inset-0 opacity-20" />
      <FogLayer strength="soft" />
      <SnowParticles />
      <BrandMark className="absolute right-4 bottom-4 size-16 opacity-30 sm:right-8 sm:bottom-8 sm:size-24" />
      <div className="relative mx-auto max-w-7xl">
        {breadcrumb}
        <div className="mb-7 flex items-center gap-3">
          <span className="font-mono text-[0.58rem] text-white/30">{code}</span>
          <span className="eyebrow !text-white/60">{eyebrow}</span>
        </div>
        <h1 className="max-w-[13ch] text-[clamp(3.4rem,8vw,8.5rem)] leading-[0.88] font-light tracking-[-0.065em] text-balance text-white">
          {title}
        </h1>
        <p className="mt-8 max-w-2xl text-sm leading-7 text-white/52 sm:text-base">
          {description}
        </p>
      </div>
    </section>
  );
}
