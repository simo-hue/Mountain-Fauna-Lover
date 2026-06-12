import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { socials } from "@/config/socials";
import { Link } from "@/i18n/navigation";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#030303] px-5 py-8 sm:px-8 sm:py-10">
      <div className="pointer-events-none absolute top-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/35 to-transparent" />

      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-[0.6rem] tracking-[0.14em] text-white/28 uppercase sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Mountain Fauna Lover</span>
        
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          {(["youtube", "instagram"] as const).map((social) => (
            <a
              key={social}
              href={socials[social]}
              target="_blank"
              rel="noreferrer"
              className="focus-ring group flex items-center gap-1.5 rounded-sm transition hover:text-white"
            >
              {t(social)}
              <ArrowUpRight className="size-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          ))}
          <Link
            className="focus-ring rounded-sm transition hover:text-white"
            href="/privacy"
          >
            {t("privacy")}
          </Link>
          <Link
            className="focus-ring rounded-sm transition hover:text-white"
            href="/cookies"
          >
            {t("cookies")}
          </Link>
        </div>

        <span>{t("respect")}</span>
      </div>
    </footer>
  );
}
