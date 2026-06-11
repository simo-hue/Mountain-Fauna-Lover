export const siteConfig = {
  name: "Mountain Fauna Lover",
  founder: "Mattioli Simone",
  email: "mattioli.simone.10@gmail.com",
  locations: ["Trentino-Alto Adige", "Val di Rabbi", "Stelvio National Park"],
  heroPhrase: {
    en: "Through my lens, a 360° journey into the wild heart of the Alps.",
    it: "Attraverso la mia lente, un viaggio a 360° nel cuore selvaggio delle Alpi.",
  },
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://mountainfaunalover.vercel.app",
} as const;
