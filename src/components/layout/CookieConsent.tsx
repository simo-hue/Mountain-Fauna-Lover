"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { useTranslations } from "next-intl";

import { Link, usePathname } from "@/i18n/navigation";

const CONSENT_KEY = "mfl-analytics-consent";

export function CookieConsent() {
  const t = useTranslations("cookies.banner");
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const analyticsAvailable = Boolean(process.env.NEXT_PUBLIC_GA_ID);

  useEffect(() => {
    if (!analyticsAvailable) return;
    setVisible(window.localStorage.getItem(CONSENT_KEY) === null);
  }, [analyticsAvailable]);

  const decide = (value: "granted" | "denied") => {
    window.localStorage.setItem(CONSENT_KEY, value);
    window.dispatchEvent(
      new CustomEvent("mfl-consent-change", { detail: value }),
    );
    setVisible(false);
  };

  if (pathname.endsWith("/link")) {
    return null;
  }

  return (
    <AnimatePresence>
      {visible && (
        <m.aside
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="fixed right-4 bottom-4 left-4 z-[110] mx-auto max-w-3xl rounded-[1.4rem] border border-white/14 bg-[#090909]/95 p-5 shadow-2xl shadow-black/70 backdrop-blur-xl sm:right-6 sm:bottom-6 sm:left-6 sm:p-6"
          aria-label={t("label")}
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium">{t("title")}</p>
              <p className="mt-2 max-w-xl text-xs leading-5 text-white/45">
                {t("description")}{" "}
                <Link
                  href="/cookies"
                  prefetch={false}
                  className="focus-ring rounded-sm text-white underline decoration-white/30 underline-offset-4"
                >
                  {t("link")}
                </Link>
                .
              </p>
            </div>
            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                onClick={() => decide("denied")}
                className="focus-ring rounded-full border border-white/16 px-4 py-2.5 text-[0.58rem] font-semibold tracking-[0.14em] text-white/65 uppercase transition hover:border-white/35 hover:text-white"
              >
                {t("essential")}
              </button>
              <button
                type="button"
                onClick={() => decide("granted")}
                className="focus-ring rounded-full bg-white px-4 py-2.5 text-[0.58rem] font-semibold tracking-[0.14em] text-black uppercase transition hover:bg-white/82"
              >
                {t("allow")}
              </button>
            </div>
          </div>
        </m.aside>
      )}
    </AnimatePresence>
  );
}
