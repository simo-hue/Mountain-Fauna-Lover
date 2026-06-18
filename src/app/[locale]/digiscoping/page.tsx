import { Eye, Pause, ShieldCheck } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { ScopeStudy } from "@/components/cinematic/ScopeStudy";
import { PageHero } from "@/components/layout/PageHero";
import { ArrowLink } from "@/components/ui/ArrowLink";
import type { AppLocale } from "@/i18n/routing";
import { createPageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "metadata.digiscoping",
  });

  return createPageMetadata({
    locale,
    title: t("title"),
    description: t("description"),
    path: "/digiscoping",
  });
}

export default async function DigiscopingPage({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("digiscoping");
  const principles = [
    { icon: Eye, key: "distance" },
    { icon: Pause, key: "patience" },
    { icon: ShieldCheck, key: "respect" },
  ] as const;

  return (
    <>
      <PageHero
        code="OPTICS / 60×"
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
      />

      <section className="px-5 py-24 sm:px-8 sm:py-36">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="eyebrow">{t("meaning.eyebrow")}</p>
            <h2 className="mt-5 text-4xl leading-[1.02] font-light tracking-[-0.045em] sm:text-6xl">
              {t("meaning.title")}
            </h2>
          </div>
          <div className="space-y-7 text-base leading-8 text-white/56 lg:pt-12">
            <p>{t("meaning.p1")}</p>
            <p>{t("meaning.p2")}</p>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-7xl">
          <ScopeStudy />
        </div>

        <div className="mx-auto mt-10 grid max-w-7xl gap-px overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/10 md:grid-cols-3">
          {principles.map(({ icon: Icon, key }, index) => (
            <article key={key} className="bg-[#070707] p-7 sm:p-9">
              <div className="flex items-center justify-between">
                <Icon className="size-5 text-white/45" />
                <span className="font-mono text-[0.54rem] text-white/20">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-14 text-2xl font-light">
                {t(`principles.${key}.title`)}
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/43">
                {t(`principles.${key}.description`)}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/8 bg-[#070707] px-5 py-28 sm:px-8 sm:py-40">
        <div className="absolute inset-0 bg-[url('/images/backgrounds/fog-mountain.webp')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative mx-auto max-w-7xl">
          <p className="eyebrow">{t("respect.eyebrow")}</p>
          <h2 className="mt-6 max-w-[10ch] text-[clamp(4rem,10vw,9rem)] leading-[0.86] font-light tracking-[-0.065em] text-balance">
            {t("respect.title")}
          </h2>
          <p className="mt-8 max-w-xl text-sm leading-7 text-white/50">
            {t("respect.description")}
          </p>
          <ArrowLink href="/videos" className="mt-9">
            {t("respect.cta")}
          </ArrowLink>
        </div>
      </section>
    </>
  );
}
