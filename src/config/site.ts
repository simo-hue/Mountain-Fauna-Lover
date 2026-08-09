/**
 * The origin this site is actually served from in production.
 *
 * Every canonical, hreflang alternate, og:image, sitemap <loc>, robots Host and
 * JSON-LD `@id` is derived from this value, so a wrong origin does not degrade
 * the site — it invalidates its entire machine-readable identity at once.
 */
const PRODUCTION_SITE_URL = "https://mountain-fauna-lover.vercel.app";

const LOOPBACK_ORIGIN = /^https?:\/\/(localhost|127\.0\.0\.1|\[::1\])(:\d+)?$/i;

/**
 * Resolve the canonical origin, refusing to emit a loopback address in a
 * production build.
 *
 * A loopback origin is correct in development and catastrophic in production:
 * `http://localhost:3000/#person` is a non-resolvable IRI, and it is also the
 * default any misconfigured Next.js deployment mints — so two unrelated sites
 * shipping this bug would be merged onto one bogus entity node by any consumer
 * that reconciles on `@id`.
 *
 * This deliberately self-heals rather than throwing. Failing the build would
 * surface the misconfiguration louder, but it would also block deploys until an
 * environment variable outside this repo is corrected; emitting the right URL
 * and warning gets production correct immediately either way.
 */
function resolveSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/+$/, "");

  if (process.env.NODE_ENV !== "production") {
    return configured || "http://localhost:3000";
  }

  if (!configured || LOOPBACK_ORIGIN.test(configured)) {
    console.warn(
      `[siteConfig] NEXT_PUBLIC_SITE_URL is ${
        configured ? `a loopback origin (${configured})` : "unset"
      } in a production build. Falling back to ${PRODUCTION_SITE_URL}. ` +
        "Set NEXT_PUBLIC_SITE_URL to the real origin in the Vercel project settings.",
    );
    return PRODUCTION_SITE_URL;
  }

  return configured;
}

export const siteConfig = {
  name: "Mountain Fauna Lover",
  founder: "Mattioli Simone",
  email: "deerfaunalover@gmail.com",
  locations: ["Trentino-Alto Adige", "Val di Rabbi", "Stelvio National Park"],
  heroPhrase: {
    en: "Through my lens, a 360° journey into the wild heart of the Alps.",
    it: "Un viaggio a 360° nel cuore selvaggio delle Alpi.",
  },
  siteUrl: resolveSiteUrl(),

  // Italian is the primary entity language: the audience, the videos and the
  // target geographic queries (Stelvio, Val di Rabbi, Trentino) are all Italian.
  primaryLocale: "it",
  locales: ["it", "en"],

  // Short, query-shaped knowsAbout / topical anchors used across schema.
  topics: [
    "Digiscoping",
    "Wildlife observation",
    "Alpine wildlife",
    "Trentino-Alto Adige",
    "Val di Rabbi",
    "Parco Nazionale dello Stelvio",
    "Ski mountaineering",
    "E-bike exploration",
    "Cinematic nature video",
  ],

  // Geographic anchors for Place / GeoCoordinates schema. Coordinates are the
  // brand's stated operating area (mirrors the figure shown on the site) and a
  // well-known centroid for the national park — approximate but correct in place.
  places: {
    valDiRabbi: {
      name: "Val di Rabbi",
      type: "Place" as const,
      latitude: 46.4017,
      longitude: 10.67,
      containedIn: "Trentino-Alto Adige",
    },
    stelvio: {
      name: "Parco Nazionale dello Stelvio",
      nameEn: "Stelvio National Park",
      type: "Park" as const,
      latitude: 46.5283,
      longitude: 10.4545,
      containedIn: "Trentino-Alto Adige",
    },
    trentino: {
      name: "Trentino-Alto Adige",
      type: "AdministrativeArea" as const,
      containedIn: "Italia",
    },
  },

  // Where the brand is active — used for areaServed / spatialCoverage.
  areaServed: [
    "Val di Rabbi",
    "Parco Nazionale dello Stelvio",
    "Trentino-Alto Adige",
    "Alpi",
    "Italia",
  ],
} as const;
