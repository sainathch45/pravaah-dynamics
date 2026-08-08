# Content Architecture

> **Purpose:** Define how Product 001 content is stored, authored, validated, and evolved without inventing a CMS too early.
>
> **Pravaah OS:** v1.0.0
> **Last Updated:** 2026-08-08
> **Owner:** Growth Lead
> **Related Documents:** [Content Specification](../design/content.md), [Truth-First Public Launch](../../decisions/ADR-005-truth-first-launch.md), [Product 001](../README.md)
> **Estimated Reading Time:** 8 minutes

## Content posture

Product 001 launches with only truthful, approved content. There must be no invented case studies, testimonials, metrics, awards, clients, or filler Journal material.

## Recommended content model

Use local content files or a minimal structured content layer at launch. This keeps the content close to the codebase, makes review straightforward, and avoids CMS overhead before editorial volume exists.

## MDX vs plain content files

- Plain Markdown or structured data files are enough for static editorial pages and the Journal landing state.
- MDX becomes useful only if content needs reusable embedded components or richer authored composition.
- A CMS is justified only when editorial volume, non-developer authorship, or workflow needs clearly exceed file-based management.

## Future CMS migration

The content schema should anticipate future page, Journal, author, SEO, and approved case-study models without depending on them now. Migration should be additive: the application reads from an abstraction that can later source local files, remote content, or CMS data without rewriting route structure.

## Content validation

Content should be checked for factual accuracy, required metadata, empty fields, and truth-boundary violations before publication. The architecture must treat invented proof as a blocking error, not a styling issue.
