# Application Architecture

> **Purpose:** Define the route structure, rendering model, boundaries, and control flow for Product 001.
>
> **Pravaah OS:** v1.0.0
> **Last Updated:** 2026-08-08
> **Owner:** Technology Lead
> **Related Documents:** [Experience and IA](../design/experience-and-ia.md), [Interaction and Motion](../design/interaction-and-motion.md), [Information Architecture](../information-architecture.md)
> **Estimated Reading Time:** 10 minutes

## App Router structure

Use the Next.js App Router. It maps cleanly to the route model defined in the Product 001 design specification and supports route-level layouts, metadata, and server rendering.

## Route organisation

- `/` for the homepage chapters.
- `/approach` for working method.
- `/engagements` for service framing.
- `/journal` for the editorial landing state.
- `/conversation` for the inquiry experience.
- `/privacy`, `/cookies`, `/terms` only when those policies are approved.
- Shared route groups may be used for layout organisation if they do not leak implementation detail into the public URL structure.

## Layouts

- A root layout provides global document structure, metadata defaults, fonts, analytics bootstrap, and shared shell elements.
- Route-specific layouts may add navigation or structural context when the route demands it.
- The homepage may use a dedicated layout structure to support the chapter model and session-only introduction.

## Metadata

Metadata should be generated at the route level from the route's own content and the site-wide defaults. Title and description rules must be deterministic and human-readable. Canonical URLs must always derive from `SITE_URL`.

## Server and client boundaries

- Server components render content, route data, metadata inputs, and validation decisions.
- Client components are reserved for menu state, motion enhancement, form interaction, and any UI that genuinely needs browser state.
- Do not convert a route to client rendering simply because one element is interactive.

## Data flow

Content should flow from local content files or a minimal structured content layer into route handlers and rendering components. Form submissions should flow to a server action or route handler before any third-party delivery step. Analytics events should flow through a privacy-conscious wrapper so the application can evolve vendors later without changing product code everywhere.

## Loading states

Loading UI should be minimal, semantic, and unobtrusive. Only show a loading state when the user is waiting on a real asynchronous boundary. Avoid decorative placeholders that imply content is missing when the page can already render.

## Error states

- Use route-level error boundaries for unexpected failures.
- Use `not-found` handling for absent content or invalid routes.
- Use inline form errors for validation or submission failures.
- Keep fallback content human and actionable.

## Navigation

Native navigation should remain the default. Avoid hijacking browser history, focus order, or anchor behaviour. If a transition is added, it must preserve back and forward navigation and must not block reading or inquiry.

## Progressive enhancement

The rendered document must remain usable with JavaScript disabled or delayed. Enhancement should layer onto a working page rather than constructing the page itself.
