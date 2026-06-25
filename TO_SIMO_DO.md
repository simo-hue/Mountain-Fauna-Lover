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
- [ ] tradurre nuovo copy IT -> ENG;

---

## SEO / GEO — Owner Actions (off-site, only you can do these)

The on-site work is done and verified (schema, FAQ, breadcrumbs, llms.txt, robots,
sitemap, metadata, Core Web Vitals). These remaining steps need account access.

### 2. Social profile consistency + sameAs (biggest entity signal, cheap)
- [ ] Use the **exact same display name** on every channel. Your YouTube channel currently
      shows **"Mountain & Fauna Lover"** (with `&`) while the brand is **"Mountain Fauna
      Lover"**. Pick one and align YouTube, Instagram, TikTok, LinkedIn to it.
- [ ] Put the website URL in **every** profile's bio/links field.
- [ ] Confirm the exact profile URLs so I can finalise the `sameAs` graph in
      `src/components/seo/StructuredData.tsx` / `src/lib/schema.ts`.

### 3. Wikidata item (knowledge-graph / LLM entity record)
- [ ] Create an account at https://www.wikidata.org and add a new item:
      - Label: `Mountain Fauna Lover` · Description (it): `progetto di osservazione della
        fauna alpina e digiscoping di Mattioli Simone`.
      - Statements: `instance of (P31)` → website/creator; `country (P17)` → Italy;
        `located in (P131)` → Trentino-Alto Adige; `official website (P856)` → the site URL;
        `YouTube channel ID (P2397)` → `UCRJjOhCK-bv6DzMCMaGPbiw`, plus Instagram/TikTok IDs;
        `inception (P571)` → `2022-07-28`.
- [ ] Send me the Wikidata Q-ID so I can add it to the entity `sameAs`.

### 5. Video metadata (unlocks video rich results)
- [ ] In `src/config/videos.ts`, fill the real `uploadDate` (`YYYY-MM-DD`) and `duration`
      (`PT#M#S`) for each of the 9 videos. The `VideoObject` schema is already wired; Google
      requires `uploadDate` to show video rich results, so these are currently emitted without
      it.
- [ ] **Data bug to fix:** `video-01` and `video-04` both point to the same YouTube ID
      (`wQrx2422wD8`). Give me the correct ID for one of them.