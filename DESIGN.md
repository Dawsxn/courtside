---
name: Courtside
description: A calm club front desk for finding a tennis coach in the Philippines.
colors:
  club: "#1e3a2f"
  club-soft: "#e7efea"
  club-muted: "#b9cdc1"
  canvas: "#edf2ee"
  card: "#ffffff"
  ink: "#17201b"
  muted-ink: "#5b6660"
  stone: "#f4f5f2"
  rule: "#dde5df"
  input: "#86928b"
typography:
  display:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  display-wide:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "3rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.025em"
  figure:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.25
    fontFeature: "tnum"
  title-lg:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.55
  title:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.375
  body:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  body-sm:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.43
  label:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.33
rounded:
  sm: "5px"
  md: "7.5px"
  lg: "10px"
  card: "16px"
  pill: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  card: "20px"
  lg: "24px"
  xl: "40px"
components:
  button-primary:
    backgroundColor: "{colors.club}"
    textColor: "{colors.card}"
    rounded: "{rounded.pill}"
    height: "44px"
    padding: "0 24px"
    typography: "{typography.body-sm}"
  button-ghost:
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    height: "44px"
    padding: "0 16px"
  button-ghost-hover:
    backgroundColor: "{colors.stone}"
  button-on-club:
    textColor: "{colors.card}"
    rounded: "{rounded.pill}"
    height: "40px"
    padding: "0 16px"
  chip:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    height: "40px"
    padding: "0 16px"
  chip-pressed:
    backgroundColor: "{colors.club}"
    textColor: "{colors.card}"
    rounded: "{rounded.pill}"
  pill-status:
    backgroundColor: "{colors.club-soft}"
    textColor: "{colors.club}"
    rounded: "{rounded.pill}"
    padding: "2px 8px"
    typography: "{typography.label}"
  card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "20px"
  avatar-initial:
    backgroundColor: "{colors.club}"
    textColor: "{colors.card}"
    rounded: "{rounded.pill}"
    size: "48px"
  sheet:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    width: "28rem"
---

# Design System: Courtside

The brand direction (premium club, welcoming to beginners) is recorded in [docs/design/design-system.md](docs/design/design-system.md). This file records how that direction has actually been built. It was extracted from the first surface, coach search (`frontend/src/features/search/`), with tokens in `frontend/src/index.css`. Light mode only.

## Overview

**Creative North Star: "The Club Front Desk"**

Courtside should feel like the front desk of a well-run tennis club. One deep club green holds the header band and the primary action. Beneath it, a pale green canvas holds white cards, each giving a few clear facts with space around them. The green says "club" without shouting. The desk is calm, orderly, and easy to approach. Nothing about it is exclusive: copy is plain, controls are large, and the most important number (the rate) is the most visible thing on each card.

Density is low by design. Each result answers three questions: who, how much, and where. Everything else lives one tap deeper. The system turns down both the photo-grid marketplace and the dense booking spreadsheet. It uses a single typeface (Geist) at several weights instead of a display/body pairing. Figures are tabular so prices line up from card to card.

Depth is soft and tinted green, never grey. Corners are generous: 16px on containers and full pills on every tappable control. Motion is short and uses one confident curve (expo-out). It always drops out under reduced motion.

**Key Characteristics:**
- A deep club-green band on top, a pale green canvas below, white cards floating on it
- One typeface (Geist Variable), with hierarchy carried by weight, size and tracking
- Tabular figures for every price
- Pill-shaped controls; 16px-radius containers
- Shadows tinted with the club green, stacked as a hairline plus a soft lift
- Filters open as a bottom sheet on phones and as a centred panel on wider screens

## Colors

A single-accent palette: one deep club green, a family of pale green-greys around it, and near-black ink.

### Primary
- **Club Green** (`club`): The brand colour. It fills the header band, primary buttons, pressed chips, avatar initials, and the rate figure on each card. It is also the focus outline, the caret, and the tint in every shadow and in the sheet backdrop (at 40%).
- **Club Soft** (`club-soft`): Pale green used for status pills ("Verified", "Comes to your court") and for text selection. It also serves as secondary text on the club band.
- **Club Muted** (`club-muted`): Mid green-grey used only on the club band, for the "Coaches in" lead-in and the chevron next to the city title. It is the band's quiet voice, at 7.4:1 against Club Green.

### Neutral
- **Court Canvas** (`canvas`): Page background. Cards sit on it; it is never used as a card fill.
- **Card White** (`card`): Cards, the filters sheet, and popovers. White text on Club Green also uses this token.
- **Ink** (`ink`): Body text and headings. A green-leaning near-black, never pure #000.
- **Muted Ink** (`muted-ink`): Secondary text such as "per hour · 1 pax", "Travels to…" and hints. It clears AA on both white (6.0:1) and canvas (5.3:1).
- **Stone** (`stone`): Hover fill for ghost buttons and icon buttons (shadcn `muted` / `secondary`).
- **Rule** (`rule`): Hairline dividers inside cards and the sheet (the default border colour).
- **Input Line** (`input`): Outline of unpressed chips and the scrollbar thumb.

### Named Rules
**The One Green Rule.** Club Green is the only saturated colour in the system. Emphasis comes from Club Green or from weight. No second accent appears, and there is no tennis-ball yellow.

**The Tinted Neutral Rule.** Every neutral leans slightly green (hue around 150–165 in OKLCH). Do not add cool or pure greys; they break the club atmosphere.

## Typography

**Display Font:** Geist Variable (with ui-sans-serif, system-ui)
**Body Font:** Geist Variable (same family)

**Character:** A single clean, modern grotesk. Weight 600 with tight negative tracking makes it look assured at display size, and weight 400 keeps it quiet in body text. The brand doc left room for a serif heading face, but the build uses Geist throughout, and this file records the build.

### Hierarchy
- **Display** (600, 2.25rem, rising to 3rem at 640px and up, tracking -0.025em): The page title. On search, the city name doubles as the city control.
- **Figure** (600, 1.25rem, 1.25, tabular): The rate on each card, in Club Green. The loudest thing on a card after the name.
- **Title Large** (600, 1.125rem): Sheet titles and empty-state headlines.
- **Title** (600, 1rem, 1.375): Coach names, filter section headings (at 0.875rem), and the wordmark (tracking -0.01em).
- **Body** (400, 1rem, 1.5): Default running text and the "Coaches in" lead-in (500, Club Muted).
- **Body Small** (400–500, 0.875rem): Card meta line, result count, buttons, chips, hints.
- **Label** (500, 0.75rem): Status pills, the "per hour" line, the "+N group rates" link text. Sentence case, never uppercase.

### Named Rules
**The Tabular Price Rule.** Every peso amount uses tabular figures (`font-variant-numeric: tabular-nums`) so rates line up down a list.

**The Weight-Not-Face Rule.** Hierarchy comes from size, weight (400/500/600) and tracking within Geist. Do not add a second family for headings unless it goes through a deliberate system change.

## Layout

Mobile-first, single column. Content sits in a centred container capped at 64rem (1024px), with a 16px side gutter that grows to 24px from 640px. The result list becomes two columns from 768px, with a 16px gap. Cards are equal height within a row.

The page has two zones. The **club band** is a full-bleed Club Green header: wordmark row on top, then 40px down to the title row. The title row is a wrap-flex with the display title on the left and the Filters control aligned to its baseline on the right. The band has 16px top padding and 32px bottom padding (40px from 640px). The **canvas** follows, with 24px top padding, then a result-count line and the card list.

Spacing rhythm is 4 / 8 / 16 / 20 / 24 / 40px. 8px separates chips, 16px separates cards and card internals, 20px is card and sheet padding, 24px separates filter sections, and 40px is the band's breathing room above the title. Every tap target is at least 40px tall, and primary actions and icon buttons are 44px.

## Elevation & Depth

A hybrid system. The main layering is tonal: white cards on a green canvas, and a green band above. On top of that, one soft shadow family lifts cards off the canvas. Every shadow is tinted with Club Green (`rgb(30 58 47 / α)`) instead of black, and each is a two-layer stack: a 1px hairline for the edge plus a wide, negatively spread blur for lift. The filters sheet sits over a Club Green backdrop at 40% opacity instead of a shadow.

### Shadow Vocabulary
- **Card rest** (`box-shadow: 0 1px 2px rgb(30 58 47 / 0.06), 0 8px 24px -12px rgb(30 58 47 / 0.18)`): Every card and container on the canvas, including the empty state.
- **Card hover** (`box-shadow: 0 1px 2px rgb(30 58 47 / 0.08), 0 14px 32px -12px rgb(30 58 47 / 0.28)`): Hover on linked cards only. The card lifts; it does not move.

### Named Rules
**The Green Shadow Rule.** Shadows are always tinted Club Green, never neutral black or grey. A grey shadow on the green canvas looks dirty.

## Shapes

Generous, friendly geometry. Containers (cards, the empty state, the sheet) use 16px corners. On phones the sheet rounds only its top corners and sits against the bottom edge. Every tappable control on the surface is a full pill: primary buttons, chips, the Filters button, status pills, the count badge, and icon buttons. Avatars are circles. Dividers are 1px hairlines in Rule. The shadcn radius scale (base 10px) remains for library components, but the search surface uses only 16px and full pills.

## Components

### Buttons
Confident, round, and large enough to hit on a budget phone.
- **Shape:** Full pill (9999px), 44px tall.
- **Primary:** Club Green fill, white 14px medium text, 24px side padding. In a sheet footer it stretches to fill the row on phones and shrinks to content from 640px. Hover lightens it to 80% Club Green.
- **Ghost:** No fill, Ink text, Stone on hover, 16px side padding. Used for low-stakes secondary actions such as "Clear all". Disabled at 50% opacity.
- **On-club (Filters):** For controls that sit on the green band. A 10% white fill and a 25% white hairline, white text and icon, 40px tall. Hover raises the fill to 15%. Focus uses a white outline. An active-count badge (a 20px white circle with Club Green figure) appears inside it when filters are set.
- **Focus:** A 2px Club Green outline with a 2px offset (white on the club band).

### Chips
- **Style:** 40px pill, 1px Input Line outline, Ink 14px medium text, 16px side padding.
- **State:** They behave as toggle buttons (`aria-pressed`). When pressed, fill and outline turn Club Green and the text turns white. On hover an unpressed chip turns its outline and text Club Green. Colour transitions take 150ms.

### Status Pills
- **Style:** Club Soft fill, Club Green 12px medium text, a 14px leading icon, full pill. These are read-only facts ("Verified", "Comes to your court"), not controls.

### Cards / Containers
- **Corner Style:** 16px.
- **Background:** Card White on Court Canvas.
- **Shadow Strategy:** Card rest, moving to Card hover on hover (see Elevation & Depth).
- **Border:** None on the outside. A Rule hairline separates the card's head (who and how much) from its foot (where).
- **Internal Padding:** 20px, with 16px between the head and the foot.
- **Press:** The whole card is the link. On press it scales to 0.985, with 200ms expo-out on shadow and scale. There is no transition under reduced motion.

### Coach Result Card (signature)
This is the pattern the system is built around. A 48px Club Green circle with the coach's initial in white sits on the left. In the middle are the name (Title) and a Verified pill when earned. On the right, aligned right, is the rate stack: the Figure in Club Green, then "per hour · N pax" in muted Label, a per-person split for groups, and "+N group rates" in Club Green Label. The foot line holds venue cities (Club Green map-pin icon), a "Comes to your court" pill when it applies, and "Travels to…" in Muted Ink.

### Navigation / Title control
- **Club band header:** The wordmark (16px semibold) and a translucent "Sample data" status pill (10% white fill, Club Soft text) sit in the top row.
- **City title:** The city name in the display title is the trigger for a Base UI Select. A Club Muted chevron marks it as changeable and flips when open. The list is a white 16px-radius popup with the Card hover shadow, 44px rows, Club Soft highlight, and a Club Green check on the current city; it scales and fades in from the trigger. When focused, a 2px white outline appears around the trigger.

### Filters Sheet
- A native `<dialog>`. On phones it is a bottom sheet: full width, at most 85% of viewport height, top corners rounded to 16px. From 640px it becomes a centred 28rem panel with all corners rounded.
- Header: 18px semibold title, 44px circular close button (Stone on hover), and a Rule hairline below. Body: sections 24px apart, each with a semibold title, a muted hint, and a wrap of chips. Footer: a ghost "Clear all" and a primary "Show N coaches".
- Motion: slides up from 100% below on phones (400ms expo-out) and rises 1rem while fading in on wider screens. Opacity fades over 200ms and the backdrop over 300ms. Both drop to an instant swap under reduced motion. Page scroll locks while the sheet is open.

## Do's and Don'ts

### Do:
- **Do** keep Club Green as the only accent, and put it where the decision is: the primary action, the rate, pressed state, and focus.
- **Do** put new surfaces on Court Canvas, with white 16px-radius cards carrying the Card rest shadow.
- **Do** make every tappable control a pill at least 40px tall, and primary actions 44px.
- **Do** set every price in Geist semibold with tabular figures.
- **Do** tint any new shadow or overlay with Club Green (`rgb(30 58 47 / α)`).
- **Do** animate with the expo-out curve (`cubic-bezier(0.16, 1, 0.3, 1)`) at 150–400ms, and remove transitions under `prefers-reduced-motion`.
- **Do** keep status facts (Verified, travel) as Club Soft pills with an icon and a plain-English label.

### Don't:
- **Don't** introduce a second saturated accent or tennis-ball yellow.
- **Don't** use pure black text or neutral grey shadows; neutrals lean green.
- **Don't** uppercase labels or add a second typeface without a recorded system change.
- **Don't** add dark-mode styles; the `dark:` variant is deliberately disconnected.
- **Don't** pack cards with extra facts. A result shows who, how much, and where; the rest belongs on the profile.
