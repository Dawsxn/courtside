# Product Overview

| | |
|---|---|
| **Status** | Draft |
| **Last updated** | 2026-09-29 |
| **Owner** | @Dawsxn |

---

## 1. Summary

Courtside is a web platform that connects tennis players in the Philippines with coaches. It works like a job board: coaches create profiles and publish their availability, and players search for coaches by location, skill level, and lesson type, then book lessons or message coaches directly. The goal is to replace word-of-mouth and scattered social media posts with one central place to find tennis coaching.


## 2. Problem

Right now, the Philippine tennis scene has grown exponentially due to the rapid rise in popularity of women's tennis star Alex Eala. Because of this, many people ranging from newbies to advanced players have gotten into the sport, either for the first time or again. This opens a lot of opportunities for coaching; however, there is currently no widely used, centralized platform to find these coaches.

**For players:** Based on personal experience, the most common way to find a coach is by knowing someone who knows one, or through informal ways like social media. This makes it hard to compare coaches by price, location, or experience, and leaves out players who don't already have connections in the tennis community.

**For coaches:** Coaches rely on the same word-of-mouth and social media posts to find students. This limits them to their existing network and makes it hard for newer coaches to build a client base.

This is what Courtside tries to address.


## 3. Target Users & Personas

### Players

**The new fan (primary)** — An adult in their 20s–30s who got into tennis recently, often inspired by Alex Eala. Has little or no experience and doesn't know anyone in the tennis community. Wants an affordable beginner coach near home or work with schedules that fit around a job. Frustrated that finding a coach means asking around or scrolling through Facebook groups. Comfortable with apps; mostly on mobile.

**The returning player** — Played in school or college years ago and wants to get back into it. Knows roughly what they need (e.g. "fix my serve", "get match-ready") and cares about a coach's experience and specialty. Wants to compare options instead of settling for whoever a friend recommends.

**The parent** — Looking for a coach for their child (roughly 6–17). Cares most about trust and safety: verified credentials, reviews from other parents, and a safe location. Books and communicates on the child's behalf.

**The competitive player** — A junior or adult competing in tournaments, looking for a higher-level coach or a hitting partner-style coach. Filters by experience and results. Smaller group, but valuable for coach credibility on the platform.

### Coaches

**The independent coach (primary)** — Teaches privately at public courts, condos, villages, or clubs. Finds students through word of mouth and social media and manages schedules over Messenger/Viber. Wants a steady stream of students and less back-and-forth scheduling.

**The new or part-time coach** — A former varsity/college player or recent certification holder coaching on the side. Has skill but no network, so struggles most to get their first students. Benefits the most from a public profile and reviews.

**The academy/club coach** — Works for or runs a tennis academy. May already have students but wants to fill open slots. *(Multi-coach academy accounts are post-MVP; for now each coach has an individual profile.)*

### Admin

**The operator (you)** — Reviews coach certifications to award Verified badges, handles reports, and removes abusive users or fake listings.

### Not targeted (for now)

- Court owners/venues looking to rent courts (see [Non-goals](#83-non-goals)).
- Players looking only for hitting partners or opponents with no coaching.


## 4. Value Proposition & Alternatives

### Alternatives today

| Alternative | Weakness |
|---|---|
| Word of mouth / referrals | Only works if you already know someone in tennis; no way to compare options. |
| Facebook groups & pages, Instagram | Scattered and unstructured; posts get buried; hard to verify credentials or see reviews. |
| Clubs and academies | Often require membership or are tied to one location; less flexible schedules and pricing. |
| Global coach directories (e.g. TennisCall, The Tennis Plan) | Not built for the Philippines; coverage of local coaches is unclear and likely thin. |
| Court booking apps (e.g. CourtFinder PH) | Book courts, not coaches. |
| Coach scheduling tools (e.g. Koalendar, Planubo) | Help coaches manage *existing* students; don't help anyone *find* a coach. |

### What Courtside does better

**One place, built for Philippine tennis, where you can find a coach, check their credentials and availability, and book a lesson — without needing to know someone first.**


## 5. Core User Journeys

**J1 — Player finds and books a coach**
1. Player opens Courtside and searches by location (city/area), skill level, lesson type, and budget. They can also filter for coaches who will **come to their court**.
2. Browses a list of coaches showing rate, location, rating, and Verified badge.
3. Opens a coach profile: bio, experience, certifications, lesson types and rates, venues they teach at, areas they travel to, reviews, and availability.
4. Picks an open time slot, chooses where the lesson happens (one of the coach's venues, or their own court), and sends a booking request (with notes like skill level and goals).
5. Coach accepts or declines. Player is notified.
6. Lesson happens; payment is handled directly between player and coach.

**J2 — Player asks a question before booking**
1. From a coach profile, player taps "Message".
2. Asks a question (e.g. "Do you teach 8-year-olds?" or "Is the court fee included?").
3. Coach replies in-app; the player can then book from the same conversation or profile.

**J3 — Coach joins and sets up a profile**
1. Coach signs up and chooses the Coach role.
2. Fills in profile: photo, bio, experience, specialties, lesson types, and rates.
3. Sets their court arrangements: venues they can provide, and/or the service areas they'll travel to for lessons at a player's court (with any travel fee).
4. Sets weekly availability.
5. Optionally uploads certifications to request a Verified badge.
6. Profile goes live and appears in search.

**J4 — Coach manages bookings**
1. Coach receives a booking request notification.
2. Reviews the request (player's level, notes, and where the lesson is) and accepts or declines.
3. Sees upcoming lessons in a schedule view; can cancel with a reason if needed.

**J5 — Player leaves a review**
1. After a completed lesson, player is prompted to rate and review the coach.
2. Review appears on the coach's profile.


## 6. Key Concepts & Glossary

**User** — Anyone with an account. A user has one or more roles: Player, Coach, Admin.

**Player** — A user looking for coaching. May be booking for themselves or, as a **Guardian**, for a minor.

**Guardian** — A player account holder (18+) who books on behalf of a child. The child does not have their own account in the MVP.

**Coach** — A user offering coaching, with a public **Coach Profile**.

**Coach Profile** — The coach's public page: bio, experience, specialties, certifications, lesson offerings, locations, availability, and reviews.

**Lesson Offering** — A type of lesson a coach provides, with its own rate and duration. Types: *Private* (1 player), *Semi-private* (2–3 players), *Group* (4+), *Clinic* (scheduled group session).

**Rate** — Price in PHP per session (or per hour). The coach states whether it **includes court fees and balls**, since these are often charged separately in the Philippines. Coaches may also charge a **travel fee** when going to the player's court.

**Skill Level** — Simple tiers: *Beginner*, *Intermediate*, *Advanced*, *Competitive*. Optional **UTR** rating for players who have one.

**Venue** — A specific tennis court or facility (e.g. a public court, club, condo, or village court), located in a city/municipality (e.g. Makati, Quezon City, Taguig).

**Court Arrangement** — Where a lesson happens. A coach can offer either or both:
- *Coach's venue* — the coach provides or arranges the court: one they have access to or know (they don't necessarily own or pay for it). The coach lists these venues on their profile.
- *Player's court* — the player has a preferred court and the coach travels there. The coach sets the **service areas** (cities/municipalities) they're willing to travel to.

**Service Area** — The cities/municipalities a coach will travel to for *player's court* lessons.

**Availability** — Recurring weekly time slots a coach is open for lessons, plus one-off blocked dates.

**Booking** — A reserved lesson between a player and coach for a specific slot, lesson offering, and court arrangement (which of the coach's venues, or the player's court). Statuses: *Requested → Confirmed → Completed*, or *Declined / Cancelled*.

**Conversation** — A message thread between one player and one coach.

**Verified Badge** — Shown on a coach profile once an admin has reviewed their uploaded certification(s).

**Review** — A 1–5 star rating plus comment, left by a player after a completed booking.

**Report** — A flag raised by a user about another user, message, or review, for admin review.


## 7. Requirements (User Stories)

Priorities: **Must** = MVP is pointless without it · **Should** = important, MVP could ship without it · **Could** = later

### Players

| # | User story | Priority |
|---|---|---|
| P1 | As a player, I want to sign up and log in so that I can book lessons and message coaches. | Must |
| P2 | As a player, I want to search coaches by location, skill level taught, lesson type, and price range, and filter for coaches who will come to my court, so that I find relevant coaches quickly. | Must |
| P3 | As a player, I want to see a coach's profile (bio, experience, rates, locations, certifications, reviews) so that I can decide whether to book. | Must |
| P4 | As a player, I want to see a coach's availability so that I know when I can book. | Must |
| P5 | As a player, I want to request a booking for an open slot and choose where it happens (one of the coach's venues, or my own court) so that I can schedule a lesson. | Must |
| P6 | As a player, I want to message a coach so that I can ask questions before booking. | Must |
| P7 | As a player, I want to see my upcoming and past bookings so that I can keep track of lessons. | Must |
| P8 | As a player, I want to cancel a booking so that I can handle schedule changes. | Must |
| P9 | As a player, I want to be notified (email/in-app) when a coach responds to my booking or message so that I don't miss it. | Should |
| P10 | As a player, I want to leave a review after a completed lesson so that other players can make informed choices. | Should |
| P11 | As a guardian, I want to book on behalf of my child and note their age so that the coach knows who they're teaching. | Should |
| P12 | As a player, I want to save/favorite coaches so that I can come back to them later. | Could |
| P13 | As a player, I want to post a "looking for a coach" request so that coaches can reach out to me. | Could |

### Coaches

| # | User story | Priority |
|---|---|---|
| C1 | As a coach, I want to sign up and create a profile so that players can find me. | Must |
| C2 | As a coach, I want to list my lesson offerings with rates (and whether court fees are included) so that players know what I offer and what it costs. | Must |
| C3 | As a coach, I want to list the venues I can provide and/or the service areas I'll travel to (with any travel fee) so that nearby players find me and know where lessons can happen. | Must |
| C4 | As a coach, I want to set my weekly availability and block specific dates so that players only book when I'm free. | Must |
| C5 | As a coach, I want to accept or decline booking requests so that I stay in control of my schedule. | Must |
| C6 | As a coach, I want to see my upcoming bookings in one place so that I can manage my week. | Must |
| C7 | As a coach, I want to reply to player messages so that I can answer questions and convert inquiries into bookings. | Must |
| C8 | As a coach, I want to be notified of new booking requests and messages so that I respond quickly. | Should |
| C9 | As a coach, I want to upload certifications so that I can earn a Verified badge. | Should |
| C10 | As a coach, I want to cancel a confirmed booking with a reason so that players are informed of changes. | Should |
| C11 | As a coach, I want to respond publicly to reviews so that I can address feedback. | Could |
| C12 | As a coach, I want to browse player "looking for a coach" requests so that I can find new students. | Could |

### Admin / Platform

| # | User story | Priority |
|---|---|---|
| A1 | As an admin, I want to review uploaded certifications and grant or revoke Verified badges so that players can trust credentials. | Should |
| A2 | As an admin, I want to review reports and suspend users or remove content so that the platform stays safe. | Should |
| A3 | As an admin, I want to see basic stats (users, coaches, bookings) so that I can track growth. | Could |


## 8. Scope

### 8.1 In scope for MVP

- Accounts with Player and Coach roles (P1, C1)
- Coach profiles with lesson offerings, rates, locations (P3, C2, C3)
- Coach search and filters (P2)
- Availability and booking requests with accept/decline and cancellation (P4, P5, P7, P8, C4, C5, C6)
- In-app messaging between player and coach (P6, C7)
- Responsive web app that works well on mobile browsers

Next in line if time allows: notifications, reviews, guardian bookings, certification upload + Verified badge, admin moderation (all **Should** stories).

### 8.2 Later (post-MVP)

- Player "looking for a coach" posts and a coach-side request feed (P13, C12) — see [Open Questions](#12-open-questions)
- In-app payments (e.g. GCash, Maya, cards) and deposits to reduce no-shows
- Native mobile apps (iOS/Android) using the same backend API
- Academy/club accounts with multiple coaches
- Recurring bookings (e.g. every Tuesday 6pm)
- Calendar sync (Google/Apple Calendar)
- Featured/promoted coach listings
- Filipino language support

### 8.3 Non-goals

- **Court booking/rental.** Courtside books coaches, not courts. Courtside records *where* a lesson happens (a coach's venue or the player's court), but reserving and paying for the court itself stays between the player, coach, and venue.
- **Payment processing in the MVP.** Players pay coaches directly; Courtside does not handle money.
- **Sports other than tennis** (e.g. pickleball, padel), at least until the tennis product is proven.
- **Training content** (drills, video analysis, progress tracking).


## 9. Trust, Safety & Privacy

- **Coach verification:** anyone can list as a coach. Coaches may upload certifications (e.g. PTR, USPTA, ITF, or local federation courses); an admin reviews them and awards a **Verified** badge. Unverified coaches are still listed, but the badge is clearly shown or absent.
- **Minors:** users must be 18+ to create an account. Minors are booked by a **Guardian**, who handles all communication. Coaches see when a booking is for a minor.
- **Reviews:** only players with a **completed booking** with that coach can review them, once per booking. This limits fake reviews.
- **Contact info:** phone numbers and emails are private by default. Communication happens through in-app messaging. Coaches list venues and service areas, not home addresses. When a player books at their own court, the exact address is shared only with that coach, and only once the booking is confirmed.
- **Reporting & blocking:** users can report a user, message, or review, and block another user from messaging them. Admins review reports.
- **Data privacy:** Courtside stores personal data of Philippine users, so it must comply with the **Data Privacy Act of 2012 (RA 10173)**: a clear privacy policy, consent at sign-up, and the ability for users to delete their account and data.


## 10. Business Model & Success Metrics

**Monetization:** free for everyone during the MVP. Possible future options: coach subscription tiers, featured listings, or a small booking fee once in-app payments exist. Not decided.

**Success metrics** (initial targets, to revisit after launch):
- Number of coach profiles live (target: 30+ in Metro Manila within 3 months of launch)
- Number of booking requests per week
- Booking acceptance rate (% of requests coaches confirm)
- Median coach response time to messages and booking requests
- Repeat bookings (players who book the same coach again)

**Personal goals:**
- Become proficient in Spring Boot and be able to discuss the design decisions in interviews.
- Ship a live, deployed MVP with real users.
- Build a well-documented, portfolio-ready project.


## 11. Constraints & Assumptions

**Constraints**
- **Geography:** open to anyone in the Philippines, with launch and growth efforts focused on Metro Manila and Luzon.
- **Currency & time:** PHP (₱); Philippine Standard Time (Asia/Manila, UTC+8).
- **Language:** English for the MVP.
- **Platforms:** web first, designed mobile-first since most users will browse on phones. Native mobile apps later, using the same backend as a standalone REST API.
- **Team:** solo developer, part-time.
- **Budget:** minimal; prefer free or low-cost hosting tiers for the MVP.
- **Legal:** Data Privacy Act of 2012 compliance (see [section 9](#9-trust-safety--privacy)).

**Assumptions** (unvalidated — check these with real coaches and players)
- Coaches are willing to create a profile and keep their availability up to date for free.
- Players prefer booking into set availability over negotiating times by chat.
- Players trust a new platform enough to book a stranger, given reviews and Verified badges.
- Handling payment outside the app won't cause too many no-shows.
- Demand is concentrated in Metro Manila and Luzon.


## 12. Open Questions

- [ ] Final product name (currently using the codename "Courtside").
- [ ] Which is more common: players looking for coaches, or coaches looking for students? This decides whether player "looking for a coach" posts (P13, C12) should move into the MVP. Consider asking a few coaches and players.
- [ ] Is booking + in-app messaging too big for a first release? Option: ship messaging first, then booking.
- [ ] Does messaging need to be real-time (live chat), or is refresh-to-see-new-messages acceptable for the MVP? This affects the backend design.
- [ ] Booking flow: should coaches manually accept each request (current plan), or should some bookings confirm instantly?
- [ ] Cancellation policy: do coaches set their own (e.g. 24 hours' notice), or is there a platform-wide rule?
- [ ] How are no-shows handled if payment happens outside the app?
- [ ] Which certifications are common among Philippine coaches, and how can an admin verify them?
- [ ] Court fees: when a lesson is at a coach's venue, who usually pays the court fee (player, or included in the coach's rate)? At a player's court, is it always the player? Should the booking show who pays?
- [ ] Travel fees: flat fee, per-area fee, or just folded into the rate?
- [ ] Should venues be free text, or a shared list of known courts that coaches pick from (enables "coaches near Rizal Memorial"-style search, but needs curation)?
- [ ] Rate format: per session, per hour, or both? Should packages (e.g. 10 sessions) be supported?
- [ ] How many hours per week can go into this project, and is there a target launch date?


## 13. Related Docs

- Tech stack — _TBD_ (`docs/architecture/tech-stack.md`)
- Design system — _TBD_ (`docs/design/design-system.md`)
- CI/CD — _TBD_ (`docs/ops/ci-cd.md`)
- Decisions (ADRs) — _TBD_ (`docs/decisions/`)
