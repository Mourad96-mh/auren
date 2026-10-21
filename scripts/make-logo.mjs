// Builds every logo asset from the client's official logo (assets-src/logo/auren-logo-2026-10.jpeg:
// flat champagne-gold artwork on near-black, 1280x1280). Logo best practice: never ship the JPEG itself;
// trace it to vectors once, then render every raster from the vectors.
//   public/brand/mark.svg, name.svg, tagline.svg — monochrome parts, painted by <Logo /> via CSS masks
//     (files rather than inline paths: ~60 KB of path data cached once instead of repeated on every page)
//   public/brand/auren-logo.svg — full lockup, gold on transparent (for print / partners)
//   public/brand/auren-logo-dark.svg — full lockup on the brand's dark ground
//   public/logo.png             — 512 px square lockup on dark, for schema.org (Organization.logo)
//   src/app/icon.svg, icon.png (512), apple-icon.png (180), favicon.ico (16/32/48) — the monogram only
import sharp from 'sharp';
import potrace from 'potrace';
import { mkdirSync, writeFileSync } from 'node:fs';

const SRC = 'assets-src/logo/auren-logo-2026-10.jpeg';
export const GOLD = '#c7ab87'; // sampled from the artwork
export const INK = '#21201e'; // sampled ground

// Element boxes in source pixels (measured from luminance bands), padded a little.
const PARTS = {
  mark: { left: 420, top: 150, width: 510, height: 630 },
  name: { left: 285, top: 805, width: 710, height: 72 },
  tagline: { left: 325, top: 915, width: 632, height: 50 },
};
const UP = 4; // trace at 4x for smooth curves; coordinates are scaled back to source pixels

const trace = (buf) =>
  new Promise((resolve, reject) => {
    const p = new potrace.Potrace({ threshold: 100, blackOnWhite: false, turdSize: 20, optTolerance: 0.8, alphaMax: 1.1 });
    p.loadImage(buf, (err) => (err ? reject(err) : resolve(p.getPathTag('#000').match(/ d="([^"]+)"/)[1])));
  });

// Scale every number in a path back to source pixels and offset it into the part's own box.
const rescale = (d) => d.replace(/-?\d+(\.\d+)?/g, (n) => String(Math.round((Number(n) / UP) * 10) / 10));

const paths = {};
for (const [key, box] of Object.entries(PARTS)) {
  const buf = await sharp(SRC).extract(box).greyscale().resize(box.width * UP, box.height * UP, { kernel: 'lanczos3' }).blur(UP * 0.35).png().toBuffer();
  paths[key] = { d: rescale(await trace(buf)), box };
  console.log(`${key}: ${paths[key].d.length} chars`);
}

// Tight viewBoxes: measure the traced artwork by rasterising each path.
const bbox = async ({ d, box }) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${box.width}" height="${box.height}"><path d="${d}"/></svg>`;
  const { data, info } = await sharp(Buffer.from(svg)).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  let x0 = info.width, x1 = 0, y0 = info.height, y1 = 0;
  for (let y = 0; y < info.height; y++)
    for (let x = 0; x < info.width; x++)
      if (data[(y * info.width + x) * 4 + 3] > 0) { x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y); }
  return { x: x0, y: y0, w: x1 - x0 + 1, h: y1 - y0 + 1 };
};
for (const p of Object.values(paths)) p.vb = await bbox(p);

// One monochrome SVG per element, tight viewBox; the site paints them with CSS masks.
mkdirSync('public/brand', { recursive: true });
for (const [k, p] of Object.entries(paths)) {
  const v = p.vb;
  writeFileSync(
    `public/brand/${k}.svg`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${v.x} ${v.y} ${v.w} ${v.h}"><path fill-rule="evenodd" d="${p.d}"/></svg>`
  );
  console.log(`${k}.svg aspect ${(v.w / v.h).toFixed(4)}`);
}

// Full lockup, laid out as in the artwork (positions in source pixels).
const S = 1280;
const lockup = (ground) => {
  const g = (k) => `<path transform="translate(${PARTS[k].left} ${PARTS[k].top})" d="${paths[k].d}"/>`;
  const top = 140, bottom = 980; // crop the artwork's empty margins
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="230 ${top} 820 ${bottom - top}">${
    ground ? `<rect x="0" y="0" width="${S}" height="${S}" fill="${INK}"/>` : ''
  }<g fill="${GOLD}" fill-rule="evenodd">${g('mark')}${g('name')}${g('tagline')}</g></svg>`;
};
mkdirSync('public/brand', { recursive: true });
writeFileSync('public/brand/auren-logo.svg', lockup(false));
writeFileSync('public/brand/auren-logo-dark.svg', lockup(true));

// schema.org logo: square, on its dark ground, with breathing room.
const sq = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="160 110 960 960"><rect x="0" y="0" width="${S}" height="${S}" fill="${INK}"/><g fill="${GOLD}" fill-rule="evenodd">${['mark', 'name', 'tagline']
  .map((k) => `<path transform="translate(${PARTS[k].left} ${PARTS[k].top})" d="${paths[k].d}"/>`)
  .join('')}</g></svg>`;
await sharp(Buffer.from(sq), { density: 144 }).resize(512, 512).png({ compressionLevel: 9 }).toFile('public/logo.png');

// Icons: the monogram alone (the wordmark is illegible at 16 px), gold on the dark ground,
// rounded square so it reads as a tile in tabs and on home screens.
const m = paths.mark.vb;
const side = Math.round(Math.max(m.w, m.h) * 1.3);
const ox = Math.round((side - m.w) / 2 - m.x), oy = Math.round((side - m.h) / 2 - m.y);
const iconSvg = (radius) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${side} ${side}"><rect width="${side}" height="${side}" rx="${radius}" fill="${INK}"/><path fill="${GOLD}" fill-rule="evenodd" transform="translate(${ox} ${oy})" d="${paths.mark.d}"/></svg>`;
writeFileSync('src/app/icon.svg', iconSvg(Math.round(side * 0.18)));
const iconRaster = (s, radius) => sharp(Buffer.from(iconSvg(radius)), { density: 300 }).resize(s, s).png();
await iconRaster(512, Math.round(side * 0.18)).toFile('src/app/icon.png');
await iconRaster(180, 0).toFile('src/app/apple-icon.png'); // iOS applies its own mask

// ICO container with PNG-encoded entries (supported by every current browser).
const sizes = [16, 32, 48];
const pngs = await Promise.all(sizes.map((s) => iconRaster(s, Math.round(side * 0.18)).toBuffer()));
const header = Buffer.alloc(6 + 16 * sizes.length);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(sizes.length, 4);
let offset = header.length;
sizes.forEach((s, i) => {
  const e = 6 + 16 * i;
  header.writeUInt8(s, e);
  header.writeUInt8(s, e + 1);
  header.writeUInt16LE(1, e + 4);
  header.writeUInt16LE(32, e + 6);
  header.writeUInt32LE(pngs[i].length, e + 8);
  header.writeUInt32LE(offset, e + 12);
  offset += pngs[i].length;
});
writeFileSync('src/app/favicon.ico', Buffer.concat([header, ...pngs]));
console.log('mark/name/tagline.svg, lockup SVGs, logo.png, icon.svg/png, apple-icon.png, favicon.ico written');
