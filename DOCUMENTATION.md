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

- [2026-06-12 20:54]: Remove Placeholder Text from Gear Page
  - *Details*: Removed the "FIELD SYSTEMS" header and its accompanying placeholder explanation text from the Gear page as requested by the user.
  - *Tech Notes*: Modified `src/app/[locale]/gear/page.tsx` to remove the div block rendering `gear.page.archive` and `gear.page.note` translations. Adjusted layout flex properties to maintain the proper alignment of the remaining section counter element.

- [2026-06-12 20:55]: Remove horizontal line and systems text
  - *Details*: Removed the border-bottom horizontal line and the "06 / SYSTEMS" text from the gear page as requested.
  - *Tech Notes*: Removed the wrapping div from `src/app/[locale]/gear/page.tsx`.

- [2026-06-12 21:01 CEST]: Adjust Footer layout
  - *Details*: Moved the email, privacy, and cookies links from a vertical column to a horizontal layout between the copyright and respect text at the bottom of the footer, decreasing the overall footer height.
  - *Tech Notes*: Modified `src/components/layout/Footer.tsx` to remove the third column and place the links within a new flex container in the bottom bar. Removed the unused `information` translation key from `src/messages/en.json` and `src/messages/it.json`.

- [2026-06-12 21:06 CEST]: Merge and Thin Footer Elements
  - *Details*: Further reduced the footer's visual height and footprint. Eliminated the upper right "Observe" grid column, moved YouTube and Instagram directly into the bottom bar alongside the legal links, and removed Email, TikTok, and LinkedIn links. Cut the top/bottom vertical paddings in half.
  - *Tech Notes*: Edited `src/components/layout/Footer.tsx` to remove the grid layout and decrease padding values from `py-12 sm:py-16` to `py-6 sm:py-8`. Cleaned up unused `observe`, `tiktok`, and `linkedin` translation keys in both `en.json` and `it.json`.

- [2026-06-12 21:12 CEST]: Convert to Minimalist Single-Row Footer
  - *Details*: Completely removed the upper section containing the BrandMark, statement, and location text, transforming the footer into a clean, single-row layout. Generous padding (`py-8 sm:py-10`) was applied to ensure the single horizontal line still grounds the page effectively.
  - *Tech Notes*: Replaced the entire DOM structure in `src/components/layout/Footer.tsx` to just output the bottom horizontal bar with generous padding. Removed the unused `BrandMark` component and `siteConfig` imports. Removed the now-unused `statement` translation key from `src/messages/en.json` and `src/messages/it.json`.

- [2026-06-16 21:34:00]: Aggiornamento Copywriting Messaggi IT
  - *Details*: Migliorato il testo della descrizione per la sezione collaborazioni in `it.json` per renderlo più fluido, elegante e professionale, eliminando ripetizioni testuali ("per me... per nessuna").
  - *Tech Notes*: Modificato `src/messages/it.json` alla riga 260. Sostituito `"Un valore per me non negoziabile per nessuna collaborazione."` con `"Un valore imprescindibile alla base di ogni mia collaborazione."`.

- [2026-06-16 21:37:00]: Aggiunta opzione "Altro" in Collaborazioni
  - *Details*: Aggiunta la voce "Altro" tra i tipi di collaborazione selezionabili, per permettere agli utenti di inserire richieste non coperte dalle categorie predefinite.
  - *Tech Notes*: Aggiunto il valore "other" all'array `collaborationTypes` in `src/lib/validations.ts`. Aggiunte le relative traduzioni ai campi `types` e `form.types` in sia `src/messages/it.json` che `src/messages/en.json`.

- [2026-06-16 21:38:00]: Fix React Runtime Error su CollaborationPage
  - *Details*: Risolto un crash di pagina avvenuto in seguito all'aggiunta del settimo elemento ("Altro") nella lista delle collaborazioni, che causava l'errore "Element type is invalid: expected a string... but got: undefined".
  - *Tech Notes*: Aggiornato l'array `icons` in `src/app/[locale]/collaboration/page.tsx` con un settimo elemento (`MessageSquare` da `lucide-react`) in modo da mappare correttamente tutti i tipi di collaborazione.

- [2026-06-16 21:39:00]: Rimozione opzione "Altro" dalla griglia visiva
  - *Details*: Rimosso il riquadro "Altro" dalla griglia della pagina Collaborazioni, mantenendo però l'opzione disponibile e selezionabile all'interno del menù a tendina del form di contatto.
  - *Tech Notes*: Ripristinato l'array `icons` rimuovendo `MessageSquare` e aggiunto un filtro `.filter((type) => type !== "other")` prima del `.map()` in `src/app/[locale]/collaboration/page.tsx`. L'opzione nel form `CollaborationForm` rimane visibile in quanto pesca direttamente tutti i valori della validazione Zod.

- [2026-06-16 21:49:00]: Fix Hydration Mismatch dovuta a Service Worker Stale
  - *Details*: Risolto un errore di hydration ("Hydration failed because the server rendered HTML didn't match the client") che si verificava in fase di sviluppo locale a causa di un vecchio Service Worker (`sw.js`) rimasto nella cache del browser dell'utente, che restituiva vecchi chunk React al client.
  - *Tech Notes*: Aggiunto uno script inline nel tag `<body>` di `src/app/layout.tsx` per cercare ed annullare attivamente l'iscrizione (unregister) di eventuali Service Worker esistenti (spesso derivanti da configurazioni PWA precedenti). Eliminata anche la cache `.next`.

- [2026-06-16 21:59:00]: Fix Resend Email Delivery — Collaboration Form
  - *Details*: Resolved the "The message could not be delivered" error on the collaboration form. Root cause: Resend free tier without a verified domain only allows sending to the account's registered email. Configured `CONTACT_FROM_EMAIL=onboarding@resend.dev` and `CONTACT_TO_EMAIL` to match the Resend account email.
  - *Tech Notes*: Updated `.env` values, improved error logging in `src/app/api/contact/route.ts` to include Resend error name/message and log successful email IDs. Updated `.env.example` with clear documentation about Resend free tier constraints. Verified end-to-end delivery via both standalone script and curl API test.

- [6/16/2026, 10:08:19 PM]: Added Success Modal for Collaboration Form
  - *Details*: Replaced the inline success message with a Framer Motion-based modal overlay featuring the website logo.
  - *Tech Notes*: Updated `CollaborationForm.tsx` to use `AnimatePresence` and added `successModal` translation keys to `en.json` and `it.json`.

- [2026-06-16 22:19:39]: Repository Cleanup
  - *Details*: Set the `main` branch to mirror the state of the art `codex` branch and completely removed the `gemini` branch.
  - *Tech Notes*: Executed `git reset --hard codex` on `main` and `git push origin main --force`. Deleted the `gemini` branch locally and remotely.

- [2026-06-16T22:25:00]: Fix broken video thumbnail
  - *Details*: Fixed a missing thumbnail for the "Chamois Cubs on the Peak" video. YouTube does not generate a `maxresdefault.jpg` for every video, which caused a broken image link.
  - *Tech Notes*: Replaced `maxresdefault.jpg` with `hqdefault.jpg` for video `6j-AEwMGFE4` in `src/config/videos.ts`.

- [2026-06-16T22:25:30]: Update Selected Observations
  - *Details*: Swapped the "defender" video with the "Chamois Cubs on the Peak" video in the "Selected observations" section on the home page.
  - *Tech Notes*: Swapped the positions of `video-01` and `video-06` in the `featuredVideos` array in `src/config/videos.ts`.

- [2026-06-16T22:32:00]: Next.js 16 Middleware Migration
  - *Details*: Renamed `middleware.ts` to `proxy.ts` to conform with Next.js 16's deprecation of the middleware file convention.
  - *Tech Notes*: Moved `src/middleware.ts` to `src/proxy.ts` and updated references in `website_specs.md`.

- [2026-06-16T22:58:00]: Mobile-First Linktree Page Implementation
  - *Details*: Created a new, isolated `/link` page acting as a personal linktree optimized for mobile, featuring the brand's logo, subtitle, and social/contact links. Integrated with the existing scope-grid aesthetic and translation system.
  - *Tech Notes*: Added `src/app/[locale]/link/page.tsx` utilizing Next.js Image, and the localized `Link` component. Injected `linkPage` configuration containing labels to `src/messages/en.json` and `src/messages/it.json`. Verified successful static generation in the Next.js build.
