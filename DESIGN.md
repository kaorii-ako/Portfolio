---
name: Kao — Engineering Portfolio
description: A dark, precise instrument panel for a systems builder — not a résumé, not a SaaS template.
colors:
  bg-base: "#0A0A0C"
  bg-surface: "#111114"
  bg-elevated: "#1C1C20"
  border: "#232327"
  border-em: "#2E2E34"
  text-1: "#EDEDED"
  text-2: "#9A9AA3"
  text-3: "#616167"
  signal: "#5EEAD4"
  signal-deep: "#34D1B8"
  signal-soft: "rgba(94, 234, 212, 0.12)"
  signal-glow: "rgba(94, 234, 212, 0.28)"
typography:
  display:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 7vw, 6.5rem)"
    fontWeight: 600
    lineHeight: 0.95
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "-0.01em"
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.6875rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.14em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "14px"
spacing:
  section: "clamp(5rem, 10vw, 8rem)"
  gutter: "1.5rem"
components:
  button-primary:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.bg-base}"
    rounded: "{rounded.sm}"
    padding: "12px 22px"
  button-primary-hover:
    backgroundColor: "{colors.signal-deep}"
    textColor: "{colors.bg-base}"
    rounded: "{rounded.sm}"
    padding: "12px 22px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.text-2}"
    rounded: "{rounded.sm}"
    padding: "12px 22px"
---

<!--
DIRECTION CONTRACT

THESIS: Reject the credential-CV portfolio and the gradient-hero SaaS template.
This is an instrument panel for a systems builder — you pick it up and it
responds, precisely.

OWN-WORLD: Near-black ground (#0A0A0C), off-white text (#EDEDED), one
signal-teal accent (#5EEAD4) spent only on data and interactive states,
graphite panels (#1C1C20) for elevated surfaces, hairline 1px borders,
Space Grotesk for display and body, JetBrains Mono for labels/data/tags,
flat surfaces with glow-not-shadow depth, small precise radii (4/8/14px).

STORY: A visitor reads the promise in one screen, drags the signal-core to
feel the site is a real instrument (not a template), believes the proof
(shipped repos, real stats, one hardware-only card) over any claim, and
either opens the project list or reaches out.

FIRST VIEWPORT: mono eyebrow label, one-line promise headline set huge and
left-aligned, a draggable wireframe "signal core" object anchoring the
right side, a mono tabular-numeral stat strip beneath, one primary CTA.

FORM: Brief-pinned — Linear's typographic restraint and motion economy
fused with Bruno Simon's single signature draggable 3D object. No
concept-seed roll run: colors, fonts, reference sites, and page/section
structure were fully specified by the client brief; invention was spent on
composition and the signal-core interaction, not on world selection.
-->

# Design System: Kao — Engineering Portfolio

## Overview

**Creative North Star: "The Signal Core"**

The prior site was a warm, editorial single-pager — cream/orange, particle dust, a soft "personal blog" register. This redesign discards that register entirely: the visitor is admissions committees, hackathon judges, and recruiters who need proof of engineering range in under a minute, not a mood. The system reads as an instrument panel — a precise, dark, low-noise surface where the only saturated thing on screen is the signal it wants you to notice (a stat, a link, the one object you can pick up and turn).

Density is restrained: generous vertical rhythm between sections, but tight, confident line spacing within them. Motion is fast and purposeful everywhere except one place — the hero's 3D signal-core — which is the site's single permitted moment of playful, physical, Bruno-Simon-style interactivity. Everywhere else, motion behaves like Linear: short, cubic, no bounce.

**Key Characteristics:**
- Near-black ground with exactly one accent color, spent sparingly (Restrained strategy, not Committed/Drenched)
- Two typefaces total: Space Grotesk (display + body) and JetBrains Mono (labels, data, tags, stats)
- Flat by default — depth from layered near-black panels and hairline borders, never drop shadows
- One signature 3D interaction (draggable signal-core); everything else is 2D and fast
- Proof-first content: every claim sits next to a repo link, a stat, or a stack tag — never a bare adjective

## Colors

Near-monochrome dark neutrals carrying almost the entire surface; one electric accent used only where something is live, linked, or measured.

### Primary
- **Signal Teal** (#5EEAD4): the site's only saturated color. Reserved for: interactive states (links, active nav, hover borders), the cursor, data emphasis (stat highlights, "available" pulse), and the signal-core's wireframe. Never used as a background fill larger than a small chip or button.
- **Signal Teal Deep** (#34D1B8): hover/active state for teal-filled elements (primary button hover).

### Neutral
- **Void** (#0A0A0C) — `bg-base`: the page ground.
- **Panel** (#111114) — `bg-surface`: first-level elevated surface (cards, nav background on scroll).
- **Graphite** (#1C1C20) — `bg-elevated`: second-level surface (chips, code blocks, active tab fill).
- **Hairline** (#232327) — `border`: default 1px dividers and card borders.
- **Hairline Emphasis** (#2E2E34) — `border-em`: hover/focus border state, section rules.
- **Bone** (#EDEDED) — `text-1`: primary text, headlines.
- **Slate** (#9A9AA3) — `text-2`: body copy, secondary text.
- **Iron** (#616167) — `text-3`: mono labels, tertiary/meta text, timestamps.

### Named Rules
**The One Signal Rule.** Signal Teal never covers more than a small chip, button, or line at once. If a whole panel wants to feel "active," lift it with a hairline border and a faint teal glow at the edge — not a teal fill.

## Typography

**Display Font:** Space Grotesk (with system-ui, sans-serif fallback)
**Body Font:** Space Grotesk (same family, regular weight — no second sans is introduced)
**Label/Mono Font:** JetBrains Mono (with ui-monospace, monospace fallback)

**Character:** A geometric, slightly technical grotesk carries every headline and paragraph, so the whole site reads as one voice; JetBrains Mono breaks in only for anything that is data, a label, a tag, or a stat — the visual cue that "this is measured, not marketing."

### Hierarchy
- **Display** (600, `clamp(2.75rem, 7vw, 6.5rem)`, line-height 0.95, tracking -0.03em): hero promise, page titles.
- **Headline** (600, `clamp(1.75rem, 4vw, 3rem)`, line-height 1.05, tracking -0.02em): section titles.
- **Title** (600, 1.25rem, line-height 1.3): card/project titles.
- **Body** (400, 0.9375–1rem, line-height 1.65, max 65ch): paragraphs.
- **Label** (500, JetBrains Mono, 11px, tracking 0.14em, uppercase): eyebrows, nav, tags, stat captions.
- **Stat number** (600, JetBrains Mono or Space Grotesk display at large size with tabular-nums): proof numbers.

### Named Rules
**The Two-Voice Rule.** Only two typefaces exist anywhere in the system. If new UI needs a third register, it is expressed with weight, size, or case on one of the existing two — never a third font.

## Layout

Container widths stay content-narrow for reading (max ~900px for prose-heavy sections) and wide (max ~1200px) for grids and the hero. Section vertical rhythm uses one scale: `clamp(5rem, 10vw, 8rem)` between major sections, with more space above a heading than below it. A 1px hairline rule opens most sections (inherited from the incumbent site's convention) rather than a heavy divider. Responsive collapse is single-column below `sm`; the hero's signal-core drops behind/below the headline on mobile rather than being cropped. Grid backgrounds (faint dot grid, radial-masked) may appear behind hero-weight sections at very low opacity as a blueprint/PCB-adjacent texture — never behind body copy.

## Elevation & Depth

Flat by default. No drop shadows anywhere in the system. Depth is conveyed by: (1) layering `bg-base` → `bg-surface` → `bg-elevated` as literal stacked near-black tones, (2) 1px hairline borders that lighten on hover (`border` → `border-em`), and (3) a soft signal-teal glow (`box-shadow: 0 0 24px signal-glow`) applied only to the active/hovered edge of an interactive element — glow reads as "live," not as physical lift.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. The only elevation cue on hover/focus is a border-color shift plus, on the signal-core and primary CTAs only, a teal glow.

## Shapes

Small, precise radii throughout: 4px (`sm` — buttons, tags, chips), 8px (`md` — cards, inputs), 14px (`lg` — large hero/nav panels only). Nothing fully square (too brutalist for the brief's "precise, not flashy") and nothing pill-shaped except the nav's active-filter chip, which is the one deliberately soft shape in the system. Borders are always 1px hairline; no double borders, no dashed borders.

## Components

### Buttons
- **Shape:** 4px radius, 1px border on ghost/secondary variants.
- **Primary:** Signal Teal fill (#5EEAD4), `bg-base` text, 12px/22px padding, weight 500. Hover: fills `signal-deep`, no scale/lift — color-shift only.
- **Ghost/Secondary:** transparent fill, `border` hairline, `text-2` text. Hover: border lightens to `border-em`, text shifts to `text-1`.

### Chips / Tags
- **Style:** JetBrains Mono, 10–11px uppercase, `text-3`, 1px `border` hairline, 4px radius, transparent or `bg-elevated` fill. Used for stack tags, category filters, "featured" markers.
- **Active filter state:** Signal Teal fill, `bg-base` text — the one place a chip goes fully saturated.

### Cards / Containers
- **Corner Style:** 8px radius.
- **Background:** `bg-surface` on `bg-base` ground.
- **Shadow Strategy:** none at rest; hairline border lightens + optional signal glow on hover (see Elevation).
- **Border:** 1px `border`, hover `border-em`.
- **Internal Padding:** 24–32px (`p-6`/`p-8`).

### Inputs / Fields
- **Style:** `bg-elevated` fill, 1px `border`, 8px radius.
- **Focus:** border shifts to Signal Teal, no glow ring beyond the existing global `:focus-visible` outline.

### Navigation
- Fixed top bar, transparent until scroll, then `bg-surface` at high opacity with backdrop blur and a hairline bottom border. Route links in JetBrains Mono, uppercase, `text-2` default / Signal Teal active, with a springy underline indicator carried over from the incumbent site (`layoutId` shared-element bar).
- Mobile: slide-down panel, same token language, full-width tap targets.

### Signal Core (signature component)
The hero's interactive 3D object: a wireframe geometric form (icosahedron-derived) rendered in Signal Teal on transparent canvas over `bg-base`. Pointer-drag rotates it directly (1:1, not orbit-controls-floaty); releasing lets it coast and settle via inertia/damping, never a hard stop. This is the system's one licensed "Bruno Simon" moment — no other element on the site gets spring/bounce physics.

## Do's and Don'ts

### Do:
- **Do** spend Signal Teal only on things that are interactive, live, or measured (links, active states, stats, the signal-core).
- **Do** keep every proof claim adjacent to a verifiable link, stat, or stack tag.
- **Do** use JetBrains Mono for anything that is a label, tag, timestamp, or number; Space Grotesk for everything else.
- **Do** let the signal-core be the only element with spring/bounce/inertial motion; keep the rest of the site on fast, cubic, no-overshoot transitions.
- **Do** render QBoard (and any project with no live deployment) as a GitHub-link-only card — never fabricate a "live" button.

### Don't:
- **Don't** introduce a second accent color, a gradient background, or a warm/cream tone — this is a Restrained one-accent system on purpose.
- **Don't** add drop shadows for elevation; use border-lightening and glow only.
- **Don't** use a third typeface anywhere, including in code snippets or footers.
- **Don't** invent stats, testimonials, or capabilities not present in PRODUCT.md / the project data.
- **Don't** let decorative motion (grid, particles, scanlines) exceed ~3–5% opacity or compete with content for attention.
