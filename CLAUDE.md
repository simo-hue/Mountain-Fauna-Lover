# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Bilingual (en/it) cinematic wildlife-observation marketing site for "Mountain Fauna Lover". Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, next-intl, framer-motion. Content-driven and statically generated per locale; the only dynamic surface is the contact API route. No database.

## Commands

```bash
npm run dev           # next dev (http://localhost:3000)
npm run build         # production build
npm run start         # serve the production build
npm run lint          # eslint (next/core-web-vitals + next/typescript)
npm run typecheck     # tsc --noEmit
npm run format        # prettier --write .
npm run format:check  # prettier --check .
```

Node.js 20+. There is **no test framework** configured — "verification" means `npm run typecheck && npm run lint && npm run build`. Run those before declaring work done.

## Architecture

### Internationalization (the backbone — touches almost everything)
- next-intl with locales `["en", "it"]`, `defaultLocale: "en"`, `localePrefix: "always"`. Every page lives under `src/app/[locale]/...`; there is no un-prefixed public route.
- **`src/proxy.ts` is the middleware.** Next.js 16 renamed `middleware.ts` → `proxy.ts`; it runs next-intl's middleware for locale detection/redirects. Don't recreate `middleware.ts`.
- Config lives in `src/i18n/`: `routing.ts` (locales + `MFL_LOCALE` cookie), `request.ts` (loads `src/messages/{locale}.json`), `navigation.ts` (locale-aware nav helpers).
- **Always import `Link`, `useRouter`, `usePathname`, `redirect` from `@/i18n/navigation`** — never from `next/link` / `next/navigation` — or locale prefixing breaks. (Exception: `not-found.tsx`, which is outside the locale tree.)
- Strings live in `src/messages/en.json` + `it.json` (keep keys in sync). Server components/pages call `getTranslations`; client components call `useTranslations`. Pages call `setRequestLocale(locale)` for static rendering.

### framer-motion — strict LazyMotion (easy to break)
`MotionProvider` wraps the app in `<LazyMotion features={domAnimation} strict>`. In strict mode `motion.*` **throws at runtime**. Always `import { m } from "framer-motion"` and use `<m.div>`, `<m.section>`, etc. Hooks (`useScroll`, `useTransform`, `useInView`, `AnimatePresence`) still import normally.

### Layout composition
- `src/app/layout.tsx` (root): `<html>`/`<body>`, fonts (Geist sans → `--font-geist`, Cormorant Garamond serif → `--font-editorial`), global metadata base, Vercel `<Analytics>`, consent-gated `<GoogleAnalytics>`, and an inline script that unregisters any stale service worker.
- `src/app/[locale]/layout.tsx`: `NextIntlClientProvider` + `PageShell`, plus `generateStaticParams` for both locales.
- `PageShell` = `CustomCursor` + `Navbar` + `<main>` + `Footer` + `CookieConsent`, all inside `MotionProvider`.
- `src/app/[locale]/template.tsx` adds the per-navigation opacity/blur fade.

### The `/link` route is special (chrome-less)
`/[locale]/link` (singular) is a standalone full-screen linktree-style bio page. `Navbar`, `Footer`, and `CookieConsent` each early-return `null` when `pathname.endsWith("/link")`. This is distinct from `/links` (plural), the normal in-site links page reachable from the nav. If you add global chrome, decide whether it should be suppressed on `/link`.

### Content is config-driven
Editable content lives in `src/config/` (`site`, `navigation`, `videos`, `gear`, `socials`, `stats`) paired with the messages JSON. Config holds structure/URLs/IDs and *translation keys* (e.g. `titleKey`, `descriptionKey`); the human-readable copy lives in the messages files. To change content, edit config + messages — not the section components under `src/components/sections/`.

### Metadata & SEO
- Per-page `generateMetadata` builds metadata via `createPageMetadata()` (`src/lib/metadata.ts`): canonical, `en`/`it` + `x-default`(→`/it`) hreflang alternates, per-locale `og:locale`, OpenGraph, Twitter. Canonical origin comes from `siteConfig.siteUrl` (`NEXT_PUBLIC_SITE_URL`).
- **Structured data is centralized in `src/lib/schema.ts`** — typed JSON-LD builders with stable `@id`s (WebSite, Organization/Brand, Person, Place/GeoCoordinates, WebPage, ProfilePage, BreadcrumbList, FAQPage, VideoObject/ItemList). The graph is **Italian-anchored** (primary entity language). Pages assemble their graph + breadcrumb trail via `buildPageSeo()` (`src/lib/page-seo.ts`) and render it with `<JsonLd>`; `StructuredData` does the home graph. Keep `@id`s consistent when adding nodes.
- `src/components/seo/` holds the SEO UI: `JsonLd`, `Breadcrumbs` (rendered via `PageHero`'s `breadcrumb` slot), and `FaqSection` (native `<details>`, content from the `faq.*` message keys, mirrored into FAQPage schema).
- Route handlers: `src/app/{sitemap,robots,manifest}.ts` plus `src/app/llms.txt/route.ts` (curated entity map for LLMs). `robots.ts` explicitly allows AI crawlers. The chrome-less `/link` route is `noindex` + canonical→`/links`.

### Contact flow
`src/app/api/contact/route.ts` (`runtime = "nodejs"`) validates against the shared Zod `contactSchema` (`src/lib/validations.ts`, also used client-side by `CollaborationForm`). It honeypots the `website` field (silently 200s), and returns **503 `notConfigured`** when `RESEND_API_KEY`/`CONTACT_FROM_EMAIL` are absent — the form then shows a direct-email fallback instead of faking success. Keep the schema as the single source of truth for both sides.

### Styling
Tailwind CSS 4, CSS-first config via `@theme inline` in `src/app/globals.css` — custom alpine color tokens (`alpine-black`, `ice`, `mist`, …) and the two font vars are defined there, not in a JS config. Dark-only (`color-scheme: dark`). Bespoke utility classes (`eyebrow`, `scope-grid`, `noise`, `fog-bank`, `observation-lens`, `custom-cursor`) and keyframes also live in `globals.css`. Compose classes with `cn()` (`src/lib/utils.ts`, clsx + tailwind-merge).

### Conventions
- Path alias `@/*` → `src/*`.
- `MountainScene3D` is **pure inline SVG**, not WebGL. There is no three.js / react-three-fiber dependency despite older README wording — don't add one.

## Environment

See `.env.example`. `NEXT_PUBLIC_SITE_URL` (canonical origin, no trailing slash) drives metadata/sitemap/JSON-LD. `NEXT_PUBLIC_GA_ID` is optional and gates the consent banner + GA entirely. `RESEND_API_KEY` + `CONTACT_FROM_EMAIL` (verified Resend domain) + `CONTACT_TO_EMAIL` enable live contact delivery.

## Repo bookkeeping

`DOCUMENTATION.md` holds an append-only log of changes; `TO_SIMO_DO.md` tracks manual owner actions (env vars, asset replacement, etc.). Both are maintained per the user's global protocols.
