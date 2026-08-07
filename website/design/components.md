# Component Specification

> **Purpose:** Define every reusable Product 001 component, including structure, states, responsiveness, and accessibility intent.
>
> **Pravaah OS:** v1.0.0  
> **Last Updated:** 2026-08-08  
> **Owner:** Technology Lead  
> **Related Documents:** [Visual Design](visual-design.md), [Accessibility](accessibility.md), [Content Specification](content.md)  
> **Estimated Reading Time:** 10 minutes

## Global components

| Component | Anatomy and behavior | States | Responsive and accessible behavior |
| --- | --- | --- | --- |
| Skip link | First focusable element; links to `#main-content`. | Hidden until focus. | 44px minimum hit area; moves focus to main heading. |
| Wordmark placeholder | Text `Pravaah` until Layer 3 assets exist; links home. | Default, hover, focus. | Accessible name `Pravaah home`; never uses a missing image asset. |
| Desktop navbar | Brand, route list, primary CTA. 80px high. | Default, active route, hover, focus. | Changes to menu dialog below the fit threshold. |
| Mobile menu | Button, full-height dialog, route links, CTA, close control. | Closed, opening, open, closing. | `aria-expanded`, labelled dialog, focus trap, Escape closes, focus returns to trigger. |
| Footer | Statement, route list, location, conditional legal links. | Link default, hover, focus. | One column on mobile; uses semantic navigation landmark. |
| Chapter index | Five anchor links `01` through `05`. | Inactive, current, hover, focus. | Desktop only; current state follows visible heading but links remain normal anchors. |

## Actions and links

| Component | Specification |
| --- | --- |
| Primary button | Moss fill with paper text on light surfaces; paper fill with ink text on inverse. Height 48px, horizontal padding 20px, 8px radius. Label plus optional arrow. Hover darkens or lightens surface by one token step; focus ring is 3px moss with 3px offset. |
| Secondary button | Transparent surface, 1px current-colour border, same geometry. Use only beside a primary action when both actions are necessary. |
| Text link | Body or label text with visible underline offset 4px. Hover increases underline weight; focus uses ring. A directional arrow appears only when a link moves to another route. |
| Skip introduction | Text button in intro’s upper-right safe area; never concealed by animation. Activating immediately ends the sequence. |

## Content components

| Component | Anatomy and purpose | Rules |
| --- | --- | --- |
| Chapter header | Number label, display heading, optional lead. | One H1 only on Home; chapters 02–05 are H2. Number is visible text, not a heading replacement. |
| Tension list | Three short statements separated by fine rules. | Not cards; preserves an editorial reading rhythm. |
| Principle row | Number, short title, explanatory paragraph. | Uses ordered-list semantics when sequence matters. |
| Engagement row | Label, problem/outcome copy, directional link. | Entire row is not a link; only clear text link is interactive. |
| System diagram | Abstract flow line and labelled nodes only. | Layer 3 may replace with a visual asset. Text equivalent is always present adjacent to it. |
| Conversation banner | Inverse heading, support text, primary button. | One primary action only. |
| Empty editorial state | Title, truthful explanatory paragraph, text link. | No simulated article cards, dates, subscriber totals, or imagery. |

## Form components

| Component | Specification | Error and assistive behavior |
| --- | --- | --- |
| Text input | Visible label above input; 48px minimum height; 16px body type; 8px radius. | `aria-describedby` joins help and error text; error message names the correction needed. |
| Select | Native select appearance may be styled only if keyboard and platform behavior remain intact. | First option is an instruction, not a valid value where selection is required. |
| Textarea | Label, optional help, 144px minimum height, resize vertical. | Character count is omitted unless an actual limit is imposed. |
| Consent note | Plain text below submit; policy link only after a reviewed policy exists. | Never pre-checks marketing consent. |
| Submit state | Button label changes only after request begins; visible inline status follows. | Use `aria-live="polite"`; prevent duplicate submission without removing form data. |
| Success state | Heading, confirmation text, expected response time only after founder policy exists. | Receives programmatic focus; does not depend on toast alone. |

## Disclosure components

No accordion launches on Home, Approach, or Engagements because essential information should be readable without forcing interaction. If a later page needs one, use a native button plus controlled region, visible focus, keyboard operation, and an explicit expanded state. Do not use hover-only reveals, carousels, auto-rotating content, tabbed sales copy, or decorative cards in v1.0.0.

## Imagery placeholders

Phase 2 defines slots, not assets. A visual slot has an aspect ratio, alt-text requirement, source owner, and fallback. If no approved asset exists, omit the slot and preserve the layout rather than adding stock imagery.
