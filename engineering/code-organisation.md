# Code Organisation, Naming, and Linting

> **Purpose:** Keep codebases legible as projects and teams grow.
>
> **Pravaah OS:** v1.0.0  
> **Last Updated:** 2026-08-08  
> **Owner:** Technology Lead  
> **Related Documents:** [Engineering Standards](standards.md), [Git Workflow](git-workflow.md), [Architecture](architecture.md)  
> **Estimated Reading Time:** 4 minutes

Organise code around product boundaries and responsibilities, not arbitrary file types alone. Keep application, shared UI, domain logic, data access, tests, and configuration easy to locate. The final Product 001 structure will be documented once its actual content and integration choices are approved.

Name things for their domain role and behavior. Avoid vague names such as `utils`, `helpers`, or `manager` when a more precise name exists. Formatting and linting rules should automate mechanical consistency, leaving reviews free to discuss behavior, trade-offs, and user impact.
