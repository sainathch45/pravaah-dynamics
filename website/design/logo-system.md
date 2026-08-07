# Logo System Specification

> **Purpose:** Define how the future Pravaah logo must behave without deciding or creating the final logo artwork.
>
> **Pravaah OS:** v1.0.0  
> **Last Updated:** 2026-08-08  
> **Owner:** Founders  
> **Related Documents:** [Visual Identity Deferral](../../decisions/ADR-006-product-001-design-experience.md), [Visual Design](visual-design.md), [Product 001](../README.md)  
> **Estimated Reading Time:** 5 minutes

## Scope boundary

Layer 3: Visual Identity creates and approves the wordmark, symbol if any, favicon, app icon, SVG assets, social assets, print variants, and final brand specifications. Phase 2 creates only the usage constraints those assets must satisfy.

## Product 001 fallback

Until final artwork exists, use the accessible text wordmark `Pravaah` in the specified display or UI type treatment. It is a functional placeholder, not a claim that a final wordmark has been designed.

## Required logo behavior

- The primary lockup must remain legible at 24px visual height in product navigation.
- It must have monochrome dark-on-light and light-on-dark variants. Colour alone cannot carry meaning.
- Clear space must be at least the height of the lowercase `a` in the final wordmark on all sides; the final identity guide may increase but not reduce this.
- The logo must not be stretched, outlined, shadowed, gradient-filled, animated as decoration, used as a texture, or placed on insufficient-contrast imagery.
- In the navbar, it links home and has the accessible name `Pravaah home`.
- If a symbol is created, it may not replace the wordmark in navigation until recognition and small-size legibility are validated.

## Favicon and app-icon philosophy

The favicon and app icon must be recognisable at 16px, work in one colour, and not depend on fine detail or tiny typography. They are deferred because premature icons tend to become arbitrary marks. Layer 3 should test them against browser tabs, pinned shortcuts, dark mode, light mode, and high-density displays.

## Social-card philosophy

Social cards must make the page and company name legible before they attempt visual expression. Final cards use the approved logo system and text hierarchy; product implementation uses the Phase 2 text-only fallback until those assets exist.
