import {
  Aperture,
  ArrowUpRight,
  BriefcaseBusiness,
  Mail,
  Play,
  Video,
} from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { PageHero } from "@/components/layout/PageHero";
import { siteConfig } from "@/config/site";
import { socials } from "@/config/socials";
import type { AppLocale } from "@/i18n/routing";
import { createPageMetadata } from "@/lib/metadata";

const links = [
  { id: "youtube", href: socials.youtube, icon: Play, size: "large" },
  { id: "instagram", href: socials.instagram, icon: Aperture, size: "large" },
  { id: "tiktok", href: socials.tiktok, icon: Video, size: "small" },
  {
    id: "linkedin",
    href: socials.linkedin,
    icon: BriefcaseBusiness,
    size: "small",
  },
  {
    id: "email",
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
    size: "small",
  },
] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.links" });

  return createPageMetadata({
    locale,
    title: t("title"),
    description: t("description"),
    path: "/links",
  });
}

export default async function LinksPage({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("links");

  return (
    <>
      <PageHero
        code="SIGNAL / LIVE"
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
        compact
      />
      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2">
          {links.map(({ id, href, icon: Icon, size }, index) => (
            <a
              key={id}
              href={href}
              target={id === "email" ? undefined : "_blank"}
              rel={id === "email" ? undefined : "noreferrer"}
              data-cursor="magnetic"
              className={`focus-ring group relative flex overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#080808] p-7 transition duration-500 hover:border-white/30 hover:bg-[#0c0c0c] ${
                size === "large" ? "min-h-80 md:min-h-96" : "min-h-56"
              } ${id === "email" ? "md:col-span-2" : ""}`}
            >
              <div className="scope-grid absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-35" />
              <div className="relative flex w-full flex-col">
                <div className="flex items-start justify-between">
                  <span className="grid size-12 place-items-center rounded-full border border-white/14">
                    <Icon className="size-5 text-white/60" />
                  </span>
                  <span className="flex items-center gap-2 font-mono text-[0.54rem] tracking-[0.15em] text-white/26">
                    0{index + 1}
                    <ArrowUpRight className="size-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
                <div className="mt-auto pt-16">
                  <p className="eyebrow">{t(`${id}.eyebrow`)}</p>
                  <h2 className="mt-3 text-4xl font-light tracking-[-0.04em] sm:text-5xl">
                    {t(`${id}.title`)}
                  </h2>
                  <p className="mt-4 max-w-lg text-sm leading-6 text-white/42">
                    {t(`${id}.description`)}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
