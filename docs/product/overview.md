# Product Overview

| | |
|---|---|
| **Status** | Draft |
| **Last updated** | 2026-09-29 |
| **Owner** | @Dawsxn |

> **How to use this template:** each section has a guidance block (like this one) explaining what belongs there. Write your answer below the guidance, then delete the guidance block when the section feels done. Bullet points are fine — clarity beats polish. If you don't know something yet, put it in [Open Questions](#12-open-questions) instead of guessing.

---

## 1. Summary

Courtside is a web platform that connects tennis players in the Philippines with coaches. It works like a job board: coaches create profiles and post openings, and players search for coaches by location, skill level, and lesson type. The goal is to replace word-of-mouth and scattered social media posts with one central place to find tennis coaching.


## 2. Problem

Right now, the Philippine tennis scene has grown exponentially due to the rapid rise in popularity of women's tennis star Alex Eala. Because of this, many people ranging from newbies to advanced players have gotten into the sport, either for the first time or again. This opens a lot of opportunities for coaching; however, there is currently no widely used, centralized platform to find these coaches.

**For players:** Based on personal experience, the most common way to find a coach is by knowing someone who knows one, or through informal ways like social media. This makes it hard to compare coaches by price, location, or experience, and leaves out players who don't already have connections in the tennis community.

**For coaches:** Coaches rely on the same word-of-mouth and social media posts to find students. This limits them to their existing network and makes it hard for newer coaches to build a client base.

This is what Courtside tries to address.


## 3. Target Users & Personas

> **Guidance:** Describe each type of user. For each, give a short persona: who they are, what they want, what frustrates them, and how tech-savvy they are. Consider:
> - **Players** — beginners vs. competitive juniors vs. adult rec players? Parents booking for kids?
> - **Coaches** — certified pros (USPTA/PTR), club coaches, college players coaching on the side?
> - **Admin/moderator** — do you (the operator) need a role?
> - Is anyone explicitly *not* a target user for now?



## 4. Value Proposition & Alternatives

> **Guidance:** Why would someone use this instead of what they do today?
> - List existing alternatives/competitors (apps, websites, informal channels) and one line on each one's weakness.
> - What's the *one thing* this app does better? If you can only pick one, what is it?



## 5. Core User Journeys

> **Guidance:** Walk through the main flows step by step, from the user's point of view, as numbered steps. Aim for 3–5 journeys. Examples of the kind of thing to describe:
> - A player searches for a coach near them and contacts one.
> - A coach signs up and creates their profile/listing.
> - A coach posts an opening ("looking for students, Tues/Thurs evenings").
> - A player leaves a review after lessons.
>
> Don't worry about screens or buttons — just what the user is trying to accomplish and in what order.



## 6. Key Concepts & Glossary

> **Guidance:** Define the "nouns" of the app so everyone (you, future collaborators, AI assistants) uses words consistently. These often become database entities later. For example: *Coach Profile*, *Listing/Posting*, *Lesson Type* (private, semi-private, group, clinic), *Skill Level* (NTRP? UTR? simple beginner/intermediate/advanced?), *Location* (club, public court, travel radius), *Inquiry/Request*, *Review*.
>
> Format: `**Term** — definition`.



## 7. Requirements (User Stories)

> **Guidance:** List features as user stories: *"As a [user], I want to [action] so that [benefit]."* Tag each with a priority:
> - **Must** — the MVP is pointless without it
> - **Should** — important, but MVP could ship without it
> - **Could** — nice to have / later
>
> Group by user type. Aim for roughly 10–25 stories total. Use the table format below.

### Players

| # | User story | Priority |
|---|---|---|
| P1 | | |

### Coaches

| # | User story | Priority |
|---|---|---|
| C1 | | |

### Admin / Platform

| # | User story | Priority |
|---|---|---|
| A1 | | |



## 8. Scope

> **Guidance:** Draw firm lines. This is the section that protects you from scope creep.

### 8.1 In scope for MVP

> Which "Must" stories from section 7 make up the first usable version?



### 8.2 Later (post-MVP)

> Things you want eventually but are deliberately postponing. Think about things like: in-app booking/scheduling, payments, messaging, mobile app, calendar sync, video analysis.



### 8.3 Non-goals

> Things this product will **not** do, even later. For example: "We will not handle payments between players and coaches" or "We are not a court-booking app." Non-goals are just as important as goals.



## 9. Trust, Safety & Privacy

> **Guidance:** A marketplace connecting strangers — often including minors — needs thought here early, because it affects the data model. Consider:
> - How (if at all) are coaches verified? Certifications? Background checks? Self-reported?
> - Can minors use the app, or only parents on their behalf?
> - Reviews: who can leave them, and how do you prevent fake ones?
> - What personal info is public vs. private (phone, email, exact location)?
> - How do users report or block someone?



## 10. Business Model & Success Metrics

> **Guidance:** Even for a personal project, write down what "success" looks like.
> - **Monetization (if any, even hypothetical):** free forever? Coach subscriptions? Featured listings? Booking fees? "Not decided" is a valid answer.
> - **Success metrics:** how will you know it's working? For example: number of coach profiles, player inquiries sent, % of inquiries that get a response.
> - **Personal goals:** for example, "learn Spring Boot well enough to discuss it in interviews" or "ship a live deployed MVP." These are legitimate goals for this project.



## 11. Constraints & Assumptions

> **Guidance:** The facts you're working within.
> - **Geography:** one city/region first, or anywhere? Which country (affects units, currency, privacy law)?
> - **Platforms:** web first; mobile later (backend stays a standalone API — see the tech stack doc when it exists).
> - **Team/time:** solo? How many hours per week, roughly?
> - **Budget:** hosting budget per month?
> - **Assumptions:** things you believe but haven't validated, for example "coaches are willing to create a profile for free."



## 12. Open Questions

> **Guidance:** A running list of unresolved questions. Add to it freely; move answers into the relevant section once decided. Format: `- [ ] Question — context/notes`.

- [ ] Final product name (currently using the codename "courtside").



## 13. Related Docs

> **Guidance:** Links to other docs as they're created. Leave as-is for now.

- Tech stack — _TBD_ (`docs/architecture/tech-stack.md`)
- Design system — _TBD_ (`docs/design/design-system.md`)
- CI/CD — _TBD_ (`docs/ops/ci-cd.md`)
- Decisions (ADRs) — _TBD_ (`docs/decisions/`)
