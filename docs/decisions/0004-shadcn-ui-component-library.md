# 0004. shadcn/ui with Tailwind CSS

| | |
|---|---|
| **Status** | Accepted |
| **Date** | 2026-09-29 |

## Context

The frontend needs accessible components (dialogs, menus, date pickers, forms)
without looking like every other app. We also want to use two Claude design
skills — Impeccable and Emil Kowalski's skills — which work by reading and
editing the project's own styles and components.

## Decision

Use Tailwind CSS v4 and shadcn/ui. shadcn copies component source into the repo
rather than installing a package, and its theme is CSS variables.

## Consequences

- We own and can restyle every component, which the premium brand direction
  needs.
- Both design skills can read our tokens and components directly. shadcn
  already uses libraries from Emil Kowalski's recommended list (Sonner for
  toasts, cmdk for the command menu, Vaul for drawers).
- Component updates are not automatic; we pull changes from shadcn by hand when
  we want them.
- MUI and Ant Design were rejected for carrying a strong visual identity that
  takes real work to remove.
