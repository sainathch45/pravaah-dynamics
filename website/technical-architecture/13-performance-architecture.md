# Performance Architecture

> **Purpose:** Define performance budgets and implementation rules so the site remains fast on realistic mobile connections.
>
> **Pravaah OS:** v1.0.0
> **Last Updated:** 2026-08-08
> **Owner:** Technology Lead
> **Related Documents:** [Product 001 Performance Budget](../performance.md), [Performance and SEO](../design/performance-and-seo.md), [Motion Architecture](08-motion-architecture.md)
> **Estimated Reading Time:** 8 minutes

## Performance budget

Performance should be measured against Core Web Vitals and a mobile-first experience. The initial page load must remain lean in JavaScript, CSS, fonts, and third-party requests.

## Rules

- Ship only the JavaScript required for real interaction.
- Keep CSS token-driven and avoid large ad hoc style sheets.
- Load fonts carefully and prefer a small number of faces and weights.
- Optimise images and avoid oversized media assets.
- Treat third-party scripts as exceptional, not default.
- Keep motion lightweight and non-blocking.

## Safeguards

Performance regressions should be treated as release blockers when they affect first contentful access, interaction readiness, or the inquiry path.
