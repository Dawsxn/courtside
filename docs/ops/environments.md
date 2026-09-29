# Environments

| | |
|---|---|
| **Status** | Draft |
| **Last updated** | 2026-09-29 |
| **Owner** | @Dawsxn |

Three branches, three places the app runs. A branch is a version of the code; an
environment is somewhere it runs. They are not the same thing, and every branch
can be run locally.

| | Local | Development | Production |
| --- | --- | --- | --- |
| Runs from | Any branch you check out | `develop` | `main` |
| Where | `localhost` | `courtside-dev.<host>` | `courtside.<host>` |
| Database | Docker, on your machine | Hosted `courtside-dev` | Hosted `courtside-prod` |
| Data | Seeded fake data | Seeded fake data, reset freely | Real |
| Deploys | Never | On merge to `develop` | On merge to `main` |
| Migrations | Run by hand (or on app start) | On deploy | On deploy |
| Instance tier | n/a | Free, sleeping is fine | Must not sleep |

Hostnames, hosting provider, the database engine, and the migration tool are
decided in the tech stack doc (`docs/architecture/tech-stack.md`, not written
yet). The rules below hold whatever those turn out to be.

## Rules

**One database per environment, never shared.** A migration run against
development must not be able to reach production data.

**One local database, not one per branch.** Feature branches share the Docker
database on your machine. If a branch leaves it in a bad state, wipe it and
re-seed (`docker compose down -v`, then start again). A database per branch
would mean re-migrating and re-seeding on every checkout, for little gain on a
solo project.

**Data never flows down from production.** If development needs realistic data,
seed it. Production holds people's names, contact details, and messages, which
the Data Privacy Act of 2012 protects.

**Separate secrets per environment, no overlap.** Database URL, auth signing
keys, and any third-party API keys. A leaked development key must not open
production.

**Write the seed script alongside the schema.** A fresh database with no coaches
is unusable for testing search or booking, so seed data is not a nice-to-have.

**Migrations run the same way everywhere.** Development rehearses exactly what
production will do on the next release. Two branches that each add a migration
can conflict; say when you are adding one.

## Related

- [Git workflow](../conventions/git-workflow.md) — which branch deploys where
- CI/CD — _TBD_ (`docs/ops/ci-cd.md`)
