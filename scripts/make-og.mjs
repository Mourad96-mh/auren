// Generates public/og.jpg (1200x630 social card) and public/logo.png (raster logo for schema.org).
import sharp from 'sharp';

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
  <g transform="translate(76 88) scale(1.4)" fill="none" stroke-width="2.4">
    <path d="M7 36 20 4l13 32" stroke="#f4f1eb" stroke-miterlimit="10"/>
    <path d="M11.4 25.2H38" stroke="#b08a5b"/>
  </g>
  <rect x="148" y="94" width="1" height="44" fill="#f4f1eb" fill-opacity="0.35"/>
  <text x="166" y="117" font-family="Arial, sans-serif" font-weight="700" font-size="24" letter-spacing="8" fill="#f4f1eb">AUREN</text>
  <text x="166" y="138" font-family="Arial, sans-serif" font-size="12" letter-spacing="5" fill="#f4f1eb" fill-opacity="0.75">STUDIO</text>
  <text x="80" y="300" font-family="Georgia, serif" font-size="62" fill="#ffffff">Tous vos projets,</text>
  <text x="80" y="372" font-family="Georgia, serif" font-size="62" fill="#ffffff">de la première esquisse</text>
  <text x="80" y="444" font-family="Georgia, serif" font-style="italic" font-size="62" fill="#e7d3b5">à la dernière clé.</text>
  <rect x="80" y="500" width="40" height="2" fill="#b08a5b"/>
  <text x="136" y="507" font-family="Arial, sans-serif" font-size="20" letter-spacing="3" fill="#e7d3b5">ARCHITECTE À CASABLANCA · aurenstudio.com</text>
</svg>`;

await sharp('assets-og/og-bg.jpg')
  .resize(W, H, { fit: 'cover', position: 'centre' })
  .composite([{ input: Buffer.from(overlay) }])
  .jpeg({ quality: 84, mozjpeg: true })
  .toFile('public/og.jpg');

const logo = `
<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 64 64">
  <rect width="64" height="64" fill="#17150f"/>
  <g transform="translate(4 7) scale(1.25)" fill="none" stroke-width="2.4">
    <path d="M7 36 20 4l13 32" stroke="#f4f1eb" stroke-miterlimit="10"/>
    <path d="M11.4 25.2H38" stroke="#b08a5b"/>
  </g>
</svg>`;
await sharp(Buffer.from(logo)).png({ palette: true }).toFile('public/logo.png');
console.log('og.jpg + logo.png written');
