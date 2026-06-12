"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useTranslations } from "next-intl";

import type { CuratedVideo } from "@/config/videos";

export function VideoCard({
  video,
  index,
  onSelect,
}: {
  video: CuratedVideo;
  index: number;
  onSelect: (video: CuratedVideo) => void;
}) {
  const t = useTranslations("videos");

  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.65, delay: (index % 3) * 0.06 }}
      onClick={() => onSelect(video)}
      data-cursor="play"
      className="focus-ring group relative aspect-video w-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#080808] text-left"
      aria-label={`${t("actions.open")}: ${t(video.titleKey)}`}
    >
      <Image
        src={video.thumbnail}
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition duration-[1400ms] group-hover:scale-[1.06] group-focus-visible:scale-[1.06]"
        style={{ objectPosition: `${45 + (index % 3) * 10}% center` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-80 transition group-hover:opacity-90" />
      <span className="absolute top-4 left-4 font-mono text-[0.55rem] tracking-[0.15em] text-white/38 sm:top-5 sm:left-5">
        OBS / {String(index + 1).padStart(2, "0")}
      </span>
      <span className="absolute top-4 right-4 grid size-10 place-items-center rounded-full border border-white/25 bg-black/30 backdrop-blur-md transition duration-500 group-hover:scale-110 group-hover:border-white group-hover:bg-white group-hover:text-black sm:top-5 sm:right-5 sm:size-11">
        <Play className="size-3.5 fill-current" />
      </span>
      <span className="absolute inset-4 rounded-[1rem] border border-white/0 transition group-hover:border-white/18" />
      <span className="absolute right-5 bottom-5 left-5 sm:right-6 sm:bottom-6 sm:left-6">
        <span className="eyebrow !text-white/48">
          {t(`categories.${video.category}`)}
        </span>
        <span className="mt-2 block text-xl leading-tight font-light tracking-tight text-white sm:mt-3 sm:text-2xl">
          {t(video.titleKey)}
        </span>
        <span className="mt-2 block max-h-0 overflow-hidden text-xs leading-5 text-white/0 transition-all duration-500 group-hover:max-h-24 group-hover:text-white/48 group-focus-visible:max-h-24 group-focus-visible:text-white/48 sm:mt-3 sm:text-sm sm:leading-6">
          {t(video.descriptionKey)}
        </span>
      </span>
    </motion.button>
  );
}
