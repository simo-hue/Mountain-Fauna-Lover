"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Play, X } from "lucide-react";
import { useTranslations } from "next-intl";

import type { CuratedVideo } from "@/config/videos";

export function VideoModal({
  video,
  onClose,
}: {
  video: CuratedVideo | null;
  onClose: () => void;
}) {
  const t = useTranslations("videos");
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!video) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose, video]);

  return (
    <AnimatePresence>
      {video && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[120] grid place-items-center overflow-y-auto bg-black/88 p-4 backdrop-blur-xl sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-modal-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative my-auto w-full max-w-5xl overflow-hidden rounded-[1.6rem] border border-white/14 bg-[#080808] shadow-2xl shadow-black"
          >
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="focus-ring absolute top-4 right-4 z-10 grid size-10 place-items-center rounded-full border border-white/20 bg-black/65 text-white backdrop-blur-md transition hover:bg-white hover:text-black"
              aria-label={t("actions.close")}
            >
              <X className="size-4" />
            </button>

            <div className="aspect-video bg-black">
              {video.youtubeId ? (
                <iframe
                  className="size-full"
                  src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
                  title={t(video.titleKey)}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <div className="relative grid size-full place-items-center overflow-hidden bg-[url('/images/backgrounds/alpine-night.jpg')] bg-cover bg-center">
                  <div className="absolute inset-0 bg-black/58" />
                  <div className="relative max-w-md px-8 text-center">
                    <span className="mx-auto grid size-16 place-items-center rounded-full border border-white/25 bg-black/25">
                      <Play className="size-5 fill-current" />
                    </span>
                    <p className="mt-5 text-sm leading-6 text-white/56">
                      {t("placeholder")}
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-end sm:justify-between sm:p-8">
              <div>
                <p className="eyebrow !text-white/45">
                  {t(`categories.${video.category}`)}
                </p>
                <h2
                  id="video-modal-title"
                  className="mt-3 text-2xl font-light sm:text-3xl"
                >
                  {t(video.titleKey)}
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-white/45">
                  {t(video.descriptionKey)}
                </p>
              </div>
              <a
                href={video.youtubeUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-[0.62rem] font-semibold tracking-[0.16em] text-black uppercase transition hover:bg-white/82"
              >
                {t("actions.youtube")}
                <ExternalLink className="size-3.5" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
