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
  const { graph, trail } = await buildPageSeo({
    locale,
    path: "/cookies",
    metaNamespace: "metadata.cookies",
    labelKey: "footer.cookies",
  });
  const keys = [
    "essential",
    "language",
    "analytics",
    "sound",
    "control",
  ] as const;

  return (
    <>
      <JsonLd data={graph} />
      <PageHero
        code="LEGAL / 02"
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
