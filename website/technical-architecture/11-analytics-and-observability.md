# Analytics and Observability

> **Purpose:** Define a privacy-conscious measurement model and the minimum observability needed after launch.
>
> **Pravaah OS:** v1.0.0
> **Last Updated:** 2026-08-08
> **Owner:** Technology Lead
> **Related Documents:** [Product 001 Analytics](../analytics.md), [Logging and Monitoring](22-logging-and-monitoring.md), [Privacy and Cookies](../privacy-and-cookies.md)
> **Estimated Reading Time:** 7 minutes

## Analytics posture

Track only events that help understand whether Product 001 is working: page views, route navigation, CTA interactions, inquiry starts, inquiry submissions, inquiry success, inquiry failure, and meaningful Journal interactions when they exist.

## Privacy

Prefer aggregated, non-invasive measurement and minimise identifiers. Consent requirements should follow the actual intended markets and the selected tooling.

## Observability

The initial site does not need heavy enterprise observability. Monitor only what is necessary to notice broken inquiries, major availability problems, and material performance regressions.

## Vendor boundary

Analytics and observability vendors should remain swappable behind a local wrapper so the product does not hard-code a long-term tooling commitment into page code.
