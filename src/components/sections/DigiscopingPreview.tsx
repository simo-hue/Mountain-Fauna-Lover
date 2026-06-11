"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { ArrowLink } from "../ui/ArrowLink";
import { SectionHeading } from "../ui/SectionHeading";

export function DigiscopingPreview() {
  const t = useTranslations("home.digiscoping");

  return (
    <section className="relative overflow-hidden px-5 py-28 sm:px-8 sm:py-40">
      <div className="absolute inset-0 bg-[url('/images/backgrounds/alpine-night.jpg')] bg-cover bg-fixed bg-center opacity-18" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#030303] via-[#030303]/90 to-[#030303]/50" />
      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            index="03"
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
          />
          <ArrowLink href="/digiscoping" className="mt-8">
            {t("cta")}
          </ArrowLink>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.82, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          data-cursor="lens"
          className="relative mx-auto aspect-square w-full max-w-[35rem] rounded-full border border-white/24 p-4"
        >
          <div className="absolute inset-1/2 h-px w-[118%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/35 to-transparent" />
          <div className="absolute top-1/2 left-1/2 h-[118%] w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-white/35 to-transparent" />
          <div className="relative size-full overflow-hidden rounded-full border border-white/12">
            <div className="absolute inset-0 scale-110 bg-[url('/images/backgrounds/alpine-night.jpg')] bg-cover bg-center grayscale transition duration-[1800ms] hover:scale-100" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,.82)_100%)]" />
            <div className="absolute inset-[12%] rounded-full border border-white/15" />
            <span className="absolute top-1/2 right-0 left-0 h-px bg-white/25" />
            <span className="absolute top-0 bottom-0 left-1/2 w-px bg-white/25" />
            <span className="absolute right-[17%] bottom-[13%] font-mono text-[0.55rem] tracking-[0.18em] text-white/52">
              DIST / 420M
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
