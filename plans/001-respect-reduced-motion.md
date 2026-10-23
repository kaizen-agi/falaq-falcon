# 001 — Respect reduced motion in React

- **Status**: DONE
- **Commit**: ab47744
- **Severity**: HIGH
- **Category**: Accessibility
- **Estimated scope**: 1 file, medium

## Problem

Motion components in `src/App.jsx:51`, `src/App.jsx:158`, `src/App.jsx:183`, `src/App.jsx:187`, and `src/App.jsx:200` animate transforms even when the visitor requests reduced motion. CSS media queries cannot reliably neutralize Motion's inline transform values.

## Target

Use Motion's `useReducedMotion()` hook. In reduced mode, preserve opacity feedback while removing translation, scale, rotation, and automatic decorative movement. State changes should complete in `0.2s` or less.

## Repo conventions to follow

- Motion is already imported from `motion/react` in `src/App.jsx:2`.
- Existing CSS fallbacks use `@media(prefers-reduced-motion:reduce)` in `src/styles.css`.

## Steps

1. Import `useReducedMotion` in `src/App.jsx`.
2. Branch scroll reveals, timeline state, radar morphs, and portrait swaps so reduced mode keeps opacity but removes movement.
3. Stop decorative auto-advance where it would create continuous state changes.

## Boundaries

- Do NOT change content or section structure.
- Do NOT add dependencies.
- Preserve functional state changes and keyboard access.

## Verification

- **Mechanical**: run `npm run build`; expect exit code 0.
- **Feel check**: toggle reduced motion in DevTools and confirm content remains legible, state changes remain clear, and no element translates, rotates, or scales.
- **Done when**: Motion inline styles no longer create movement in reduced mode.
