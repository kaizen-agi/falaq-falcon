# 002 — Tighten interaction motion

- **Status**: DONE
- **Commit**: ab47744
- **Severity**: MEDIUM
- **Category**: Easing & duration
- **Estimated scope**: 2 files, medium

## Problem

Interactive transitions use scattered timings and weak built-in easing. Examples include the `0.65s` journey-card state change at `src/App.jsx:161`, the `0.75s` radar morph at `src/App.jsx:183`, and generic `transition:.3s` declarations in `src/styles.css:4` and `src/styles.css:167`.

## Target

Add shared tokens:

```css
--ease-out:cubic-bezier(0.23,1,0.32,1);
--ease-in-out:cubic-bezier(0.77,0,0.175,1);
--duration-ui:240ms;
--duration-press:160ms;
```

Keep UI state changes below `300ms`. Use `--ease-out` for entry/exit and `--ease-in-out` for on-screen morphs.

## Repo conventions to follow

- Design tokens already live in the root declaration at `src/styles.css:1`.
- Marketing reveals may remain longer than UI transitions.

## Steps

1. Add motion tokens to `:root`.
2. Reduce timeline and radar interactive transitions to `0.24–0.26s`.
3. Replace generic interactive transitions with named properties and shared tokens.
4. Add `160ms` press feedback for pressable controls.

## Boundaries

- Do NOT shorten first-view marketing entrances solely because they exceed 300ms.
- Do NOT change layout or copy.
- Do NOT add dependencies.

## Verification

- **Mechanical**: run `npm run build`; expect exit code 0.
- **Feel check**: switch falcons and timeline steps repeatedly; the response should feel immediate and remain interruptible.
- **Done when**: frequently triggered UI motion is under 300ms and uses shared curves.
