---
version: 1
slug: "frontend-src-features-search-coachsearchpage-tsx"
primary_target: "frontend/src/features/search/CoachSearchPage.tsx"
related_targets: []
---

## Scope

S2 Coach search (docs/product/screens.md), mobile-first, light only. Mode: Operate. First surface of Courtside's visual world; UI-only with clearly labelled sample data until the API exists.

## Audience and job

A beginner or returning player in Metro Manila, on a budget Android phone in daylight, choosing a city and comparing coaches. Must judge **price** and **trust** from a result without opening the profile. Copy: crisp and confident. Avoid: loud sports brand, generic marketplace, anything quirky or congested. Booking, slots, and clinics live on the coach profile, not here.

## Direction contract

THESIS: A calm club front desk: a few clear facts per coach, room to breathe, green that says "club" without shouting. Refuses both the photo-card marketplace grid and a dense booking sheet.
OWN-WORLD: Deep club green (#1E3A2F) header band and primary actions; pale green canvas (#EDF2EE) behind white cards (radius 16px, soft green-tinted shadow); club-soft (#E7EFEA) pills for Verified and "Comes to your court". Geist throughout, tabular figures for rates.
STORY: I pick my city from the title, open Filters if I need to, compare rate and Verified across cards, and tap a coach.
FIRST VIEWPORT: Green band: "Courtside" and a Sample data label on top, "Coaches in / Makati ⌄" title (city is a styled select) with a Filters button beside it. Canvas: result count, then cards with avatar initial, name, Verified, rate (private rate by default, "+N group rates"), and where they teach.
FORM: Club Court Sheet (Impeccable's pick, seed key 62610713) rendered sleek, then simplified on user feedback to cards; booking moved to the profile.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Open

- Real coach photos: none yet; cards use initials.
- Cards link to /coaches/:id, which does not exist until S3.
- Logo and wordmark: separate follow-up.
