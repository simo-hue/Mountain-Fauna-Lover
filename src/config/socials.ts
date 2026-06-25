export const socials = {
  youtube: "https://www.youtube.com/@mountainfaunalover",
  // Permanent channel-ID URL — more durable than the @handle for entity binding.
  youtubeChannel:
    "https://www.youtube.com/channel/UCRJjOhCK-bv6DzMCMaGPbiw",
  youtubeChannelId: "UCRJjOhCK-bv6DzMCMaGPbiw",
  instagram: "https://www.instagram.com/mountainfaunalover",
  tiktok: "https://www.tiktok.com/@mountainfaunalover",
  linkedin: "https://www.linkedin.com/in/simonemattioli2003/",
  website: "https://simo-hue.github.io",
  github: "https://github.com/simo-hue",
} as const;

export const socialLinks = [
  { id: "youtube", href: socials.youtube, featured: true },
  { id: "instagram", href: socials.instagram, featured: true },
  { id: "tiktok", href: socials.tiktok, featured: false },
  { id: "linkedin", href: socials.linkedin, featured: false },
] as const;
