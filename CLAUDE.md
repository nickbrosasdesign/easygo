# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

EasyGo is an accessibility-focused routing app concept for getting around Seattle (people with mobility and cognitive disabilities). This repository is currently a **static prototype + research/design archive**, not an application codebase: there is no `package.json`, no build tool, and no test suite. Content is plain HTML/CSS and Markdown viewed directly in a browser or editor.

A `node_modules/` and empty `src/` directory exist from an abandoned `npx storybook init` attempt (see `debug-storybook.log`) — it failed because there's no `package.json`, and no Storybook setup actually exists. Don't assume npm/yarn scripts work here unless you've checked.

## Working with this repo

There is no build/lint/test command. To view the prototype pages, open the HTML files directly in a browser (no dev server required):
- `easygo-pm-deliverables.html` — PM deliverables doc (business requirements, goals, timeline, MVP/future features, roadmap, journey map, research synthesis, routing logic).
- `easygo-design-system.html` — V1 design system reference (colors, typography, layout, components, patterns), rendered from `core.css`.

Both pages load Lexend from Google Fonts via `<link>` tags and pull all visual styling from `core.css` at the repo root.

## Design tokens: three copies, keep in sync

The design token values (colors, typography, spacing, radii, component specs) currently exist in **three places** that must be kept consistent when changing the visual design:
1. `core.css` — root stylesheet, consumed by both HTML prototype pages via CSS custom properties (`--primitive-*`, etc.).
2. `docs/tokens.css` — currently byte-identical to `core.css`.
3. `docs/design-system.md.md` — YAML frontmatter at the top of the file encodes the same tokens (colors, typography, spacing, components) in a structured format, followed by prose documentation of usage/rationale.

If you update a token (e.g. a color hex value or spacing scale), update it in all three locations, not just one.

## Image assets live in `public/`

The old `images/` directory was removed from git; logo/map assets now live under `public/` (see `public/README.md` for what each image variant is for: main logo vs. alt/collapsed logo vs. prototype-only map image). Both HTML pages reference `public/logo-800-vector.png` — if you add new image references, point them at `public/`, not `images/`.

## `docs/` contents

- `docs/design-system.md.md` — source of truth for design tokens + design rationale (see above).
- `docs/interview-analysis.md.md` — UX research: synthesis of 3 user interviews (2026 redesign) plus a cross-reference against original 2018 research notes. Contains key themes, user segments, and an insights → opportunities table that motivate product decisions (e.g. crowdsourced hazard reporting as the top-priority feature).
- `docs/secondary-research.md.md` — literature review + competitive analysis (Google Maps, Wheelmap, AccessMap, OpenSidewalks, Seattle Accessible Route Planner) backing design decisions like low cognitive load, OpenStreetMap as preferred map service, and Lexend as the typeface.

When making product or design decisions, check these research docs first — they encode the *why* behind choices like the routing priority hierarchy (avoid hazards → avoid construction → prefer lowest grade → accessible crosswalks → accessible POIs → signalized intersections) and the crowdsourced hazard-reporting feature.

## Design source of truth

The Figma file is the canonical design source: [EasyGo Redesign 2026](https://www.figma.com/design/JFLyvWVvDERSV8GVLONHMZ/EasyGo-Redesign-2026) (linked from `docs/design-system.md.md`). `core.css` and the design system HTML page are derived from it.
