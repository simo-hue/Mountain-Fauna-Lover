import { getTranslations, setRequestLocale } from "next-intl/server";

import { PageHero } from "@/components/layout/PageHero";
import { LegalDocument } from "@/components/ui/LegalDocument";
import type { AppLocale } from "@/i18n/routing";
import { createPageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.cookies" });
  return createPageMetadata({
    locale,
    title: t("title"),
    description: t("description"),
    path: "/cookies",
  });
}

export default async function CookiesPage({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("cookies");
  const keys = [
    "essential",
    "language",
    "analytics",
    "sound",
    "control",
  ] as const;

  return (
    <>
      <PageHero
        code="LEGAL / 02"
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
        compact
      />
      <LegalDocument
        updated={t("updated")}
        recordLabel={t("record")}
        sections={keys.map((key) => ({
          title: t(`sections.${key}.title`),
          body: t(`sections.${key}.body`),
        }))}
      />
    </>
  );
}
