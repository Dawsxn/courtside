# Screens

| | |
|---|---|
| **Status** | Draft |
| **Last updated** | 2026-09-30 |
| **Owner** | @Dawsxn |

The screens Courtside needs, what each one shows, and which user stories it
serves. Story IDs (P1, C4, …) and terms (Lesson Offering, Pax rate, Clinic,
Court Arrangement, …) are defined in the [product overview](overview.md). This
is a list of what exists and what it contains, not a design; layout and look
belong to `DESIGN.md`.

Each screen notes what the backend has to provide, since that is what the API
is built from.

**Priority** follows the overview: **Must** is in the MVP, **Should** is next in
line.

## Decisions

- **Browse freely, sign in to act.** Anyone can use Home, search, and coach
  profiles without an account. Requesting a booking, joining a clinic, or
  sending a message sends a logged-out visitor to log in or sign up, then
  returns them to what they were doing.
- **Role is chosen at sign-up:** Player or Coach.
- **Home is its own landing page**, separate from search.
- **Players have a skill level** on their account: Beginner, Intermediate, or
  Advanced. No UTR.
- **Coaches price by pax, and can also run clinics.** See Lesson Offering in
  the overview's glossary.
  - A pax rate is set per hour for the whole group, for a fixed set of
    brackets: 1, 2, 3–4, and 5–6 pax. Screens show both the group rate and the
    price per person (e.g. "₱1,000/hr · ₱500 each").
  - Clinics are priced per person. A spot is confirmed as soon as a player
    joins, while spots remain. There is no minimum number of players; the coach
    cancels with a reason if too few join. Each clinic is created separately;
    repeating clinics come later.
- **Coach setup is guided and skippable.** Right after sign-up, a coach goes
  through S11. They can skip it; the skip screen tells them they won't appear
  in search until they finish.
- **A coach profile is live as soon as it is created, but only bookable coaches
  appear in search.** A coach is *bookable* when they have at least one pax
  rate, one court arrangement, and some weekly availability, or an upcoming
  clinic with open spots. Until then their profile page still works at its own
  link (so they can share it) and says "Not taking bookings yet"; players can
  still message them.

## Public (no account needed)

| # | Screen | What it shows | Stories | Priority |
|---|---|---|---|---|
| S1 | **Home** | Landing page: what Courtside is and how it works, a search entry point (location, skill level) that leads to S2, and a "Coach on Courtside" call to action for coaches. No invented stats, coaches, or testimonials. | P2, C1 | Must |
| S2 | **Coach search** | Filters: location, skill level taught, number of players (pax), clinics, price range, "comes to my court". Results as a list of bookable coaches: photo, name, starting rate, city or venues, Verified badge, rating once reviews exist, and an upcoming clinic if they have one. Empty state when nothing matches. | P2, P14 | Must |
| S3 | **Coach profile** | Photo, bio, experience, specialties, certifications and Verified status. Pax rates, with whether court fees and balls are included. Upcoming clinics with spots left. Venues and service areas (with travel fee). Upcoming availability. Reviews. Actions: **Request booking**, **Join clinic**, and **Message**; logged-out visitors are sent to log in first. Shows "Not taking bookings yet" when the coach isn't bookable. | P3, P4, P10, P14 | Must |
| S4 | **Privacy policy** and **Terms** | Static pages. Sign-up links to them for Data Privacy Act consent. | P1, C1 | Must |

## Accounts

| # | Screen | What it shows | Stories | Priority |
|---|---|---|---|---|
| S5 | **Sign up** | Role (Player or Coach), name, email, password, 18+ confirmation, privacy consent. Players also pick their skill level. Coaches continue to S11. | P1, C1 | Must |
| S6 | **Log in** | Email and password. Returns the user to the page that sent them here. "Forgot password" arrives once email sending exists. | P1, C1 | Must |
| S7 | **Account settings** | Name, email, password change, and skill level for players. Delete account and data (Data Privacy Act). | — | Must |

## Players

| # | Screen | What it shows | Stories | Priority |
|---|---|---|---|---|
| S8 | **Request a booking** | Pick the exact number of players, an open slot, and a court arrangement (one of the coach's venues, or my court within their service areas). Notes on goals; skill level is filled in from the player's account. Summary before sending: the group rate and price per person, fees, and travel fee. | P5 | Must |
| S9 | **Join a clinic** | Clinic details: date, time, venue, skill level, price per person, what's included, spots left. Joining confirms the spot straight away. | P14 | Must |
| S10 | **My bookings** | Upcoming and past lessons and clinic spots, with status (Requested, Confirmed, Completed, Declined, Cancelled). | P7 | Must |

Guardian bookings (P11, Should) add a "booking for my child" option and the
child's age to S8 and S9; no new screen.

## Coaches

| # | Screen | What it shows | Stories | Priority |
|---|---|---|---|---|
| S11 | **Coach setup** | Guided flow straight after sign-up, one step each: about you (S12), pax rates (S13), where you teach (S14), when you're free (S15). Each step asks for the minimum. Can be skipped; the skip screen explains the coach won't appear in search until setup is done. A "Finish setting up" banner stays in the coach area until they are bookable. | C1–C4 | Must |
| S12 | **Profile editor** | Photo, bio, experience, specialties. | C1 | Must |
| S13 | **Pax rates** | A rate per hour for each pax bracket the coach offers (1, 2, 3–4, 5–6), with the price per person shown alongside, and whether court fees and balls are included. | C2 | Must |
| S14 | **Court arrangements** | Venues the coach can provide. Service areas they travel to, with any travel fee. | C3 | Must |
| S15 | **Availability** | Recurring weekly slots, plus one-off blocked dates. | C4 | Must |
| S16 | **Clinics** | Create a clinic (title, date and time, duration, venue, skill level, number of spots, price per person, what's included), see who has joined, edit or cancel it. | C13 | Must |
| S17 | **Coach bookings** | Pending requests to accept or decline, and the upcoming schedule of lessons and clinics. | C5, C6 | Must |

S12–S15 are the steps of S11 during setup and stand-alone screens afterwards.
Whether they are four screens or sections of one is a design decision.

## Shared by players and coaches

| # | Screen | What it shows | Stories | Priority |
|---|---|---|---|---|
| S18 | **Booking detail** | When, where, pax or clinic, rate and fees, notes, status. Actions depend on who is looking and the status: accept or decline (coach), cancel with a reason (both), message the other person. The player's court address is shown to the coach only once the booking is confirmed. | P7, P8, C5, C10 | Must |
| S19 | **Conversations** | List of message threads, newest first, with unread markers. | P6, C7 | Must |
| S20 | **Conversation** | One thread between a player and a coach. The player can request a booking from here. Report and block actions. | P6, C7 | Must |

## Next in line (Should)

| # | Screen | What it shows | Stories |
|---|---|---|---|
| S21 | **Notifications** | In-app list of booking responses, new requests, clinic changes, and new messages. | P9, C8 |
| S22 | **Leave a review** | 1–5 stars and a comment, reachable only from a completed booking. | P10 |
| S23 | **Certifications** | Coach uploads certifications and sees verification status. | C9 |
| S24 | **Admin: verification queue** | Uploaded certifications to approve or reject. | A1 |
| S25 | **Admin: reports** | Reported users, messages, and reviews, with suspend and remove actions. | A2 |

## What each screen needs from the API

A first pass, to be firmed up as features are built.

| Screens | Data the API must provide |
|---|---|
| S5–S7 | Users, roles, credentials, consent records, player skill level |
| S2, S3 | Coach profiles, pax rates, clinics, venues, service areas, availability, reviews, whether a coach is bookable, search by filters |
| S8–S10, S17, S18 | Bookings, clinic spots, and their status changes |
| S11–S16 | Writes for everything S3 reads |
| S19, S20 | Conversations and messages |
