# 0003. In-house authentication with Spring Security and JWT

| | |
|---|---|
| **Status** | Accepted |
| **Date** | 2026-09-29 |

## Context

Users need accounts with roles (Player, Coach, Admin). Options were building
authentication in Spring Security, or using a managed provider (Clerk, Auth0,
Supabase Auth) with Spring only checking its tokens. The API must work for a
future mobile app, so session cookies tied to the browser alone are not enough.

## Decision

Build authentication in the backend with Spring Security:

- Email/password sign-up and login, with passwords hashed (BCrypt or Argon2)
- Google sign-in via Spring Security's OAuth2 client
- The API issues a short-lived **access token** (JWT) and a longer-lived
  **refresh token**. The web app keeps the refresh token in an httpOnly cookie;
  a mobile app will keep it in secure device storage.
- Roles are checked in the API, never only in the UI

## Consequences

- Deep Spring Security experience, which is the point.
- No vendor dependency or per-user cost.
- Security is our responsibility: password resets, email verification, token
  revocation, and rate limiting on login must all be built and tested.
- Google sign-in needs a registered redirect URI for every environment.
