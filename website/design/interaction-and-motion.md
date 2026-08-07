# Interaction and Motion Specification

> **Purpose:** Define every Product 001 interaction, transition, timing, and motion fallback.
>
> **Pravaah OS:** v1.0.0  
> **Last Updated:** 2026-08-08  
> **Owner:** Technology Lead  
> **Related Documents:** [Motion System](../../design/motion.md), [Accessibility](accessibility.md), [Experience and IA](experience-and-ia.md)  
> **Estimated Reading Time:** 8 minutes

## Timing tokens

| Token | Duration | Easing | Use |
| --- | --- | --- | --- |
| `instant` | 0ms | none | Reduced-motion state changes and critical feedback. |
| `quick` | 120ms | `cubic-bezier(0.2, 0, 0, 1)` | Hover, focus-adjacent visual changes. |
| `standard` | 220ms | `cubic-bezier(0.2, 0, 0, 1)` | Menu, button, section reveal. |
| `slow` | 420ms | `cubic-bezier(0.16, 1, 0.3, 1)` | Optional page or chapter emphasis. |
| `intro` | 2800ms maximum | custom sequence below | First-session cinematic intro only. |

## Interaction inventory

| Trigger | Response | Purpose | Reduced-motion behavior |
| --- | --- | --- | --- |
| Hover / focus on text link | Underline weight increases over `quick`; arrow shifts 2px right only on hover. | Confirms a next step. | Underline change only; no shift. |
| Hover / focus on button | Surface changes one token step; arrow shifts 2px if present. | Makes action feel responsive. | Surface change only. |
| Navbar route selection | Normal navigation; destination renders at top. | Keeps URLs and browser history reliable. | No transition requirement. |
| Menu open | Backdrop fades over `quick`; panel enters from top over `standard`. | Preserves orientation on small screens. | Panel appears immediately. |
| Menu close | Reverse transition. | Confirms return to page. | Disappears immediately. |
| Chapter enters viewport | Fine divider line draws to 100% once; heading appears at its resting position with opacity change over `slow`. | Marks a new editorial chapter. | Elements are fully visible; no delayed reveal. |
| Chapter-index selection | Native anchor movement; heading receives focus. | Gives direct access without hijacked scroll. | Same behavior with no additional effect. |
| Form validation | Invalid field receives focus only after submit; error text appears. | Explains how to recover. | Instant, no shake or colour-only signal. |
| Form submit | Submit enters busy state; success or error appears inline. | Gives reliable feedback. | Instant or `quick` opacity only. |

## Intro sequence

The flow line begins at 12% width and reaches 88% width between 0 and 1.2 seconds. Sentence one fades from 0 to 1 between 0.45 and 0.75 seconds; sentence one fades out between 1.15 and 1.35 seconds. Sentence two fades in between 1.35 and 1.65 seconds. At 2.25 seconds the line and sentence two fade out while the overlay opacity reaches 0 by 2.8 seconds.

No animation delays input, content, or the Skip control. The document beneath is already rendered. The intro has no sound, no autoplaying video, no progress indicator, and no automatic replay.

## Page transitions

Product 001 does not require SPA-style route transitions. If the implementation adds a supported transition API, it may fade the destination surface in over `quick` after the new route is ready. It must not delay navigation, obscure focus changes, break back/forward navigation, or run when reduced motion is active.

## Scroll behavior

Use native scrolling. Do not lock, capture, smooth-scroll by default, or override wheel/touch behavior. Anchor-link movement may use smooth scrolling only when reduced motion is not requested; otherwise it is instant. No parallax, scroll-jacking, or scroll-triggered transforms are permitted.
