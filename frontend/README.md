# frontend

The Courtside web app: React + TypeScript, built with Vite, styled with
Tailwind CSS v4 and shadcn/ui (on Base UI). See
[docs/architecture/tech-stack.md](../docs/architecture/tech-stack.md) and
[docs/design/design-system.md](../docs/design/design-system.md).

## Prerequisites

- Node.js 22+

## Run locally

```bash
npm install
npm run dev
```

Opens on http://localhost:5173. Requests to `/api` are proxied to the Spring
Boot backend on `localhost:8080`, so start that too when a page needs data.

## Scripts

| Script | What |
|---|---|
| `npm run dev` | Dev server with hot reload |
| `npm run lint` | Oxlint |
| `npm run typecheck` | TypeScript, no output |
| `npm test` | Vitest, once (`npm run test:watch` to keep it running) |
| `npm run build` | Typecheck + production build into `dist/` |

## Adding components

```bash
npx shadcn@latest add dialog
```

Components are copied into `src/components/ui/` and are ours to edit. Brand
colors, radii, and fonts live as CSS variables in `src/index.css`.

## Layout

```
src/
  components/ui/   shadcn components (generated, then restyled)
  features/<name>/ one folder per feature: pages, components, hooks, types
  lib/             shared helpers
  test/            test setup
```
