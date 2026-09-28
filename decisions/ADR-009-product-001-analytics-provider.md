# ADR-009: Product 001 analytics provider

> **Purpose:** Record the launch measurement decision for Product 001.
>
> **Pravaah OS:** v1.0.0
> **Last Updated:** 2026-08-08
> **Owner:** Growth Lead
> **Related Documents:** [Analytics and Observability](../website/technical-architecture/11-analytics-and-observability.md), [Performance and SEO](../website/design/performance-and-seo.md), [Technology Recommendation](../website/technology.md)
> **Estimated Reading Time:** 4 minutes

## Context

Product 001 should measure meaningful interactions without adding unnecessary vendor weight or privacy risk. The launch site is pre-launch and intentionally simple.

## Decision

Use no third-party analytics provider at launch. Capture only essential operational signals already needed for the product and delivery process, and defer marketing analytics until the business has a clearer need and a documented vendor choice.

## Alternatives considered

- Plausible Analytics.
- Umami.
- Vercel Analytics.
- Google Analytics.

## Reasoning

The initial site can be launched responsibly without marketing analytics. Deferring the provider avoids adding consent complexity, network cost, and vendor lock-in before there is a concrete need.

## Consequences

The implementation should not ship analytics scripts for launch. The site may still emit internal, privacy-conscious events only if they are required for the inquiry flow or operational logging. If future launch goals require a provider, that choice must be recorded in a new ADR.

## Status and review

Accepted for launch. Review when there is a clear measurement need that justifies a provider.
