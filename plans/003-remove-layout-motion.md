# 003 — Remove layout-driven motion

- **Status**: DONE
- **Commit**: ab47744
- **Severity**: HIGH
- **Category**: Performance
- **Estimated scope**: 2 files, medium

## Problem

The timeline falcon moves through `left` and `top` at `src/styles.css:207` and `src/styles.css:217`. The clarity rows animate `padding` at `src/styles.css:264`; the radar tab underline animates `right` at `src/styles.css:135`; principle progress animates `width` at `src/styles.css:184`. These properties trigger layout or paint on every frame.

## Target

Use only `transform` and `opacity` for motion. Put the falcon pointer inside the active timeline node so it changes position through component state instead of interpolating `left/top`. Convert underlines and progress bars to `scaleX()`. Keep row padding static and use a small `translateX()` only.

## Repo conventions to follow

- Motion components already use `AnimatePresence` for stateful entry/exit.
- The visual language is restrained gold-on-ink; avoid bounce.

## Steps

1. Render the falcon icon inside the active timeline node and remove the separately positioned moving image.
2. Replace `right`/`width` underline motion with `transform:scaleX()` and explicit transform origins.
3. Stop transitioning clarity-row padding.
4. Gate hover movement behind `(hover:hover) and (pointer:fine)` or neutralize it on coarse pointers.

## Boundaries

- Keep the falcon pointer visible.
- Do NOT change timeline content or navigation behavior.
- Do NOT add dependencies.

## Verification

- **Mechanical**: run `npm run build`; expect exit code 0.
- **Feel check**: inspect timeline and tabs at 10% playback; no layout jump or delayed label movement should appear.
- **Done when**: no timeline, tab, progress, or clarity hover animation interpolates `left`, `top`, `right`, `width`, or `padding`.
