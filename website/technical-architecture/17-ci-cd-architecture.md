# CI/CD Architecture

> **Purpose:** Define the GitHub-based workflow for validating, previewing, and releasing Product 001.
>
> **Pravaah OS:** v1.0.0
> **Last Updated:** 2026-08-08
> **Owner:** Technology Lead
> **Related Documents:** [Git Workflow](../../engineering/git-workflow.md), [Delivery](../../engineering/delivery.md), [Deployment Architecture](18-deployment-architecture.md)
> **Estimated Reading Time:** 8 minutes

## Branch model

Use a protected main branch and short-lived feature branches for implementation work. Pull requests should be required for review and validation before merge.

## Validation steps

CI should run linting, formatting checks where applicable, type checking, tests, and build validation. If any of these fail, the change should not progress to preview or production.

## Preview deployments

Every pull request should produce a preview deployment so design, content, accessibility, and motion decisions can be reviewed in context.

## Production release

Only approved changes on the protected branch should deploy to production. Rollback should be straightforward and documented.

## Ownership

The team should be able to understand why a change is blocked by reading the pipeline output, not by guessing at hidden workflow state.
