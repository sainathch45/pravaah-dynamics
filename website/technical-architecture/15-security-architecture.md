# Security Architecture

> **Purpose:** Define the security posture for Product 001 without over-engineering beyond the site’s real risk profile.
>
> **Pravaah OS:** v1.0.0
> **Last Updated:** 2026-08-08
> **Owner:** Technology Lead
> **Related Documents:** [Engineering Security](../../engineering/security.md), [Privacy and Cookies](../privacy-and-cookies.md), [Form and Inquiry Architecture](10-form-and-inquiry-architecture.md)
> **Estimated Reading Time:** 8 minutes

## Security posture

Protect the site, inquiry path, and user data with the smallest set of controls that are appropriate for a public marketing site.

## Focus areas

- Dependency security through review and updates.
- Secret management through environment variables and platform secrets.
- Abuse protection on forms and other public endpoints.
- Security headers appropriate for the site’s delivery model.
- CSP planning that accounts for only the scripts and assets the site actually uses.
- Careful third-party script review before launch.

## Data handling

Do not store sensitive information unnecessarily. Keep inquiry data retention intentional and limited, and only retain what the business needs to respond and operate.

## Policy rule

Security changes should be documented when they affect public trust, privacy, or the architecture of a shared control surface.
