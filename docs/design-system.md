---
version: alpha
name: EasyGo
description: >
  Accessible routing application for people with mobility and cognitive
  disabilities. The visual identity prioritises clarity, trust, and low
  cognitive load. Every component decision reduces friction for users
  navigating with disabilities.

colors:
  # Primitives
  blue-400: "#005299"
  blue-500: "#002a4e"
  blue-300: "#0489ff"
  blue-100: "#d1deee"
  base-white: "#ffffff"
  base-black: "#111111"
  grey-100: "#dbdbdb"
  grey-300: "#888888"
  grey-500: "#3b3a3a"
  hazard-yellow: "#f2c85c"
  error-red: "#f9b4ad"
  stop-red: "#D32F2F"
  # Semantic — derived from primitives
  primary: "{colors.blue-400}"
  primary-dark: "{colors.blue-500}"
  primary-focus: "{colors.blue-300}"
  primary-light: "{colors.blue-100}"
  background-primary: "{colors.base-white}"
  background-secondary: "{colors.blue-400}"
  text-primary: "{colors.base-black}"
  text-secondary: "{colors.blue-400}"
  text-heading: "{colors.blue-400}"
  text-disabled: "{colors.grey-300}"
  border-default: "{colors.grey-100}"
  border-primary: "{colors.blue-400}"
  hazard: "{colors.hazard-yellow}"
  error: "{colors.error-red}"

typography:
  h1:
    fontFamily: Lexend
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.25
  h2:
    fontFamily: Lexend
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.25
  h3:
    fontFamily: Lexend
    fontSize: 24px
    fontWeight: 700
    lineHeight: 32px
  h4:
    fontFamily: Lexend
    fontSize: 20px
    fontWeight: 700
    lineHeight: 32px
  h5:
    fontFamily: Lexend
    fontSize: 16px
    fontWeight: 700
    lineHeight: 24px
  body-primary:
    fontFamily: Lexend
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-small:
    fontFamily: Lexend
    fontSize: 14px
    fontWeight: 400
    lineHeight: 24px
  body-caption:
    fontFamily: Lexend
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  button-primary:
    fontFamily: Lexend
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  button-small:
    fontFamily: Lexend
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  24: 24px
  # 4px grid reference
  grid-4: 4px
  grid-8: 8px
  grid-10: 10px
  grid-12: 12px
  grid-14: 14px
  grid-16: 16px
  grid-20: 20px
  grid-24: 24px
  grid-28: 28px
  grid-32: 32px
  grid-40: 40px
  grid-48: 48px
  grid-56: 56px
  grid-64: 64px

rounded:
  sm: 8px
  md: 16px
  lg: 32px

components:
  button:
    font: "{typography.button-primary}"
    radius: "{rounded.md}"
    height-primary: 48px
    height-small: 24px
    padding-primary: "{spacing.sm} {spacing.md}"
    padding-small: "{spacing.xs} {spacing.sm}"
    background-primary: "{colors.primary}"
    background-secondary: "{colors.background-primary}"
    background-tertiary: transparent
    background-disabled: "{colors.grey-100}"
    text-primary: "{colors.base-white}"
    text-secondary: "{colors.primary}"
    text-tertiary: "{colors.primary}"
    text-disabled: "{colors.grey-300}"
    border-primary: "{colors.primary}"
    border-secondary: "{colors.primary}"
    border-tertiary: transparent
    border-disabled: "{colors.grey-100}"
  toggle:
    width: 80px
    height: 40px
    radius: "{rounded.lg}"
    knob-size: 32px
    background-on: "{colors.primary}"
    background-off: "{colors.grey-100}"
    background-disabled: "{colors.grey-300}"
    border-on: "{colors.primary-dark}"
    border-off: "{colors.grey-300}"
    hover-on: "{colors.primary-dark}"
    hover-off: "{colors.primary-light}"
    focus-ring: "{colors.primary-focus}"
    text-on: "{colors.base-white}"
    text-off: "{colors.base-black}"
  card:
    radius: "{rounded.lg}"
    background: "{colors.background-primary}"
    border: "{colors.border-primary}"
    padding: "{spacing.md} {spacing.lg}"
  input:
    height: 56px
    radius: "{rounded.md}"
    font: "{typography.body-primary}"
    background: "{colors.background-primary}"
    border-default: "{colors.grey-100}"
    border-focus: "{colors.primary}"
    placeholder-color: "{colors.grey-300}"
  select:
    height: 48px
    radius: "{rounded.md}"
    font: "{typography.body-primary}"
  tooltip:
    font: "{typography.body-caption}"
    radius: "{rounded.sm}"
    accent-width: 4px
    background-primary: "{colors.base-white}"
    background-secondary: "{colors.blue-100}"
    background-tertiary: "{colors.grey-100}"
    background-hazard: "{colors.hazard-yellow}"
    background-error: "{colors.error-red}"
  nav-item:
    icon-size: 64px
    gap: "{spacing.24}"
    label-font: "{typography.h3}"
  pagination:
    button-size: 40px
    radius: "{rounded.md}"
    current-background: "{colors.primary}"
    current-text: "{colors.base-white}"
---

# EasyGo Design System

EasyGo is an accessible routing application for people with mobility and
cognitive disabilities navigating Seattle and beyond. The design system
prioritises **safety**, **clarity**, and **empowerment** — every visual
decision reduces cognitive friction and supports a wide range of disability
needs.

Figma source: [EasyGo Redesign 2026](https://www.figma.com/design/JFLyvWVvDERSV8GVLONHMZ/EasyGo-Redesign-2026)

---

## Overview

EasyGo's visual identity is built on three pillars:

1. **Low cognitive load** — interactions are predictable, labels are explicit,
   and hierarchy is immediately apparent. Complexity is hidden until needed.
2. **Accessibility-first** — WCAG 2.1 AA compliance is a baseline, not a
   stretch goal. Focus states, touch targets (minimum 40px), and colour
   contrast are treated as non-negotiable.
3. **Trustworthy confidence** — the colour palette uses a confident Navy Blue
   that communicates safety and reliability. White space is generous; the UI
   never feels cluttered.

The UI is designed for mobile-first use in real-world navigation contexts —
often while moving, often with one hand, sometimes with assistive technology.
Every tap target is large, every label is clear, and error states communicate
recovery paths rather than blame.

---

## Colors

The palette is anchored by a deep, trustworthy **Navy Blue (#005299)** that
serves as the primary interactive colour across buttons, links, borders, and
navigation. A crisp white background creates maximum contrast. Blues at lighter
and darker scales handle hover and focus states without introducing a new hue.

- **Blue 400 (#005299):** Primary action colour. Used for buttons, borders,
  headings, navigation labels, and interactive elements. Communicates trust
  and reliability.
- **Blue 500 (#002a4e):** Hover and pressed state for primary blue elements.
  Darker without changing hue — consistent brand language.
- **Blue 300 (#0489ff):** Focus ring colour. High visibility against both
  white and navy backgrounds.
- **Blue 100 (#d1deee):** Hover state for secondary/off-state interactive
  elements. Light tint of brand blue — clearly related to the primary without
  competing.
- **Base White (#ffffff):** Primary background. Maximum contrast with Navy.
- **Base Black (#111111):** Primary body text. Near-black for warmth while
  maintaining WCAG AA contrast.
- **Grey 100 (#dbdbdb):** Borders, dividers, disabled backgrounds. Neutral
  separator that doesn't fight brand colour.
- **Grey 300 (#888888):** Disabled text, placeholder text, secondary metadata.
- **Grey 500 (#3b3a3a):** Secondary body text on light backgrounds. Dark
  enough for WCAG AA at small sizes.
- **Hazard Yellow (#f2c85c):** Tooltip and marker background for hazard
  warnings. High visibility without red's alarm connotations.
- **Error Red (#f9b4ad):** Tooltip background for error states. Muted red
  maintains legibility while signalling a problem.
- **Stop Red (#D32F2F):** Hazard stop markers on the map. Bold, high-contrast
  signal of an impassable obstruction.

---

## Typography

**Lexend** is the sole typeface used throughout EasyGo. It was chosen for its
research-backed improvements to reading speed and comprehension, particularly
for users with dyslexia. It is a variable font with clean, open letterforms
that remain legible at small sizes and in motion.

Font weights in use: **400 (Regular)** for body copy and buttons;
**700 (Bold)** for all headings and navigation labels. No other weights are
used — this constraint keeps visual hierarchy clear.

- **Headings (h1–h5):** Bold weight. h1 at 32px down to h5 at 16px. Line
  height 32px for h3 and h4, 1.25× multiplier for h1/h2.
- **Body Primary:** 16px Regular, 24px line height. Used for all paragraph
  text and descriptions.
- **Body Small:** 14px Regular, 24px line height. Used for secondary
  information such as card subtitles and address text.
- **Body Caption:** 12px Regular, 16px line height. Used in tooltips and
  metadata labels.
- **Button Primary:** 16px Regular. Same size as body text for consistency.
- **Button Small:** 12px Regular. Used in compact button contexts.

Lexend Mega (display weight) is used for the EasyGo wordmark only.

---

## Layout

EasyGo is a mobile-first application designed for a 390px viewport (iPhone
standard). All spacing values derive from a **4px base grid**. Named spacing
tokens are:

- `spacing/xs` → 4px — icon-to-text micro-gaps, internal padding of small
  elements
- `spacing/small` → 8px — button vertical padding, tight component gaps
- `spacing/medium` → 16px — standard internal padding, gap between elements
  in a row
- `spacing/24` → 24px — nav item icon-to-label gap
- `spacing/large` → 32px — card left/right padding, section spacing

Maximum content width within cards and dialogs is **366px** (matching the
reference frame width in Figma, accounting for 16px margins on a 390px
screen). Dialog overlays use 430–462px widths at full mobile width.

The layout uses no responsive breakpoints within the app itself. External
documentation pages (like this design system) use a sidebar + content
layout.

---

## Shapes

Corner radii follow a three-step scale that gives EasyGo a friendly,
modern character:

- **Small (8px):** Used on compact elements — small buttons, select options,
  tooltip corners, settings rows.
- **Medium (16px):** Standard interactive components — primary buttons, text
  inputs, select dropdowns, pagination buttons.
- **Large (32px):** Cards, toggles, navigation items, and any container
  element. The generous radius softens the UI without making it juvenile.

Fully circular elements (map markers, nav icons) use `border-radius: 50%`.

---

## Components

### Button

Buttons should be used to indicate an action on a screen.

**Types of Buttons**
1. **Primary** Buttons should be used to indicate the main call to action (Main CTA) on a screen
2. **Secondary** Buttons should be used to indicate actions of the screen that are still important, but not the main actions.
3. **Tertiary** Buttons should be used for every other, less critical action on a screen
4. **Disabled** Buttons should be used when an action cannot currently be completed
5. **Icon-only** buttons are used when an action can be clearly communicated through a widely recognized icon (e.g., a "+" icon for adding content).

**Sizes**
1. **Primary** sized buttons have a height of 40px, top and bottom padding of 8px, left and right padding of 16px, and 16px spacing between icon and text (if applicable), and a corner-radius of 16px. Text size should be 16. Icon Size should be 16px × 16px.
2. **Small** sized buttons have a height of 24px, top and bottom padding of 4px, left and right padding of 8px, and a corner-radius of 8px. Text size should be 12. Icon Size should be 12px × 12px.

**State**
1. **Default** state is used for a button before any user interaction occurs.
2. **Hover** state is used for a button when a user's cursor mouses over the button.
3. **Focus** state indicates when a button has keyboard focus, helping users identify which element will receive input.

Token mapping: `button/background/primary → blue/400`, `button/text/primary → base/white`, hover deepens to `blue/500`, focus ring uses `blue/300` at 2px offset.

---

### Toggle

The toggle component is used to visually represent whether something is on/off (true/false). This can apply to other elements such as settings. Has similar use to a checkbox input, however, it should not be used in form input groups, while a checkbox should be used in a form input group.

Dimensions: 80px × 40px, `border-radius: 32px`. Knob: 32px circle.
ON state: `blue/400` background, white knob, "ON" text left-aligned in white.
OFF state: `grey/100` background, grey knob, "OFF" text right-aligned.
Disabled: `grey/300` background, reduced opacity 0.6.
Focus ring: `blue/300` at 2px offset, 2px width.

---

### Expandable Card

The expandable card is a component that can be interacted with to expand and show more information on the card. On the default collapsed view, the card should only display the title of the card.

Collapsed: title + chevron-right icon. `border-radius: 32px`, `border: 1px solid blue/400`.
Expanded: title, body text, phone, link, address, close button.
Close button uses the small button style.
Chevron animates 90° clockwise on expand.

---

### Saved Card

Displays a saved route in the user's saved routes library. Two variants:

- **Primary (white):** White background, blue border, blue icon. For light-context display.
- **Secondary (blue):** `blue/400` background, darker border. For dark-context or featured display.

Two sub-variants: **Named** (custom route name as title) and **Address** (destination address as title).
States: Default, Hover (light blue tint), Focus (blue ring).
Dimensions: max-width 366px, min-height 112px, `border-radius: 32px`.

---

### Tooltip

A tooltip displays information when a user clicks or focuses on different map-marker icons on the map. The message can be text (e.g., Accessible Crosswalk — Aloha St & Warren Ave N) or icons (e.g., multiple map-markers).

Five semantic types: **Primary** (white), **Secondary** (blue/100), **Tertiary** (grey/100), **Hazard** (hazard-yellow), **Error** (error-red).
Structure: left accent bar (4px) + content body + right accent bar + downward-pointing caret.
Font: `body/caption` (12px Lexend Regular).

---

### Divider

A visual separator. Two orientations:
- **Horizontal:** Full-width, 1px height, `grey/100` colour.
- **Vertical:** Full-height of parent, 1px width, `grey/100` colour.

---

### Text Input

Single-line text entry. Height: 56px. `border-radius: 16px`. Border: 1px `grey/100` default, `blue/400` on hover/focus.
Placeholder text: `grey/300`. States: Primary, Hover, Focus, Disabled.

---

### Text Area

Multi-line text entry. Same visual language as text input. Min-height: 96px. Resizable vertically.

---

### Select

Dropdown selector. Height: 48px. `border-radius: 16px`. Custom chevron icon in `blue/400`.
States: Closed/Open × Primary/Hover/Focus/Disabled.
Option height: 40px.

---

### Checkbox & Radio

Form selection controls for use within input groups.
- **Checkbox:** Multiple selection. Checked state uses `blue/400` accent.
- **Radio:** Single selection within a group. Selected state uses `blue/400` accent.
States: Default, Focused, Disabled.

Note: Use checkboxes in form groups. Use Toggle for standalone on/off settings.

---

### Pagination

Navigation control for paginated content lists. 40px × 40px buttons, `border-radius: 16px`.
Current page: `blue/400` fill, white text, bold.
Arrows: disabled at first/last page (opacity 0.4).

---

### Navigation

The primary navigation menu lists five sections:
New Route · My Saved Routes · Agency Resources · Accessibility Info · Settings

Each nav item: 64px circular icon + 24px bold Lexend label, `spacing/24` gap.
Nav item padding: `spacing/small`. Hover: translucent blue background.
The full nav component is 366px wide × 448px tall and renders on a dark background.

---

### Header

Two variants:
- **Main:** Full-bleed `blue/400` header with h1 title (white, 32px bold) and
  subtitle (blue/100, 16px). Used on primary screens. Bottom radius 32px.
- **Secondary:** Compact back-navigation bar in `blue/400`. Contains back arrow
  + label on left, screen title centred. Used on sub-screens.

---

### Map Markers

Icon elements placed on the map surface. All markers are 32px × 32px unless noted.

| Marker | Shape | Colour |
|---|---|---|
| Route End | Circle | `blue/400` fill, white icon |
| Hazard Stop | Rounded square | `#D32F2F` fill, white text "STOP" |
| Hazard Warning | Rounded square | `hazard-yellow` fill, black ⚠ |
| My Location | Circle outline | `blue/400` stroke, transparent fill |
| Traffic Signal | Rounded square | `blue/300` fill |
| Crosswalk | Rounded square | White fill, `blue/400` border + ♿ |
| Multiple | Circle | `blue/400` fill, white count label |

Route line: 0px width (SVG path), `blue/400` stroke, rendered between markers.

---

### Logo

Two logo variants:
- **Full:** 800 × 264px. ♿ icon in a navy rounded-square + "EasyGo" in Lexend Mega.
- **Alt / Small:** 264 × 264px. Icon only, for compact contexts.

Primary logo colour: `blue/400`.

---

### Save Route Card

Card presented after completing a route, offering the user the option to save
it for future access. Dimensions: 360 × 228px. `border-radius: 32px`.
Background: `blue/400`. Contains route summary, name input, and save/dismiss actions.

---

### Settings Section

Two types of settings row, both 366px wide:
- **Toggle:** Label + optional sub-label on left, Toggle component on right. Height 72px.
- **New Page:** Label on left, chevron-right on right. Height 64px. Navigates to a detail screen.

Both use white background, 1px `grey/100` border, `border-radius: 16px`.

---

### Overlay

Full-screen accessibility information overlay (400 × 932px) rendered over the
map. Contains a legend and layer controls for steepness heat map, accessible
infrastructure, and hazard density layers.

---

## Do's and Don'ts

**Do:**
- Use Lexend for all text, including labels, buttons, and navigation.
- Always show a visible focus ring (2px `blue/300`, 2px offset) on interactive
  elements.
- Use `border-radius: 32px` for all card and container elements.
- Size all touch targets to a minimum 40px in each dimension.
- Use the Toggle component for standalone on/off preferences; use Checkbox
  within form groups.
- Use Hazard Yellow for warning states, Stop Red for critical blockage markers.
- Default to `spacing/medium (16px)` for internal component padding.

**Don't:**
- Mix font families — Lexend is the only typeface in the system (Lexend Mega
  for the wordmark only).
- Use colour alone to convey meaning — always pair colour with a label, icon,
  or pattern.
- Skip focus states — keyboard and switch-access users depend on them.
- Use font weights other than 400 (Regular) and 700 (Bold).
- Use corner radii outside the three-step scale (8px / 16px / 32px).
- Place a Toggle inside a form input group — use a Checkbox instead.
- Use the Error Red tooltip type for hazard warnings — use Hazard Yellow.
