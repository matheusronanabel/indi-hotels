# Indi — Logo Lockup 5b

**Space Grotesk wordmark + Ascent mark · Airy Blue (Azure)**

The primary Indi logo. The mark is three ascending bars — *distribution · revenue · marketing* — rising to a beacon, together reading as a lowercase **i**. It's paired with the wordmark "Indi" set in **Space Grotesk 700**.

---

## The lockup

Mark to the left of the wordmark, vertically centred, with a gap roughly equal to the mark's width.

```
[mark]  Indi
```

- **Mark:** Ascent (rounded ascending bars + beacon)
- **Wordmark:** `Indi` · Space Grotesk · weight 700 · `letter-spacing: -0.03em`
- **Default colour:** Ink `#0E1116` (mark + wordmark)
- **Accent colour:** the tallest bar + beacon may render in Azure `#1466E0`

---

## Colours

| Role | Name | HEX | RGB | CSS variable |
|---|---|---|---|---|
| Primary ink | Ink | `#0E1116` | 14, 17, 22 | `--indi-ink` |
| Signature accent | Azure | `#1466E0` | 20, 102, 224 | `--indi-azure` |
| Reversed | Paper | `#FFFFFF` | 255, 255, 255 | `--indi-paper` |
| Favicon tile bg | Azure | `#1466E0` | 20, 102, 224 | `--indi-azure` |

---

## Typography

| Element | Font | Weight | Tracking |
|---|---|---|---|
| Wordmark "Indi" | Space Grotesk | 700 | `-0.03em` |

Load:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
```

---

## Mark SVG — Ink (primary)

```html
<svg viewBox="0 0 100 100" width="100" height="100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Indi">
  <rect x="26" y="54" width="13" height="20" rx="6.5" fill="#0E1116"/>
  <rect x="44" y="42" width="13" height="32" rx="6.5" fill="#0E1116"/>
  <rect x="62" y="28" width="13" height="46" rx="6.5" fill="#1466E0"/>
  <circle cx="68.5" cy="18" r="5" fill="#1466E0"/>
</svg>
```

## Mark SVG — All-ink (mono)

```html
<svg viewBox="0 0 100 100" width="100" height="100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Indi">
  <rect x="26" y="54" width="13" height="20" rx="6.5" fill="#0E1116"/>
  <rect x="44" y="42" width="13" height="32" rx="6.5" fill="#0E1116"/>
  <rect x="62" y="28" width="13" height="46" rx="6.5" fill="#0E1116"/>
  <circle cx="68.5" cy="18" r="5" fill="#0E1116"/>
</svg>
```

## Mark SVG — Reversed (on ink / dark)

```html
<svg viewBox="0 0 100 100" width="100" height="100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Indi">
  <rect x="26" y="54" width="13" height="20" rx="6.5" fill="#FFFFFF"/>
  <rect x="44" y="42" width="13" height="32" rx="6.5" fill="#FFFFFF"/>
  <rect x="62" y="28" width="13" height="46" rx="6.5" fill="#FFFFFF"/>
  <circle cx="68.5" cy="18" r="5" fill="#FFFFFF"/>
</svg>
```

## Favicon / app tile (white mark on azure)

```html
<svg viewBox="0 0 100 100" width="100" height="100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Indi">
  <rect width="100" height="100" rx="22" fill="#1466E0"/>
  <rect x="26" y="54" width="13" height="20" rx="6.5" fill="#FFFFFF"/>
  <rect x="44" y="42" width="13" height="32" rx="6.5" fill="#FFFFFF"/>
  <rect x="62" y="28" width="13" height="46" rx="6.5" fill="#FFFFFF"/>
  <circle cx="68.5" cy="18" r="5" fill="#FFFFFF"/>
</svg>
```

---

## Full lockup — HTML + CSS

```html
<a class="indi-logo" href="/" aria-label="Indi — home">
  <svg class="indi-logo__mark" viewBox="0 0 100 100" aria-hidden="true">
    <rect x="26" y="54" width="13" height="20" rx="6.5" fill="#0E1116"/>
    <rect x="44" y="42" width="13" height="32" rx="6.5" fill="#0E1116"/>
    <rect x="62" y="28" width="13" height="46" rx="6.5" fill="#1466E0"/>
    <circle cx="68.5" cy="18" r="5" fill="#1466E0"/>
  </svg>
  <span class="indi-logo__word">Indi</span>
</a>
```

```css
.indi-logo{
  display: inline-flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
}
.indi-logo__mark{
  width: 34px;
  height: 34px;
  flex: none;
}
.indi-logo__word{
  font-family: 'Space Grotesk', system-ui, sans-serif;
  font-weight: 700;
  font-size: 30px;
  letter-spacing: -0.03em;
  line-height: 1;
  color: #0E1116;
}
/* On a dark background, swap the mark to the reversed SVG and: */
.indi-logo--reversed .indi-logo__word{ color: #FFFFFF; }
```

---

## Usage rules

- **Clear space:** keep space ≥ the beacon dot's diameter on all sides.
- **Minimum size:** mark 22px · wordmark 76px wide.
- **Ink by default.** The azure treatment (tallest bar + beacon in azure) is for favicons, tiles and brand moments — not every lockup.
- **Reversed** version on ink/dark backgrounds only.
- **Don't:** stretch, rotate, skew, add shadows or gradients, recolour beyond Ink / Azure / Paper, or change the letter spacing of the wordmark.

---

*INDI · Logo Lockup 5b · Space Grotesk + Ascent · Airy Blue · indihotels.com.au*
