# Disaster Recovery and Backup

> **Purpose:** Define what should be backed up and how the site should recover from loss or failure.
>
> **Pravaah OS:** v1.0.0
> **Last Updated:** 2026-08-08
> **Owner:** Technology Lead
> **Related Documents:** [Deployment Architecture](18-deployment-architecture.md), [Logging and Monitoring](22-logging-and-monitoring.md), [Security Architecture](15-security-architecture.md)
> **Estimated Reading Time:** 7 minutes

## What to back up

- Source code.
- Content files.
- Design and architecture documents.
- Configuration templates.
- Deployment history and release notes.

## What not to back up

- Secrets in plain text.
- Disposable build artefacts.
- Duplicate copies of information that already has a canonical source of truth.

## Recovery posture

Recovery should start with the simplest viable step: restore the last known good deployment, verify inquiry delivery, and then investigate the root cause.
