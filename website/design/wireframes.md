# Responsive Wireframes

> **Purpose:** Specify the text-only layout, hierarchy, spacing, emotion, and behavior of every Product 001 page.
>
> **Pravaah OS:** v1.0.0  
> **Last Updated:** 2026-08-08  
> **Owner:** Founders  
> **Related Documents:** [Experience and IA](experience-and-ia.md), [Visual Design](visual-design.md), [Components](components.md)  
> **Estimated Reading Time:** 12 minutes

All pages use a semantic `<main>` landmark between the global navigation and footer. Section IDs match their primary headings. Measurements reference the tokens in [Visual Design](visual-design.md).

## Desktop wireframes — 1440px and above

### Home

| Section | Layout and spacing | Content and interaction | Emotion and purpose |
| --- | --- | --- | --- |
| Global nav | 80px high, 12-column shell, 48px side minimum. | Wordmark placeholder, three links, conversation CTA. | Quiet confidence; lets people orient immediately. |
| Optional intro | Fixed full viewport overlay; no layout shift underneath. | Flowing line, two sentences, Skip control. | A memorable invitation, never a barrier. |
| 01 Potential | Minimum 92vh; heading spans columns 2–9; chapter index at left. | Eyebrow `01 / Potential`, H1, supporting paragraph, `Explore the chapters` text link. | Spacious recognition before explanation. |
| Friction statement | 6-column text block with 64px top separation. | Three concise business tensions, not cards. | Names the cost of unclear digital work. |
| 02 Craft | 2-column editorial composition, 7/5 split. | H2, principle paragraph, three numbered proof-of-practice statements. | Shows care through restraint. |
| 03 Momentum | Full-width chapter heading then three horizontal engagement rows. | Foundations, Experiences, Systems; each row links to `/engagements#[id]`. | Turns philosophy into an understandable route. |
| 04 Systems | 8-column text and 4-column abstract system diagram area. | H2, paragraph, `Explore Systems` text link. | Makes technical possibility feel orderly. |
| 05 Conversation | Dark or inverse full-bleed section, 2-column 7/5 split. | H2, invitation, primary button, expectation note. | A calm, low-pressure ending. |
| Footer | 3-column, 72px vertical padding. | Statement, links, Hyderabad location, conditional legal links. | Completeness without clutter. |

Home chapters do not use full-screen scroll snap. They may occupy generous viewport height, but users retain ordinary browser scrolling and can stop at any point.

### Approach

1. Editorial page header: eyebrow `Approach`, H1, lead paragraph in 8 columns; 120px top and 96px bottom space.
2. Four-step working sequence: Understand, Shape, Make, Sustain. Each is a numbered horizontal row with one sentence and a short explanatory paragraph.
3. Decision standard: two-column section explaining clarity, evidence, and care.
4. Conversation banner: inverse surface, H2 and CTA.

### Engagements

1. Page header: H1 and lead paragraph.
2. Intro note: Pravaah does not force a business into a package.
3. Three full-width engagement sections in order: Foundations, Experiences, Systems. Each uses a 4-column label column, 6-column problem-and-outcome column, and 2-column `Discuss this` link.
4. Shared engagement note: work begins with discovery; scope follows context.
5. Conversation banner.

### Journal

1. Minimal header: eyebrow `Journal`, H1, lead paragraph.
2. Editorial statement: what will be published and why it will be selective.
3. Empty-state note: `The first pieces are being developed with care.` No fabricated cards, dates, or subscriptions.
4. Conversation text link for readers who want to discuss an idea now.

### Conversation

1. Header: H1 and expectation statement.
2. Form in a 7-column panel; 5-column aside on desktop listing what to share and what happens next.
3. One field per row; no multi-column controls. Submit button at the end. Privacy note appears only once reviewed policy exists; before that the form cannot be implemented publicly.
4. Submitted state replaces form content in place and never relies on colour alone.

## Tablet wireframes — 768px to 1199px

- Use the 8-column grid. Outer margin is 32px; gap is 20px.
- Global nav remains horizontal through 1024px only when all links fit without wrapping; otherwise switch to the mobile menu.
- Home chapter headings span 7 columns. The desktop chapter index is removed. Chapter minimum height becomes content-led with at least 640px on landscape tablets.
- Craft and Conversation two-column sections become 5/3 columns when copy remains readable; stack at 900px or below.
- Engagement rows retain label, body, and link, with label above body only when needed to prevent narrow text.
- Conversation form spans all 8 columns; supporting aside moves below it.

## Mobile wireframes — 320px to 767px

- Use the 4-column grid. Outer margin is 20px at 390px, 16px at 320px; gap is 12px.
- Fixed navigation is 64px high. It contains the wordmark placeholder and `Menu` only. The conversation CTA is inside the menu and in Chapter 05.
- The intro is never shown under reduced motion; when eligible, its text wraps only between sentences and Skip remains in the top-right safe area.
- Each homepage chapter is one vertical flow. Minimum height is removed; use 112px top and 88px bottom padding to avoid forced empty space.
- Potential, Craft, Systems, and Conversation use one column. Engagements are three stacked rows with 24px interior spacing.
- Headings do not exceed five lines at 320px. Paragraph measure is full available width with no horizontal scrolling.
- The conversation form uses one control per row, 48px minimum control height, and a full-width submit button.
- Footer links stack as an ordered list; legal links remain conditional.

## Interaction notes shared by breakpoints

Text links use an underline or directional marker on hover and focus; buttons change surface and elevation only subtly. No interaction depends on hover. Every section is reachable and readable in source order without JavaScript.
