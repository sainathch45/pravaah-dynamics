# ADR-003: Product 001 Technology

> **Purpose:** Record the recommended technical direction before implementation begins.
>
> **Pravaah OS:** v1.0.0  
> **Last Updated:** 2026-08-08  
> **Owner:** Technology Lead  
> **Related Documents:** [Technology](../website/technology.md), [Engineering Architecture](../engineering/architecture.md)  
> **Estimated Reading Time:** 4 minutes

## Context

Product 001 needs a high-quality, performant public experience with a small team and no established publishing volume.

## Decision

Recommend Next.js, TypeScript, Tailwind CSS, selective shadcn/ui, restrained Framer Motion, and Vercel. Defer CMS, analytics, error monitoring, form, and email vendors until privacy, operations, and budget facts are approved.

## Alternatives considered

- A static-site-only implementation.
- A large headless CMS from launch.
- A fully bespoke component system without a practical accessible foundation.

## Reasoning

The stack offers a familiar, maintainable path to a fast public product while keeping implementation ownership and visual distinction with Pravaah. Deferral prevents tool choices from outrunning real needs.

## Consequences

Implementation must validate performance, accessibility, hosting, vendor contracts, and privacy before launch. A different stack is permitted only with a superseding ADR.

## Status and review

Proposed pending implementation approval. Review at the start of Product 001 build.
