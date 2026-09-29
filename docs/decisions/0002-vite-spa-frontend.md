# 0002. React single-page app built with Vite

| | |
|---|---|
| **Status** | Accepted |
| **Date** | 2026-09-29 |

## Context

The frontend could be a single-page app (Vite) or a server-rendered React
framework (Next.js). Server rendering helps public pages, such as coach
profiles, rank in search engines. But it adds a second server (Node), and makes
it tempting to put business logic there instead of in Spring Boot.

## Decision

Use React + TypeScript built with Vite, as a single-page app served as static
files. Spring Boot is the only server.

## Consequences

- Simple to build, host (any static host), and reason about.
- All business logic lives in the Spring API, where the web and mobile apps
  share it.
- Weaker SEO: search engines see little on first load. If search traffic to
  coach profiles matters later, pre-render those pages or revisit this decision
  with a new ADR.
