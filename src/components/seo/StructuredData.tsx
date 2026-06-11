import { siteConfig } from "@/config/site";
import { socials } from "@/config/socials";

export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.siteUrl}/#website`,
        url: siteConfig.siteUrl,
        name: siteConfig.name,
        inLanguage: ["en", "it"],
      },
      {
        "@type": ["Organization", "Brand"],
        "@id": `${siteConfig.siteUrl}/#brand`,
        name: siteConfig.name,
        url: siteConfig.siteUrl,
        logo: `${siteConfig.siteUrl}/logo/mountain-fauna-logo.png`,
        founder: { "@id": `${siteConfig.siteUrl}/#founder` },
        sameAs: [socials.youtube, socials.instagram, socials.tiktok],
      },
      {
        "@type": "Person",
        "@id": `${siteConfig.siteUrl}/#founder`,
        name: siteConfig.founder,
        image: `${siteConfig.siteUrl}/images/founder/founder.jpeg`,
        homeLocation: {
          "@type": "AdministrativeArea",
          name: "Trentino-Alto Adige",
        },
        url: `${siteConfig.siteUrl}/en/founder`,
        sameAs: [socials.linkedin],
        knowsAbout: [
          "Wildlife observation",
          "Digiscoping",
          "Alpine exploration",
          "Skiing",
          "E-bike",
          "Cinematic video",
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
