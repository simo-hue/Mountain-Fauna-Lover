"use client";

import { useTranslations } from "next-intl";

import { stats } from "@/config/stats";

import { AnimatedCounter } from "../ui/AnimatedCounter";
import { SectionHeading } from "../ui/SectionHeading";

export function StatsSection() {
  const t = useTranslations("home.stats");

  return (
    <section className="border-y border-white/8 bg-[#070707] px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading index="06" eyebrow={t("eyebrow")} title={t("title")} />
        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/10 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-[#070707] px-5 py-8 sm:px-8 sm:py-10"
            >
              <p className="text-4xl font-light tracking-[-0.05em] sm:text-6xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-[0.6rem] leading-5 font-medium tracking-[0.17em] text-white/38 uppercase">
                {t(stat.id)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
