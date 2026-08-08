# Environment and Configuration

> **Purpose:** Define local, preview, and production environment management and the handling of configuration values.
>
> **Pravaah OS:** v1.0.0
> **Last Updated:** 2026-08-08
> **Owner:** Technology Lead
> **Related Documents:** [Deployment Architecture](18-deployment-architecture.md), [Security Architecture](15-security-architecture.md), [Product 001](../README.md)
> **Estimated Reading Time:** 7 minutes

## Environments

- Local for development and testing on a workstation.
- Preview for pull-request review and stakeholder feedback.
- Production for the public site.

## Configuration rules

- Never commit secrets.
- Keep environment variables documented and minimal.
- Use safe example values in documentation.
- Treat `SITE_URL` as configurable until the canonical domain is approved.
- Keep provider-specific keys isolated to the services that need them.

## Behaviour differences

Preview environments should be recognisably non-production, especially for canonical URLs, analytics, indexing, and any inquiry delivery endpoint.
