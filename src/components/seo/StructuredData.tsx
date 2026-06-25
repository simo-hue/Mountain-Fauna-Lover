import { getTranslations } from "next-intl/server";

import type { AppLocale } from "@/i18n/routing";
import { pageGraph, type FaqItem } from "@/lib/schema";

import { JsonLd } from "./JsonLd";

/**
 * Home-page JSON-LD: the full entity graph (WebSite + Organization/Brand +
 * Person + Places) plus the WebPage and the home FAQ, anchored in the active
 * locale. Reads the same message keys the visible FAQ renders, so they stay in
 * sync without prop threading.
 */
export async function StructuredData({ locale }: { locale: AppLocale }) {
  const tMeta = await getTranslations({ locale, namespace: "metadata.home" });
  const tFaq = await getTranslations({ locale, namespace: "faq.home" });
  const faqItems = tFaq.raw("items") as FaqItem[];

  return (
    <JsonLd
      data={pageGraph({
        locale,
        path: "",
        title: tMeta("title"),
        description: tMeta("description"),
        faqItems,
      })}
    />
  );
}
