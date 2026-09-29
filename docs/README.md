# Docs

Project documentation. Start with [product/overview.md](product/overview.md).

## Index

| Doc | Purpose | Status |
|---|---|---|
| [product/overview.md](product/overview.md) | What we're building, for whom, and why | Draft |
| `architecture/tech-stack.md` | Technologies and how they fit together | Not started |
| `design/design-system.md` | Visual language, components, UI conventions | Not started |
| [ops/environments.md](ops/environments.md) | Local / development / production, and their databases | Draft |
| `ops/ci-cd.md` | Build, test, and deploy pipelines | Not started |
| [conventions/git-workflow.md](conventions/git-workflow.md) | Branches, commit messages, merging | Accepted |
| [conventions/pull-requests.md](conventions/pull-requests.md) | PR titles, descriptions, releases | Accepted |
| `decisions/` | Architecture Decision Records (ADRs) | Not started |

## Conventions

1. **One topic per file.** Each doc answers one question well. If a doc starts covering two topics, split it.
2. **Header block.** Every doc starts with a small table: **Status** (`Draft` / `Accepted` / `Outdated`), **Last updated**, and **Owner**.
3. **Link, don't duplicate.** If something is explained elsewhere, link to it.
4. **Folders by area:** `product/`, `architecture/`, `design/`, `ops/`, `conventions/`, `decisions/`.
5. **File names** are lowercase-kebab-case: `tech-stack.md`, not `TechStack.md`.
6. **ADRs** live in `decisions/` as `NNNN-short-title.md` (for example, `0001-use-spring-boot.md`), each with the sections *Context*, *Decision*, and *Consequences*. ADRs are never edited after they're accepted; if a decision changes, write a new ADR that supersedes the old one.
7. **Keep this index updated** when adding a doc.
