// Builds the logo assets from the client's official logo (assets-src/logo/auren-logo-client.jpeg,
// a 3D gold render on cream, 1254x1254):
//   public/brand/wordmark.png — "AUREN" as an alpha mask (white + alpha), coloured in CSS via mask-image
//   public/logo.png           — full lockup on cream, 512 px, for schema.org
// The gold "A" mark itself is redrawn as SVG in src/components/Logo.js (the render's soft shadows
// can't be keyed out cleanly for dark backgrounds).
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const SRC = 'assets-src/logo/auren-logo-client.jpeg';
mkdirSync('public/brand', { recursive: true });

// Wordmark: luminance key on the AUREN line only (STUDIO is set in HTML, too small as a raster).
// Dark bronze letters -> opaque; cream ground and the light drop shadow -> transparent.
const box = { left: 60, top: 840, width: 1110, height: 215 };
const { data, info } = await sharp(SRC).extract(box).raw().toBuffer({ resolveWithObject: true });
const LO = 110;
const HI = 185;
const rgba = Buffer.alloc(info.width * info.height * 4);
let minX = info.width, maxX = 0, minY = info.height, maxY = 0;
for (let y = 0; y < info.height; y++) {
  for (let x = 0; x < info.width; x++) {
    const i = (y * info.width + x) * info.channels;
    const l = 0.3 * data[i] + 0.59 * data[i + 1] + 0.11 * data[i + 2];
    const a = Math.max(0, Math.min(255, Math.round(((HI - l) * 255) / (HI - LO))));
    const o = (y * info.width + x) * 4;
    rgba[o] = rgba[o + 1] = rgba[o + 2] = 255;
    rgba[o + 3] = a;
    if (a > 128) {
      minX = Math.min(minX, x); maxX = Math.max(maxX, x);
      minY = Math.min(minY, y); maxY = Math.max(maxY, y);
    }
  }
}
const pad = 2;
const crop = {
  left: Math.max(0, minX - pad),
  top: Math.max(0, minY - pad),
  width: Math.min(info.width, maxX + pad + 1) - Math.max(0, minX - pad),
  height: Math.min(info.height, maxY + pad + 1) - Math.max(0, minY - pad),
};
const word = await sharp(rgba, { raw: { width: info.width, height: info.height, channels: 4 } })
  .extract(crop)
  .resize({ width: 640 })
  .png({ compressionLevel: 9 })
  .toFile('public/brand/wordmark.png');
console.log(`wordmark.png ${word.width}x${word.height} (aspect ${(word.width / word.height).toFixed(3)})`);

await sharp(SRC).resize(512, 512).png({ palette: true }).toFile('public/logo.png');
console.log('logo.png written');
