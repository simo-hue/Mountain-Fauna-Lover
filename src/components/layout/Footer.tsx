import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { siteConfig } from "@/config/site";
import { socials } from "@/config/socials";
import { Link } from "@/i18n/navigation";

import { BrandMark } from "../ui/BrandMark";
import { LocaleSwitcher } from "./LocaleSwitcher";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#030303] px-5 py-12 sm:px-8 sm:py-16">
      <div className="pointer-events-none absolute top-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/35 to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <BrandMark className="mb-5 size-14" />
          <p className="max-w-sm text-sm leading-7 text-white/48">
            {t("statement")}
          </p>
          <p className="mt-6 text-[0.62rem] tracking-[0.24em] text-white/30 uppercase">
            {siteConfig.locations.join(" · ")}
          </p>
        </div>

        <div>
          <p className="eyebrow mb-5">{t("observe")}</p>
          <div className="grid gap-3 text-sm text-white/62">
            {(["youtube", "instagram", "tiktok", "linkedin"] as const).map(
              (social) => (
                <a
                  key={social}
                  href={socials[social]}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring group flex w-fit items-center gap-2 rounded-sm transition hover:text-white"
                >
                  {t(social)}
                  <ArrowUpRight className="size-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ),
            )}
          </div>
        </div>

        <div>
          <p className="eyebrow mb-5">{t("information")}</p>
          <div className="grid gap-3 text-sm text-white/62">
            <a
              className="focus-ring w-fit rounded-sm hover:text-white"
              href={`mailto:${siteConfig.email}`}
            >
              {siteConfig.email}
            </a>
            <Link
              className="focus-ring w-fit rounded-sm hover:text-white"
              href="/privacy"
            >
              {t("privacy")}
            </Link>
            <Link
              className="focus-ring w-fit rounded-sm hover:text-white"
              href="/cookies"
            >
              {t("cookies")}
            </Link>
            <LocaleSwitcher />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-2 border-t border-white/10 pt-5 text-[0.6rem] tracking-[0.14em] text-white/28 uppercase sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Mountain Fauna Lover</span>
        <span>{t("respect")}</span>
      </div>
    </footer>
  );
}
