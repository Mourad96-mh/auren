// Generates public/og.jpg (1200x630 social card). Run `npm run logo` first (public/brand/mark.svg, name.svg).
import sharp from 'sharp';
import { readFileSync } from 'node:fs';

const W = 1200;
const H = 630;
const GOLD = '#c7ab87';

const overlay = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="g" x1="0" x2="1" y1="0" y2="0">
      <stop offset="0" stop-color="#14130f" stop-opacity="0.92"/>
      <stop offset="0.65" stop-color="#14130f" stop-opacity="0.55"/>
      <stop offset="1" stop-color="#14130f" stop-opacity="0.2"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#g)"/>
  <text x="80" y="300" font-family="Georgia, serif" font-size="62" fill="#ffffff">Tous vos projets,</text>
  <text x="80" y="372" font-family="Georgia, serif" font-size="62" fill="#ffffff">de la première esquisse</text>
  <text x="80" y="444" font-family="Georgia, serif" font-style="italic" font-size="62" fill="#e7d3b5">à la dernière clé.</text>
  <rect x="80" y="500" width="40" height="2" fill="#b08a5b"/>
  <text x="136" y="507" font-family="Arial, sans-serif" font-size="20" letter-spacing="3" fill="#e7d3b5">ARCHITECTE À CASABLANCA · aurenstudio.ma</text>
</svg>`;

// Logo parts: the monochrome SVGs filled with the brand gold.
const part = (file, size) =>
  sharp(Buffer.from(readFileSync(file, 'utf8').replace('<path ', `<path fill="${GOLD}" `)), { density: 300 })
    .resize(size)
    .png()
    .toBuffer();
const mark = await part('public/brand/mark.svg', { height: 96 });
const name = await part('public/brand/name.svg', { width: 210 });

await sharp('assets-og/og-bg.jpg')
  .resize(W, H, { fit: 'cover', position: 'centre' })
  .composite([
    { input: Buffer.from(overlay) },
    { input: mark, left: 80, top: 70 },
    { input: name, left: 172, top: 112 },
  ])
  .jpeg({ quality: 84, mozjpeg: true })
  .toFile('public/og.jpg');

console.log('og.jpg written');
