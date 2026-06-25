import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

// Answer-engine crawlers — both live-retrieval/citation bots and training bots.
// Explicitly welcomed so Mountain Fauna Lover is visible to ChatGPT, Perplexity,
// Gemini, Claude and Copilot. The on-site text is promotional, so there is no
// downside to full access.
const aiBots = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "anthropic-ai",
  "Claude-Web",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
  "Bytespider",
  "Amazonbot",
  "Meta-ExternalAgent",
  "cohere-ai",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: aiBots, allow: "/" },
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
    ],
    sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
    host: siteConfig.siteUrl,
  };
}
