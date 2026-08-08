# Dependency Policy

> **Purpose:** Define how new dependencies are evaluated so the codebase stays lean and defensible.
>
> **Pravaah OS:** v1.0.0
> **Last Updated:** 2026-08-08
> **Owner:** Technology Lead
> **Related Documents:** [Technology Decisions](02-technology-decisions.md), [Security Architecture](15-security-architecture.md), [Performance Architecture](13-performance-architecture.md)
> **Estimated Reading Time:** 8 minutes

## Policy

A dependency should exist only when it materially improves quality, maintainability, security, accessibility, or delivery speed beyond the cost of owning it.

## Evaluation criteria

- Does the platform already provide the capability?
- Is the package actively maintained?
- Is the security posture acceptable?
- What is the bundle and runtime cost?
- Is the license compatible with the business?
- Is there a simpler alternative?
- Can the team explain why it exists in one sentence?

## Approval rule

Significant dependencies should be documented in an ADR or a technical note before adoption.
