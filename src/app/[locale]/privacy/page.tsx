import { getTranslations, setRequestLocale } from "next-intl/server";

import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { LegalDocument } from "@/components/ui/LegalDocument";
import type { AppLocale } from "@/i18n/routing";
import { createPageMetadata } from "@/lib/metadata";
import { buildPageSeo } from "@/lib/page-seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.privacy" });
  return createPageMetadata({
    locale,
    title: t("title"),
    description: t("description"),
    path: "/privacy",
  });
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("privacy");
  const { graph, trail } = await buildPageSeo({
    locale,
    path: "/privacy",
    metaNamespace: "metadata.privacy",
    labelKey: "footer.privacy",
  });
  const keys = [
    "controller",
    "contact",
    "analytics",
    "retention",
    "rights",
    "security",
  ] as const;

  return (
    <>
      <JsonLd data={graph} />
      <PageHero
        code="LEGAL / 01"
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
        compact
        breadcrumb={<Breadcrumbs trail={trail} />}
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
