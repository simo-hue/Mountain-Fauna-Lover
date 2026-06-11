"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useTranslations } from "next-intl";

import { featuredVideos } from "@/config/videos";

import { ArrowLink } from "../ui/ArrowLink";
import { SectionHeading } from "../ui/SectionHeading";

export function FeaturedVideosPreview() {
  const t = useTranslations();
  const videos = featuredVideos.slice(0, 3);

  return (
    <section className="relative border-y border-white/8 bg-[#070707] px-5 py-28 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-8 sm:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            index="02"
            eyebrow={t("home.videos.eyebrow")}
            title={t("home.videos.title")}
            description={t("home.videos.description")}
          />
          <ArrowLink href="/videos">{t("home.videos.cta")}</ArrowLink>
        </div>

        <div className="grid gap-4 lg:grid-cols-12">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              className={index === 0 ? "lg:col-span-6" : "lg:col-span-3"}
            >
              <a
                href={video.youtubeUrl}
                target="_blank"
                rel="noreferrer"
                data-cursor="play"
                className="focus-ring group relative block aspect-[4/5] overflow-hidden rounded-[1.6rem] border border-white/10 bg-black"
              >
                <Image
                  src={video.thumbnail}
                  alt=""
                  fill
                  sizes={
                    index === 0
                      ? "(max-width: 1024px) 100vw, 50vw"
                      : "(max-width: 1024px) 100vw, 25vw"
                  }
                  className="object-cover transition duration-1000 group-hover:scale-105 group-hover:opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/15" />
                <div className="absolute inset-4 rounded-[1.1rem] border border-white/0 transition group-hover:border-white/18" />
                <div className="absolute top-6 right-6 grid size-11 place-items-center rounded-full border border-white/22 bg-black/25 backdrop-blur-md transition group-hover:scale-110 group-hover:bg-white group-hover:text-black">
                  <Play className="size-3.5 fill-current" />
                </div>
                <div className="absolute right-6 bottom-6 left-6">
                  <p className="eyebrow !text-white/48">
                    {t(`videos.categories.${video.category}`)}
                  </p>
                  <h3 className="mt-3 text-2xl leading-tight font-light tracking-tight">
                    {t(`videos.${video.titleKey}`)}
                  </h3>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
