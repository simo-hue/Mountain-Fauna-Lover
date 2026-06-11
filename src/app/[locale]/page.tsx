import { getTranslations, setRequestLocale } from "next-intl/server";

import { BrandMark } from "@/components/ui/BrandMark";
import { createPageMetadata } from "@/lib/metadata";
import type { AppLocale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.home" });

  return createPageMetadata({
    locale,
    title: t("title"),
    description: t("description"),
  });
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");

  return (
    <section className="relative grid min-h-dvh place-items-center overflow-hidden px-6 text-center">
      <div className="absolute inset-0 bg-[url('/images/backgrounds/alpine-night.jpg')] bg-cover bg-center opacity-45" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#030303]" />
      <div className="relative z-10 max-w-4xl">
        <BrandMark className="mx-auto mb-8 size-24 text-white/80" />
        <p className="eyebrow mb-5">{t("mode")}</p>
        <h1 className="text-5xl leading-[0.95] font-light tracking-[-0.055em] text-balance sm:text-7xl lg:text-8xl">
          {t("hero.title")}
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
          {t("hero.description")}
        </p>
      </div>
    </section>
  );
}
