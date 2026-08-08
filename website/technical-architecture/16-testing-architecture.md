# Testing Architecture

> **Purpose:** Define what must be tested before Product 001 can be considered launch-ready.
>
> **Pravaah OS:** v1.0.0
> **Last Updated:** 2026-08-08
> **Owner:** Technology Lead
> **Related Documents:** [Testing](../../engineering/testing.md), [Acceptance Criteria](../acceptance.md), [Accessibility Architecture](14-accessibility-architecture.md)
> **Estimated Reading Time:** 8 minutes

## Testing layers

- Unit tests for pure logic, validation, and reusable utilities.
- Component tests for critical UI states and interaction boundaries.
- Integration tests for forms, content loading, and route behaviour.
- End-to-end tests for navigation, inquiry submission, and essential flows.
- Accessibility tests for semantic and interaction regressions.
- Visual regression checks where a route or component is sensitive to layout drift.
- Performance and SEO validation as part of release checks.

## Release gate

At minimum, the following must pass before deployment: linting, type checking, required tests, build validation, accessibility checks for the critical path, and manual verification of the inquiry flow.

## Test design rule

Test the behaviour that matters to users and operations. Do not create a large test surface merely because every component can be tested.
