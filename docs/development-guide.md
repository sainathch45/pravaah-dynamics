# Product 001 Development Guide

> **Purpose:** Document local setup and environment configuration for Product 001 implementation.
>
> **Pravaah OS:** v1.0.0
> **Last Updated:** 2026-08-08
> **Owner:** Technology Lead
> **Related Documents:** [Implementation Status](../website/implementation-status.md), [Technical Architecture](../website/technical-architecture/README.md)
> **Estimated Reading Time:** 4 minutes

## Local setup

1. Install Node.js 22 or newer.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local`.
4. Add values for `SITE_URL`, `RESEND_API_KEY`, `INQUIRY_FROM_EMAIL`, and `INQUIRY_TO_EMAIL`.
5. Run `npm run dev`.

## Validation commands

- `npm run lint`
- `npm run typecheck`
- `npm run test`
- `npm run build`

## Inquiry delivery

The inquiry endpoint uses server-side validation and forwards accepted submissions through Resend. If required environment values are missing, the endpoint responds with a user-safe failure message.

## Analytics

No third-party analytics provider is integrated for launch. Any future integration must follow ADR-009.
