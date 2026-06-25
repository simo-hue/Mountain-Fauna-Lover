import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { routing } from "@/i18n/routing";

const routes = [
  "",
  "/founder",
  "/digiscoping",
  "/videos",
  "/gear",
  "/collaboration",
  "/links",
  "/privacy",
  "/cookies",
] as const;

// Stable revision marker. Bump this when site content materially changes so
// <lastmod> stays honest instead of resetting to the build time on every
// unrelated deploy (which trains crawlers to ignore the signal).
const LAST_CONTENT_REVISION = new Date("2026-06-25");

export default function sitemap(): MetadataRoute.Sitemap {
  return routing.locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${siteConfig.siteUrl}/${locale}${route}`,
      lastModified: LAST_CONTENT_REVISION,
      changeFrequency:
        route === "" || route === "/videos"
          ? ("weekly" as const)
          : ("monthly" as const),
      priority: route === "" ? 1 : route === "/videos" ? 0.9 : 0.7,
      alternates: {
        languages: {
          en: `${siteConfig.siteUrl}/en${route}`,
          it: `${siteConfig.siteUrl}/it${route}`,
          "x-default": `${siteConfig.siteUrl}/it${route}`,
        },
      },
    })),
  );
}
