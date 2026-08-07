# Experience and Information Architecture

> **Purpose:** Define every Product 001 route, chapter, navigation decision, and visitor journey.
>
> **Pravaah OS:** v1.0.0  
> **Last Updated:** 2026-08-08  
> **Owner:** Growth Lead  
> **Related Documents:** [Product 001 Design Specification](README.md), [Content Specification](content.md), [Interaction and Motion](interaction-and-motion.md)  
> **Estimated Reading Time:** 8 minutes

## Product model

Product 001 demonstrates Pravaah through clarity, pace, and care. The homepage is the primary experience. Supporting routes exist only where a visitor needs deeper context before beginning a conversation.

## Route map

| Route | Page purpose | Primary action | Why it exists |
| --- | --- | --- | --- |
| `/` | Present the Pravaah point of view as five chapters. | Start a conversation | Gives a first-time visitor both feeling and understanding without a long service catalogue. |
| `/approach` | Explain how Pravaah works with a business. | Start a conversation | Gives referred or cautious prospects a practical reason to trust the process. |
| `/engagements` | Explain Foundations, Experiences, and Systems. | Discuss your situation | Helps a visitor place their problem without forcing a rigid package. |
| `/journal` | State the future editorial purpose honestly. | Start a conversation | Preserves the future Journal route without fabricated publishing activity. |
| `/conversation` | Capture a qualified inquiry. | Send inquiry | Converts interest into a founder-led next step. |
| `/privacy`, `/cookies`, `/terms` | Published only after legal review and factual completion. | None | Required public trust information, not marketing destinations. |

No portfolio, generic About page, pricing page, or team page launches in v1.0.0. Each would either duplicate the chapters or invite unsupported claims. Add one only when real, approved information answers a distinct visitor question.

## Global navigation

**Desktop:** wordmark placeholder at left; links `Approach`, `Engagements`, `Journal`; text link `Start a conversation` at right. The active route is visually indicated without relying on colour alone.

**Tablet and mobile:** wordmark placeholder, `Menu` control, and no persistent CTA button. The menu opens a full-height, focus-trapped dialog with the same links, then the conversation CTA. This prevents cramped navigation and keeps the primary action clear.

**Footer:** one-sentence company statement, route links, location line, a `LinkedIn` link only when the official profile exists, and legal links only when reviewed policies exist. It never invents a phone number, email address, company registration, copyright claim, or social channel.

## Homepage chapter architecture

| Chapter | Heading | Function | Expected feeling |
| --- | --- | --- | --- |
| 01 Potential | Every business begins with potential. | Recognise the visitor’s ambition and friction. | Seen, unhurried, curious. |
| 02 Craft | Momentum needs care. | Show the standard behind Pravaah’s work. | Confidence through thoughtfulness. |
| 03 Momentum | Clear direction creates movement. | Introduce Foundations and Experiences. | Possibility with practical shape. |
| 04 Systems | Good systems make growth easier to sustain. | Introduce Systems and dependable technology. | Relief that complexity can become manageable. |
| 05 Conversation | Start where you are. | Invite an honest first conversation. | Safe to take the next step. |

## Cinematic introduction

The introduction is a first-visit accent, not the homepage itself.

1. The server-rendered homepage is immediately present behind the enhancement.
2. If JavaScript is available, reduced motion is not requested, and the session has no `pravaah_intro_seen` flag, a full-viewport intro layer appears.
3. A single fine line flows from left to right. At 0.45 seconds, `Every business begins with potential.` appears. At 1.35 seconds, it yields to `Momentum reveals it.` At 2.25 seconds, the layer dissolves into Chapter 01. Total duration: 2.8 seconds maximum.
4. A visible `Skip introduction` control is available from the first rendered frame. Activating it ends the sequence and focuses the Chapter 01 heading.
5. On completion, skip, or dismissal, set the session flag. Returning visits in that browser session render the homepage directly.
6. If JavaScript fails, storage is unavailable, network is slow, or reduced motion is requested, do not render the layer. The homepage remains fully usable.

## User journeys

### First-time visitor

Intro or immediate homepage → Chapter 01 → skim chapter navigation or continue naturally → identify a relevant engagement → open conversation route → submit concise context → see confirmation and expected response path.

### Returning or referred visitor

Direct route or homepage without intro → Approach or Engagements → decide fit → conversation route. Returning visitors never need to replay the introduction to access content.

### Keyboard or reduced-motion visitor

Homepage renders directly → semantic landmarks, skip link, navigation, and headings work in source order → all chapter content is available without timed, scrolling, or pointer-only interactions.

## Chapter navigation

On desktop, a quiet fixed index `01—05` appears at the left edge only after Chapter 01. Selecting an item uses native anchor navigation and moves focus to the selected chapter heading. It is hidden at tablet and mobile; the page’s normal reading flow is clearer there. The index is supplementary navigation, never the only way to move through the page.
