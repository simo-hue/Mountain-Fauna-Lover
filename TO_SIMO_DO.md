# Owner Actions

Before production launch:

1. Copy `.env.example` to `.env.local` locally and configure the same values in Vercel.
2. Set `NEXT_PUBLIC_SITE_URL` to the final production domain.
3. Create a Resend API key, verify the sender domain, and set `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, and `CONTACT_TO_EMAIL`.
4. Replace the nine entries in `src/config/videos.ts` with real YouTube IDs/URLs and replace `public/images/videos/video-01.jpg` through `video-09.jpg`.
5. Update the manual follower/subscriber values in `src/config/stats.ts`.
6. Replace placeholder gear names/details in `src/config/gear.ts` and add exact gear images if desired.
7. Add `public/audio/alpine-ambience.mp3` to enable the optional ambience control.
8. Optionally add compressed `public/videos/hero-fog.mp4` and `public/videos/alpine-background.mp4` if video backgrounds are adopted later.
9. Replace the generated hero/OG imagery with final commissioned assets if available.
