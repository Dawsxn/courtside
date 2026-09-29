# Tech Stack

| | |
|---|---|
| **Status** | Draft |
| **Last updated** | 2026-09-29 |
| **Owner** | @Dawsxn |

What Courtside is built with and why. Big decisions have their own ADR in
[`docs/decisions/`](../decisions/); this doc is the overview.

## Architecture at a glance

```
 React SPA (Vite)  ──HTTPS/JSON──▶  Spring Boot REST API  ──▶  PostgreSQL
 (web, today)                        /api/v1/...                  (Flyway migrations)
                                          │
 Mobile app  ──────HTTPS/JSON────────────┘  ──▶  Object storage (photos, certifications)
 (later, same API)                            ──▶  Email provider (notifications)
```

The backend is a **standalone, client-agnostic REST API**. The web app is just
its first client; a mobile app later is its second. See
[ADR 0001](../decisions/0001-spring-boot-standalone-rest-api.md).

## Frontend

| Concern | Choice | Notes |
|---|---|---|
| Language | TypeScript | |
| Framework | React, built with **Vite** as a single-page app | [ADR 0002](../decisions/0002-vite-spa-frontend.md) |
| Routing | React Router | |
| Styling | **Tailwind CSS v4** | Design tokens as CSS variables |
| Components | **shadcn/ui** | Component source lives in the repo. [ADR 0004](../decisions/0004-shadcn-ui-component-library.md) |
| Server state | TanStack Query | Caching, loading and error states for API calls |
| Forms | react-hook-form + zod | shadcn's form components are built on these |
| API client | Generated from the backend's OpenAPI spec | Tool TBD (e.g. orval or openapi-typescript). Types never drift from the API |
| Tests | Vitest + React Testing Library | Playwright for end-to-end later |

Code is organised by feature (`src/features/booking/`, `src/features/search/`,
…), with shared UI in `src/components/`.

## Backend

| Concern | Choice | Notes |
|---|---|---|
| Language | **Java 25** (LTS) | |
| Framework | **Spring Boot 4** (latest 4.x when scaffolded), Spring Web MVC | MVC rather than WebFlux: simpler, and what most jobs use |
| Build | **Maven** (with the Maven wrapper, `./mvnw`) | Most common in job listings and Spring tutorials |
| Persistence | Spring Data JPA (Hibernate) | |
| Database | **PostgreSQL** | City/area-based search needs nothing more. PostGIS later if we add distance search |
| Migrations | **Flyway** | Versioned SQL files, run on app start and on deploy |
| Validation | Jakarta Bean Validation | |
| Auth | **Spring Security, JWT** — email/password + Google sign-in | [ADR 0003](../decisions/0003-in-house-auth-spring-security-jwt.md) |
| API docs | springdoc-openapi (Swagger UI) | Also produces the spec the frontend client is generated from |
| Tests | JUnit 5, Spring Boot Test, **Testcontainers** (real Postgres) | |

Code is organised by feature (`booking`, `profile`, `search`, `messaging`, …),
each with its own controller, service, repository, and DTOs, rather than one
package per layer.

### API conventions

- Versioned routes: `/api/v1/...`
- JSON only; the API never renders HTML
- DTOs at the boundary; JPA entities are never returned directly
- Errors use one consistent shape (RFC 9457 Problem Details, built into Spring)
- Times stored in UTC, shown in Asia/Manila; money stored in centavos as integers

## Features that shape the stack

| Feature | MVP approach | Later |
|---|---|---|
| Messaging | Polling (the client re-fetches every few seconds on an open conversation) | WebSocket (Spring supports it) for real-time |
| Notifications | Email via a transactional email provider (TBD) | Push notifications with the mobile app |
| File uploads | Object storage (e.g. Cloudflare R2 or S3), accessed via signed URLs | |
| Payments | None — off-platform (see the product overview) | Payment provider such as PayMongo or Xendit |

## Local development

- Postgres runs in Docker (`docker compose up -d`); the frontend and backend run
  on the host so code changes don't need a container rebuild
- One local database shared by all branches — see
  [environments.md](../ops/environments.md)

## Hosting (not decided)

Candidates, all with a Singapore region for latency from Manila:

- Frontend: Vercel or Cloudflare Pages (static hosting)
- Backend: Render, Railway, or Fly.io (runs the Spring Boot Docker image)
- Database: Neon (managed Postgres, also supports per-branch databases)

Decide when we are ready to deploy, and record it in `docs/ops/ci-cd.md`.

## Open questions

- [ ] API client generator: orval or openapi-typescript + a small fetch wrapper?
- [ ] Transactional email provider (e.g. Resend, Brevo, Amazon SES)?
- [ ] Lombok, or plain Java records and hand-written code?
- [ ] Base UI or Radix as shadcn's underlying primitives? See the [design system](../design/design-system.md).
