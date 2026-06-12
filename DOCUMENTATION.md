# Development Log

- [2026-06-11 21:58 CEST]: Next.js Project Initialization
  - _Details_: Initialized the production application baseline with Next.js 15, TypeScript, Tailwind CSS, ESLint, Prettier, and the libraries required for motion, internationalization, 3D effects, forms, email, and analytics.
  - _Tech Notes_: Added Next.js 15.5.19, React 19, Tailwind CSS 4, Framer Motion, next-intl, React Three Fiber/Three.js, React Hook Form, Zod, Resend, Vercel Analytics, Lucide, and shared utility dependencies. Added format and type-check scripts. The current Next.js 15 dependency tree includes a moderate bundled PostCSS advisory without a compatible Next.js 15 upgrade path.

- [2026-06-11 22:09 CEST]: Bilingual Architecture and Cinematic Design Foundation
  - _Details_: Added automatic English/Italian locale routing, persistent language switching, shared navigation and footer, typed editable content configs, SEO metadata helpers, analytics hooks, and the core dark alpine design system.
  - _Tech Notes_: Added `next-intl` middleware and locale dictionaries, static locale generation, reusable UI primitives, the official supplied logo at its required optimized path, an animated SVG-inspired logo mark, and a generated replaceable alpine hero/OG placeholder. Locale routes are statically generated and verified in production.

- [2026-06-11 22:22 CEST]: Wildlife Observation Homepage
  - _Details_: Implemented the full cinematic homepage with a session-aware logo portal, alpine hero, interactive observation lens, fog and snow atmosphere, selected films, digiscoping, founder, gear, stats, and collaboration sections.
  - _Tech Notes_: Added a desktop contextual cursor, touch-aware lens fallback, muted user-activated ambience control, lazy React Three Fiber mountain linework, scroll reveals, reduced-motion behavior, and locale-aware page transitions. Desktop and 390px mobile layouts, menu behavior, and English/Italian switching were browser-verified.

- [2026-06-11 22:27 CEST]: Curated Videos and Modal Playback
  - _Details_: Added the bilingual videos archive with nine manually editable cinematic cards and an accessible modal viewing experience.
  - _Tech Notes_: YouTube embeds load only when a real `youtubeId` is configured and the modal opens. Placeholder entries present a branded fallback with a direct YouTube action. Escape closing, initial close-button focus, scroll locking, backdrop dismissal, and responsive rendering were verified in the browser.

- [2026-06-11 22:34 CEST]: Founder, Digiscoping, Gear, Links, and Legal Pages
  - _Details_: Added the complete bilingual founder story, educational digiscoping experience, editable gear archive, premium social link hub, privacy policy, and cookie policy.
  - _Tech Notes_: Added per-page SEO metadata, a scroll-responsive scope study, founder portrait and fog-background placeholders, category-specific cursor treatments, LinkedIn-first founder actions, legal data/analytics disclosures, and locale-aware accessibility labels. The production build statically generates all English and Italian routes.

- [2026-06-11 22:43 CEST]: Collaboration Contact Flow
  - _Details_: Added the collaboration positioning page, six partnership categories, validated bilingual contact form, direct email fallback, and server-side Resend delivery architecture.
  - _Tech Notes_: Added shared Zod validation, React Hook Form states, privacy consent, honeypot spam handling, keyboard-accessible errors, server-only environment variables, and `.env.example`. API tests verify 422 validation responses, 503 unconfigured delivery behavior, and silent honeypot success; browser tests verify localized validation and fallback messaging.

- [2026-06-11 22:45 CEST]: Supplied Founder Portrait
  - _Details_: Replaced the designed founder placeholder with the supplied Mattioli Simone portrait across the homepage and founder page.
  - _Tech Notes_: Preserved the uploaded `founder.jpeg` asset path, updated localized alt text, and removed placeholder-only presentation copy.

- [2026-06-11 22:49 CEST]: SEO, Consent, and Deployment Documentation
  - _Details_: Completed the search/discovery layer, analytics consent behavior, owner handoff, asset guide, environment reference, and Vercel deployment documentation.
  - _Tech Notes_: Added JSON-LD for WebSite, Brand/Organization, and Person; sitemap, robots, web app manifest, canonical locale alternates, consent-gated optional Google Analytics, retained Vercel Analytics, tracked optional asset directories, and documented every editable data source and placeholder.

- [2026-06-11 22:50 CEST]: Alpine Media Placeholders
  - _Details_: Added lightweight cinematic video and ambience placeholders at every media path required by the specification and integrated them with still-image and reduced-motion fallbacks.
  - _Tech Notes_: Desktop hero and portal video use muted inline MP4 playback; mobile and reduced-motion users retain static imagery. The ambience remains user-controlled and stores its preference locally.

- [2026-06-11 22:57 CEST]: Dependency Resolution and Build Fix
  - _Details_: Resolved a Next.js version incompatibility caused by a forceful npm audit resolution and successfully restored the production build.
  - _Tech Notes_: Upgraded `next` package to the latest supported version compatible with React 19 and the existing configuration (`next.config.ts`), and successfully ran `npm run build`.

- [2026-06-11 23:03 CEST]: Remove Translation Button
  - _Details_: Removed the clickable translation button (LocaleSwitcher) from both the Footer and the Upper fluctuating island (Navbar).
  - _Tech Notes_: Edited `src/components/layout/Footer.tsx` and `src/components/layout/Navbar.tsx` to remove the LocaleSwitcher component and its imports.
- [2026-06-11 23:06 CEST]: Replace SVG logo with PNG
  - _Details_: Replaced the inline SVG logo with the PNG logo in the `BrandMark` component.
  - _Tech Notes_: Removed `public/logo/mountain-fauna-logo.svg` and updated `src/components/ui/BrandMark.tsx` to use `next/image` pointing to `mountain-fauna-logo.png`.
- [2026-06-11 23:32 CEST]: Cache Busted Logo Image
  - _Details_: Renamed the PNG logo file to bypass Next.js and browser caching which was causing the old logo version to display.
  - _Tech Notes_: Renamed `public/logo/mountain-fauna-logo.png` to `public/logo/mountain-fauna-logo-v2.png` and updated all Next.js Image component references in the source code to use the new filename.

- [2026-06-11 23:36 CEST]: Minimize BrandMark Logo
  - _Details_: Minimized the BrandMark logo and repositioned it to the bottom-right corner in Hero and Collaboration preview sections.
  - _Tech Notes_: Updated tailwind classes in PageHero.tsx and CollaborationPreview.tsx.

- [2026-06-11 23:40 CEST]: Navbar Text Layout
  - _Details_: Set the 'Mountain Fauna Lover' text in the Navbar to strictly one line to avoid wrapping.
  - _Tech Notes_: Removed <br/> and added whitespace-nowrap in src/components/layout/Navbar.tsx.

- [2026-06-11 23:42 CEST]: Increase Navbar Logo Size
  - _Details_: Increased the logo size to fill the full height of the floating island at the top.
  - _Tech Notes_: Changed BrandMark to \`size-14\` and added \`-my-2.5\` to its Link container in \`src/components/layout/Navbar.tsx\`.

- [2026-06-12 20:40 CEST]: Update Video 05
  - _Details_: Added a new specific YouTube video link to the videos configuration and used its thumbnail.
  - _Tech Notes_: Updated \`src/config/videos.ts\` for \`video-05\` with youtubeUrl \`https://youtu.be/nEh50VnbfXI?si=1HECZ5WQxbPna1V-\` and the corresponding thumbnail url.

- [2026-06-12 20:41 CEST]: Update Video 06
  - _Details_: Added a new specific YouTube video link to the videos configuration and used its thumbnail.
  - _Tech Notes_: Updated \`src/config/videos.ts\` for \`video-06\` with youtubeUrl \`https://www.youtube.com/watch?v=6j-AEwMGFE4\` and the corresponding thumbnail url.

- [2026-06-12 20:42 CEST]: Update Video 07
  - _Details_: Added a new specific YouTube video link to the videos configuration and used its thumbnail.
  - _Tech Notes_: Updated \`src/config/videos.ts\` for \`video-07\` with youtubeUrl \`https://youtu.be/bn1cIlhqL74?si=kMIpB_29rwCEcnCk\` and the corresponding thumbnail url.

- [2026-06-12 20:44 CEST]: Update Video 08
  - _Details_: Added a new specific YouTube video link to the videos configuration and used its thumbnail.
  - _Tech Notes_: Updated \`src/config/videos.ts\` for \`video-08\` with youtubeUrl \`https://www.youtube.com/watch?v=NfDpfAOKuHY\` and the corresponding thumbnail url.

- [2026-06-12 20:47 CEST]: Update Video 09
  - _Details_: Added a new specific YouTube video link to the videos configuration and used its thumbnail.
  - _Tech Notes_: Updated \`src/config/videos.ts\` for \`video-09\` with youtubeUrl \`https://youtu.be/bgMtDKP8j3w?si=KG4Q1GDASiK7JovY\` and the corresponding thumbnail url.

- [2026-06-12 20:50 CEST]: Update Categories and Translations for New Videos
  - _Details_: Analyzed the newly inserted YouTube videos and assigned appropriate categories (ski, wildlife, exploration), and updated their bilingual title and description translations to match their real context.
  - _Tech Notes_: Updated \`src/config/videos.ts\` categories for videos 05, 06, 08, 09. Updated \`src/messages/en.json\` and \`src/messages/it.json\` for keys \`items.video05\` to \`items.video09\`.
