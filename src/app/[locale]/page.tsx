import { getTranslations, setRequestLocale } from "next-intl/server";

import { LogoPortalIntro } from "@/components/cinematic/LogoPortalIntro";
import { CollaborationPreview } from "@/components/sections/CollaborationPreview";
import { DigiscopingPreview } from "@/components/sections/DigiscopingPreview";
import { FeaturedVideosPreview } from "@/components/sections/FeaturedVideosPreview";
import { FounderPreview } from "@/components/sections/FounderPreview";
import { GearPreview } from "@/components/sections/GearPreview";
import { HeroSection } from "@/components/sections/HeroSection";
import { IdentityStatement } from "@/components/sections/IdentityStatement";
import { StatsSection } from "@/components/sections/StatsSection";
import { StructuredData } from "@/components/seo/StructuredData";
import type { AppLocale } from "@/i18n/routing";
import { createPageMetadata } from "@/lib/metadata";

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

  return (
    <>
      <StructuredData />
      <LogoPortalIntro />
      <HeroSection />
      <IdentityStatement />
      <FeaturedVideosPreview />
      <DigiscopingPreview />
      <FounderPreview />
      <GearPreview />
      <StatsSection />
      <CollaborationPreview />
    </>
  );
}
