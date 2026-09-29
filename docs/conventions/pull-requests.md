# Pull requests

| | |
|---|---|
| **Status** | Accepted |
| **Last updated** | 2026-09-29 |
| **Owner** | @Dawsxn |

Every change reaches `develop` or `main` through a PR. There are no direct
pushes to either.

## PR titles matter more than commit messages

PRs are squash-merged into `develop`, which means **the PR title becomes the
commit message**. It is the thing that shows up in `develop`'s history forever,
so it is the thing we validate in CI.

Format is [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>
```

**Types** — same set as branch prefixes:

| Type | Use for |
| --- | --- |
| `feat` | A new capability a user or another component can observe |
| `fix` | A bug fix |
| `refactor` | Restructuring with no behaviour change |
| `chore` | Tooling, config, dependencies, housekeeping |
| `docs` | Documentation only |
| `test` | Tests only |

**Scopes** — optional but preferred. Use the part of the system the change
touches:

| Scope | Covers |
| --- | --- |
| `api` | Backend endpoints and API contract, across features |
| `ui` | Frontend shell, shared components, styling |
| `db` | Schema, migrations, seed data |
| `auth` | Sign-up, login, roles, tokens |
| `profile` | Coach profiles, lesson offerings, venues, service areas |
| `search` | Coach search and filters |
| `booking` | Availability, booking requests, cancellations |
| `messaging` | Conversations between players and coaches |
| `review` | Ratings and reviews |
| `admin` | Verification, reports, moderation |
| `ci` | GitHub Actions, deploy pipelines |
| `release` | `develop → main` release PRs only |

Add a scope to this table and to `.github/workflows/conventions.yml` when a new
area of the system appears. Omit the scope when a change spans several areas
rather than inventing a broad one.

**Subject** — imperative mood, lowercase, no trailing period, under ~72
characters including the prefix.

```
feat(booking): let coaches accept or decline booking requests
fix(search): include coaches who travel to the player's city
refactor(api): extract pagination into a shared helper
chore: bump spring boot to the latest patch
docs: document the local database setup
```

Bad titles, and why:

```
Update stuff                      no type, says nothing
feat: Added booking.              past tense, capitalised, trailing period
feat(booking): fix bug            type says feature, subject says fix
```

## Description

The template gives you five sections. Two are required, and CI will fail the PR
if they are missing or empty:

- **Summary**: what this PR does
- **Changes**: the key pieces added or changed, one bullet each

Three are optional. Delete the heading entirely when it does not apply:

- **How to test**: the steps a reviewer follows to verify it works. Include it
  when there is something to run or click. Skip it for documentation, config,
  and anything with nothing to execute.
- **Screenshots**: UI changes only. Before and after if you are replacing
  something.
- **Notes & caveats**: one line each, a few at most.

Write the description for someone who has not been following your branch —
including you, six months from now.

### Writing the summary

Lead with what the PR does. First sentence, present tense, the change itself:

```
Adds accept and decline actions to booking requests.
Fixes coaches' service areas being ignored in search.
```

Not this:

```
Currently coaches have no way of responding to booking requests, which means...

This PR is part of the ongoing effort to...
```

Add a second sentence of why only when the reason is not obvious from the change
itself. Two sentences is usually the whole summary. If it is running long, the
detail belongs in **Changes**.

### Keeping notes and caveats short

A caveat earns its place only if it changes what a reviewer does or watches for.
One line each. No hedging, no restating what is already in **Changes**, no
recounting everything you considered.

```
The 24-hour cancellation window is provisional.                        good
Notifications are stubbed; email delivery lands next PR.                good

It is worth noting that the cancellation window was chosen              no
provisionally and may need revisiting once we have more data.
```

If nothing fits, delete the section. An empty-but-present caveats list reads as
though something is being withheld.

## Review

- Target `develop` unless it is a `hotfix/*`, which targets `main`
- CI must be green
- No approval is required while this is a solo project. Still read your own
  diff on GitHub before merging; it catches things the editor hides.

## Merging

Squash merge into `develop`. Confirm the commit message field shows your **PR
title**, not a commit subject.

> The repository is configured so squash merges default to the PR title. If you
> ever see a raw commit subject there instead, stop and fix it — that setting has
> drifted, and unprefixed commit messages will start leaking into `develop`.

## Releases

Releasing is a PR from `develop` into `main`, merged as a **regular merge**, not
a squash. Title it:

```
chore(release): <what is going out>
```

The regular merge keeps one commit per feature visible in `main`'s history.

## Skills

If you are working with Claude Code in this repo:

- `/start-branch` — creates a correctly named branch off an up-to-date `develop`
- `/create-pr` — drafts the title and description from your actual diff, shows
  them to you, and opens the PR once you confirm

Both are conveniences. The conventions above are the source of truth, and CI is
what actually enforces them.
