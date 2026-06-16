# Owner Actions

Before production launch:

1. Copy `.env.example` to `.env.local` locally and configure the same values in Vercel.
2. Set `NEXT_PUBLIC_SITE_URL` to the final production domain.
3. Set the following env vars **in Vercel** (Project → Settings → Environment Variables):
   - `RESEND_API_KEY` — your Resend API key
   - `CONTACT_FROM_EMAIL` — set to `onboarding@resend.dev` (free tier) or `Mountain Fauna Lover <contact@yourdomain.com>` (with verified domain)
   - `CONTACT_TO_EMAIL` — must match your Resend account email (`deerfaunalover@gmail.com`) unless you verify a custom domain
4. Replace the nine entries in `src/config/videos.ts` with real YouTube IDs/URLs and replace `public/images/videos/video-01.jpg` through `video-09.jpg`.
5. Update the manual follower/subscriber values in `src/config/stats.ts`.
6. Replace placeholder gear names/details in `src/config/gear.ts` and add exact gear images if desired.
7. Replace `public/audio/alpine-ambience.mp3` with a final licensed or original alpine ambience recording if desired.
8. Replace the lightweight generated `public/videos/hero-fog.mp4` and `public/videos/alpine-background.mp4` placeholders with final compressed footage if available.
9. Replace the generated hero/OG imagery with final commissioned assets if available.

---

- [ ] Generare un logo di più qualità;
- [ ] Inserire i Video che voglio salvare;
- [ ] Tengo audio nel footer;
- [ ] inserire le mie immagini;
- [ ] video defender da spostare dalla home;
- [ ] test responsiveness da mobile;
- [ ] A linktree like page for my useful links;