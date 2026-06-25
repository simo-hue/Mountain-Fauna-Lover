export const siteConfig = {
  name: "Mountain Fauna Lover",
  founder: "Mattioli Simone",
  email: "deerfaunalover@gmail.com",
  locations: ["Trentino-Alto Adige", "Val di Rabbi", "Stelvio National Park"],
  heroPhrase: {
    en: "Through my lens, a 360° journey into the wild heart of the Alps.",
    it: "Un viaggio a 360° nel cuore selvaggio delle Alpi.",
  },
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://mountainfaunalover.vercel.app",

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
