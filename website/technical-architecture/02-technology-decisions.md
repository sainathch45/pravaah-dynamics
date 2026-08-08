# Technology Decisions

> **Purpose:** Record the production stack choices, why they exist, and what trade-offs they introduce.
>
> **Pravaah OS:** v1.0.0
> **Last Updated:** 2026-08-08
> **Owner:** Technology Lead
> **Related Documents:** [Architecture Overview](01-architecture-overview.md), [Product 001 Technology Recommendation](../technology.md), [ADR-003](../../decisions/ADR-003-product-001-stack.md)
> **Estimated Reading Time:** 8 minutes

## Next.js

**Purpose:** App and routing framework.

**Why selected:** It supports server rendering, static rendering, route metadata, image optimisation, and a clean App Router model for a small public site.

**Alternatives considered:** Static-site generators, a bespoke React stack, a client-heavy SPA.

**Trade-offs:** Next.js adds framework conventions and build complexity, but those costs are justified by routing, metadata, server components, and deployment support.

**Maintenance implications:** Requires team discipline around server/client boundaries and route organisation.

**Performance implications:** Strong fit for server-first rendering and selective client hydration when used carefully.

## TypeScript

**Purpose:** Type safety and maintainability.

**Why selected:** Reduces accidental breakage in route data, content models, form handling, and shared utilities.

**Alternatives considered:** Plain JavaScript.

**Trade-offs:** Adds type discipline and some implementation overhead.

**Maintenance implications:** Good long-term fit for a product that must remain understandable to future engineers.

**Performance implications:** No runtime cost.

## Tailwind CSS

**Purpose:** Token-driven styling system.

**Why selected:** Enables a tight visual system with low CSS bloat and easy alignment to the design tokens.

**Alternatives considered:** CSS Modules, vanilla CSS, a heavier component styling framework.

**Trade-offs:** Requires discipline to prevent utility sprawl.

**Maintenance implications:** Works best when design tokens and component boundaries are clear.

**Performance implications:** Efficient when configured tightly and purged correctly.

## shadcn/ui

**Purpose:** Accessible foundation for low-level UI primitives that Pravaah owns and adapts.

**Why selected:** Provides a practical base for dialogs, menus, form controls, and stateful primitives without locking the site into a visual identity.

**Alternatives considered:** Fully custom primitives, a large design system library.

**Trade-offs:** Introduces owned component code that must be maintained carefully.

**Maintenance implications:** Each adopted component becomes part of the codebase and should be reviewed like product code.

**Performance implications:** Small if only the needed primitives are adopted.

## Framer Motion

**Purpose:** Optional motion implementation for restrained, design-specified animation.

**Why selected:** Can express the approved motion language without building a custom animation engine.

**Alternatives considered:** CSS animations only, a bespoke animation layer, a general-purpose motion library used everywhere.

**Trade-offs:** Adds runtime weight if overused.

**Maintenance implications:** Must remain limited to the specific motion surfaces approved in design.

**Performance implications:** Acceptable only when used sparingly and with reduced-motion fallbacks.

## Vercel

**Purpose:** Hosting, preview environments, and deployment platform.

**Why selected:** Strong fit for Next.js, preview workflows, and small-team operations.

**Alternatives considered:** Self-hosted infrastructure, another PaaS provider.

**Trade-offs:** Some deployment behaviour is platform-shaped.

**Maintenance implications:** Low operational overhead for the initial launch.

**Performance implications:** Good global delivery and image handling when configured properly.

## Deferred choices

Analytics vendor, error monitoring vendor, inquiry vendor, and content management system remain undecided until the operational and privacy facts are finalised. No dependency should be added purely because it is convenient during early implementation.
