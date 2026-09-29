# backend

The Courtside REST API: Java 25, Spring Boot 4, Maven, PostgreSQL + Flyway.
See [docs/architecture/tech-stack.md](../docs/architecture/tech-stack.md).

## Prerequisites

- JDK 25
- Docker (for the local database and for tests)

No Maven install needed; use the wrapper (`./mvnw`, or `mvnw.cmd` on Windows).

## Run locally

From the repo root, start Postgres:

```bash
docker compose up -d --wait
```

Then from `backend/`:

```bash
./mvnw spring-boot:run
```

| URL | What |
|---|---|
| http://localhost:8080/actuator/health | Health check |
| http://localhost:8080/api/v1/docs | Swagger UI |
| http://localhost:8080/api/v1/openapi | OpenAPI spec (JSON), used to generate the frontend client |

Database settings default to the values in `docker-compose.yml`; override them
with `DATABASE_URL`, `DATABASE_USERNAME`, and `DATABASE_PASSWORD`.

## Test

```bash
./mvnw verify
```

Tests start their own throwaway Postgres with Testcontainers, so Docker must be
running, but the `docker compose` database is not needed.

## Layout

```
src/main/java/com/courtside/
  config/          cross-cutting configuration (security, ...)
  <feature>/       one package per feature: controller, service, repository, DTOs
src/main/resources/
  db/migration/    Flyway migrations: V1__baseline.sql, V2__..., never edited once merged
```
