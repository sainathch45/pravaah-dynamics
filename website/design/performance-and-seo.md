# Product 001 Performance and SEO Specification

> **Purpose:** Make speed, discoverability, and domain-agnostic metadata part of the product design.
>
> **Pravaah OS:** v1.0.0  
> **Last Updated:** 2026-08-08  
> **Owner:** Technology Lead  
> **Related Documents:** [Website Performance](../performance.md), [Website SEO](../seo.md), [Content Specification](content.md)  
> **Estimated Reading Time:** 7 minutes

## Performance budget

| Area | Requirement | Why |
| --- | --- | --- |
| LCP | At or below 2.5 seconds at the 75th percentile on representative mobile connections. | The first impression must be usable, not merely dramatic. |
| INP | At or below 200ms at the 75th percentile. | Controls and navigation must feel dependable. |
| CLS | At or below 0.1. | Editorial calm is broken by shifting content. |
| JavaScript | The intro and motion are optional; critical route content and navigation do not depend on client JavaScript. | Protects usability under failure and slow networks. |
| Images | No image is loaded above the fold unless it has a documented role; use responsive variants, fixed dimensions, and lazy loading below the fold. | Prevents decorative assets from becoming a speed tax. |
| Fonts | Maximum two font families and four initial font files; subset to used scripts; use `font-display: swap`. | Avoids blocking text and excessive transfer. |
| Third parties | None without owner, purpose, privacy review, transfer-cost estimate, and failure behavior. | Vendor scripts must earn their cost. |
| Motion | Transform and opacity only where animation is used; no continuous loops after intro. | Avoids layout work, battery cost, and distraction. |

## Metadata rules

All public URL-bearing values derive from `SITE_URL`. No domain is hard-coded in page templates, metadata, canonical tags, sitemap, robots directives, Open Graph fields, JSON-LD, or redirects.

| Route | Title | Description |
| --- | --- | --- |
| `/` | `Pravaah — Design and technology for meaningful momentum` | `Pravaah helps growing businesses build trust through clear strategy, thoughtful design, and dependable technology.` |
| `/approach` | `Approach — Pravaah` | `See how Pravaah turns business context into clear, thoughtful digital progress.` |
| `/engagements` | `Foundations, Experiences, Systems — Pravaah` | `Explore the ways Pravaah helps businesses build stronger digital momentum.` |
| `/journal` | `Journal — Pravaah` | `A forthcoming collection of considered ideas on design, technology, and business momentum.` |
| `/conversation` | `Start a conversation — Pravaah` | `Tell Pravaah about the business challenge you are working through.` |

## Open Graph and social sharing

Use the route title and description above. Until Layer 3 creates approved social assets, use a generated text-only social card with the wordmark placeholder, page title, and `SITE_URL`-independent brand treatment. Do not use an unapproved logo, stock image, or fake portfolio work.

## Technical SEO

Generate canonical URLs, sitemap entries, and robots directives from `SITE_URL`. Index Home, Approach, Engagements, Journal, and Conversation; do not index legal drafts or preview environments. Use verified Organisation and WebSite JSON-LD only after the legal entity, official name, contact, and canonical domain are confirmed. Add Article JSON-LD only for actual Journal entries and case-study schema only for approved, factual case studies.
