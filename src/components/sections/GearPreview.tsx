"use client";

import { motion } from "framer-motion";
import {
  Aperture,
  Bike,
  Camera,
  MountainSnow,
  Telescope,
  WandSparkles,
} from "lucide-react";
import { useTranslations } from "next-intl";

import { gearItems } from "@/config/gear";

import { ArrowLink } from "../ui/ArrowLink";
import { SectionHeading } from "../ui/SectionHeading";

const icons = [Telescope, Camera, Aperture, MountainSnow, Bike, WandSparkles];

export function GearPreview() {
  const t = useTranslations();

  return (
    <section className="px-5 py-28 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            index="05"
            eyebrow={t("home.gear.eyebrow")}
            title={t("home.gear.title")}
            description={t("home.gear.description")}
          />
          <ArrowLink href="/gear">{t("home.gear.cta")}</ArrowLink>
        </div>

        <div className="grid gap-px overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {gearItems.map((item, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                data-cursor={
                  item.category === "ebikeOffroad" ? "bike" : "technical"
                }
                className="group relative min-h-56 overflow-hidden bg-[#080808] p-7 transition hover:bg-[#0d0d0d]"
              >
                <span className="absolute top-6 right-6 font-mono text-[0.55rem] text-white/22">
                  0{index + 1}
                </span>
                <Icon className="size-6 text-white/42 transition duration-500 group-hover:scale-110 group-hover:text-white" />
                <h3 className="mt-12 text-xl font-light tracking-tight">
                  {t(`gear.${item.nameKey}`)}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/40">
                  {t(`gear.${item.descriptionKey}`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
