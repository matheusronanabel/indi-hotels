# Indi — Colour Palette (Airy Blue)

One confident blue on white.

A bright, premium palette: a neutral spine of near-black, paper and grey does ~90% of the work, and a single signature azure carries every accent. There is no second accent hue.

## Usage Balance

How much of each appears in a layout:

| Group | Share |
|---|---|
| Paper / White | Largest |
| Ink | Second largest |
| Ash / Grey | Small |
| Azure | Smallest |

> Azure is punctuation: one strong colour moment per view — never large fields of it, never coloured body text.

## The Spine — Neutrals (does the work)

| Name | Role | Hex | RGB | Var |
|---|---|---|---|---|
| Ink | Text, dark sections, primary ink buttons | `#0E1116` | 14, 17, 22 | `--indi-ink` |
| Paper | Primary background | `#FFFFFF` | 255, 255, 255 | `--indi-paper` |
| Mist Grey | Alternating sections, cards, fills | `#F6F7F9` | 246, 247, 249 | `--indi-mist-grey` |
| Ash | Subtle fills, dividers | `#ECECEA` | 236, 236, 234 | `--indi-ash` |
| Grey | Secondary text, hairlines | `#6B7280` | 107, 114, 128 | `--indi-grey` |
| Slate | Body text on light (softer than ink) | `#4A4C50` | 74, 76, 80 | `--indi-slate` |
| Line | Borders and separators | `#E6E8EC` | 230, 232, 236 | `--indi-line` |

## The Signature — Azure & Its Shades (the only strong colour)

| Name | Role | Hex | RGB | Var |
|---|---|---|---|---|
| Azure | The signature — key CTA, links, active states | `#1466E0` | 20, 102, 224 | `--indi-azure` |
| Deep Azure | Hover states, dense azure type | `#0E52BC` | 14, 82, 188 | `--indi-azure-deep` |
| Mist | Chips, soft panels, secondary buttons | `#E7F0FD` | 231, 240, 253 | `--indi-mist` |
| Sky Wash | Hero & section backgrounds only | `#EEF4FE` | 238, 244, 254 | `--indi-sky` |
| Mist Line | Borders on sky / mist panels | `#E1E9F6` | 225, 233, 246 | `--indi-mist-line` |

> **Contrast:** Azure on white ≈ 4.6:1 — passes AA for text and UI. On azure fills, use white text. Keep readable copy at Ink or Slate; don't drop below Grey for anything meant to be read.

## For the Developer — Copy & Paste

```css
:root {
  /* neutral spine */
  --indi-ink:#0E1116; --indi-paper:#FFFFFF; --indi-mist-grey:#F6F7F9;
  --indi-ash:#ECECEA; --indi-grey:#6B7280; --indi-slate:#4A4C50; --indi-line:#E6E8EC;

  /* signature — azure only */
  --indi-azure:#1466E0; --indi-azure-deep:#0E52BC;
  --indi-mist:#E7F0FD; --indi-sky:#EEF4FE; --indi-mist-line:#E1E9F6;
}
```

---
*INDI · COLOUR PALETTE · AIRY BLUE · indihotels.com.au*