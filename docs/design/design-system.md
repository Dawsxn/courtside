# Design System

| | |
|---|---|
| **Status** | Draft |
| **Last updated** | 2026-09-30 |
| **Owner** | @Dawsxn |

This doc sets the brand direction and explains how the design system is
produced and maintained. The detailed system — colors, type scale, spacing,
components — will live in `DESIGN.md` at the repo root, generated and kept up to
date by the Impeccable skill once the frontend exists.

## Brand direction

**Premium / club.** Courtside should feel like a well-run tennis club:
refined, confident, and trustworthy. Think deep greens or navies, generous
white space, considered typography (possibly a serif for headings), and
restrained use of color.

**Tension to manage:** the primary player persona is the *new fan*, a beginner
who may feel intimidated by something that looks exclusive. The goal is
**premium but welcoming**: club-level polish, with plain, friendly copy and no
gatekeeping. Coaches benefit from the premium feel, since it makes their
profiles look professional.

To decide when we run Impeccable's setup:

- [ ] Primary colors (avoid the obvious tennis-ball yellow on court green unless it's done deliberately)
- [ ] Heading and body typefaces
- [ ] Light mode only, or light + dark?
- [ ] Tone of voice for copy (e.g. warm, concise, no jargon)

Constraints from the [product overview](../product/overview.md): mobile-first,
English, used by parents and beginners as well as returning players.

## How the system is built

| Layer | What | Where |
|---|---|---|
| Tokens | Colors, radii, fonts, spacing as CSS variables | `frontend/src/index.css` (Tailwind v4 theme) |
| Components | shadcn/ui components, restyled to the brand | `frontend/src/components/ui/` |
| Documentation | The system itself: tokens, type scale, component rules | `DESIGN.md` (repo root, maintained by Impeccable) |
| Product context for design | Short summary for Impeccable; links to the overview | `PRODUCT.md` (repo root) |

`PRODUCT.md` stays short and links to `docs/product/overview.md` rather than
repeating it, so there is one source of truth for product decisions.

## Design skills

Installed per project once the frontend is scaffolded.

**[Impeccable](https://impeccable.style/)** — general design quality.

- `init` captures product context (`PRODUCT.md`); `document` / `extract` build
  `DESIGN.md` from our code
- `critique` and `audit` review screens; `polish`, `typeset`, `layout`,
  `colorize` refine them
- Reads existing Tailwind tokens and shadcn components and builds on them
  rather than replacing them

**[Emil Kowalski's skills](https://emilkowal.ski/skill)** — motion and interaction polish.

- `animate`, `review-animations`, `improve-animations` for motion that feels right
- `pick-ui-library` for library choices (its picks — Sonner, cmdk, Base UI,
  motion — match or complement shadcn)
- `animate-expo` and `mobile-native` for a React Native app later

**Rule of thumb:** Impeccable decides how things *look*; Emil's skills decide
how things *move*. When they disagree, the brand direction above wins.

## Open questions

- [ ] shadcn on **Base UI** or **Radix** primitives? shadcn supports both; Base UI is Emil's pick and newer, Radix is more established. Decide at scaffold time.
- [ ] Animation library: CSS transitions only for the MVP, or add `motion` from the start?
