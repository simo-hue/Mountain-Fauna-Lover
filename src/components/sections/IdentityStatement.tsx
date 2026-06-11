"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";

import { FogLayer } from "../cinematic/FogLayer";
import { BrandMark } from "../ui/BrandMark";
import { SectionHeading } from "../ui/SectionHeading";

export function IdentityStatement() {
  const t = useTranslations("home.identity");
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const markY = useTransform(scrollYProgress, [0, 1], [70, -70]);
  const markRotate = useTransform(scrollYProgress, [0, 1], [-8, 10]);

  return (
    <section
      ref={ref}
      id="observation"
      className="relative overflow-hidden px-5 py-28 sm:px-8 sm:py-40"
    >
      <FogLayer strength="soft" />
      <motion.div
        style={{ y: markY, rotate: markRotate }}
        className="pointer-events-none absolute top-1/2 right-[-6rem] size-[24rem] -translate-y-1/2 opacity-[0.055] sm:right-[2%] sm:size-[38rem]"
      >
        <BrandMark className="size-full" />
      </motion.div>
      <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_0.72fr] lg:items-end">
        <SectionHeading
          index="01"
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />
        <motion.blockquote
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative border-l border-white/20 pl-6 font-serif text-2xl leading-snug text-white/72 italic sm:text-3xl"
        >
          “{t("quote")}”
        </motion.blockquote>
      </div>
    </section>
  );
}
