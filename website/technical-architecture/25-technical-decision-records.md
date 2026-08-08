# Technical Decision Records

> **Purpose:** Define how architecture decisions are documented so future engineers can understand why the system is shaped the way it is.
>
> **Pravaah OS:** v1.0.0
> **Last Updated:** 2026-08-08
> **Owner:** Technology Lead
> **Related Documents:** [Decision Records](../../decisions/README.md), [Technology Decisions](02-technology-decisions.md), [Implementation Plan](26-implementation-plan.md)
> **Estimated Reading Time:** 7 minutes

## ADR boundary

Use an ADR when a technical choice has lasting cost, cross-cutting effects, or likely future disagreement.

## What belongs in a TDR

- Architecture direction.
- Stack choices.
- Vendor choices.
- Trade-offs and consequences.
- Supersession notes when a decision changes.

## What does not belong

- Trivial implementation details.
- Temporary experiments that do not affect the architecture.
- Pure styling decisions that belong in design documents.

## Rule

If a future senior engineer would ask "why is this like this?", the answer should be easy to find in a decision record.
