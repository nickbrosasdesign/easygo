# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

EasyGo is an accessibility-focused routing app concept for getting around Seattle (people with mobility and cognitive disabilities). The actual application is a **React + Vite** scaffold at the repo root (plain JS, not TS). Alongside it, the repo carries a static prototype + research/design archive: standalone HTML mockups and Markdown research docs viewed directly in a browser or editor, not part of the app build.

## Working with this repo

Standard Vite/npm commands, run from the repo root:
- `npm install` — install dependencies
- `npm run dev` — start the Vite dev server with HMR
- `npm run build` — production build to `dist/`
- `npm run lint` — ESLint (flat config in `eslint.config.js`)
- `npm run preview` — preview the production build

There is no test suite configured yet.

The app entry point is `index.html` → `src/main.jsx` → `src/App.jsx`. `src/main.jsx` imports `../core.css` directly (the same root-level stylesheet used by the static prototype pages, see below), so the app and the prototype share one design-token source rather than duplicating styles into `src/`.

### Static prototype pages (separate from the app)

These are standalone HTML files, not wired into the Vite build — open them directly in a browser:
- `easygo-pm-deliverables.html` — PM deliverables doc (business requirements, goals, timeline, MVP/future features, roadmap, journey map, research synthesis, routing logic).
- `easygo-design-system.html` — V1 design system reference (colors, typography, layout, components, patterns), rendered from `core.css`.

Both pages load Lexend from Google Fonts via `<link>` tags and pull all visual styling from `core.css` at the repo root. `index.html` (the Vite entry) loads the same Lexend `<link>` tags for consistency.

## Design tokens: three copies, keep in sync

The design token values (colors, typography, spacing, radii, component specs) currently exist in **three places** that must be kept consistent when changing the visual design:
1. `core.css` — root stylesheet, consumed by both HTML prototype pages via CSS custom properties (`--primitive-*`, etc.).
2. `docs/tokens.css` — currently byte-identical to `core.css`.
3. `docs/design-system.md.md` — YAML frontmatter at the top of the file encodes the same tokens (colors, typography, spacing, components) in a structured format, followed by prose documentation of usage/rationale.

If you update a token (e.g. a color hex value or spacing scale), update it in all three locations, not just one.

## Image assets live in `public/`

The old `images/` directory was removed from git; logo/map assets now live under `public/` (see `public/README.md` for what each image variant is for: main logo vs. alt/collapsed logo vs. prototype-only map image). The static HTML pages reference these as `public/logo-800-vector.png`; inside the Vite app (`src/`), reference the same files as root-relative paths (e.g. `/logo-800-vector.png`) per Vite's `public/` convention — don't add a `/public` prefix there.

## `docs/` contents

- `docs/design-system.md.md` — source of truth for design tokens + design rationale (see above).
- `docs/interview-analysis.md.md` — UX research: synthesis of 3 user interviews (2026 redesign) plus a cross-reference against original 2018 research notes. Contains key themes, user segments, and an insights → opportunities table that motivate product decisions (e.g. crowdsourced hazard reporting as the top-priority feature).
- `docs/secondary-research.md.md` — literature review + competitive analysis (Google Maps, Wheelmap, AccessMap, OpenSidewalks, Seattle Accessible Route Planner) backing design decisions like low cognitive load, OpenStreetMap as preferred map service, and Lexend as the typeface.

When making product or design decisions, check these research docs first — they encode the *why* behind choices like the routing priority hierarchy (avoid hazards → avoid construction → prefer lowest grade → accessible crosswalks → accessible POIs → signalized intersections) and the crowdsourced hazard-reporting feature.

## Design source of truth

The Figma file is the canonical design source: [EasyGo Redesign 2026](https://www.figma.com/design/JFLyvWVvDERSV8GVLONHMZ/EasyGo-Redesign-2026) (linked from `docs/design-system.md.md`). `core.css` and the design system HTML page are derived from it.
