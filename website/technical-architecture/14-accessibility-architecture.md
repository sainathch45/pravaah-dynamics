# Accessibility Architecture

> **Purpose:** Define how accessibility is built into Product 001 from the start.
>
> **Pravaah OS:** v1.0.0
> **Last Updated:** 2026-08-08
> **Owner:** Technology Lead
> **Related Documents:** [Accessibility Requirements](../accessibility.md), [Accessibility Design Specification](../design/accessibility.md), [Testing Architecture](16-testing-architecture.md)
> **Estimated Reading Time:** 8 minutes

## Accessibility posture

Accessibility is a release requirement. The architecture must support semantic HTML, keyboard access, visible focus, sufficient contrast, meaningful text alternatives, and reduced-motion behaviour without depending on later remediation.

## Key requirements

- Use semantic elements before ARIA.
- Keep navigation reachable by keyboard from the first tab stop.
- Ensure forms announce errors and preserve context.
- Provide skip links where repeated navigation exists.
- Maintain touch targets and focus indicators that are usable on real devices.
- Respect reduced motion and zoom.

## Implementation rule

If a pattern cannot be made accessible without significant complexity, the pattern should be simplified rather than patched with ARIA.
