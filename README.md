# Mountain Fauna Lover

A bilingual, cinematic wildlife observation website for **Mountain Fauna Lover**, founded by **Mattioli Simone**. The experience uses a dark alpine visual system, a fog-and-logo portal intro, digiscoping lens interactions, curated films, founder storytelling, gear notes, and a sponsor-ready collaboration flow.

## Stack

- Next.js 15 App Router and React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- React Three Fiber / Three.js
- `next-intl`
- React Hook Form and Zod
- Resend-ready contact route
- Vercel Analytics
- Optional, consent-gated Google Analytics

## Routes

Every public route exists under `/en` and `/it`:

```text
/
/[locale]
/[locale]/founder
/[locale]/digiscoping
/[locale]/videos
/[locale]/gear
/[locale]/collaboration
/[locale]/links
/[locale]/privacy
/[locale]/cookies
/api/contact
```

The root route detects the browser language. Italian browsers are directed to `/it`; all others use `/en`. The language switcher stores the selected locale in the `MFL_LOCALE` cookie.

## Local Setup

Requirements:

- Node.js 20 or newer
- npm

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Available checks:

```bash
npm run format
npm run format:check
npm run lint
npm run typecheck
npm run build
npm run start
```

## Environment Variables

```bash
# Canonical production origin, without a trailing slash
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# Optional. The consent banner appears only when this is configured.
NEXT_PUBLIC_GA_ID=

# Required for live contact delivery
RESEND_API_KEY=
CONTACT_TO_EMAIL=mattioli.simone.10@gmail.com
CONTACT_FROM_EMAIL=Mountain Fauna Lover <contact@your-verified-domain.com>
```

`CONTACT_FROM_EMAIL` must use a domain verified in Resend. Without the Resend variables, the form remains usable and displays a direct-email fallback instead of pretending the message was sent.

## Editable Content

### Videos

Edit [`src/config/videos.ts`](src/config/videos.ts).

Each of the nine entries accepts:

- `youtubeUrl`: direct fallback URL
- `youtubeId`: YouTube video ID; keep `null` for the branded placeholder
- `thumbnail`: local image path
- `category`
- translation keys for title and description

Localized titles and descriptions live in:

- [`src/messages/en.json`](src/messages/en.json)
- [`src/messages/it.json`](src/messages/it.json)

### Social Stats

Edit [`src/config/stats.ts`](src/config/stats.ts). Values are static in version one and animate when they enter the viewport.

### Gear

Edit [`src/config/gear.ts`](src/config/gear.ts). Add exact product names, optional image paths, and optional links only when confirmed. The page deliberately states that current entries do not imply sponsorship.

### Site and Social Links

- Brand/contact/location settings: [`src/config/site.ts`](src/config/site.ts)
- Social URLs: [`src/config/socials.ts`](src/config/socials.ts)
- Navigation: [`src/config/navigation.ts`](src/config/navigation.ts)

## Asset Replacement

The site runs without video or audio files. Missing optional media degrades to the cinematic still-image system.

| Asset                                                 | Current state                           |
| ----------------------------------------------------- | --------------------------------------- |
| `public/logo/mountain-fauna-logo.png`                 | Optimized official supplied logo        |
| `public/logo/mountain-fauna-logo.svg`                 | Lightweight animated geometry companion |
| `public/images/founder/founder.jpeg`                  | Supplied founder portrait               |
| `public/images/backgrounds/alpine-night.jpg`          | Generated replaceable hero still        |
| `public/images/backgrounds/fog-mountain.jpg`          | Derived fog still                       |
| `public/images/videos/video-01.jpg` to `video-09.jpg` | Replaceable placeholder thumbnails      |
| `public/images/og/og-image.jpg`                       | Replaceable Open Graph image            |
| `public/videos/hero-fog.mp4`                          | Lightweight generated intro placeholder |
| `public/videos/alpine-background.mp4`                 | Lightweight generated hero placeholder  |
| `public/audio/alpine-ambience.mp3`                    | Generated low-volume wind placeholder   |
| `public/images/gear/`                                 | Add exact gear images when available    |

Keep final hero videos short, muted, loopable, and web-compressed. Recommended delivery is H.264 MP4 with a poster image and a WebM alternative if desired.

## AI Asset Prompts

### Hero video

```text
A hyper-realistic cinematic night-to-dawn scene in the Italian Alps, dark alpine mountains, slow moving fog, subtle snow particles, dramatic but peaceful atmosphere, wildlife documentary style, black and white premium color grading, no text, no people, ultra realistic, slow camera push forward, 16:9, 10 seconds.
```

### Logo fog reveal

```text
A dark cinematic black background with slow white alpine fog moving across the frame, a circular wildlife observation logo slowly emerging from the fog, premium documentary intro, subtle glowing white linework, minimal, elegant, no text, realistic fog, 16:9.
```

### Wildlife observation background

```text
A realistic alpine forest edge at dawn, distant deer silhouette barely visible through fog, dark premium black and white grading, cinematic wildlife documentary, quiet and mysterious, shallow atmospheric depth, no text, no people, 16:9.
```

### Digiscoping lens

```text
A realistic point-of-view through a spotting scope observing distant alpine wildlife, circular lens vignette, slight optical distortion, misty mountain background, respectful distance, cinematic documentary style, black and white premium color grading, no text.
```

### Founder portrait background

```text
A cinematic dark alpine background for a founder portrait, mountain ridge, subtle fog, black and white premium style, dramatic but calm, professional outdoor creator atmosphere, no text.
```

## Contact Delivery

The browser submits to [`src/app/api/contact/route.ts`](src/app/api/contact/route.ts).

The route:

- validates with the shared Zod schema,
- requires privacy consent,
- silently accepts honeypot submissions,
- keeps the Resend API key server-only,
- sends plain-text email,
- uses the sender email as `replyTo`,
- returns a clear `503 notConfigured` response when email delivery is not configured.

## Analytics and Privacy

- Vercel Analytics is included by default.
- Google Analytics is not loaded unless `NEXT_PUBLIC_GA_ID` exists and the visitor explicitly allows optional analytics.
- Language, intro-session, sound, and analytics-consent preferences use cookies or browser storage as described on the legal pages.
- No advertising pixels are included.

## SEO

The project includes:

- localized page metadata,
- canonical and alternate-language URLs,
- Open Graph and Twitter cards,
- `sitemap.xml`,
- `robots.txt`,
- web app manifest,
- JSON-LD for WebSite, Brand/Organization, and Person,
- replaceable canonical URL via `NEXT_PUBLIC_SITE_URL`.

## Vercel Deployment

1. Push the `codex` branch to GitHub.
2. Import the repository into Vercel.
3. Use the default Next.js framework settings.
4. Add the environment variables from `.env.example`.
5. Verify the Resend sending domain before enabling the contact route.
6. Deploy.
7. Set `NEXT_PUBLIC_SITE_URL` to the final custom domain and redeploy so canonical URLs, structured data, sitemap, and Open Graph references use the production origin.

No database or migration is required.

## Current Placeholders

- The nine video entries still need real YouTube IDs, URLs, descriptions, and thumbnails.
- YouTube/Instagram stats are intentionally `0+` until manually updated.
- Gear names and images are structured placeholders.
- Hero still and OG art can be replaced with final commissioned footage or photography.
- Alpine ambience and background videos are lightweight generated placeholders intended for replacement with final recordings.

Development history and architectural changes are recorded in [`DOCUMENTATION.md`](DOCUMENTATION.md). Owner actions are tracked in [`TO_SIMO_DO.md`](TO_SIMO_DO.md).
