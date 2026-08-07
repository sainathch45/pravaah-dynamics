# Engineering Standards

> **Purpose:** Define the baseline practices that make code safe to change and easy to inherit.
>
> **Pravaah OS:** v1.0.0  
> **Last Updated:** 2026-08-08  
> **Owner:** Technology Lead  
> **Related Documents:** [Architecture](architecture.md), [Delivery](delivery.md), [Performance](performance.md)  
> **Estimated Reading Time:** 5 minutes

## Readability

Use names that explain intent, small focused modules, explicit error paths, and local documentation for non-obvious decisions. Readable code lowers the cost of maintenance and protects future client work.

## Type safety and validation

Use TypeScript for application code and validate untrusted input at boundaries. Types make assumptions visible; runtime validation protects when those assumptions meet the outside world.

## Quality gates

Run formatting, linting, type checks, and appropriate tests before review. Automation catches routine mistakes so human review can focus on judgment and risk.

## Security and privacy

Keep secrets out of source control, minimize collected data, use least privilege, and review external dependencies. Security is part of the user experience because trust is difficult to rebuild.

## Documentation

Document decisions, setup, operation, and recovery where a future contributor would otherwise need oral history. Keep documentation close to the work it explains.
