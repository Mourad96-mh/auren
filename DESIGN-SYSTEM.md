# Auren Studio: design system

All tokens live at the top of `src/app/globals.css` (`:root`). Components only use tokens, never raw sizes or colours.
Live reference with every token rendered: **`/design-system/`** (noindex, not in the sitemap).

## Typography
Two families, loaded by `next/font` in `src/app/layout.js`:
- **Cormorant Garamond** (display): headings, numbers, quotes and the marquee.
- **Manrope** (sans): running text, UI, labels.

One fluid scale, 360 px → 1440 px viewport:

| Token | Size | Use |
|---|---|---|
| `--fs-display` | 40 → 76 px (also capped at 8.5 svh) | Hero title only, `text-wrap: balance` |
| `--fs-4xl` | 38 → 68 px | Page H1, key figures, marquee |
| `--fs-3xl` | 32 → 54 px | Section H2, statement |
| `--fs-2xl` | 28 → 40 px | Article H2, services list, mobile menu |
| `--fs-xl` | 24 → 30 px | H3: cards, steps, pillars |
| `--fs-lg` | 20 → 24 px | FAQ questions, numbers, small serif titles |
| `--fs-md` | 17 → 21 px | Lead paragraphs, hero subtitle |
| `--fs-base` | 16 → 17 px | Body text, form fields |
| `--fs-sm` | 15 px | Buttons, nav, card copy, footer |
| `--fs-xs` | 14 px | Breadcrumbs, field labels, notes, legal |
| `--fs-label` | 13 px | Uppercase tracked labels only |

Rules:
- Nothing under 13 px. 13 px is only for uppercase labels with `--tracking-label`; a sentence never goes under 15 px (14 px for meta and legal).
- The only exception is the logo (wordmark sizes in `.logo-*`).
- Body line-height 1.7, headings 1.08, hero 1. Keep line length at or under `--measure` (62ch).

Audit (2026-10-08, computed sizes on 9 templates): before, 27 distinct sizes on mobile and 32 on desktop, down to 9.6 px.
After, 16 on each, all on the scale.

## Colour
Limestone (`--bg`, `--bg-2`), ink (`--ink`, `--ink-2`, `--muted`), bronze accent:
- `--accent` is decorative only (rules, dots, borders): too light for text.
- Accent text: `--accent-ink` on light, `--accent-light` on dark, `--accent-pale` over photos or video.
- Green (`--wa`) is reserved for WhatsApp actions.

## Space and layout
4 px base: `--space-3xs` (4) … `--space-4xl` (128). Sections use `--section-y` (88 → 160) and `--section-y-sm`; columns
use `--gap-columns` (40 → 96). Container 1280 px, `--gutter` 20 → 48 px.

## Motion
- `.reveal`: fade-up on entering the screen (`Reveal.js` adds `.is-in`). Content stays visible without JS.
- Curtain: images inside a `.reveal` card open from the bottom (`clip-path`) with a slight zoom-out.
- `.parallax`: the image drifts inside its frame while scrolling (CSS scroll-driven animation, no JS).
- The method line draws itself on scroll.
- Marquee of project types between the mosaic and the statement (pauses on hover).
- Everything is disabled with `prefers-reduced-motion`. Browsers without scroll-driven animations show the static version.
- **The hero title is never hidden** (transform-only entrance) to keep LCP around 2 s. Do not add opacity or clipping to it.

## Adding something new
Pick sizes from the scale, colours from the palette, gaps from the space tokens. If nothing fits, add a token to
`:root`, add it to `/design-system/` and to this file. Do not hard-code a value in a component.

## Logo
Official client logo (received 2026-10-15), source `assets-src/logo/auren-logo-client.jpeg` (a 3D brushed-gold render on
cream). On the site it is split into three parts so it reads on both the light header and the dark hero / footer:
- **Mark**: the gold "A" (a triangle with a ribbon sweeping out of it) redrawn as SVG in `src/components/Logo.js`
  (`LogoMark`, coordinates = pixels of the source). The same drawing is in `scripts/brand-mark.mjs` for the favicon
  (`src/app/icon.svg`, gold on ink) and og.jpg.
- **AUREN**: a raster alpha mask (`public/brand/wordmark.png`) coloured in CSS through `--logo-word`: deep bronze
  `#6a4519` on light backgrounds, `--accent-pale` on the clear header and in the footer.
- **STUDIO**: HTML text in Manrope between two rules, like the original.
`public/logo.png` (schema.org) is the original lockup at 512 px. Regenerate with `npm run logo` then `npm run og`.

## Zones map (home)
`src/components/ZonesMap.js`: Leaflet + OpenStreetMap tiles, tinted to the palette in CSS (`.zones-map-canvas`). Leaflet is
imported only when the map nears the screen. Points come from `ZONE_COORDS` in `src/lib/site.js` (approximate centres, not
addresses); bronze = Casablanca neighbourhoods, ink = outlying towns, dashed circle = ~40 km radius. The chips are buttons
linked to the map (click → fly to the zone). Scroll-wheel zoom is off, and so is dragging on touch screens, so the map never
traps the page scroll. When the studio address is known, add a studio pin here.
