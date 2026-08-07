# ADR-006: Product 001 Chapter Experience

> **Purpose:** Record the decision to express Pravaah through a chapter-based, progressively enhanced public experience.
>
> **Pravaah OS:** v1.0.0  
> **Last Updated:** 2026-08-08  
> **Owner:** Founders  
> **Related Documents:** [Product 001 Design Specification](../website/design/README.md), [Motion Specification](../website/design/interaction-and-motion.md), [Logo System](../website/design/logo-system.md)  
> **Estimated Reading Time:** 4 minutes

## Context

Product 001 needs to demonstrate Pravaah’s philosophy of flow and momentum without sacrificing clear, repeatable access to information.

## Decision

Use a semantic, chapter-based homepage with five editorial chapters: Potential, Craft, Momentum, Systems, and Conversation. Add an optional cinematic introduction for the first visit in a browser session only. It is progressive enhancement, immediately skippable, limited to 2.8 seconds, absent under reduced motion, and never a blocker to rendered content or interaction.

Phase 2 defines the logo system and use constraints, but defers final logo artwork, symbol, favicon, app icon, social assets, and visual-identity production to Layer 3.

## Alternatives considered

- A conventional service-led agency homepage.
- A fully cinematic, scroll-jacked experience.
- Replaying an intro on every visit.
- Producing final logo artwork before the product design was specified.

## Reasoning

Editorial chapters make the philosophy felt through pace and hierarchy while native document behavior protects usability. Session-scoped progressive enhancement creates a first impression without taxing returning visitors or people who need reduced motion. Deferring visual-identity artwork gives a long-lived mark the attention it deserves.

## Consequences

Implementation must preserve semantic headings, natural scrolling, direct routes, and JavaScript-free usability. The `SITE_URL` value remains configurable until a domain is approved. Visual-identity assets cannot be improvised during frontend implementation.

## Status and review

Accepted. Review after visual identity is approved or when evidence shows the chapter model is not serving qualified conversations.
