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

export default function sitemap(): MetadataRoute.Sitemap {
  return routing.locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${siteConfig.siteUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency:
        route === "" || route === "/videos"
          ? ("weekly" as const)
          : ("monthly" as const),
      priority: route === "" ? 1 : route === "/videos" ? 0.9 : 0.7,
      alternates: {
        languages: {
          en: `${siteConfig.siteUrl}/en${route}`,
          it: `${siteConfig.siteUrl}/it${route}`,
        },
      },
    })),
  );
}
