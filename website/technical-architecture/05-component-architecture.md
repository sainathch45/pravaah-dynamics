# Component Architecture

> **Purpose:** Define component hierarchy, ownership, and reuse rules so the interface stays coherent without becoming over-abstracted.
>
> **Pravaah OS:** v1.0.0
> **Last Updated:** 2026-08-08
> **Owner:** Technology Lead
> **Related Documents:** [Component Specification](../design/components.md), [Visual Design System](../design/visual-design.md), [Design System Architecture](06-design-system-architecture.md)
> **Estimated Reading Time:** 7 minutes

## Component layers

### Primitives

Lowest-level accessible UI building blocks such as button primitives, inputs, labels, dialogs, and focus management helpers.

### Design-system components

Token-driven components that encode Pravaah-specific visual and interaction rules, such as navigation links, chapter index items, flow-line treatments, and callout surfaces.

### Shared components

Reusable structural pieces used across routes, such as header, footer, section shells, metadata blocks, and form groups.

### Page-specific components

Components that belong to a single route or chapter and would be confusing if reused elsewhere too early.

### Experience components

Larger composed patterns that represent deliberate product experiences, such as the homepage chapter sequence, the session-only intro, or the conversation flow.

### Motion components

Motion helpers or wrappers that apply approved timing, easing, and reveal behavior without turning motion into a separate design language.

## Reuse rules

- Reuse starts after repetition, not before it.
- If a component only serves one route, keep it local.
- If a component encodes brand behavior or accessibility policy, promote it earlier.
- If a component exists only to reduce line count, do not extract it.

## Abstraction rule

The architecture should avoid a giant generic component library. The initial product needs clarity, not a broad design system product that only future projects will use.
