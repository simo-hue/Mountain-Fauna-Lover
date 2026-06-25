import type { Metadata } from "next";

import type { AppLocale } from "@/i18n/routing";
import { siteConfig } from "@/config/site";

type MetadataInput = {
  locale: AppLocale;
  title: string;
  description: string;
  path?: string;
};

export function createPageMetadata({
  locale,
  title,
  description,
  path = "",
}: MetadataInput): Metadata {
  const canonical = `${siteConfig.siteUrl}/${locale}${path}`;

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical,
      languages: {
        en: `${siteConfig.siteUrl}/en${path}`,
        it: `${siteConfig.siteUrl}/it${path}`,
        // Italian is the primary entity language; it is the x-default fallback.
        "x-default": `${siteConfig.siteUrl}/it${path}`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: locale === "it" ? "it_IT" : "en_US",
      alternateLocale: locale === "it" ? ["en_US"] : ["it_IT"],
      type: "website",
      images: [
        {
          url: "/images/og/og-image.jpg",
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/og/og-image.jpg"],
    },
  };
}
