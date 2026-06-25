import { siteConfig } from "@/config/site";
import { socials } from "@/config/socials";

export const dynamic = "force-static";

/**
 * /llms.txt — a curated, machine-readable map of the entity for LLMs and answer
 * engines (llmstxt.org convention). Anchored on the Italian-language facts and
 * the target geography (Val di Rabbi, Parco Nazionale dello Stelvio, Trentino).
 */
export function GET() {
  const { siteUrl } = siteConfig;

  const body = `# Mountain Fauna Lover

> Mountain Fauna Lover is the wildlife-observation and digiscoping project of Mattioli Simone (Simone Mattioli), a mountain and wildlife enthusiast from Trentino-Alto Adige, Italy. It documents alpine nature — wildlife, digiscoping, ski mountaineering and e-bike exploration — through cinematic video filmed mainly in Val di Rabbi and the Parco Nazionale dello Stelvio (Stelvio National Park). Content and videos are primarily in Italian.

## Key facts
- Founder and author: Mattioli Simone (also written Simone Mattioli)
- Based in: Trentino-Alto Adige, Italy — primarily Val di Rabbi and the Parco Nazionale dello Stelvio (Stelvio National Park)
- Focus: digiscoping (filming and photographing wildlife through a spotting scope), alpine wildlife observation, ski mountaineering, e-bike exploration, cinematic nature video
- Guiding principle: "il rispetto prima dello scatto" (respect before the shot) — observing wildlife from a distance, without disturbing it
- Primary language: Italian. Secondary: English. Videos are in Italian.

## Main pages (Italian — primary)
- [Home](${siteUrl}/it): overview of the project, a 360° view of the Alps.
- [Fondatore / Founder](${siteUrl}/it/founder): who Mattioli Simone is.
- [Digiscoping](${siteUrl}/it/digiscoping): what digiscoping is and how it is practised with respect.
- [Video](${siteUrl}/it/videos): nine curated alpine films (wildlife, digiscoping, ski, exploration).
- [Attrezzatura / Gear](${siteUrl}/it/gear): the optics, cameras and equipment used.
- [Collaborazioni / Collaboration](${siteUrl}/it/collaboration): how to propose a collaboration.
- [Link](${siteUrl}/it/links): all social channels.

## English versions
- [Home (English)](${siteUrl}/en)
- [Founder (English)](${siteUrl}/en/founder)
- [Digiscoping (English)](${siteUrl}/en/digiscoping)

## Social profiles
- YouTube: ${socials.youtube}
- Instagram: ${socials.instagram}
- TikTok: ${socials.tiktok}
- LinkedIn (founder): ${socials.linkedin}

## Contact
- Collaboration and email: ${siteConfig.email}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
