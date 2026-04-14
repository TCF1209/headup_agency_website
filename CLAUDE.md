# CLAUDE.md — head_up_agency_website

> **Documentation Version**: 1.0
> **Last Updated**: 2026-04-14
> **Project**: head_up_agency_website
> **Description**: Multilingual (EN / 中文 / BM) lead-generation website for Head Up Agency — an F&B digital marketing agency (GrabFood/Foodpanda marketing + POS system solutions). See `HeadUp_Agency_Brief.md` for the full brand, design, and feature spec.
> **Stack**: Next.js 14 (App Router) · TypeScript · Tailwind CSS · next-intl · Sanity · Framer Motion · React Hook Form + Zod · Resend · shadcn/ui
> **Features**: GitHub auto-backup, Task agents, technical debt prevention

This file provides essential guidance to Claude Code when working with code in this repository.

## 🚨 CRITICAL RULES — READ FIRST

> **Before starting ANY task, respond with:**
> "✅ CRITICAL RULES ACKNOWLEDGED — I will follow all prohibitions and requirements listed in CLAUDE.md"

### ❌ ABSOLUTE PROHIBITIONS
- **NEVER** create new files in root directory → use proper module structure (`app/`, `components/`, `lib/`, etc.)
- **NEVER** write output files directly to root → use designated folders
- **NEVER** create documentation files (.md) unless explicitly requested
- **NEVER** use git commands with `-i` flag
- **NEVER** use raw `find`, `grep`, `cat`, `head`, `tail`, `ls` in Bash → use Read / Grep / Glob tools
- **NEVER** create duplicate files (`Navbar_v2.tsx`, `enhanced_*`, `*_new.ts`) → extend existing
- **NEVER** create multiple implementations of the same concept → single source of truth
- **NEVER** copy-paste code → extract into shared utilities/components
- **NEVER** hardcode values that should be configurable → use `lib/constants.ts` / env vars
- **NEVER** use naming like `enhanced_`, `improved_`, `new_`, `v2_`

### 🎨 DESIGN PROHIBITIONS (from brief)
- **NEVER** use Inter, Roboto, or Arial as primary font → Syne + DM Sans + JetBrains Mono only
- **NEVER** use pastel gradients, soft glows, or stock-photo heroes
- **NEVER** use rounded-full or rounded-xl on structural elements → `rounded-md` max
- **NEVER** use `#E8FF00` accent as a background fill or decorative color → CTAs/active states only
- **NEVER** animate `height` directly → use `scaleY` or `AnimatePresence`

### 📝 MANDATORY REQUIREMENTS
- **COMMIT** after every completed task/phase
- **GITHUB BACKUP** — `git push origin main` after every commit
- **USE TASK AGENTS** for long-running operations (>30s)
- **TodoWrite** for complex tasks (3+ steps)
- **READ FILES FIRST** before editing
- **SEARCH FIRST** (Grep/Glob) before creating new files — extend existing
- **SINGLE SOURCE OF TRUTH** per feature/concept
- **TRANSLATE EVERY STRING** — all user-facing copy goes through `messages/{en,zh,ms}.json`; never hardcode UI text
- **VALIDATE EVERY FORM** via Zod schemas in `lib/validations.ts`

### 🔍 PRE-TASK COMPLIANCE CHECK
- [ ] Will this create files in root? → use proper module structure
- [ ] Will this take >30s? → use Task agents
- [ ] Is this 3+ steps? → TodoWrite first
- [ ] Searched for existing implementations? (Grep/Glob)
- [ ] Can I extend existing code instead of creating new?
- [ ] Any new user-facing string added to all 3 locale files?

## 🏗️ PROJECT STRUCTURE

```
app/[locale]/            # next-intl locale routing (en | zh | ms)
  layout.tsx · page.tsx (Home)
  services/ · solutions/ · book/ · careers/ · partner/
components/              # Navbar, Footer, InquiryDrawer, HeroSection, etc.
  ui/                    # shadcn components
messages/                # en.json · zh.json · ms.json
sanity/schema/           # caseStudy · jobListing · testimonial · blogPost
lib/                     # constants · whatsapp · validations
styles/globals.css       # noise texture, custom scrollbar, ::selection
public/images/logo.png   # primary brand asset (white on dark)
```

## 🎨 BRAND TOKENS (Tailwind)

| Token | Hex |
|---|---|
| Dark Primary | `#1A1A1A` |
| Dark Surface | `#242424` |
| Dark Border | `#333333` |
| Accent | `#E8FF00` |
| Accent Muted | `#C8DC00` |
| Light BG | `#F8F8F8` |
| Text Muted | `#888888` |

Fonts: `Syne` (display) · `DM Sans` (body/UI) · `JetBrains Mono` (stats/labels) · `Noto Sans SC` (Chinese).

## 🚀 COMMON COMMANDS

```bash
npm run dev          # local dev
npm run build        # production build
npm run lint         # eslint
npm run typecheck    # tsc --noEmit (add to package.json)
git push origin main # mandatory after every commit
```

## 📚 REFERENCES

- **Full project brief**: `HeadUp_Agency_Brief.md` — authoritative source for pages, sections, copy, animations, and quality checklist
- **Design philosophy**: "Human-Crafted, Not AI-Generated" — see brief §Design Philosophy before styling work
- **Animation spec**: brief §Animation Guidelines — mandatory, not optional

---

**⚠️ Prevention is better than consolidation — build clean from the start.**
**🎯 Single source of truth. Extend before creating.**
