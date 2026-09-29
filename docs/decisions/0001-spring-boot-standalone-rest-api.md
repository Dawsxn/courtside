# 0001. Spring Boot as a standalone REST API

| | |
|---|---|
| **Status** | Accepted |
| **Date** | 2026-09-29 |

## Context

Courtside starts as a web app, but a mobile app is likely later. A personal goal
of the project is to become proficient in Spring Boot for work and interviews.

## Decision

The backend is a Spring Boot application that exposes a versioned JSON REST API
(`/api/v1/...`) and knows nothing about any particular client. It uses
token-based auth, publishes an OpenAPI spec, and never renders HTML. The React
web app is its first client.

## Consequences

- A mobile app can reuse the same API with no backend rewrite.
- The frontend and backend deploy separately, so the backend must handle CORS.
- The API contract (OpenAPI spec) becomes important: clients are generated from
  it, and breaking changes need a new API version.
- Slower to start than a single full-stack framework, but it matches the
  learning goal.
