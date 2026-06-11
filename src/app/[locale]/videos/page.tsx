import { getTranslations, setRequestLocale } from "next-intl/server";

import { PageHero } from "@/components/layout/PageHero";
import { VideoGrid } from "@/components/videos/VideoGrid";
import type { AppLocale } from "@/i18n/routing";
import { createPageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.videos" });

  return createPageMetadata({
    locale,
    title: t("title"),
    description: t("description"),
    path: "/videos",
  });
}

export default async function VideosPage({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("videos.page");

  return (
    <>
      <PageHero
        code="OBS / 09"
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
      />
      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
            <p className="eyebrow">{t("archive")}</p>
            <p className="font-mono text-[0.58rem] tracking-[0.15em] text-white/28">
              {t("manual")}
            </p>
          </div>
          <VideoGrid />
        </div>
      </section>
    </>
  );
}
