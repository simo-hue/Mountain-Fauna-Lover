import { siteConfig } from "@/config/site";
import { socials } from "@/config/socials";
import type { AppLocale } from "@/i18n/routing";

/**
 * Centralised Schema.org / JSON-LD graph builders.
 *
 * Every node carries a stable `@id` so search engines and answer engines merge
 * the same entity across pages into one confident record. The graph is anchored
 * in Italian — the primary audience, video language and target geo queries
 * (Parco Nazionale dello Stelvio, Val di Rabbi, Trentino-Alto Adige) are Italian.
 */

type JsonLdNode = Record<string, unknown>;

const { siteUrl } = siteConfig;

export const schemaIds = {
  website: `${siteUrl}/#website`,
  organization: `${siteUrl}/#organization`,
  person: `${siteUrl}/#person`,
  logo: `${siteUrl}/#logo`,
  valDiRabbi: `${siteUrl}/#place-val-di-rabbi`,
  stelvio: `${siteUrl}/#place-stelvio`,
  trentino: `${siteUrl}/#place-trentino`,
} as const;

/** BCP-47 language tag used by schema `inLanguage`. */
const langTag = (locale: AppLocale): string => (locale === "it" ? "it-IT" : "en-US");

export function absoluteUrl(path = ""): string {
  return `${siteUrl}${path}`;
}

export function localeUrl(locale: AppLocale, path = ""): string {
  return `${siteUrl}/${locale}${path}`;
}

export type FaqItem = { q: string; a: string };
export type BreadcrumbTrailItem = { name: string; path: string };
export type ResolvedVideo = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  watchUrl: string;
  embedUrl: string | null;
  category: string;
  uploadDate: string | null;
  duration: string | null;
};

/* -------------------------------------------------------------------------- */
/* Geographic anchors                                                          */
/* -------------------------------------------------------------------------- */

export function placeNodes(): JsonLdNode[] {
  const { valDiRabbi, stelvio, trentino } = siteConfig.places;

  return [
    {
      "@type": "AdministrativeArea",
      "@id": schemaIds.trentino,
      name: trentino.name,
      containedInPlace: { "@type": "Country", name: "Italia" },
    },
    {
      "@type": "Place",
      "@id": schemaIds.valDiRabbi,
      name: valDiRabbi.name,
      geo: {
        "@type": "GeoCoordinates",
        latitude: valDiRabbi.latitude,
        longitude: valDiRabbi.longitude,
      },
      containedInPlace: { "@id": schemaIds.trentino },
    },
    {
      "@type": ["Place", "Park"],
      "@id": schemaIds.stelvio,
      name: stelvio.name,
      alternateName: stelvio.nameEn,
      geo: {
        "@type": "GeoCoordinates",
        latitude: stelvio.latitude,
        longitude: stelvio.longitude,
      },
      containedInPlace: { "@id": schemaIds.trentino },
    },
  ];
}

/* -------------------------------------------------------------------------- */
/* Core entities (Person, Organization/Brand, WebSite)                         */
/* -------------------------------------------------------------------------- */

export function personNode(locale: AppLocale): JsonLdNode {
  return {
    "@type": "Person",
    "@id": schemaIds.person,
    name: siteConfig.founder,
    alternateName: "Simone Mattioli",
    url: localeUrl(locale, "/founder"),
    image: absoluteUrl("/images/founder/founder.jpeg"),
    description:
      locale === "it"
        ? "Appassionato di montagna e fauna selvatica del Trentino-Alto Adige. Documenta la natura alpina con digiscoping, sci, e-bike e video cinematografici."
        : "Mountain and wildlife enthusiast from Trentino-Alto Adige documenting alpine nature through digiscoping, skiing, e-bike exploration and cinematic video.",
    knowsLanguage: ["it", "en"],
    knowsAbout: siteConfig.topics,
    homeLocation: { "@id": schemaIds.valDiRabbi },
    worksFor: { "@id": schemaIds.organization },
    sameAs: [socials.linkedin, socials.github, socials.website],
  };
}

export function organizationNode(locale: AppLocale): JsonLdNode {
  return {
    "@type": ["Organization", "Brand"],
    "@id": schemaIds.organization,
    name: siteConfig.name,
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      "@id": schemaIds.logo,
      url: absoluteUrl("/logo/mountain-fauna-logo-v2.webp"),
      contentUrl: absoluteUrl("/logo/mountain-fauna-logo-v2.webp"),
      caption: siteConfig.name,
    },
    image: { "@id": schemaIds.logo },
    description:
      locale === "it"
        ? "Osservazione della fauna, digiscoping e racconti cinematografici delle Alpi dal Trentino-Alto Adige, tra Val di Rabbi e Parco Nazionale dello Stelvio."
        : "Wildlife observation, digiscoping and cinematic alpine stories from Trentino-Alto Adige, between Val di Rabbi and Stelvio National Park.",
    slogan: siteConfig.heroPhrase[locale],
    founder: { "@id": schemaIds.person },
    foundingDate: "2022-07-28",
    foundingLocation: { "@id": schemaIds.valDiRabbi },
    areaServed: siteConfig.areaServed.map((name) => ({ "@type": "Place", name })),
    knowsAbout: siteConfig.topics,
    sameAs: [
      socials.youtube,
      socials.youtubeChannel,
      socials.instagram,
      socials.tiktok,
    ],
  };
}

export function websiteNode(): JsonLdNode {
  return {
    "@type": "WebSite",
    "@id": schemaIds.website,
    url: siteUrl,
    name: siteConfig.name,
    inLanguage: ["it-IT", "en-US"],
    publisher: { "@id": schemaIds.organization },
    about: { "@id": schemaIds.organization },
    copyrightHolder: { "@id": schemaIds.organization },
    creator: { "@id": schemaIds.person },
  };
}

/** The entity graph that appears on every page so each is self-describing. */
export function coreEntityNodes(locale: AppLocale): JsonLdNode[] {
  return [
    websiteNode(),
    organizationNode(locale),
    personNode(locale),
    ...placeNodes(),
  ];
}

/* -------------------------------------------------------------------------- */
/* Page-level nodes                                                            */
/* -------------------------------------------------------------------------- */

export function webPageNode({
  locale,
  path = "",
  title,
  description,
  isProfile = false,
}: {
  locale: AppLocale;
  path?: string;
  title: string;
  description: string;
  isProfile?: boolean;
}): JsonLdNode {
  const url = localeUrl(locale, path);

  return {
    "@type": isProfile ? "ProfilePage" : "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    inLanguage: langTag(locale),
    isPartOf: { "@id": schemaIds.website },
    about: { "@id": isProfile ? schemaIds.person : schemaIds.organization },
    primaryImageOfPage: absoluteUrl("/images/og/og-image.jpg"),
    ...(isProfile ? { mainEntity: { "@id": schemaIds.person } } : {}),
  };
}

export function breadcrumbNode({
  locale,
  trail,
}: {
  locale: AppLocale;
  trail: BreadcrumbTrailItem[];
}): JsonLdNode {
  const last = trail[trail.length - 1];

  return {
    "@type": "BreadcrumbList",
    "@id": `${localeUrl(locale, last.path)}#breadcrumb`,
    itemListElement: trail.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: localeUrl(locale, item.path),
    })),
  };
}

export function faqPageNode({
  locale,
  path,
  items,
}: {
  locale: AppLocale;
  path: string;
  items: FaqItem[];
}): JsonLdNode {
  return {
    "@type": "FAQPage",
    "@id": `${localeUrl(locale, path)}#faq`,
    inLanguage: langTag(locale),
    isPartOf: { "@id": `${localeUrl(locale, path)}#webpage` },
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function videoNodes({
  locale,
  videos,
}: {
  locale: AppLocale;
  videos: ResolvedVideo[];
}): JsonLdNode[] {
  const objects: JsonLdNode[] = videos.map((video) => {
    const node: JsonLdNode = {
      "@type": "VideoObject",
      "@id": `${siteUrl}/#video-${video.id}`,
      name: video.title,
      description: video.description,
      thumbnailUrl: video.thumbnail,
      inLanguage: "it-IT",
      isFamilyFriendly: true,
      genre: video.category,
      creator: { "@id": schemaIds.person },
      publisher: { "@id": schemaIds.organization },
      contentLocation: { "@id": schemaIds.valDiRabbi },
      url: localeUrl(locale, "/videos"),
    };
    if (video.embedUrl) {
      node.embedUrl = video.embedUrl;
      node.contentUrl = video.watchUrl;
    }
    // uploadDate is required for video rich results — emitted only when real.
    if (video.uploadDate) node.uploadDate = video.uploadDate;
    if (video.duration) node.duration = video.duration;
    return node;
  });

  const itemList: JsonLdNode = {
    "@type": "ItemList",
    "@id": `${localeUrl(locale, "/videos")}#itemlist`,
    name: siteConfig.name,
    numberOfItems: videos.length,
    itemListElement: videos.map((video, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: { "@id": `${siteUrl}/#video-${video.id}` },
    })),
  };

  return [itemList, ...objects];
}

/* -------------------------------------------------------------------------- */
/* Graph assembly                                                              */
/* -------------------------------------------------------------------------- */

export function buildGraph(nodes: JsonLdNode[]): JsonLdNode {
  return { "@context": "https://schema.org", "@graph": nodes };
}

/** Convenience: core entities + WebPage (+ optional breadcrumb / FAQ / extras). */
export function pageGraph({
  locale,
  path = "",
  title,
  description,
  breadcrumb,
  faqItems,
  isProfile = false,
  extraNodes,
}: {
  locale: AppLocale;
  path?: string;
  title: string;
  description: string;
  breadcrumb?: BreadcrumbTrailItem[];
  faqItems?: FaqItem[];
  isProfile?: boolean;
  extraNodes?: JsonLdNode[];
}): JsonLdNode {
  const nodes: JsonLdNode[] = [
    ...coreEntityNodes(locale),
    webPageNode({ locale, path, title, description, isProfile }),
  ];

  if (breadcrumb && breadcrumb.length > 1) {
    nodes.push(breadcrumbNode({ locale, trail: breadcrumb }));
  }
  if (faqItems && faqItems.length > 0) {
    nodes.push(faqPageNode({ locale, path, items: faqItems }));
  }
  if (extraNodes && extraNodes.length > 0) {
    nodes.push(...extraNodes);
  }

  return buildGraph(nodes);
}
