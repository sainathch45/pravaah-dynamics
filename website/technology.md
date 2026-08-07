# Product 001 Technology Recommendation

> **Purpose:** Recommend a pragmatic implementation stack for approval before coding begins.
>
> **Pravaah OS:** v1.0.0  
> **Last Updated:** 2026-08-08  
> **Owner:** Technology Lead  
> **Related Documents:** [Engineering Architecture](../engineering/architecture.md), [Implementation Roadmap](implementation-roadmap.md), [ADR-003](../decisions/ADR-003-product-001-stack.md)  
> **Estimated Reading Time:** 5 minutes

## Recommended stack

- **Next.js and TypeScript** for a well-supported, server-capable React foundation with clear types and production conventions.
- **Tailwind CSS** for a constrained implementation of the Pravaah visual system without accumulating one-off styles.
- **shadcn/ui** as a selectively adopted accessible component foundation. Components are owned and adapted by Pravaah; it is not a visual identity.
- **Framer Motion** only for motion specified by the product and design system.
- **Vercel** for deployment, preview environments, image optimization, and operational simplicity for the initial Next.js product.

## Content model

Launch with content held close to the codebase or a minimal structured content layer chosen only when real editorial publishing begins. A headless CMS is deferred because no Journal articles or frequent editorial workflow exist yet. The schema should later support pages, Journal entries, authors, approved case studies, and SEO fields without forcing a migration of invented content.

## Deliberate deferrals

Do not select analytics, error monitoring, form vendor, CMS, or email automation solely from this document. Each choice depends on legal, privacy, budget, and operational facts not yet finalised.
