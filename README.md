# Auren Studio: site vitrine

Next.js 15 (App Router) + pure CSS, static export (`out/`) for any static host (Hostinger, cPanel, Vercel, Netlify).

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # → out/  (on OneDrive: rm -rf .next before building)
npm run media      # assets-src/*.jpg → public/img/*.webp (800 + 1600 px)
npm run og         # public/og.jpg + public/logo.png
node scripts/audit-meta.mjs       # title / description / H1 / canonical check on out/
node scripts/validate-schema.mjs  # JSON-LD validation on out/
```

## Where to change things
| What | File |
|---|---|
| Name, phone, WhatsApp, e-mail, domain, service zones + map coordinates (`ZONE_COORDS`) | `src/lib/site.js` |
| The 6 services (texts, SEO, FAQ, steps) | `src/lib/services.js` |
| Home content (pillars, method, project types, FAQ) | `src/lib/content.js` |
| Guides (blog) | `src/lib/guides.js` |
| Schema.org / meta | `src/lib/seo.js` |
| Colours, typography, spacing, motion (design tokens) | `src/app/globals.css` (`:root`), rules in `DESIGN-SYSTEM.md`, live at `/design-system/` |

## Hero video
`public/media/hero.{webm,mp4}`: an 18 s interior-architecture montage of five Mixkit clips (free licence):
inspiration on a tablet (41178) → colour fan (21219) → kitchen (43033) → marble and zellige hammam (4184) → bedroom (4196),
one clip every 3.4 s with 0.8 s crossfades. The OG background is a frame of it (`assets-og/og-bg.jpg`). The chapter bar in `HeroVideo.js` follows these timings.
The video is attached after the `load` event (the poster shows first) to keep LCP around 2 s.
To replace it with a real client video: export 1280×720 H.264 (CRF ~27, no audio, `+faststart`) + WebM VP9,
regenerate the poster (`assets-src/hero-poster.jpg`, then `npm run media`).

## Images
Illustration photos come from the Unsplash archive under CC0 on Wikimedia Commons (`assets-src/CREDITS.json`), plus stills taken from the Mixkit clips.
They are captioned as **illustrations**, never as Auren's projects. To add real photos: put them in `assets-src/`, run `npm run media`.

## SEO
See `../seo/01-audit-concurrentiel.md` (competitors, keywords, gap analysis) and `../seo/02-STATUS.md` (technical audit, open items).
