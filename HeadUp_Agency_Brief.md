# Head Up Agency — Website Project Brief
> For Claude Code | Next.js + Tailwind CSS

---

## ⚠️ BEFORE YOU START — Prerequisites

**ALL images and assets are provided in the `images/` folder.**

Steps before writing any code:
1. Copy the `images/` folder into `/public/images/`
2. Verify `/public/images/logo.png` exists — this is the primary brand asset
3. If filenames differ from references in this brief, rename accordingly

**Do NOT begin building without the logo file present.**

---

## 🎯 Project Overview

Build a modern, multilingual (English, Chinese, Malay) lead generation website for **Head Up Agency** — a digital marketing agency specialising in helping F&B businesses grow online via GrabFood/Foodpanda marketing and POS system solutions.

**Primary goal**: Generate leads — inquiry submissions and booked sales consultations.

**Target audience**: F&B business owners and restaurant operators in Malaysia.

**Design concept**: Dark, bold, and minimal. The logo sets the tone — deep charcoal backgrounds, sharp white typography, generous negative space. This is a premium agency that means business. Every page should feel like it was built by people who know what they're doing.

---

## 🎨 Brand & Design System

### Logo
- File: `/public/images/logo.png`
- Style: Geometric HA monogram + "HEADUP AGENCY" wordmark, white on dark
- Usage: Navbar (white version on dark bg), Footer (white), light sections (dark version if needed)
- Never distort, recolour, or add effects to the logo

### Color Palette
| Token | Hex | Usage |
|---|---|---|
| Dark Primary | `#1A1A1A` | Hero bg, footer, navbar |
| Dark Surface | `#242424` | Card backgrounds, section alternates |
| Dark Border | `#333333` | Subtle borders, dividers |
| White | `#FFFFFF` | Primary text on dark bg |
| Off-White | `#F5F5F5` | Body text, secondary labels |
| Accent | `#E8FF00` | CTAs, highlights, hover states — electric yellow-green |
| Accent Muted | `#C8DC00` | Hover state of accent |
| Light BG | `#F8F8F8` | Light sections (FAQ, Partners) |
| Text Dark | `#1A1A1A` | Text on light sections |
| Text Muted | `#888888` | Subtitles, meta info |

> **Accent colour rationale**: The logo is pure black/white. A sharp electric yellow-green (`#E8FF00`) creates maximum contrast and energy against the dark palette — used sparingly for maximum impact (CTAs, active states, key highlights only).

### Typography — CRITICAL: No Generic Fonts
- **Display headings**: `Syne` — geometric, bold, distinctive. Perfect for agency identity
- **UI / subheadings & body**: `DM Sans` — clean, warm, not overused
- **Monospace accents** (stats, labels, codes): `JetBrains Mono` — tech credibility
- **Chinese + Malay text**: `Noto Sans SC` for Chinese, system font stack for Malay
- Load via Google Fonts in `layout.tsx`
- **Never use Inter, Roboto, or Arial as primary**

### Design Philosophy — Human-Crafted, Not AI-Generated

This must feel like a **real agency built their own site** — confident, sharp, opinionated. Every pixel should communicate expertise and intent.

**Anti-AI Rules (Non-Negotiable):**
- **No symmetric grids** — vary card sizes, break rows intentionally, at least 2 sections must have asymmetric or overlapping layouts
- **No pastel gradients or soft glows** — this is dark, high-contrast, editorial. Nothing looks "generated"
- **No rounded-everything** — `rounded-lg` maximum, key structural elements use sharp `rounded-none`
- **No stock-photo hero** — typography IS the hero. Massive `Syne` headline, not a smiling restaurant owner photo
- **No vague agency copy** — every headline is specific and punchy, never "we help businesses grow online"
- **No Inter/Roboto** — `Syne` + `DM Sans` + `JetBrains Mono` only. Font choice is part of the identity
- **No evenly-spaced everything** — use intentional tension: tight spacing in some areas, generous negative space in others

**Signature Design Decisions:**
- **Typography-first hero** — `Syne` at `text-7xl`–`text-9xl`, single accent word in `#E8FF00`, stat block on the right
- **Dark → light → dark flow** — hero + services (dark) → case studies + testimonials (light `#F8F8F8`) → footer (dark). The contrast creates visual rhythm
- **Accent as a weapon** — `#E8FF00` appears ONLY on: primary CTAs, 1–2 stat numbers, active nav link, form focus border. Never as a bg fill or decorative colour
- **Grid-breaking moments** — case study section: 1 large card left + 2 stacked right. Why choose us: numbers overlapping section border. These break the predictable grid
- **Micro-details that signal craft** — custom dark scrollbar with accent thumb, `::selection` in accent colour, noise texture on hero bg, `JetBrains Mono` for all labels/stats/codes
- **Sharp edges with purpose** — cards have a `border-l-4` accent reveal on hover, not a glow. Buttons have `rounded-md` not `rounded-full`. Nothing is soft unless it's deliberate

---

## 🌐 Multilingual Setup

- **Languages**: English (default), 中文 (Chinese), Bahasa Melayu
- **Implementation**: `next-intl` library for i18n routing
- **URL structure**: `/en/`, `/zh/`, `/ms/` prefix routing
- **Language switcher**: Visible in navbar on ALL pages — pill-style toggle (EN | 中文 | BM)
- **Content**: All copy in `messages/en.json`, `messages/zh.json`, `messages/ms.json`
- **Fallback**: English if translation missing
- All form labels, placeholders, error messages, and thank-you messages must also be translated

---

## 📱 Responsive Design — Mobile + Desktop, Both Feel Purpose-Built

Both experiences must be designed intentionally — not one scaled from the other.

### Mobile (< 768px)
- **Navbar**: Logo left, hamburger right. Tap → full-screen dark drawer (`#1A1A1A`), nav links large (`text-2xl`), staggered fade-in via Framer Motion. Language switcher at bottom of drawer
- **Hero**: Full viewport height (`100dvh`). Stacked layout — headline full width, stat block below (2×2 grid), CTAs 100% width stacked vertically. Headline scales to `text-4xl` minimum
- **Service cards**: Single column, full-width. Accent left border visible without hover
- **Case study cards**: Single column, result stat prominently displayed
- **Solutions page videos**: Single column, full-width iframe, 16:9 ratio maintained
- **Booking form**: Full-width inputs, `react-day-picker` mobile mode, time slot as large tappable buttons (not a dropdown)
- **Careers**: Job listings as accordion — tap title to expand description + apply button
- **Partner + Inquiry forms**: Full-width fields, large submit button, no side-by-side inputs
- **Language switcher**: Always accessible — in mobile drawer AND as sticky bottom pill on forms
- **All touch targets**: Minimum 44×44px — nav links, buttons, accordion headers, form fields
- **Typography**: Body minimum `text-base` (16px), no label text below `text-sm`
- **Zero horizontal overflow**: Must test every page at 375px (iPhone SE) — no exceptions
- **WhatsApp FAB**: Fixed bottom-right on ALL pages, dark circle with accent icon, `animate-ping` ring

### Tablet (768px–1024px)
- Full navbar links visible (no hamburger), language switcher as pills in navbar
- 2-column service + case study cards
- Booking form: 2-column grid for name/email, phone/business fields
- Career listings: card grid (not accordion)

### Desktop (> 1024px)
- **Navbar**: Sticky, transitions transparent → glassmorphism dark on scroll (`backdrop-blur-md bg-black/80`)
- **Hero**: Side-by-side — headline + CTAs left (60%), stat block right (40%), large geometric accent behind stats
- **Services**: 2-column large cards
- **Case studies**: Asymmetric grid — 1 large left, 2 stacked right
- **Booking**: 2-column layout — form left, info/benefits right
- **Careers**: 3-column job card grid
- **Solutions videos**: 2–3 column grid

---

## 🧱 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS (custom tokens in `tailwind.config.ts`)
- **i18n**: `next-intl`
- **CMS**: Sanity.io — for blog posts, case studies, job listings (easy to update)
- **UI Components**: shadcn/ui (selectively)
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Form submission**: Email (Resend or Nodemailer) + WhatsApp deep link
- **Calendar/Booking**: `react-day-picker` + time slot logic
- **Icons**: Lucide React
- **Analytics**: Google Analytics 4 (via `@next/third-parties`)
- **SEO**: Next.js Metadata API + `next-sitemap`
- **Deployment**: Vercel

---

## 📄 Pages & Sections

---

### 1. `/` — Home Page

#### Navbar
- Logo (left) + nav links (centre/right): `Home | Services | Solutions | Book | Careers | Partner`
- Language switcher (EN | 中文 | BM) — pill toggle, far right
- On scroll: `backdrop-blur-md` + subtle dark border bottom
- Mobile: hamburger → full-screen dark drawer, staggered link reveal
- Active link: accent `#E8FF00` underline

#### Hero Section
- **Full viewport height, dark bg** (`#1A1A1A`) + subtle noise texture overlay
- **Typography-first** — no stock photo, just bold type and geometric accent shapes
- Layout: Left-heavy asymmetric
  - Small label (JetBrains Mono, accent colour): `// F&B DIGITAL GROWTH AGENCY`
  - Main headline (Syne, massive — `text-6xl` to `text-8xl`):
    - EN: `We Help F&B Businesses Grow Online.`
    - Accent word "Grow" in `#E8FF00`
  - Subheading (DM Sans): `GrabFood & Foodpanda Marketing · POS System Solutions · Real Results`
  - Two CTAs:
    - Primary: `Book a Consultant →` — accent bg `#E8FF00`, dark text, sharp `rounded-md`
    - Secondary: `View Our Work` — ghost, white border
- Right side: Abstract geometric grid or animated counter block showing key stats
  - `200+` Clients Served
  - `RM 2M+` Revenue Generated
  - `4.9★` Average Rating
- Floating label (sharp, no rotation): `Specialising in F&B` — dark border, white text
- Scroll indicator: `↓ Scroll` in JetBrains Mono, accent colour

#### Services Snapshot
- Section title (Syne): `What We Do`
- 2 large service cards, side by side (desktop), stacked (mobile)
  - **GrabFood & Foodpanda Marketing** — icon, headline, 2-line desc, `Learn More →`
  - **POS System Solutions** — icon, headline, 2-line desc, `Learn More →`
- Cards: dark surface `#242424`, sharp corners, accent border-left on hover

#### Case Study Highlights
- Section title: `Results That Speak`
- 3 case study preview cards — asymmetric grid (1 large left, 2 small right)
- Each: client type (F&B), problem teaser, result stat (e.g. `+340% Orders`), `View Case →`
- All placeholder — mark `// TODO: replace with real case studies`
- CTA: `See All Case Studies →`

#### Testimonials Strip
- Dark alt bg, horizontal scroll on mobile
- 3 quote cards: avatar initial, name, business type, star rating, quote
- All placeholder — mark `// TODO`

#### Why Head Up
- Light section (`#F8F8F8`) — contrast break
- 3 reason blocks: icon + bold headline + description
  - 🎯 F&B Specialists — We only work with what we know
  - 📈 Data-Driven — Every decision backed by numbers
  - 🤝 End-to-End — From onboarding to ongoing optimisation

#### CTA Banner
- Full-width dark bg, accent left border stripe (8px)
- Headline: `Ready to Grow Your F&B Business?`
- Two buttons: `Book a Consultant` (accent) + `Send an Inquiry` (ghost)

#### Footer
- Dark bg `#1A1A1A`
- Logo (top) + tagline
- 4 columns: Company | Services | Quick Links | Contact
- Language switcher (small, bottom left)
- Social: Facebook + Instagram + LinkedIn (placeholder links)
- Bottom bar: `© 2025 Head Up Agency · All Rights Reserved`

---

### 2. `/services` — Services Page

#### GrabFood & Foodpanda Marketing
- Hero: dark bg, bold Syne headline
- What's included (icon grid):
  - Menu optimisation
  - Promotional campaign setup
  - Rating & review management
  - Sales analytics & reporting
  - Ad spend management
- How it works: 3-step process (Audit → Strategy → Execute)
- Expected results: stat highlights (placeholder)
- FAQ section (accordion, 5–6 questions)
- CTA: `Book a Free Consultation →`

#### POS System Solutions
- Same structure as above
- What's included:
  - POS hardware setup
  - Software configuration
  - Staff training
  - Ongoing support
  - Integration with GrabFood/Foodpanda
- FAQ section (accordion, 5–6 questions)
- CTA: `Get a Quote →`

---

### 3. `/solutions` — Solutions Page (Case Studies & Testimonials)

- Page hero: `Real Problems. Real Solutions. Real Results.`
- **Problem → Solution → Results** card format
- 3 placeholder case studies, each:
  - Client type (e.g. "Hawker Stall, Klang Valley")
  - **Problem**: `Low visibility on GrabFood, averaging 20 orders/day`
  - **Solution**: `Full menu redesign + promotional campaign + ad spend management`
  - **Results**: `+280% orders in 60 days · RM 45,000 additional revenue`
  - Expandable detail section
- **Video Section**:
  - Grid of embedded YouTube/video iframes with short description
  - Placeholder: `// TODO: embed real client testimonial videos`
  - Each video card: thumbnail, play button overlay, caption
- **Testimonials**: 4–6 quote cards, full layout
- Sanity CMS powered — easy to add new case studies without code changes
- `// TODO: all content placeholder, replace via Sanity CMS`

---

### 4. `/book` — Book a Sales Consultant

- Page headline: `Book Your Free Consultation`
- Subheading: `30-minute session · No commitment · F&B specialists only`
- **Booking Form**:
  - Full Name
  - Email Address
  - Phone Number (Malaysian format)
  - Business Name
  - Business Type (dropdown: Restaurant / Café / Hawker / Cloud Kitchen / Other)
  - Service Interested In (dropdown: GrabFood & Foodpanda / POS System / Both)
  - Preferred Date (date picker — `react-day-picker`, block weekends if needed)
  - Preferred Time (time slot selector: Morning 9–12 / Afternoon 12–5 / Evening 5–7)
  - Additional Notes (textarea, optional)
- **On submit**:
  - Send form data to email (Resend API)
  - Open WhatsApp with pre-filled message: `wa.me/60XXXXXXXXX?text=...`
  - Show thank-you message: `✅ Booking request sent! We'll confirm within 24 hours.` (translated in all 3 languages)
- Form validation: React Hook Form + Zod
- Mobile-optimised: full-width inputs, large tap targets

---

### 5. `/careers` — Careers Page

#### Culture Section
- Bold headline: `Join the Team That Grows F&B Businesses`
- 3 culture values (icon + title + description):
  - 🚀 Move Fast — placeholder
  - 💡 Think Sharp — placeholder
  - 🤝 Grow Together — placeholder
- `// TODO: replace with real company values`

#### Job Listings
- Powered by Sanity CMS — client can add/remove listings without code
- Each listing card: Job Title, Department, Type (Full-time/Part-time/Remote), Location, `Apply Now →`
- 3 placeholder listings:
  - Digital Marketing Executive
  - Sales Consultant (F&B)
  - POS Technical Support

#### Application Form
- Fields:
  - Full Name
  - Email
  - Phone
  - Position Applying For (auto-filled if from job card, else dropdown)
  - LinkedIn / Portfolio URL (optional)
  - Cover Letter (textarea)
  - Resume Upload (PDF/DOCX, max 5MB)
- On submit: email to HR + WhatsApp notification
- Thank-you message after submission (translated)
- `// TODO: set real HR email`

---

### 6. `/partner` — Partner With Us

- Page headline: `Become an Authorised Partner`
- What is the partner programme (2–3 paragraphs, placeholder)
- Partner benefits (icon list, 4–5 items, placeholder)
- Partner tiers (if applicable — placeholder)
- **Partner Inquiry Form**:
  - Full Name
  - Company Name
  - Email
  - Phone
  - Business Type
  - Why Partner With Us (textarea)
- On submit: email + WhatsApp
- Thank-you message (translated)

---

### 7. Inquiry Form (Global — available from all CTAs)

- Accessible via `Send an Inquiry` buttons site-wide
- Implemented as a **slide-in drawer** (right side) or **modal** — not a separate page
- Fields:
  - Name
  - Email
  - Phone
  - Service Interested (dropdown)
  - Message
- On submit: email (Resend) + WhatsApp link opens
- Thank-you state replaces form content
- Fully translated in all 3 languages

---

## 🗂 File Structure

```
/app
  /[locale]                 ← next-intl locale routing
    layout.tsx
    page.tsx                ← Home
    /services/page.tsx
    /solutions/page.tsx
    /book/page.tsx
    /careers/page.tsx
    /partner/page.tsx

/components
  /ui                       ← shadcn components
  Navbar.tsx                ← sticky, blur, language switcher, mobile drawer
  Footer.tsx
  InquiryDrawer.tsx         ← global slide-in inquiry form
  HeroSection.tsx
  ServiceCard.tsx
  CaseStudyCard.tsx
  TestimonialCard.tsx
  BookingForm.tsx
  JobCard.tsx
  VideoGrid.tsx
  LanguageSwitcher.tsx
  ThankYouMessage.tsx

/messages
  en.json                   ← English translations
  zh.json                   ← Chinese translations
  ms.json                   ← Bahasa Melayu translations

/sanity
  schema/
    caseStudy.ts
    jobListing.ts
    testimonial.ts
    blogPost.ts

/public
  /images
    logo.png                ← Head Up Agency logo (white on dark)

/lib
  constants.ts              ← site config, WhatsApp number, email
  whatsapp.ts               ← message builder
  validations.ts            ← Zod schemas for all forms

/styles
  globals.css               ← noise texture, custom scrollbar, selection colour
```

---

## ⚙️ Key Configuration

```ts
// lib/constants.ts
export const WHATSAPP_NUMBER = "60XXXXXXXXX"  // TODO: replace
export const CONTACT_EMAIL   = "hello@headupagency.com"  // TODO: replace
export const GA_MEASUREMENT_ID = "G-XXXXXXXXXX"  // TODO: replace

export const BRAND = {
  nameEN: "Head Up Agency",
  taglineEN: "We Help F&B Businesses Grow Online.",
}

// styles/globals.css
// Custom scrollbar: dark track, accent thumb
// ::selection { background: #E8FF00; color: #1A1A1A; }
// Noise texture on hero via SVG filter
```

---

## 🔍 SEO & Analytics

- **Next.js Metadata API**: unique `title`, `description`, `og:image` per page in all 3 languages
- **Sitemap**: auto-generated via `next-sitemap` on build
- **Google Analytics 4**: via `@next/third-parties/google` — track page views + form submissions as events
- **Structured Data**: `Organization` + `LocalBusiness` JSON-LD on homepage
- **Performance**:
  - All images via `next/image` with proper `alt` text
  - Fonts preloaded in `layout.tsx`
  - Lazy-load below-fold sections
  - Target Lighthouse score: 90+ on Performance, SEO, Accessibility

---

## 🎭 Animation Guidelines (Framer Motion) — MANDATORY, NOT OPTIONAL

Animations are core to this site's identity. They must feel **sharp, fast, and confident** — like the agency itself. No floaty wellness-spa animations. Every motion has purpose.

### Hero — Maximum Impact on Load
- **Headline word-by-word reveal**: Split headline into words, each `y: 40 → 0` + `opacity: 0 → 1`, stagger `0.07s` per word. `Syne` font at this size makes the animation dramatic
- **Accent word** ("Grow" / key word): after its word reveal, additional `scale: 0.85 → 1.08 → 1` spring pop — draws the eye
- **Monospace label** above headline: types in character by character OR simple fade-in `0.2s` before headline starts
- **CTA buttons**: `y: 20 → 0` + fade, delay `0.55s` after headline completes
- **Stat counters** (right block):
  - Each number counts up: `0 → 200`, `0 → 2000000`, using `useMotionValue` + `useSpring` (`stiffness: 50, damping: 20`)
  - Trigger on page load with `0.4s` delay
  - Labels fade in after number reaches final value
- **Background noise texture**: subtle opacity pulse `0.03 → 0.06 → 0.03`, 6s loop — barely visible, adds life
- **Scroll indicator**: `y: [0, 8, 0]` bounce, `opacity: [1, 0.4, 1]`, 2s loop, starts after 1.5s

### Scroll Reveal — Every Section
- `useInView({ once: true, margin: "-80px" })` on all section wrappers
- **JetBrains Mono labels** (e.g. `// WHAT WE DO`): fade-in + `x: -10 → 0`, 0.3s — appears first
- **Section headlines** (Syne): `x: -24 → 0` + `opacity: 0 → 1`, 0.5s, follows label by `0.1s`
- **Accent divider line** under headline: `scaleX: 0 → 1`, origin left, 0.4s — draws in after title
- **Service cards**: `y: 40 → 0` + fade, stagger `0.1s` per card
- **Case study grid**: large left card `x: -40 → 0`, right cards `x: 40 → 0`, simultaneous — feels like the grid snaps into place
- **Why Choose Us numbers/stats**: count-up animation on scroll, same spring config as hero
- **Testimonial cards**: stagger `0.09s`, `y: 24 → 0` + fade
- **FAQ items**: stagger `0.05s` fade-in, accordion uses `AnimatePresence` for smooth height expand/collapse
- **Job listings**: stagger `0.07s`, `y: 20 → 0` + fade
- **Video grid**: stagger `0.08s`, scale `0.95 → 1` + fade — thumbnails "pop" into place
- **Partner benefits**: `x: -20 → 0` stagger, icon appears before text

### Hover States — Sharp, Intentional, Fast
All hover transitions: `duration: 0.2s` — snappy, not lazy.

- **Service cards**: accent left border `width: 0 → 4px` + `y: -4` lift + subtle bg brighten `#242424 → #2a2a2a`
- **Case study cards**: accent colour overlay `opacity: 0 → 0.06` washes in + result stat gets accent colour
- **CTA primary buttons** (`#E8FF00` bg): `scale: 1 → 1.03` + bg shifts to `#C8DC00`, `whileTap: scale 0.97`
- **CTA ghost buttons**: white/accent fill floods from left via CSS `::before scaleX: 0 → 1`, text colour flips
- **Nav links**: `#E8FF00` underline `scaleX: 0 → 1`, `transform-origin: left`
- **Job cards**: `Apply Now →` text + arrow both shift `x: 0 → 6px` together
- **Video cards**: play button `scale: 1 → 1.2` + drop shadow deepens, overlay `opacity: 0.3 → 0.5`
- **Logo in navbar**: `opacity: 1 → 0.75` on hover (subtle, respectful)
- **Footer links**: accent colour transition, `x: 0 → 3px`
- **Language switcher pills**: `layoutId` shared layout animation — active pill slides smoothly between options

### Navigation
- **Mobile drawer open**: `x: "100%" → 0`, spring `{ stiffness: 280, damping: 28 }` — feels physical
- **Mobile drawer links**: stagger `0.06s` each, `x: 20 → 0` + fade, starts after drawer settles
- **Navbar scroll**: `useScroll` → `useMotionValue` → smooth `background` + `backdropFilter` transition (not a CSS class toggle)
- **Page transitions**: `opacity: 0 → 1`, 200ms — clean and fast, never slow
- **Language switcher active state**: `layoutId="activeLang"` Framer Motion shared layout — pill slides with spring physics

### Inquiry Drawer (Global)
- Drawer: `x: "100%" → 0`, spring `{ stiffness: 300, damping: 30 }`
- Dark backdrop: `opacity: 0 → 0.6`, blur `0 → 4px`
- Form fields: stagger `0.04s` each after drawer settles (delay `0.2s`)
- **Thank-you state**: form `opacity: 1 → 0` + `scale: 1 → 0.96` exit, then success `opacity: 0 → 1` + `y: 10 → 0` enter — uses `AnimatePresence`

### Forms (All Pages)
- Input focus: `box-shadow: 0 0 0 2px #E8FF00` transition `0.15s` — sharp, electric
- Input error: border turns red + error message `x: [-6, 6, -6, 0]` shake, `duration: 0.3s`
- Submit loading: button text fades, spinner appears in place, button disabled state
- Submit success: spinner → checkmark with `scale: 0 → 1` spring pop

> **Performance rules**: Transform + opacity ONLY — never animate `height` directly (use `scaleY` or `AnimatePresence`). `will-change: transform` on all animated cards, drawer, and FAB. `once: true` on all scroll triggers. All transitions ≤ 400ms except hero load sequence. Target 60fps on mid-range Android.

---

## ✅ Quality Checklist

### Design
- [ ] Syne font for all display headings — no Inter/Roboto
- [ ] `#E8FF00` accent used sparingly — only on CTAs, active states, 1–2 stat highlights
- [ ] Dark/light section rhythm maintained across homepage
- [ ] Asymmetric layout in at least 2 sections
- [ ] Noise texture on hero section
- [ ] Custom scrollbar (dark + accent) applied globally
- [ ] `::selection` styled with accent colour

### i18n
- [ ] Language switcher works on all pages including mobile drawer
- [ ] All 3 languages display correctly (EN / 中文 / BM)
- [ ] Forms translate labels, placeholders, errors, thank-you messages
- [ ] URL routing: `/en/`, `/zh/`, `/ms/`

### Responsive
- [ ] 375px (iPhone SE) — zero overflow, all tap targets ≥ 44px
- [ ] 768px (iPad) — 2-column layouts
- [ ] 1280px (laptop) — full layout
- [ ] Booking calendar usable on mobile
- [ ] Resume upload works on mobile

### Functionality
- [ ] All 4 forms submit correctly (email + WhatsApp)
- [ ] Thank-you messages display in correct language
- [ ] Sanity CMS connected — case studies, jobs, testimonials editable
- [ ] GA4 tracking fires on page views + form submissions
- [ ] Sitemap generated at `/sitemap.xml`
- [ ] All TODO items clearly marked for client

---

## 🚀 Getting Started

```bash
npx create-next-app@latest headup-agency --typescript --tailwind --eslint --app
cd headup-agency
npx shadcn@latest init
npm install framer-motion lucide-react next-intl react-hook-form zod react-day-picker
npm install next-sanity @sanity/image-url
npm install resend next-sitemap @next/third-parties
```

> **Note to Claude Code**: Head Up Agency works with F&B business owners — people who are busy, results-focused, and skeptical of agencies. The website must communicate credibility and expertise from the first scroll. No fluff, no vague promises. Bold type, sharp design, specific numbers. The `#E8FF00` accent is a weapon — use it precisely, not liberally. Every CTA should feel like an obvious next step, not a sales push. Build this like an agency that knows what it's doing built it themselves.
