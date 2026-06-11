"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";

import { socials } from "@/config/socials";

import { AmbientSoundToggle } from "../cinematic/AmbientSoundToggle";
import { FogLayer } from "../cinematic/FogLayer";
import { ObservationLens } from "../cinematic/ObservationLens";
import { SnowParticles } from "../cinematic/SnowParticles";

const MountainScene3D = dynamic(() => import("../cinematic/MountainScene3D"), {
  ssr: false,
});

export function HeroSection() {
  const t = useTranslations("home");

  return (
    <section className="noise relative min-h-[100svh] overflow-hidden bg-black">
      <div className="absolute inset-0 scale-[1.03] bg-[url('/images/backgrounds/alpine-night.jpg')] bg-cover bg-center" />
      <video
        className="absolute inset-0 hidden size-full object-cover opacity-70 motion-reduce:hidden md:block"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/backgrounds/alpine-night.jpg"
        aria-hidden="true"
      >
        <source src="/videos/alpine-background.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.72)_0%,rgba(0,0,0,.22)_55%,rgba(0,0,0,.5)_100%),linear-gradient(180deg,rgba(0,0,0,.48)_0%,rgba(0,0,0,.05)_48%,#030303_100%)]" />
      <div className="absolute inset-0 hidden lg:block">
        <MountainScene3D />
      </div>
      <div className="scope-grid absolute inset-0 opacity-25" />
      <FogLayer strength="medium" />
      <SnowParticles density={2} />
      <ObservationLens />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[94rem] flex-col justify-end px-5 pt-32 pb-20 sm:px-8 sm:pb-16 lg:justify-center lg:px-12">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="bg-ice size-1.5 animate-pulse rounded-full shadow-[0_0_14px_rgba(190,233,255,.9)]" />
            <p className="eyebrow !text-white/60">{t("mode")}</p>
            <span className="font-mono text-[0.55rem] tracking-[0.15em] text-white/32">
              46.40° N / 10.67° E
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 34, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              delay: 0.55,
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-[15ch] text-[clamp(3rem,7.4vw,7.8rem)] leading-[0.9] font-light tracking-[-0.065em] text-balance text-white"
          >
            {t("hero.title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-7 max-w-2xl text-sm leading-7 text-white/58 sm:text-base"
          >
            {t("hero.description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.8 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href={socials.youtube}
              target="_blank"
              rel="noreferrer"
              data-cursor="play"
              className="focus-ring rounded-full bg-white px-5 py-3 text-[0.66rem] font-semibold tracking-[0.17em] text-black uppercase transition hover:bg-white/82"
            >
              {t("hero.youtube")}
            </a>
            <a
              href={socials.instagram}
              target="_blank"
              rel="noreferrer"
              data-cursor="magnetic"
              className="focus-ring rounded-full border border-white/22 bg-black/15 px-5 py-3 text-[0.66rem] font-semibold tracking-[0.17em] text-white uppercase backdrop-blur-md transition hover:border-white/45"
            >
              {t("hero.instagram")}
            </a>
          </motion.div>
        </div>

        <div className="absolute right-5 bottom-6 left-5 flex items-end justify-between sm:right-8 sm:left-8 lg:right-12 lg:left-12">
          <a
            href="#observation"
            className="focus-ring group flex items-center gap-3 rounded-full text-[0.56rem] tracking-[0.19em] text-white/42 uppercase transition hover:text-white"
          >
            <span className="grid size-9 place-items-center rounded-full border border-white/14">
              <ChevronDown className="size-3.5 transition-transform group-hover:translate-y-0.5" />
            </span>
            <span className="hidden sm:block">{t("hero.scroll")}</span>
          </a>
          <AmbientSoundToggle />
        </div>
      </div>
    </section>
  );
}
