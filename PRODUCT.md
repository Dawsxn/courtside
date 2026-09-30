# Product

<!-- impeccable:product-schema 1 -->

> Short product record for design work, maintained with the Impeccable skill.
> The full product requirements live in [docs/product/overview.md](docs/product/overview.md);
> when the two disagree, the overview wins and this file gets updated.

## Platform

web

## Users

- **Players (primary):** adults in the Philippines looking for a tennis coach — most often a *new fan*, a beginner who took up tennis recently (many inspired by Alex Eala), has no connections in the tennis community, and browses on a phone. Also returning players and **guardians** booking lessons for a child (users must be 18+; minors never hold accounts).
- **Coaches:** independent coaches, part-time or newly certified coaches without a network, and academy/club coaches filling open slots. Their job: get a steady stream of students and stop negotiating schedules over Messenger/Viber.
- **Admin:** the operator, who reviews certifications for Verified badges and handles reports.

## Product Purpose

Courtside connects tennis players in the Philippines with coaches, replacing word-of-mouth referrals and scattered social media posts with one place to find, compare, and book coaching. Success means players who don't know anyone in tennis can still find a suitable coach and get a lesson booked, and coaches — especially newer ones — fill their schedules through the platform.

## Positioning

**Book, not just browse.** Players see a coach's real availability and request a specific slot, instead of messaging around to find out whether a coach is free. Directories and Facebook groups can list coaches; they can't show that Coach X is open Tuesday at 6pm and let you take the slot.

## Operating Context

- Players search by location (city/municipality), skill level, lesson type, price, and whether the coach will come to their court.
- Every lesson has a **court arrangement**: at one of the coach's venues (a court the coach has access to or knows), or at the player's own court within the coach's service areas, sometimes with a travel fee.
- Booking is request-based: the player requests a slot, the coach accepts or declines. Players and coaches can message in-app before booking.
- **Payment happens off-platform** (cash, GCash, etc.). Rates are in PHP; coaches state whether court fees and balls are included.
- Launch focus is Metro Manila and Luzon, but the product is open to all of the Philippines.

## Capabilities and Constraints

- MVP: accounts (Player/Coach), coach profiles, search, availability and booking requests, clinics, cancellations, in-app messaging. Next: notifications, reviews, guardian bookings, Verified badges, admin moderation.
- English only for the MVP. Currency PHP (₱), timezone Asia/Manila.
- Web first (responsive, mobile-first); native mobile apps later on the same API.
- Terminology: *Coach Profile, Lesson Offering (pax rate, clinic), Venue, Court Arrangement, Service Area, Availability, Booking, Conversation, Verified Badge, Review*. Definitions in the overview's glossary.
- Undecided: final product name ("Courtside" is a codename), cancellation policy, rate format (per session vs per hour, packages), whether players can post "looking for a coach" requests.

## Brand Commitments

- **Name:** "Courtside" is a temporary codename. Don't build identity work (logo, wordmark) that depends on it.
- **Personality:** premium, like a well-run tennis club — but welcoming to beginners. Plain, friendly copy; nothing that feels exclusive or gatekept. (Direction recorded in [docs/design/design-system.md](docs/design/design-system.md).)

## Evidence on Hand

None yet: no coaches signed up, no photos, no logo, no reviews, no usage numbers. Screens must use clearly labeled placeholder data. Never invent coaches, testimonials, ratings, user counts, or partner venues.

## Product Principles

1. **Availability is the product.** Getting from "I want a coach" to a requested slot should take as few steps as possible.
2. **Trust before transaction.** Players are booking a stranger, sometimes for their child. Show credentials, verification status, and real reviews plainly, and never overstate them.
3. **Beginner-first.** The primary player may not know what NTRP or "semi-private" means. Explain in plain language; never assume tennis knowledge.
4. **Fit the local reality.** Court fees, travel, off-platform payment, and city-based search are how coaching works here; design for them rather than around them.
5. **Coaches are customers too.** Setting up a profile and managing requests must be quick on a phone, or supply dries up.

## Accessibility & Inclusion

- **WCAG 2.2 AA** for all screens.
- **Budget Android phones on patchy mobile data** are the baseline device: keep pages light, fast on mid-range hardware, and usable on small screens.
