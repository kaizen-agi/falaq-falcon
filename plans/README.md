# Animation improvement plans

| Plan | Title | Severity | Status |
| --- | --- | --- | --- |
| 001 | Respect reduced motion in React | HIGH | DONE |
| 002 | Tighten interaction motion | MEDIUM | DONE |
| 003 | Remove layout-driven motion | HIGH | DONE |

Recommended execution order: 001 → 003 → 002. Plan 002 should be applied after structural motion fixes so its timing tokens become the final source of truth.
