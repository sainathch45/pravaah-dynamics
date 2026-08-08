# Deployment Architecture

> **Purpose:** Define the production delivery model, including hosting, domains, SSL, and rollback.
>
> **Pravaah OS:** v1.0.0
> **Last Updated:** 2026-08-08
> **Owner:** Technology Lead
> **Related Documents:** [Technology Decisions](02-technology-decisions.md), [CI/CD Architecture](17-ci-cd-architecture.md), [Product 001](../README.md)
> **Estimated Reading Time:** 8 minutes

## Deployment model

The expected path is GitHub to CI validation to Vercel preview to review to production deployment. This fits the recommended stack and keeps the initial operating model lightweight.

## Domain and DNS

The final canonical domain is not yet finalised, so deployment must remain configurable through `SITE_URL` and platform environment settings. DNS and SSL should be configured only after the domain decision is approved.

## Rollback

Rollback should be a normal operational action, not a special incident process. The team should be able to revert to the last known good deployment quickly and predictably.

## Deployment ownership

Ownership should sit with the technology lead or an approved operator who can verify the build, preview, and production state before release.
