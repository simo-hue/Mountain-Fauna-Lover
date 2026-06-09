# Mountain Fauna Lover — Cinematic Website Implementation Specification

> **Primary instruction for Codex / coding agent:**
> Do **not** create a generic creator website, a normal portfolio, or a simple link-in-bio page. The final result must feel like a **cinematic wildlife observation experience**: dark alpine atmosphere, fog, snow, digiscoping/binocular lens interactions, 3D depth, emotional founder storytelling, and a premium black/white visual identity inspired by the supplied logo.

---

## 0. Project Summary

Build a complete bilingual website for **Mountain Fauna Lover**, founded by **Mattioli Simone**.

The website represents a YouTube/social project focused on mountains at 360 degrees: wildlife observation, digiscoping, skiing, e-bike/offroad adventures, cinematic mountain storytelling, and alpine exploration in **Trentino-Alto Adige**, especially **Val di Rabbi** and **Stelvio National Park**.

The website must be visually surprising and emotionally memorable. It should feel like the user is entering the mountain through a lens.

### Core concept

**Mountain Fauna Lover — Wildlife Observation Mode**

The visitor enters through an animated logo portal surrounded by fog/clouds. After the portal transition, the site becomes an interactive alpine observation experience. The user explores the founder story, digiscoping, best videos, gear, links, and collaboration opportunities through a dark cinematic interface.

### Hero phrase

Use this as the primary hero phrase:

> **Through my lens, a 360° journey into the wild heart of the Alps.**

Italian version:

> **Attraverso la mia lente, un viaggio a 360° nel cuore selvaggio delle Alpi.**

Use this phrase in the hero section and SEO metadata.

---

## 1. Public Links and Identity

### Channel / social links

Use these links throughout the website:

- YouTube: `https://www.youtube.com/@mountainfaunalover`
- TikTok: `https://www.tiktok.com/@mountainfaunalover`
- Instagram: `https://www.instagram.com/mountainfaunalover`

### Founder links

- LinkedIn: `https://www.linkedin.com/in/simonemattioli2003/`
- Personal website: `https://simo-hue.github.io`
- GitHub: `https://github.com/simo-hue`

Important: visually prioritize only **LinkedIn** for the founder external profile. GitHub and personal website may be included subtly in footer or hidden in a secondary technical section, but the main founder CTA should be LinkedIn.

### Contact email

Use this email for collaboration/contact:

`mattioli.simone.10@gmail.com`

---

## 2. Brand Direction

### Brand name

Use this brand name everywhere:

**Mountain Fauna Lover**

Do not use “Mountain & Fauna Lover” as the main title.

### Brand personality

The website must feel:

- Cinematic
- Wild
- Peaceful
- Premium
- Emotional and personal
- Technological, but not artificial
- Alpine, dark, silent, mysterious
- Professional enough for sponsors and collaborators
- Authentic enough for friends, community, and YouTube followers

### Visual language

The supplied logo must influence the whole interface:

- Black and white palette
- Circular scope/lens geometry
- Deer/wildlife symbolism
- Mountain linework
- Thin white geometric strokes
- Crosshair/scope details
- Subtle glowing line effects
- Fog/cloud reveal
- Observation UI
- Precision, silence, nature, technology

### Color palette

Use a strict dark/white palette with subtle grayscale.

Recommended tokens:

```ts
colors: {
  alpineBlack: "#030303",
  deepBlack: "#080808",
  charcoal: "#111111",
  graphite: "#1A1A1A",
  mist: "#EDEDED",
  snow: "#FFFFFF",
  silver: "#B8B8B8",
  muted: "#747474",
  glass: "rgba(255,255,255,0.06)",
  border: "rgba(255,255,255,0.16)",
  glow: "rgba(255,255,255,0.72)"
}
```

Optional tiny accents only if needed:

- Icy blue: `#BEE9FF`
- Alpine green-gray: `#7C8A7A`

Do not make the site colorful. The logo identity is black/white and should remain dominant.

### Typography

Use a cinematic modern pairing:

Recommended:

- Headings: `Satoshi`, `Space Grotesk`, or `Geist Sans`
- Body: `Inter` or `Geist Sans`
- Optional editorial accent: `Cormorant Garamond` or `Playfair Display` for small poetic lines only

Implementation recommendation:

Use Google Fonts or local Next font import:

- `Geist Sans` for most UI
- `Cormorant Garamond` for atmospheric quote lines only

Avoid overly decorative fonts.

---

## 3. Required Technical Stack

Build the complete website using:

- **Next.js 15** with App Router
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** for page/scroll/micro animations
- **Three.js / React Three Fiber** for atmospheric 3D effects
- **next-intl** or equivalent for bilingual routing and translations ( must be automatic and not the user selecting the language )
- **shadcn/ui** for accessible base components where useful
- **Resend** for the contact form email delivery
- **Vercel Analytics** and optional Google Analytics support
- **Vercel** deployment target

### Important architecture requirements

- Use clean component architecture.
- All text must be managed through translation dictionaries.
- Video data must be manually editable in a config file.
- Social stats must initially be manually editable in a config file.
- Contact form must be implemented with validation and server-side submission.
- The website must work without live social API integrations in v1.
- Structure the project so future API integrations can be added easily.

---

## 4. Internationalization Requirements

The site must be bilingual:

- English: `/en`
- Italian: `/it`

### Automatic language behavior

The user should **not be forced** to manually choose a language first.

Required behavior:

1. Detect browser language.
2. If browser language starts with `it`, redirect to `/it`.
3. Otherwise redirect to `/en`.
4. Provide a visible language switcher in the navigation/footer.
5. Remember the selected language using a cookie/localStorage.

### Translation files

Create translation dictionaries:

```txt
/messages/en.json
/messages/it.json
```

All page titles, metadata, nav labels, section copy, buttons, form labels, validation messages, video descriptions, and legal text must be translatable.

---

## 5. Routes / Pages

Implement these routes:

```txt
/[locale]
/[locale]/founder
/[locale]/digiscoping
/[locale]/videos
/[locale]/collaboration
/[locale]/links
/[locale]/gear
/[locale]/privacy
/[locale]/cookies
```

Required page structure:

### `/[locale]` — Homepage

The cinematic landing experience.

Sections:

1. Logo portal intro
2. Hero / Wildlife Observation Mode
3. Featured identity statement
4. Best videos preview
5. Digiscoping preview
6. Founder preview
7. Gear preview
8. Social stats / follow CTA
9. Collaboration preview
10. Footer

### `/[locale]/founder`

A personal founder page about Mattioli Simone.

Must include:

- Founder portrait placeholder
- First-person story
- Mission
- Connection to Trentino-Alto Adige, Val di Rabbi, Stelvio National Park
- Mountain/wildlife passion
- Digiscoping, skiing, e-bike/offroad, cinematic videos
- Developer/technology side
- LinkedIn CTA

### `/[locale]/digiscoping`

Explain digiscoping emotionally and clearly.

Must include:

- What digiscoping is
- Why it matters for wildlife respect
- How it allows observation from distance
- Why patience, silence, and respect are essential
- Visual lens interaction
- CTA to watch videos

### `/[locale]/videos`

Show 9 manually curated YouTube videos.

Must include:

- Cinematic video cards
- Category labels
- Modal embedded player on click
- Fallback “Watch on YouTube” button
- Manual data source
- Placeholder data until real video links are provided

### `/[locale]/collaboration`

For sponsors, brands, tourism boards, outdoor companies, wildlife/nature projects, creators, and potential collaborators.

Must include:

- Collaboration positioning
- Types of collaboration
- Contact form
- Direct email fallback
- Mention outdoor, tourism, wildlife, gear, mountain storytelling, and cinematic content

### `/[locale]/links`

A beautiful link hub, not a boring list.

Must include:

- YouTube primary CTA
- Instagram secondary CTA
- TikTok smaller CTA
- LinkedIn founder CTA
- Optional email CTA

### `/[locale]/gear`

Gear page.

Must include editable gear categories:

- Digiscoping / observation
- Camera / video
- Mountain / ski
- E-bike / offroad
- Editing / software

Use placeholders until real gear is provided.

### `/[locale]/privacy`

Privacy policy page.

Mention:

- Contact form data
- Analytics
- Cookies
- No advertising tracking in v1
- User rights

### `/[locale]/cookies`

Cookie policy page.

Mention:

- Language preference cookie/localStorage
- Analytics cookies if Google Analytics is enabled
- Vercel Analytics if enabled
- Optional sound preference

---

## 6. Experience Design

### 6.1 Intro: Logo Portal

The website must open with a cinematic loading/intro sequence.

Concept:

- Black screen
- Fog/cloud particles slowly move
- The supplied logo appears faintly
- Thin white geometric lines glow subtly
- The circular logo becomes a portal/lens
- The visitor scrolls or waits briefly
- The camera moves “through” the logo into the website

Technical approach:

- Use Framer Motion for intro timing.
- Use CSS/Canvas/WebGL fog depending on performance.
- Respect reduced-motion preferences.
- Store intro completion in sessionStorage so it does not replay aggressively on every navigation.

Requirements:

- Intro duration: approximately 2.5 to 4 seconds.
- Add “Skip intro” button after 1 second.
- Must not block accessibility.
- Must not break if video assets are missing.

### 6.2 Hero: Wildlife Observation Mode

After the portal, the hero becomes an interactive observation experience.

Concept:

- Dark alpine background
- Fog layers
- Snow particles
- Circular digiscoping/binocular lens interaction
- Cursor transforms into observation lens on desktop
- On mobile, lens follows touch/tilt or appears as a centered animated lens
- Hero phrase appears in layers
- Main CTAs: YouTube subscribe, Instagram follow

Hero copy EN:

```txt
Through my lens, a 360° journey into the wild heart of the Alps.
```

Hero copy IT:

```txt
Attraverso la mia lente, un viaggio a 360° nel cuore selvaggio delle Alpi.
```

Secondary copy EN:

```txt
Wildlife observation, digiscoping, skiing and mountain exploration from Trentino-Alto Adige, Val di Rabbi and Stelvio National Park.
```

Secondary copy IT:

```txt
Osservazione della fauna, digiscoping, sci ed esplorazione della montagna dal Trentino-Alto Adige, dalla Val di Rabbi e dal Parco Nazionale dello Stelvio.
```

### 6.3 Cursor System

Implement a custom contextual cursor on desktop only.

Default cursor:

- Small white dot/crosshair
- Subtle trailing glow

Contextual cursors:

- Hero / digiscoping: circular lens / scope
- Videos: play icon inside cursor
- Gear page: technical crosshair cursor
- Ski category/section: subtle ski icon
- E-bike category/section: subtle mountain bike icon
- Links page: magnetic dot cursor
- Collaboration form: normal accessible cursor or subtle focus ring

Important:

- Disable custom cursor on touch devices.
- Do not harm accessibility.
- Native pointer behavior must remain functional.

### 6.4 Motion Style

Use a lot of motion, but professional and premium.

Allowed effects:

- Fog reveal
- Snow particles
- Smooth scroll-based parallax
- Lens zoom/masking
- Geometric line drawing
- Text reveal by opacity/blur/clip-path
- Cards floating slightly in 3D
- Magnetic buttons
- Modal zoom for videos
- Page transitions using lens wipe

Avoid:

- Cheap bounce animations
- Overly playful effects
- Cartoon visuals
- Random colors
- Low-quality particle spam
- Motion that makes reading difficult

### 6.5 Sound

Sound is allowed only in the intro/hero.

Requirements:

- Muted by default, or activated only after explicit user interaction.
- Add sound toggle button.
- Use subtle nature/alpine ambience only.
- No autoplay audio with sound.
- Save preference in localStorage.

Asset placeholder:

```txt
/public/audio/alpine-ambience.mp3
```

---

## 7. Components

Create reusable components.

Recommended structure:

```txt
/src/components/
  layout/
    Navbar.tsx
    Footer.tsx
    LocaleSwitcher.tsx
    PageTransition.tsx
  cinematic/
    LogoPortalIntro.tsx
    FogLayer.tsx
    SnowParticles.tsx
    ObservationLens.tsx
    CustomCursor.tsx
    MountainScene3D.tsx
    LensWipeTransition.tsx
    AmbientSoundToggle.tsx
  sections/
    HeroSection.tsx
    IdentityStatement.tsx
    FeaturedVideosPreview.tsx
    FounderPreview.tsx
    DigiscopingPreview.tsx
    GearPreview.tsx
    StatsSection.tsx
    CollaborationPreview.tsx
  videos/
    VideoCard.tsx
    VideoModal.tsx
    VideoGrid.tsx
  forms/
    CollaborationForm.tsx
  ui/
    MagneticButton.tsx
    GlassCard.tsx
    SectionHeading.tsx
    AnimatedCounter.tsx
    ScopeFrame.tsx
```

---

## 8. Data Configuration

Create editable config files.

```txt
/src/config/site.ts
/src/config/socials.ts
/src/config/stats.ts
/src/config/videos.ts
/src/config/gear.ts
```

### `site.ts`

Include:

```ts
export const siteConfig = {
  name: "Mountain Fauna Lover",
  founder: "Mattioli Simone",
  email: "mattioli.simone.10@gmail.com",
  locations: ["Trentino-Alto Adige", "Val di Rabbi", "Stelvio National Park"],
  heroPhrase: {
    en: "Through my lens, a 360° journey into the wild heart of the Alps.",
    it: "Attraverso la mia lente, un viaggio a 360° nel cuore selvaggio delle Alpi."
  }
}
```

### `socials.ts`

```ts
export const socials = {
  youtube: "https://www.youtube.com/@mountainfaunalover",
  instagram: "https://www.instagram.com/mountainfaunalover",
  tiktok: "https://www.tiktok.com/@mountainfaunalover",
  linkedin: "https://www.linkedin.com/in/simonemattioli2003/",
  website: "https://simo-hue.github.io",
  github: "https://github.com/simo-hue"
}
```

### `stats.ts`

Static in v1, future API-ready.

```ts
export const stats = [
  { labelKey: "stats.youtubeSubscribers", value: "000", suffix: "+" },
  { labelKey: "stats.instagramFollowers", value: "000", suffix: "+" },
  { labelKey: "stats.featuredVideos", value: "9", suffix: "" },
  { labelKey: "stats.alpineStories", value: "360", suffix: "°" }
]
```

Use animated counters, but make values easy to update.

### `videos.ts`

Create 9 placeholders until real links are provided.

```ts
export const featuredVideos = [
  {
    id: "video-01",
    title: {
      en: "Wildlife Observation in the Alps",
      it: "Osservazione della fauna nelle Alpi"
    },
    category: "wildlife",
    youtubeUrl: "https://www.youtube.com/@mountainfaunalover",
    youtubeId: "PLACEHOLDER",
    description: {
      en: "A cinematic alpine wildlife moment captured through patience and respect.",
      it: "Un momento cinematografico di fauna alpina catturato con pazienza e rispetto."
    },
    thumbnail: "/images/videos/video-01.jpg"
  }
]
```

Do not group the 9 videos by category in the UI unless needed. Use a single premium grid.

### `gear.ts`

Create placeholder categories:

```ts
export const gearCategories = [
  "digiscoping",
  "camera",
  "mountainSki",
  "ebikeOffroad",
  "editingSoftware"
]
```

---

## 9. Video Experience

The videos page and homepage preview must use a premium cinematic video-card system.

### Required behavior

- Display 9 manually curated videos.
- On click, open a cinematic modal.
- Modal embeds YouTube player.
- Include “Watch on YouTube” fallback button.
- Add accessible close button.
- Pressing Escape closes the modal.
- Background should blur/dim when modal is open.
- Do not autoplay embedded videos with sound unless user clicks.

### Video card design

Each card should include:

- Thumbnail
- Dark gradient overlay
- Thin white border
- Category label
- Title
- Short description on hover/focus
- Play icon
- Lens/crosshair hover effect

---

## 10. Founder Content

Use first person.

Base English copy:

```txt
I’m Mattioli Simone, a mountain and wildlife enthusiast from Trentino-Alto Adige. Through Mountain Fauna Lover, I document alpine nature through digiscoping, skiing, e-bike adventures and cinematic videos.

My world is shaped by silence, patience and observation: the quiet moments before an animal appears, the cold air of winter mornings, the geometry of mountain ridges, and the respect required to enter wild places without disturbing them.

Mountain Fauna Lover is my way of sharing that world: a 360° vision of the Alps, from wildlife and snow to technology, exploration and storytelling.
```

Base Italian copy:

```txt
Sono Mattioli Simone, un appassionato di montagna e fauna selvatica del Trentino-Alto Adige. Con Mountain Fauna Lover documento la natura alpina attraverso il digiscoping, lo sci, le avventure in e-bike e video cinematografici.

Il mio mondo nasce dal silenzio, dalla pazienza e dall’osservazione: quei momenti sospesi prima che un animale compaia, l’aria fredda delle mattine invernali, le linee delle creste e il rispetto necessario per entrare nei luoghi selvaggi senza disturbarli.

Mountain Fauna Lover è il mio modo di condividere questo mondo: una visione a 360° delle Alpi, tra fauna, neve, tecnologia, esplorazione e racconto.
```

Add developer side carefully:

English:

```txt
Alongside mountain storytelling, I am also a software developer. This allows me to combine nature, technology and creativity — building digital experiences that reflect the same precision and curiosity I bring into the mountains.
```

Italian:

```txt
Oltre al racconto della montagna, sono anche uno sviluppatore software. Questo mi permette di unire natura, tecnologia e creatività, costruendo esperienze digitali con la stessa precisione e curiosità che porto in montagna.
```

CTA:

- “Connect on LinkedIn”
- “Collegati su LinkedIn”

---

## 11. Digiscoping Content

The digiscoping page must be educational, emotional, and respectful.

English core copy:

```txt
Digiscoping is the art of filming or photographing through a spotting scope. For me, it is more than a technique: it is a way to observe wildlife from distance, with patience and respect.

Instead of getting closer, digiscoping allows the mountain to remain undisturbed. The animal stays in its world. I stay in mine. The lens becomes the bridge between the two.
```

Italian core copy:

```txt
Il digiscoping è l’arte di filmare o fotografare attraverso un cannocchiale. Per me non è solo una tecnica: è un modo per osservare la fauna da lontano, con pazienza e rispetto.

Invece di avvicinarmi, il digiscoping permette alla montagna di rimanere indisturbata. L’animale resta nel suo mondo. Io resto nel mio. La lente diventa il ponte tra i due.
```

Visual requirement:

- Use circular scope mask.
- Add subtle zoom-on-scroll interaction.
- Use line overlays inspired by the logo.
- Include a section called “Respect before the shot.” / “Il rispetto prima dello scatto.”

---

## 12. Collaboration Page

Position the project as open to high-quality collaborations.

### Collaboration types

Include cards for:

- Outdoor and mountain brands
- Tourism boards and local territories
- Wildlife/nature storytelling
- Gear and technical equipment
- Ski, e-bike and alpine experiences
- Cinematic social content

### English copy

```txt
Mountain Fauna Lover is available for selected collaborations with brands, tourism boards, outdoor projects and creators who share a respect for the mountains, wildlife and authentic storytelling.
```

### Italian copy

```txt
Mountain Fauna Lover è disponibile per collaborazioni selezionate con brand, enti turistici, progetti outdoor e creator che condividono il rispetto per la montagna, la fauna e il racconto autentico.
```

### Contact form fields

- Name
- Email
- Organization / brand, optional
- Collaboration type
- Message
- Privacy consent checkbox

Submit via Resend to:

`mattioli.simone.10@gmail.com`

Add validation with `zod` and `react-hook-form`.

---

## 13. Links Page

Create a premium social hub.

Hierarchy:

1. YouTube — primary
2. Instagram — secondary
3. TikTok — small/secondary
4. LinkedIn — founder/professional
5. Email — collaboration/contact

Design:

- Fullscreen dark background
- Logo at top
- Animated link cards
- Magnetic hover
- Thin white borders
- Social icons
- No generic linktree look

---

## 14. Gear Page

The gear page is required.

Goal:

Show the equipment and tools behind the mountain content. This helps followers understand the process and makes the site more interesting for potential sponsors.

Create editable placeholder cards for:

- Digiscoping setup
- Camera/video setup
- Tripod/support
- Ski/mountain equipment
- E-bike/offroad equipment
- Editing software

Each card:

- Name
- Category
- Description
- Optional affiliate/sponsor link placeholder
- Image placeholder

Do not imply any sponsorship unless manually specified later.

---

## 15. Asset Requirements

Codex must create placeholders and clear asset paths.

### Required folders

```txt
/public/logo/
/public/videos/
/public/audio/
/public/images/founder/
/public/images/videos/
/public/images/backgrounds/
/public/images/gear/
/public/images/og/
```

### Required files/placeholders

```txt
/public/logo/mountain-fauna-logo.png
/public/logo/mountain-fauna-logo.svg
/public/videos/hero-fog.mp4
/public/videos/alpine-background.mp4
/public/audio/alpine-ambience.mp3
/public/images/founder/founder.jpg
/public/images/backgrounds/alpine-night.jpg
/public/images/backgrounds/fog-mountain.jpg
/public/images/videos/video-01.jpg ... video-09.jpg
/public/images/og/og-image.jpg
```

The supplied uploaded logo should be copied/used as:

```txt
/public/logo/mountain-fauna-logo.png
```

If an SVG version is not available, create an animated SVG-inspired version based on the logo geometry, but keep the original PNG as official.

---

## 16. AI Asset Generation Prompts

Include these prompts in the repository documentation for the owner to generate assets with AI tools if needed.

### Hero video prompt

```txt
A hyper-realistic cinematic night-to-dawn scene in the Italian Alps, dark alpine mountains, slow moving fog, subtle snow particles, dramatic but peaceful atmosphere, wildlife documentary style, black and white premium color grading, no text, no people, ultra realistic, slow camera push forward, 16:9, 10 seconds.
```

### Logo fog reveal prompt

```txt
A dark cinematic black background with slow white alpine fog moving across the frame, a circular wildlife observation logo slowly emerging from the fog, premium documentary intro, subtle glowing white linework, minimal, elegant, no text, realistic fog, 16:9.
```

### Wildlife observation background prompt

```txt
A realistic alpine forest edge at dawn, distant deer silhouette barely visible through fog, dark premium black and white grading, cinematic wildlife documentary, quiet and mysterious, shallow atmospheric depth, no text, no people, 16:9.
```

### Digiscoping lens prompt

```txt
A realistic point-of-view through a spotting scope observing distant alpine wildlife, circular lens vignette, slight optical distortion, misty mountain background, respectful distance, cinematic documentary style, black and white premium color grading, no text.
```

### Founder portrait background prompt

```txt
A cinematic dark alpine background for a founder portrait, mountain ridge, subtle fog, black and white premium style, dramatic but calm, professional outdoor creator atmosphere, no text.
```

---

## 17. SEO Requirements

Implement complete SEO.

### Metadata

For each page:

- Title
- Description
- Open Graph title
- Open Graph description
- Open Graph image
- Twitter card metadata
- Canonical URL placeholder

### Homepage SEO title

English:

```txt
Mountain Fauna Lover — Wildlife, Digiscoping and Alpine Stories
```

Italian:

```txt
Mountain Fauna Lover — Fauna, Digiscoping e Storie Alpine
```

### Homepage SEO description

English:

```txt
Through my lens, a 360° journey into the wild heart of the Alps. Wildlife observation, digiscoping, skiing and mountain exploration from Trentino-Alto Adige.
```

Italian:

```txt
Attraverso la mia lente, un viaggio a 360° nel cuore selvaggio delle Alpi. Fauna, digiscoping, sci ed esplorazione della montagna dal Trentino-Alto Adige.
```

### Structured data

Add JSON-LD for:

- WebSite
- Person
- Organization/Brand
- Social links

---

## 18. Analytics and Privacy

Implement:

- Vercel Analytics by default
- Optional Google Analytics using env var

Environment variable:

```txt
NEXT_PUBLIC_GA_ID=
```

If `NEXT_PUBLIC_GA_ID` is empty, do not load Google Analytics.

Because analytics are used, include privacy and cookie pages.

Do not add advertising pixels.

---

## 19. Contact Form with Resend

Use Resend for the collaboration form.

### Environment variables

```txt
RESEND_API_KEY=
CONTACT_TO_EMAIL=mattioli.simone.10@gmail.com
CONTACT_FROM_EMAIL=
```

### Server route

Create:

```txt
/src/app/api/contact/route.ts
```

Validation:

- Name required
- Email required and valid
- Message required
- Privacy consent required
- Organization optional
- Collaboration type optional

UX:

- Loading state
- Success state
- Error state
- Accessible validation messages
- Spam protection using a honeypot field

---

## 20. Performance Requirements

The user accepts a heavier site if it looks incredible, but still build professionally.

Required:

- Lazy-load heavy 3D components.
- Lazy-load YouTube embeds only when modal opens.
- Use optimized images through Next Image.
- Compress videos.
- Use reduced-motion fallback.
- Avoid blocking intro forever.
- Use dynamic imports for React Three Fiber scenes.
- Use `prefers-reduced-motion` checks.

Target:

- Mobile usable
- Desktop cinematic
- Lighthouse should not be ignored, even if cinematic effects are heavy

---

## 21. Accessibility Requirements

Must include:

- Keyboard navigation
- Visible focus states
- Escape key for modals
- ARIA labels for icon buttons
- Alt text for images
- Reduced motion mode
- No mandatory sound
- Sufficient contrast
- Custom cursor disabled for keyboard/touch/reduced-motion contexts

---

## 22. Responsive Design

### Desktop

Full cinematic experience:

- Custom cursor
- Lens effects
- 3D background
- Rich hover animations
- Scroll parallax

### Tablet

Reduced but still premium:

- Lighter parallax
- Touch-friendly cards
- No custom cursor

### Mobile

Performance-aware:

- No desktop custom cursor
- Simplified lens animation
- Shorter intro
- Optimized images/videos
- Clear CTA buttons
- Sticky minimal nav

---

## 23. Navigation

Navbar:

- Logo
- Founder
- Digiscoping
- Videos
- Gear
- Collaboration
- Links
- Language switcher

CTA button:

- YouTube

Mobile:

- Fullscreen dark menu
- Animated line/crosshair style
- Large touch targets

---

## 24. Footer

Footer must include:

- Logo
- Short brand sentence
- YouTube
- Instagram
- TikTok
- LinkedIn
- Email
- Privacy
- Cookies
- Language switcher

Keep footer cinematic and minimal.

---

## 25. Suggested Folder Structure

```txt
mountain-fauna-lover/
  public/
    logo/
    videos/
    audio/
    images/
      founder/
      videos/
      backgrounds/
      gear/
      og/
  src/
    app/
      [locale]/
        page.tsx
        founder/page.tsx
        digiscoping/page.tsx
        videos/page.tsx
        collaboration/page.tsx
        links/page.tsx
        gear/page.tsx
        privacy/page.tsx
        cookies/page.tsx
      api/
        contact/route.ts
      globals.css
      layout.tsx
    components/
      layout/
      cinematic/
      sections/
      videos/
      forms/
      ui/
    config/
      site.ts
      socials.ts
      stats.ts
      videos.ts
      gear.ts
    i18n/
      routing.ts
      request.ts
    lib/
      analytics.ts
      validations.ts
      utils.ts
    messages/
      en.json
      it.json
  middleware.ts
  next.config.ts
  tailwind.config.ts
  package.json
  README.md
```

---

## 26. Implementation Phases

Codex should implement in this order.

### Phase 1 — Project setup

- Create Next.js 15 TypeScript project.
- Install Tailwind CSS.
- Install Framer Motion.
- Install next-intl.
- Install shadcn/ui dependencies if used.
- Install React Three Fiber / Three.js.
- Install zod, react-hook-form.
- Install Resend.
- Add Vercel Analytics.

### Phase 2 — Core architecture

- Implement bilingual routing.
- Implement translation files.
- Implement config files.
- Implement layout, navbar, footer.
- Implement SEO metadata structure.

### Phase 3 — Cinematic system

- Implement LogoPortalIntro.
- Implement FogLayer.
- Implement SnowParticles.
- Implement CustomCursor.
- Implement ObservationLens.
- Implement page transitions.
- Implement reduced-motion fallbacks.

### Phase 4 — Homepage

- Build hero.
- Add logo portal intro.
- Add Wildlife Observation Mode.
- Add previews for videos, digiscoping, founder, gear, collaboration.
- Add stats.
- Add social CTAs.

### Phase 5 — Pages

- Founder page.
- Digiscoping page.
- Videos page and modal.
- Collaboration page and contact form.
- Links page.
- Gear page.
- Privacy and cookies pages.

### Phase 6 — Polish

- Add animations.
- Add responsive refinements.
- Add accessibility checks.
- Add loading states.
- Add placeholder assets.
- Add README instructions.

### Phase 7 — Deployment

- Prepare for Vercel.
- Document env vars.
- Verify build.
- Verify routes.
- Verify contact form behavior.

---

## 27. Acceptance Checklist

The final website is acceptable only if all these are true:

- It does not look like a generic portfolio.
- It immediately feels cinematic, dark, alpine, and premium.
- The logo is used as a portal/visual identity system.
- Wildlife Observation Mode is present after the portal experience.
- The website is bilingual English/Italian.
- Browser language is detected automatically.
- There is a language switcher.
- The founder is very visible.
- The founder page includes Mattioli Simone’s mountain and developer identity.
- Digiscoping is explained clearly and respectfully.
- There are 9 manually editable video entries.
- Clicking a video opens an embedded modal.
- There is a fallback YouTube button.
- There is a collaboration page with a working contact form architecture.
- Contact messages are configured to go to `mattioli.simone.10@gmail.com`.
- Social links are correct.
- Static social stats are editable.
- Gear page exists.
- Privacy and cookie pages exist.
- Vercel deployment is supported.
- SEO metadata is implemented.
- Vercel Analytics is implemented.
- Google Analytics is optional via env var.
- Motion is rich but professional.
- Reduced motion is supported.
- Mobile is usable.
- Accessibility basics are respected.

---

## 28. README Requirements

Create a `README.md` explaining:

- Project concept
- How to run locally
- How to edit videos
- How to edit stats
- How to edit gear
- Where to place assets
- How to configure Resend
- How to configure Google Analytics optionally
- How to deploy on Vercel

Include commands:

```bash
npm install
npm run dev
npm run build
npm run lint
```

---

## 29. Final Creative Warning for Codex

This is the most important creative constraint:

> The website must feel like entering the Alps through a wildlife observation lens. Every page should belong to the same cinematic world: black/white, fog, silence, snow, circular scope geometry, mountain lines, and emotional personal storytelling. Do not create a normal content creator website. Do not create a colorful outdoor blog. Do not create a generic portfolio. Build a premium interactive mountain experience for Mountain Fauna Lover.

