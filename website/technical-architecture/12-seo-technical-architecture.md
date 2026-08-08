# SEO Technical Architecture

> **Purpose:** Define the technical rules that support discoverability, metadata quality, and structured data.
>
> **Pravaah OS:** v1.0.0
> **Last Updated:** 2026-08-08
> **Owner:** Technology Lead
> **Related Documents:** [SEO](../seo.md), [Performance and SEO](../design/performance-and-seo.md), [Product 001](../README.md)
> **Estimated Reading Time:** 8 minutes

## Metadata architecture

Metadata should be generated from route content and site-wide defaults. Titles should be specific, concise, and unique. Descriptions should explain value, not keyword-stuff.

## Canonical policy

`SITE_URL` is the source of truth for canonical URLs, sitemap generation, social metadata, and structured data. The canonical domain must remain configurable until the final domain is approved.

## Structured data

Use JSON-LD only where it reflects verified facts. Do not invent organisation details, reviews, or proof signals.

## Technical requirements

- Produce a sitemap from real published routes only.
- Keep robots rules aligned with launch state and preview environments.
- Ensure heading structure mirrors the visual hierarchy and content logic.
- Provide image metadata where images contribute meaningfully to search and sharing.
