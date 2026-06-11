"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { FogLayer } from "./FogLayer";

const SESSION_KEY = "mfl-intro-seen";

export function LogoPortalIntro() {
  const t = useTranslations("cinematic.portal");
  const [visible, setVisible] = useState(true);
  const [canSkip, setCanSkip] = useState(false);

  const finish = () => {
    window.sessionStorage.setItem(SESSION_KEY, "true");
    setVisible(false);
  };

  useEffect(() => {
    if (window.sessionStorage.getItem(SESSION_KEY)) {
      setVisible(false);
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const skipTimer = window.setTimeout(
      () => setCanSkip(true),
      reducedMotion ? 50 : 900,
    );
    const finishTimer = window.setTimeout(
      () => finish(),
      reducedMotion ? 180 : 3600,
    );

    return () => {
      window.clearTimeout(skipTimer);
      window.clearTimeout(finishTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.22, filter: "blur(16px)" }}
          transition={{ duration: 0.9, ease: [0.7, 0, 0.84, 0] }}
          className="fixed inset-0 z-[150] grid place-items-center overflow-hidden bg-black"
          role="dialog"
          aria-modal="true"
          aria-label={t("label")}
        >
          <div className="scope-grid absolute inset-0 opacity-50" />
          <FogLayer strength="strong" />
          <motion.div
            initial={{ opacity: 0, scale: 0.72, filter: "blur(22px)" }}
            animate={{
              opacity: [0, 0.9, 1],
              scale: [0.72, 0.9, 1.05],
              filter: ["blur(22px)", "blur(2px)", "blur(0px)"],
            }}
            transition={{ duration: 2.8, times: [0, 0.55, 1], ease: "easeOut" }}
            className="relative size-[min(72vw,30rem)]"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[4%] rounded-full border border-dashed border-white/22"
            />
            <motion.div
              animate={{ scale: [1, 1.035, 1], opacity: [0.65, 1, 0.65] }}
              transition={{
                duration: 2.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0"
            >
              <Image
                src="/logo/mountain-fauna-logo.png"
                alt="Mountain Fauna Lover"
                fill
                priority
                sizes="(max-width: 768px) 72vw, 480px"
                className="object-contain drop-shadow-[0_0_36px_rgba(255,255,255,0.16)]"
              />
            </motion.div>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.4, delay: 0.4 }}
              className="absolute top-1/2 -right-[15%] -left-[15%] h-px bg-gradient-to-r from-transparent via-white/65 to-transparent"
            />
            <motion.span
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.4, delay: 0.4 }}
              className="absolute -top-[15%] -bottom-[15%] left-1/2 w-px bg-gradient-to-b from-transparent via-white/65 to-transparent"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center"
          >
            <p className="eyebrow whitespace-nowrap">{t("entering")}</p>
            <div className="mx-auto mt-3 h-px w-36 overflow-hidden bg-white/10">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 2.7, delay: 0.35, ease: "easeInOut" }}
                className="h-full bg-white/70"
              />
            </div>
          </motion.div>

          <AnimatePresence>
            {canSkip && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                type="button"
                onClick={finish}
                className="focus-ring absolute top-6 right-6 rounded-full border border-white/15 px-4 py-2 text-[0.6rem] tracking-[0.2em] text-white/55 uppercase transition hover:text-white"
              >
                {t("skip")}
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
