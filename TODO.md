# Head Up Agency — Outstanding Work

> **Status as of last session**: All 6 pages built, 24 routes prerender cleanly (6 × 3 locales), forms + API routes + WhatsApp FAB + inquiry drawer working, SEO + sitemap + GA4 wired. Dev server runs; first-visit compile is slow but normal (expected in Next dev mode).

## 🚨 Before picking up — read these

- `CLAUDE.md` — project rules
- `HeadUp_Agency_Brief.md` — full design/feature spec
- Git history: `git log --oneline` shows the build arc
- Build sanity check: `npm run typecheck && npm run build`
- Dev: `npm run dev` then visit `/en`, `/zh`, `/ms`

---

## Priority 1 — Quick visual wins (~20 min)

### 1a. Wire the logo as favicon + og:image
- Replace `app/favicon.ico` with a favicon generated from `public/images/logo.png`
  (use https://realfavicongenerator.net or similar — need .ico + apple-touch-icon + 16/32px PNG)
- Add `og:image` to `lib/seo.ts` `pageMetadata()` — use `/images/og-image.png` (1200×630, dark bg + logo + tagline — needs to be created)
- Until the designed OG is ready, fallback to `/images/logo.png`

### 1b. "Trusted by" logo strip placeholder
- New component `components/TrustedByStrip.tsx` — horizontal row of grayed-out boxes (6 slots)
- Each slot a dashed-border placeholder marked `// TODO: client logo`
- Mount it on `/` home (between Why and CTA banner) AND on `/partner` (between benefits and form)
- Desktop: 6-up grid. Mobile: horizontal scroll.

---

## Priority 2 — Sanity CMS (~1–1.5 hours)

The goal: let the client edit case studies, testimonials, and job listings without redeploying.

### 2a. Schemas (in `sanity/schema/`)
- `caseStudy.ts` — `client`, `clientType`, `problem`, `solution`, `results[]`, `beforeImage`, `afterImage`, `order`
- `testimonial.ts` — `name`, `business`, `quote`, `rating`, `avatar`, `order`
- `jobListing.ts` — `title`, `department`, `type`, `location`, `summary`, `fullDescription`, `published`
- `blogPost.ts` — `title`, `slug`, `excerpt`, `body` (portable text), `coverImage`, `publishedAt` (can be stubbed — not in primary brief)

### 2b. Embedded studio
- Add `app/studio/[[...tool]]/page.tsx` using `next-sanity`
- `sanity.config.ts` at project root
- Access: `/studio` (single-tenant, client logs in there)

### 2c. Data fetching + wiring
- `sanity/client.ts` — GROQ client with project ID from `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `/solutions` page: replace `CASE_STUDIES` and `QUOTES` arrays with Sanity fetches
- `/careers` → `components/CareersInteractive.tsx`: replace `JOBS` array with Sanity fetch
  (tricky: it's a client component — either hoist fetch to server page and pass down, or switch to client-side fetch with loading state. **Prefer server-side fetch + prop down.**)
- Home `components/home/TestimonialsSection.tsx` + `CaseStudiesSection.tsx`: same treatment

### 2d. Environment
- Client will need to create a Sanity project at sanity.io and provide `NEXT_PUBLIC_SANITY_PROJECT_ID`
- Document this in `README.md`

---

## Priority 3 — Responsive + browser smoke test (~30 min)

Required by brief's quality checklist. Can't skip.

- Test at **375px** (iPhone SE) — zero horizontal overflow on every page
- Test at **768px** (iPad) — 2-column layouts kick in
- Test at **1280px** (laptop) — full layouts
- Click through every form. Verify:
  - Inquiry drawer opens/closes smoothly
  - Booking form day picker works on mobile (touch)
  - Resume upload file picker works
  - WhatsApp FAB doesn't overlap footer content on mobile
  - Mobile nav drawer opens, links work, language switcher visible at bottom
- Check all 3 locales render (some strings in `messages/zh.json` and `messages/ms.json` may still be partial — scan for English fallbacks)

---

## Priority 4 — Content placeholders to replace

All marked with `// TODO` comments. Grep for `TODO` to find them. Main clusters:
- `/solutions` — case studies, testimonials, videos (will move to Sanity in Priority 2)
- `/careers` — jobs + culture values (will move to Sanity)
- `/partner` — programme description + benefits copy
- `lib/constants.ts` — `WHATSAPP_NUMBER`, `CONTACT_EMAIL`, `HR_EMAIL`, `GA_MEASUREMENT_ID`, social URLs

---

## Priority 5 — Image additions (after client provides assets)

See page-by-page review from last session. In order of impact:
1. **Partner/platform logos** on `/partner` + footer trusted-by strip (Grab, Foodpanda, POS brands)
2. **Client logos** on case study cards
3. **Before/after screenshots** in `/solutions` case studies (most on-brand — evidence, not decoration)
4. **Real client headshots** replacing letter avatars in testimonials
5. Optional: team/office photo on `/careers`

**Do NOT add**: stock restaurant photos, generic food photography, hero background images, decorative abstract shapes.

---

## Priority 6 — Pre-launch polish

- Write proper `README.md` Getting Started section (scaffold is in place; expand with env setup, Sanity setup, Resend setup, deployment to Vercel)
- Verify `sitemap.xml` after adding real domain to `NEXT_PUBLIC_SITE_URL`
- Test production build with real env vars (`RESEND_API_KEY`, `NEXT_PUBLIC_GA_ID`, Sanity keys)
- Lighthouse audit — target 90+ on Performance, SEO, Accessibility (brief requirement)
- Verify `::selection` color, scrollbar styling, noise texture all appear correctly
- Check `next-sanity@9` pinned (we're on Next 14; don't upgrade to v10+ which requires Next 16)

---

## ⚠️ Known gotchas (save future time)

- `next-sanity` is pinned to `^9` because Next 14.2 can't use v10+ (v10 requires Next 16). Do not upgrade unless Next is upgraded too.
- `@hookform/resolvers` is installed at v5 — uses the `zodResolver` import we already use.
- Careers page is split: `app/[locale]/careers/page.tsx` (server, owns metadata) + `components/CareersInteractive.tsx` (client, owns useRef + form). Follow the same pattern if any other page needs both metadata export AND client-side state.
- `HeroSection.tsx` uses `t.raw("headline")` not `t("headline")` because the string contains `<accent>` tags that we parse manually. Do NOT change to `t.rich` — the parsing supports the word-by-word animation.
- All API routes fall back to `console.log` when `RESEND_API_KEY` is missing. Safe for dev. Set the key before production.
- The `i18n/navigation.ts` `Link`/`useRouter` are the locale-aware ones. Do NOT import from `next/link` or `next/navigation` for routing — it'll break locale prefixes.
- Post-commit git hook auto-pushes to GitHub. No need to manually push.
