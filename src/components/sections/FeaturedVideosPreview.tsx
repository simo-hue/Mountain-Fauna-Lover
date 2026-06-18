"use client";

import Image from "next/image";
import { m } from "framer-motion";
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

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, index) => (
            <m.div
              key={video.id}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
            >
              <a
                href={video.youtubeUrl}
                target="_blank"
                rel="noreferrer"
                data-cursor="play"
                className="focus-ring group relative block aspect-video overflow-hidden rounded-[1.6rem] border border-white/10 bg-black"
              >
                <Image
                  src={video.thumbnail}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-1000 group-hover:scale-105 group-hover:opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-80" />
                <div className="absolute inset-4 rounded-[1.1rem] border border-white/0 transition group-hover:border-white/18" />
                <div className="absolute top-4 right-4 grid size-10 place-items-center rounded-full border border-white/22 bg-black/25 backdrop-blur-md transition group-hover:scale-110 group-hover:bg-white group-hover:text-black sm:top-6 sm:right-6 sm:size-11">
                  <Play className="size-3.5 fill-current" />
                </div>
                <div className="absolute right-5 bottom-5 left-5 sm:right-6 sm:bottom-6 sm:left-6">
                  <p className="eyebrow !text-white/48">
                    {t(`videos.categories.${video.category}`)}
                  </p>
                  <h3 className="mt-2 text-xl leading-tight font-light tracking-tight sm:mt-3 sm:text-2xl">
                    {t(`videos.${video.titleKey}`)}
                  </h3>
                </div>
              </a>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
