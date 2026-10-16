// Generates public/og.jpg (1200x630 social card). Run `npm run logo` first (public/brand/wordmark.png);
// public/logo.png now comes from the client's logo via scripts/make-logo.mjs.
import sharp from 'sharp';
import { markSvg } from './brand-mark.mjs';

const W = 1200;
const H = 630;

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
  ${markSvg('translate(80 84) scale(0.08)')}
  <rect x="174" y="137" width="22" height="1" fill="#e7d3b5" fill-opacity="0.7"/>
  <text x="204" y="141" font-family="Arial, sans-serif" font-size="11" letter-spacing="6" fill="#e7d3b5">STUDIO</text>
  <rect x="290" y="137" width="22" height="1" fill="#e7d3b5" fill-opacity="0.7"/>
  <text x="80" y="300" font-family="Georgia, serif" font-size="62" fill="#ffffff">Tous vos projets,</text>
  <text x="80" y="372" font-family="Georgia, serif" font-size="62" fill="#ffffff">de la première esquisse</text>
  <text x="80" y="444" font-family="Georgia, serif" font-style="italic" font-size="62" fill="#e7d3b5">à la dernière clé.</text>
  <rect x="80" y="500" width="40" height="2" fill="#b08a5b"/>
  <text x="136" y="507" font-family="Arial, sans-serif" font-size="20" letter-spacing="3" fill="#e7d3b5">ARCHITECTE À CASABLANCA · aurenstudio.com</text>
</svg>`;

// Wordmark mask (white + alpha) tinted champagne.
const word = await sharp('public/brand/wordmark.png')
  .resize({ width: 138 })
  .tint('#e7d3b5')
  .toBuffer();

await sharp('assets-og/og-bg.jpg')
  .resize(W, H, { fit: 'cover', position: 'centre' })
  .composite([{ input: Buffer.from(overlay) }, { input: word, left: 174, top: 98 }])
  .jpeg({ quality: 84, mozjpeg: true })
  .toFile('public/og.jpg');

console.log('og.jpg written');
