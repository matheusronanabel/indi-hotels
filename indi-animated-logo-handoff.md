# Indi — Animated Logo (Handoff for Abel)

**For:** Abel. Three ready-to-use animated SVG files are included.
**What it does:** the three bars rise and light up left to right, the tallest resolves to blue with its dot (the "i"), holds, then drains left to right, and loops. Pure SVG + CSS, no JavaScript, no library. Tiny file. Crisp at any size.

*(No electric/lightning effect — kept clean and simple.)*

---

## Files

| File | Use |
|---|---|
| `indi-mark-animated.svg` | **Looping** version, for light backgrounds. Full fill → hold → drain → repeat (6s). |
| `indi-mark-animated-reversed.svg` | Looping version for **dark** backgrounds (white bars, tall bar resolves to lighter blue `#3B7BE0`). |
| `indi-mark-animated-once.svg` | **Plays once on load**, then holds on the finished mark. Recommended for the **site header**. |

The animation is self-contained in each SVG's `<style>` block, so you can embed the file directly and it just runs.

---

## Where to use which

- **Site header → `indi-mark-animated-once.svg`.** My recommendation. It gives the "ascend" moment once as the page loads, then settles into the normal static mark. A logo that loops forever in the corner gets distracting on every scroll and starts to feel gimmicky. Play once, then rest.
- **Splash / loading state / a hero moment → `indi-mark-animated.svg`** (the full loop), where motion is the point.
- **Dark footer or splash → `indi-mark-animated-reversed.svg`.**
- **Everywhere else (favicon, small UI, social avatar) → the existing static mark.** Don't animate at tiny sizes.

---

## How to embed

**Inline (best — lets the animation run, styleable, no extra request):**
```html
<span class="logo" aria-label="Indi">
  <!-- paste the contents of indi-mark-animated-once.svg here -->
</span>
```

**Or as an object/img (simplest):**
```html
<object type="image/svg+xml" data="/assets/indi-mark-animated-once.svg" width="40" height="40" aria-label="Indi"></object>
```
*(Note: animated SVGs animate when embedded via `<object>`, `<iframe>`, or inline, and as a CSS `background-image`. They do **not** animate inside a plain `<img>` in some browsers — prefer inline or `<object>`.)*

Header size: ~36–44px. Keep clear space of at least the width of the tallest bar.

---

## Accessibility

All three files honour `prefers-reduced-motion`: users who've turned off animations see the finished mark immediately, no motion. This is already built into the SVG — nothing extra to do.

---

## Notes

- Colours match the brand: ink `#0E1116`, blue `#0E4FB0` (light bg) / `#3B7BE0` (dark bg).
- If you want the loop timing faster or slower, change the `6s` durations (keep all four the same in a file).
- **For email or social** (where CSS animation won't play), ask Sonny/me for a GIF, MP4 or Lottie export — the SVGs here are for the website.
