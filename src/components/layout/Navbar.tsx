"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";

import { navigation } from "@/config/navigation";
import { socials } from "@/config/socials";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

import { BrandMark } from "../ui/BrandMark";

export function Navbar() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (pathname.endsWith("/link")) {
    return null;
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
        <nav
          aria-label={t("label")}
          className="mx-auto flex max-w-[94rem] items-center justify-between rounded-full border border-white/10 bg-black/45 px-4 py-2.5 shadow-2xl shadow-black/30 backdrop-blur-xl sm:px-5"
        >
          <Link
            href="/"
            className="focus-ring flex items-center gap-3 rounded-full -my-2.5"
            aria-label="Mountain Fauna Lover"
          >
            <BrandMark className="size-14" />
            <span className="hidden whitespace-nowrap text-[0.64rem] leading-tight font-semibold tracking-[0.22em] text-white uppercase sm:block">
              Mountain Fauna Lover
            </span>
          </Link>

          <div className="hidden items-center gap-5 xl:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "focus-ring rounded-md text-[0.64rem] font-medium tracking-[0.17em] text-white/58 uppercase transition hover:text-white",
                  pathname === item.href && "text-white",
                )}
              >
                {t(item.labelKey)}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={socials.youtube}
              target="_blank"
              rel="noreferrer"
              className="focus-ring hidden rounded-full bg-white px-4 py-2 text-[0.66rem] font-semibold tracking-[0.16em] text-black uppercase transition hover:bg-white/85 sm:inline-flex"
            >
              {t("youtube")}
            </a>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="focus-ring inline-grid size-9 place-items-center rounded-full border border-white/15 text-white xl:hidden"
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label={open ? t("close") : t("open")}
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            initial={{ clipPath: "circle(0% at 92% 4%)" }}
            animate={{ clipPath: "circle(145% at 92% 4%)" }}
            exit={{ clipPath: "circle(0% at 92% 4%)" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex min-h-dvh flex-col justify-center overflow-hidden bg-[#050505] px-7 pt-24 xl:hidden"
          >
            <div className="scope-grid absolute inset-0 opacity-35" />
            <div className="relative mx-auto flex w-full max-w-2xl flex-col">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + index * 0.05 }}
                  className="border-b border-white/10"
                >
                  <Link
                    href={item.href}
                    className="focus-ring flex items-center justify-between py-5 text-2xl font-light tracking-tight text-white sm:text-4xl"
                  >
                    {t(item.labelKey)}
                    <span className="font-mono text-xs text-white/35">
                      0{index + 1}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
