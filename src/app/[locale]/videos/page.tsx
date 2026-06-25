import { getTranslations, setRequestLocale } from "next-intl/server";

import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { VideoGrid } from "@/components/videos/VideoGrid";
import { featuredVideos } from "@/config/videos";
import type { AppLocale } from "@/i18n/routing";
import { createPageMetadata } from "@/lib/metadata";
import { buildPageSeo } from "@/lib/page-seo";
import { videoNodes, type ResolvedVideo } from "@/lib/schema";

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
  const tv = await getTranslations("videos");

  const resolvedVideos: ResolvedVideo[] = featuredVideos.map((video) => ({
    id: video.id,
    title: tv(video.titleKey),
    description: tv(video.descriptionKey),
    thumbnail: video.thumbnail,
    watchUrl: video.youtubeUrl,
    embedUrl: video.youtubeId
      ? `https://www.youtube-nocookie.com/embed/${video.youtubeId}`
      : null,
    category: tv(`categories.${video.category}`),
    uploadDate: video.uploadDate,
    duration: video.duration,
  }));

  const { graph, trail } = await buildPageSeo({
    locale,
    path: "/videos",
    metaNamespace: "metadata.videos",
    labelKey: "nav.videos",
    extraNodes: videoNodes({ locale, videos: resolvedVideos }),
  });

  return (
    <>
      <JsonLd data={graph} />
      <PageHero
        code="OBS / 09"
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
        breadcrumb={<Breadcrumbs trail={trail} />}
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
