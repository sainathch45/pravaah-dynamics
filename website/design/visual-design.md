# Visual Design System

> **Purpose:** Fix the Product 001 interface tokens, layout system, typography, and material behavior before implementation.
>
> **Pravaah OS:** v1.0.0  
> **Last Updated:** 2026-08-08  
> **Owner:** Founders  
> **Related Documents:** [Design System](../../design/design-system.md), [Logo System](logo-system.md), [Components](components.md)  
> **Estimated Reading Time:** 8 minutes

This is the Product 001 interface palette and type system. It is not final logo artwork or a replacement for Layer 3 Visual Identity.

## Colour tokens

| Token | Value | Use and reason |
| --- | --- | --- |
| `ink-950` | `#111312` | Primary text and dark surfaces; slightly warm black avoids a clinical interface. |
| `ink-700` | `#3D423F` | Secondary text and icons. |
| `ink-500` | `#6C726E` | Supporting text only where contrast remains compliant. |
| `paper-50` | `#F7F6F2` | Primary page surface; an architectural off-white softens long reading. |
| `paper-100` | `#EEEEE8` | Quiet section division and disabled surfaces. |
| `moss-700` | `#355449` | Functional accent for links, focus rings, and small emphasis. |
| `moss-100` | `#DCE6DF` | Low-emphasis accent surface. |
| `copper-600` | `#A5603A` | Rare editorial or print accent; never the sole signal for a control or error. |
| `error-700` | `#A12B2B` | Error text and outline; never the only error signal. |

Use `paper-50` with `ink-950` by default. Inverse chapters use `ink-950` with `paper-50`. Colour is never used for decoration alone or as the only status indicator.

## Typography

| Role | Family | Weight | Desktop size / line | Tablet | Mobile |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | Newsreader | 400 | 80px / 0.98 | 64px / 1.02 | 44px / 1.05 |
| H2 | Newsreader | 400 | 56px / 1.06 | 48px / 1.08 | 36px / 1.12 |
| H3 | Manrope | 500 | 24px / 1.25 | 22px / 1.3 | 20px / 1.3 |
| Lead | Manrope | 400 | 22px / 1.5 | 20px / 1.5 | 18px / 1.55 |
| Body | Manrope | 400 | 16px / 1.6 | 16px / 1.6 | 16px / 1.6 |
| Label / nav | Manrope | 600 | 12px / 1.2, 0.08em tracking | same | same |
| Button | Manrope | 600 | 14px / 1.2 | same | same |

Use system fallback stacks until web fonts finish loading: `Georgia, serif` for display and `Arial, sans-serif` for UI. Text must remain readable and avoid layout-breaking shifts before fonts load. No all-caps body copy. Labels may use all caps only at 12px or larger with the prescribed tracking.

## Grid and measure

| Breakpoint | Columns | Outer margin | Gutter | Content maximum |
| --- | --- | --- | --- | --- |
| 1440px+ | 12 | 48px minimum, fluid to a 1280px shell | 24px | 1280px |
| 768–1199px | 8 | 32px | 20px | full shell |
| 320–767px | 4 | 20px, 16px at 320px | 12px | full shell |

Body copy never exceeds 680px on large displays because moderate line length supports attentive reading. Display type may span wider columns only when it remains legible and does not turn the page into a poster.

## Spacing and surfaces

Base unit: 4px. Use only `4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 112, 128, 160`.

- Component interior: 16px minimum; 24px for form panels and callouts.
- Standard section: 128px desktop, 112px tablet, 88px mobile vertical padding.
- Section transition: 32px between related blocks; 64px between distinct ideas.
- Border: 1px solid `ink-950` at 16% opacity on light surfaces; `paper-50` at 20% opacity on inverse surfaces.
- Radius: 0px for editorial content blocks; 8px for controls, form fields, and functional panels. This modest radius feels assured rather than playful.
- Elevation: no default card shadow. Use one soft shadow (`0 12px 32px rgba(17,19,18,.10)`) only on open dialogs and focus-critical floating surfaces.

## Icons and graphic language

Icons use a 1.5px rounded-stroke, 24px base grid. They appear only with an action or accessible label. The arrow is a simple rightward line with a short diagonal head, used consistently for forward links. No icon is used to decorate an empty container.

The only Phase 2 graphic motif is the flow line: a fine 1px horizontal or gently curved line. It may divide chapters, support the intro, or clarify movement between related ideas. It may not become a looping background texture.
