# Product 001 Accessibility Design Specification

> **Purpose:** Make accessibility requirements explicit at the design stage rather than leaving them to implementation interpretation.
>
> **Pravaah OS:** v1.0.0  
> **Last Updated:** 2026-08-08  
> **Owner:** Technology Lead  
> **Related Documents:** [Design Accessibility](../../design/accessibility.md), [Components](components.md), [QA and Readiness](qa-and-readiness.md)  
> **Estimated Reading Time:** 7 minutes

Product 001 targets WCAG 2.2 AA. The following design requirements are launch blockers when they prevent a visitor from understanding content, navigating, or submitting a conversation.

## Structure and keyboard

- Source order is visual reading order: skip link, header, main, chapters or page content, footer.
- Use one H1 per route. Chapter titles are H2. Do not skip heading levels for visual size.
- Every interactive control is reachable by keyboard and has a 44 by 44px minimum target where practical; form controls are at least 48px high.
- Focus order follows the visual path. Modal menu focus is trapped while open and returns to the trigger on close.
- Escape closes only the mobile menu. No interaction depends on drag, hover, device orientation, or a timed response.

## Visible focus and contrast

- Focus uses a 3px `moss-700` ring with 3px offset and remains visible against both primary surfaces.
- Normal text maintains at least 4.5:1 contrast; large text at least 3:1. Validate final font rendering and not only colour-token values.
- Error, current navigation, and required fields use text, shape, or status in addition to colour.

## Screen-reader behavior

- Decorative flow lines, arrows that repeat link intent, and purely visual system diagrams are hidden from assistive technology.
- The main diagram’s meaning is written in adjacent text.
- Form labels are programmatically associated. Help and error text are connected through descriptions. Submission success or failure uses an appropriate live region.
- The intro is absent from the accessibility tree when not shown. When shown, it has a clear label and Skip control; it must not seize focus before the user can access it.

## Motion and cognitive load

- `prefers-reduced-motion: reduce` eliminates the intro, chapter reveals, motion shifts, smooth anchor scrolling, and page transitions.
- No content appears only after motion, and no time limit controls reading.
- Labels use plain language. Errors state the problem and the correction. Empty Journal state is explicit rather than visually ambiguous.

## Responsive and zoom behavior

- The design supports 320px width with no horizontal scrolling and 400% browser zoom without loss of content or controls.
- Text is not embedded in images. Orientation is never required. Content reflows rather than clipping or relying on horizontal drag.
