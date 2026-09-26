# CLAUDE.md

Context for AI assistants working in this repo. Keep this file short; details live in `docs/`.

## Project

"courtside" (temporary codename) is a job-board-style marketplace that connects tennis players with coaches. Read [docs/product/overview.md](docs/product/overview.md) for the product context.

## Structure

- `frontend/` — React web app (planned; component library such as shadcn/ui)
- `backend/` — Spring Boot REST API (planned)
- `docs/` — documentation; conventions are in [docs/README.md](docs/README.md)

## Principles

- The backend is a **standalone, client-agnostic REST API** (JSON, token-based auth, versioned `/api/v1` routes, OpenAPI spec) so that a future mobile app can consume it. Don't put presentation logic in the backend.
- A learning goal of this project is Spring Boot proficiency. When working on the backend, prefer idiomatic Spring approaches and explain non-obvious choices.
- The tech stack isn't final. Check `docs/architecture/` before assuming a library or tool.
