# Form and Inquiry Architecture

> **Purpose:** Define the architecture for the primary conversion path so inquiries are reliable, privacy-conscious, and recoverable.
>
> **Pravaah OS:** v1.0.0
> **Last Updated:** 2026-08-08
> **Owner:** Technology Lead
> **Related Documents:** [Product 001](../README.md), [Privacy and Cookies](../privacy-and-cookies.md), [Analytics](../analytics.md), [ADR-008](../../decisions/ADR-008-product-001-inquiry-delivery.md)
> **Estimated Reading Time:** 8 minutes

## Inquiry model

The primary action is Start a conversation. The form should collect only the information needed for a useful founder-led response.

## Validation

- Validate on the server as the source of truth.
- Mirror essential validation on the client for immediate feedback.
- Keep error messages specific, human, and actionable.
- Preserve entered values on failure.

## Spam prevention

Use layered, low-friction protections such as honeypot fields, rate limiting, and server-side abuse detection. Avoid CAPTCHAs unless abuse forces them and the user experience impact is justified.

## Delivery

The submission path must not silently lose inquiries. For launch, use a direct email delivery path backed by Resend and a server-side submission handler. The architecture should support retries, clear failure states, and a durable record of the submitted payload status.

## Success and failure states

- Success should confirm receipt and explain the expected next step.
- Failure should explain that the inquiry was not delivered and offer a recovery path.
- Validation failures should remain inline and not reset the form.

## Privacy

Do not collect sensitive information unless it is clearly necessary. Keep the data model small, retention limited, and disclosure honest.
