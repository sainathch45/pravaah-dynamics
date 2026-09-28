# ADR-008: Product 001 inquiry delivery vendor

> **Purpose:** Record the launch vendor choice for the Start a conversation form.
>
> **Pravaah OS:** v1.0.0
> **Last Updated:** 2026-08-08
> **Owner:** Technology Lead
> **Related Documents:** [Form and Inquiry Architecture](../website/technical-architecture/10-form-and-inquiry-architecture.md), [Security Architecture](../website/technical-architecture/15-security-architecture.md), [Technology Recommendation](../website/technology.md)
> **Estimated Reading Time:** 4 minutes

## Context

Product 001 needs a dependable inquiry delivery path that does not silently lose submissions. The launch site is pre-launch, privacy-conscious, and intentionally small, so the delivery mechanism should stay simple and easy to operate.

## Decision

Use a direct email delivery path for launch, implemented through Resend and a server-side submission handler. The application should support retryable delivery, inline validation, and a visible failure state if delivery cannot be completed.

## Alternatives considered

- A full CRM-first intake system.
- A database-backed queue and background worker.
- A contact form service with a heavy embedded widget.

## Reasoning

A direct email delivery path is the smallest launch option that fits the current website’s scale, privacy posture, and operational model. It keeps the first inquiry path understandable while avoiding unnecessary platform complexity.

## Consequences

The implementation must include server-side handling, abuse protection, and a clear operational inbox or forwarding destination controlled by the founders. If inquiry volume or workflow needs grow, a queue or CRM can be introduced later through a superseding ADR.

## Status and review

Accepted for launch. Review if inquiry volume, deliverability, or operational workflow require a more advanced intake system.
