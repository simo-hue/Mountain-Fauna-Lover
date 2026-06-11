"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { ArrowLink } from "../ui/ArrowLink";
import { SectionHeading } from "../ui/SectionHeading";

export function FounderPreview() {
  const t = useTranslations("home.founder");

  return (
    <section className="border-y border-white/8 bg-[#070707] px-5 py-28 sm:px-8 sm:py-36">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0b0b]"
        >
          <Image
            src="/images/backgrounds/alpine-night.jpg"
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover opacity-45 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          <div className="absolute inset-8 grid place-items-center rounded-full border border-white/12">
            <span className="font-serif text-8xl text-white/16 italic">MS</span>
          </div>
          <div className="absolute right-7 bottom-7 left-7 flex justify-between border-t border-white/15 pt-4 font-mono text-[0.55rem] tracking-[0.14em] text-white/35 uppercase">
            <span>{t("placeholder")}</span>
            <span>Trentino-Alto Adige</span>
          </div>
        </motion.div>
        <div className="lg:pl-12">
          <SectionHeading
            index="04"
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
          />
          <ArrowLink href="/founder" className="mt-8">
            {t("cta")}
          </ArrowLink>
        </div>
      </div>
    </section>
  );
}
