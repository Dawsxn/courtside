# CLAUDE.md

Context for AI assistants working in this repo. Keep this file short; details live in `docs/`.

## Project

"courtside" (temporary codename) is a job-board-style marketplace that connects tennis players with coaches in the Philippines. Read [docs/product/overview.md](docs/product/overview.md) for the product context.

## Structure

- `frontend/` — React + TypeScript SPA built with Vite, Tailwind v4, shadcn/ui (planned)
- `backend/` — Java 21, Spring Boot 4, Maven, PostgreSQL + Flyway, Spring Security with JWT (planned)
- `docs/` — documentation; conventions are in [docs/README.md](docs/README.md)

## Principles

- The backend is a **standalone, client-agnostic REST API** (JSON, token-based auth, versioned `/api/v1` routes, OpenAPI spec) so that a future mobile app can consume it. Don't put presentation logic in the backend.
- A learning goal of this project is Spring Boot proficiency. When working on the backend, prefer idiomatic Spring approaches and explain non-obvious choices.
- Check `docs/architecture/tech-stack.md` and `docs/decisions/` before adding a library or tool. A new major dependency gets an ADR.

## Conventions — always apply

@docs/conventions/git-workflow.md
@docs/conventions/pull-requests.md

Never commit or push directly to `main` or `develop`; work on a branch and open a PR.

## Reference — open when relevant

- `docs/ops/environments.md` — local / development / production, and the one-database-per-environment rule
- `docs/architecture/tech-stack.md` — libraries, API conventions, and why
- `docs/design/design-system.md` — brand direction and how Impeccable / Emil Kowalski's skills are used

## Skills

- `/start-branch` — create a correctly named branch off an up-to-date `develop`
- `/create-pr` — open a PR from the current branch following the conventions

Third-party design skills, installed with `npx skills` and pinned in `skills-lock.json` (update with `npx skills update -p`; don't edit their files by hand):

- `/impeccable` (Paul Bakaus) — visual design: `init`, `document`, `critique`, `audit`, `polish`, `typeset`, `colorize`, ... Owns `PRODUCT.md` and `DESIGN.md` at the repo root.
- Emil Kowalski's skills — motion and interaction: `animate`, `review-animations`, `improve-animations`, `find-animation-opportunities`, `animation-vocabulary`, `emil-design-eng`, `apple-design`, `mobile-native`, `prototype`, `pick-ui-library`, `ask-sonner`.

Impeccable decides how things look; Emil's skills decide how things move.
