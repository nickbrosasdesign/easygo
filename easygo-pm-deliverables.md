---
name: EasyGo PM Deliverables
description: Business requirements, product features, roadmap, journey map, and research synthesis for the EasyGo accessible routing app
tags: [pm, brd, roadmap, journey-map, research, features]
start-date: 2026-02-24T00:40:00
status: active
phase: MVP
---

# EasyGo — PM Deliverables

> Accessible routing for people with mobility and cognitive disabilities.

---

## Table of contents

- [[#Business Requirements Document (BRD)]]
- [[#Project Goals]]
- [[#Project Timeline]]
- [[#Product Features]]
  - [[#MVP]]
  - [[#Future Features]]
- [[#Product Roadmap]]
- [[#Journey Map 1 — Planning a Route]]
- [[#Research Synthesis]]
- [[#Routing Priority Logic]]

---

## Business Requirements Document (BRD)

| Field | Detail |
|---|---|
| Project name | EasyGo |
| Start date | February 2026 |
| Current phase | MVP |
| Status | Active |
| Interviews conducted | 5 |
| Design file | [EasyGo Redesign 2026 (Figma)](https://www.figma.com/design/JFLyvWVvDERSV8GVLONHMZ/EasyGo-Redesign-2026?node-id=0-1&m=dev) |

### Product vision

EasyGo is an accessible routing application that helps people with mobility and cognitive disabilities navigate their environment safely and confidently. Routes are generated using a priority-ranked logic that accounts for hazards, terrain, accessibility infrastructure, and cognitive simplicity — putting safety first at every decision point.

### Target users

People navigating with **mobility disabilities** (wheelchair users, limited mobility), **cognitive disabilities** (wayfinding challenges, processing difficulties), and **situational limitations** (stroller, injury, temporary impairment).

Research interviewees: Andrew · Amanda · Kat · Jane · John

### Problem statement

Standard mapping tools treat accessibility as an afterthought. They offer no hazard data, no terrain prioritisation, and no toggleable accessibility preferences. Users with disabilities regularly encounter blocked ramps, steep gradients, and inaccessible crossings mid-trip with no recourse.

### Success metrics

> To be defined. Suggested starting points:
> - Route completion rate (user reaches destination without abandoning)
> - Hazard submission rate (community contribution)
> - Saved routes per user (retention signal)
> - Accessibility toggle adoption rate

---

## Project Goals

1. **Safety-first routing** — Routes prioritise avoiding hazards and construction before any other optimisation. A user should never encounter a blocked ramp or dangerous obstacle without prior warning.

2. **Low cognitive load** — Interface and route design minimise cognitive effort. Lexend typeface supports dyslexia accessibility. Navigation choices are simple and consistent throughout. Guided by WCAG principles.

3. **Disability-inclusive, not one-size-fits-all** — Accessibility toggles let users opt into features relevant to their specific needs. Accessible crosswalks, wheelchair access, and traffic signal preferences are user-controlled — not imposed globally.

4. **Community hazard awareness** — Users can mark hazards for others, creating a crowd-sourced accessibility layer on top of standard map data. The product improves with every contribution.

---

## Project Timeline

```
Feb 2026    ● Kick-off
            └─ Research objectives defined
            └─ Interview list: Andrew, Amanda, Kat, Jane, John

Discovery   ● Research & synthesis
            └─ User interviews completed
            └─ Routing priority logic derived
            └─ Lexend typeface decision made

Design      ● EasyGo Redesign 2026 (in progress)
            └─ Figma file active
            └─ Journey maps, wireframes, component library

MVP         ○ Build & launch (upcoming)
            └─ Core route + saved + hazard + overlays
            └─ Accessibility toggles
            └─ WCAG-compliant UI
```

---

## Product Features

### MVP

#### Route

| Feature | Description |
|---|---|
| Start / end route | User sets origin and destination via pin placement. Choose pin interaction confirms location before routing begins. |
| Route details | Summary panel: distance, estimated time, steepness, accessibility attributes of the chosen route. |
| Accessibility toggles | Opt-in filters: accessible crosswalks, wheelchair access locations, traffic signals. Toggling re-runs priority routing logic. |
| Mark hazards | Users place hazard pins — broken pavement, blocked ramps, active construction — shared with the community. |
| View overlays | Toggle map overlays: steepness heat map, accessible infrastructure, hazard density. |
| View hazards | Community-reported hazards shown on map before and during navigation. |
| Save route | Save frequently travelled routes for quick access in the Saved section. |

#### Saved

| Feature | Description |
|---|---|
| Saved routes library | Library of previously saved routes. Tap to reload and navigate. Routes surface updated hazard and accessibility data automatically. |

### Future Features

| Feature | Description | Phase |
|---|---|---|
| Alternate routes | 2–3 alternative route options ranked by the accessibility priority algorithm. Users compare trade-offs and choose the best fit. | Post-MVP |
| Hazard moderation | Community tools to verify, dispute, or resolve hazard reports. | Post-MVP |
| Transit integration | Incorporate accessible public transport options into routes. | Post-MVP |
| API / data partnerships | Integrate with city accessibility databases and infrastructure APIs. | Post-MVP |

---

## Product Roadmap

### Discovery
- User interviews (5)
- Research synthesis
- Routing priority logic

### Design
- Journey maps
- Wireframes
- Figma Redesign 2026
- Lexend typography system

### MVP build
- Route flow (start/end, details, save)
- Accessibility toggles
- Hazard marking + viewing
- Map overlays

### Post-MVP
- Alternate routes
- Hazard moderation
- Transit integration
- API / data partnerships

---

## Journey Map 1 — Planning a Route

**Persona:** Mobility-impaired urban commuter. Wheelchair user navigating an unfamiliar neighbourhood. Needs to avoid steep terrain, confirm accessible crosswalks exist, and know about any blocked ramps in advance. Previous map apps have let them down.

### Stages

#### Stage 1 — Awareness 😐
- Hears about EasyGo via word of mouth or a disability organisation
- Skeptical — has tried other map apps that ignored accessibility
- **Emotion:** Uncertain, cautious

#### Stage 2 — Onboarding 🙂
- Opens app; simple, low-cognitive UI (Lexend, clear labels)
- Enables wheelchair access toggle + accessible crosswalk toggle
- **Emotion:** Cautiously optimistic

#### Stage 3 — Route planning 😌
- Sets start and end pin
- Views route details — steepness shown, accessible crosswalks confirmed
- Checks hazard overlay — no active hazards on this route
- **Emotion:** Relieved

#### Stage 4 — Navigation 😤
- Follows route
- Encounters an unexpected blocked ramp mid-trip
- Marks it as a hazard for the community
- App notes it for future routing
- **Emotion:** Frustrated but empowered

#### Stage 5 — Return 😊
- Saves the route after arriving
- On next visit, opens saved routes — no need to re-enter destination
- Recommends the app to a peer
- **Emotion:** Satisfied, advocate

### Pain points

- **Existing maps ignore accessibility** — no hazard data, no terrain priority, no toggleable preferences
- **Discovering hazards mid-trip** — blocked ramps or broken pavement in real-time with no re-route option is dangerous and stressful

### Opportunities

- **Community hazard layer** — every user becomes a contributor; product improves over time for the whole community
- **Saved routes reduce friction** — removes the planning burden for regular journeys; critical for users with cognitive disabilities

---

## Research Synthesis

### Interviews

Planned and conducted: **Andrew · Amanda · Kat · Jane · John**

> Interview notes and direct quotes to be added here. Quotes needed to support routing priority logic rankings.

### Key findings

#### Disabilities are not only mobility-related
Cognitive disabilities affect how people navigate and wayfind. The interface must minimise cognitive load through simplicity, clear labels, and consistent interaction patterns.

- Source: WCAG guidance — *to be cited*
- Relevant: [Accessible Crosswalks with Audible Beaconing and Accessible Pedestrian Signals](https://pmc.ncbi.nlm.nih.gov/articles/PMC2901122/)

#### Lexend typeface
Lexend is a variable font researched for improved reading performance, particularly for users with dyslexia. Chosen as EasyGo's primary typeface for body and UI text.

- Source: Lexend research — *to be cited*

#### Simplicity = accessibility
Things should be as simple as possible. Low cognitive load is good accessibility — this applies to cognitive disabilities, motor function disabilities, and situational impairments alike.

- Source: WCAG — *to be cited*

---

## Routing Priority Logic

Routes are generated using cascading priority logic. Higher-ranked rules always override lower ones.

| Priority | Rule | Condition | Importance |
|---|---|---|---|
| 1 | Avoid marked hazards | Always | 🔴 Critical |
| 2 | Avoid construction | Always | 🔴 Critical |
| 3 | Choose lowest steepness | Always | 🟠 High |
| 4 | Choose accessible crosswalks | If toggled on | 🔵 Toggle |
| 5 | Choose wheelchair access locations | If toggled on | 🔵 Toggle |
| 6 | Prefer routes with traffic signals | Optional | ⚪ Optional |

> Sources for each priority rule to be added from interview synthesis and existing research.

---

## Open items / to-do

- [ ] Add interview notes for all 5 interviewees
- [ ] Add sources to routing priority logic rankings
- [ ] Cite WCAG cognitive load guidance
- [ ] Cite Lexend typeface research
- [ ] Define success metrics
- [ ] Complete Journey Map 1 (this file was previously empty)
- [ ] Add links to AI Resources and Design docs
- [ ] Fill in online sources in Research doc

---

*EasyGo PM Deliverables · Generated June 2026 · Started February 2026*
