# Repository Architecture

> **Purpose:** Define how the repository should be organised so implementation stays discoverable and maintainable.
>
> **Pravaah OS:** v1.0.0
> **Last Updated:** 2026-08-08
> **Owner:** Technology Lead
> **Related Documents:** [Technology Decisions](02-technology-decisions.md), [Code Organisation](../../engineering/code-organisation.md), [Engineering Architecture](../../engineering/architecture.md)
> **Estimated Reading Time:** 6 minutes

## Repository model

Product 001 should live in a dedicated application repository with clear ownership and a single deployment target. The documentation repository you are reading now is the source of product intent, but the application code should not be mixed into this handbook structure unless the team explicitly chooses a mono-repo strategy later.

## Recommended application structure

- `app/` for routes, layouts, and route-level data handling.
- `components/` for shared UI grouped by responsibility.
- `content/` or `content/*` for source content if local content files are used.
- `lib/` for server utilities, validation, content loaders, analytics helpers, and shared policy logic.
- `styles/` for token-driven global styling only where Tailwind cannot express the rule cleanly.
- `public/` for static assets that are not processed as content.
- `tests/` or colocated tests for behaviour, depending on team preference.
- `docs/` for implementation notes that belong to the codebase rather than the handbook.

## Organisational rules

- Organise by product responsibility rather than technical novelty.
- Keep route-specific code near the route unless it is clearly shared.
- Promote code into shared modules only after repetition proves the abstraction.
- Keep design tokens, content schemas, and validation rules in explicit places rather than scattering them across components.
- Avoid creating a `utils` dumping ground.

## Ownership boundaries

The repository should make it obvious where to change content, where to change design tokens, where to change application behaviour, and where to change integration policy. If a future engineer cannot predict the file to edit, the architecture is too vague.
