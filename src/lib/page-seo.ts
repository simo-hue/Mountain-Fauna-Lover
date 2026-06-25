import { getTranslations } from "next-intl/server";

import type { AppLocale } from "@/i18n/routing";
import {
  pageGraph,
  type BreadcrumbTrailItem,
  type FaqItem,
} from "./schema";

type JsonLdNode = Record<string, unknown>;

/**
 * Assembles a page's JSON-LD graph and its breadcrumb trail from a single
 * translations read. `metaNamespace` is e.g. "metadata.founder", `labelKey` is
 * the breadcrumb label key (e.g. "nav.founder" or "footer.privacy"), and
 * `faqNamespace` (optional) points at the FAQ block to fold into FAQPage schema.
 */
export async function buildPageSeo({
  locale,
  path,
  metaNamespace,
  labelKey,
  faqNamespace,
  isProfile = false,
  extraNodes,
}: {
  locale: AppLocale;
  path: string;
  metaNamespace: string;
  labelKey: string;
  faqNamespace?: string;
  isProfile?: boolean;
  extraNodes?: JsonLdNode[];
}): Promise<{ graph: JsonLdNode; trail: BreadcrumbTrailItem[] }> {
  const t = await getTranslations();

  const trail: BreadcrumbTrailItem[] = [
    { name: t("breadcrumb.home"), path: "" },
    { name: t(labelKey), path },
  ];

  const faqItems = faqNamespace
    ? (t.raw(`${faqNamespace}.items`) as FaqItem[])
    : undefined;

  const graph = pageGraph({
    locale,
    path,
    title: t(`${metaNamespace}.title`),
    description: t(`${metaNamespace}.description`),
    isProfile,
    breadcrumb: trail,
    faqItems,
    extraNodes,
  });

  return { graph, trail };
}
