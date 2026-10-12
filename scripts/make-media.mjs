// Converts assets-src/*.jpg into resized WebP (+ JPG fallback for the hero poster) in public/img/.
// assets-src/projets/*.jpg are the studio's own renders: native ratio kept (some are portrait), never upscaled.
import sharp from 'sharp';
import { readdirSync, mkdirSync, writeFileSync } from 'node:fs';

const SRC = 'assets-src';
const OUT = 'public/img';
const WIDTHS = [800, 1600];
mkdirSync(OUT, { recursive: true });

const sizes = {};
for (const file of readdirSync(SRC).filter((f) => f.endsWith('.jpg'))) {
  const name = file.replace(/\.jpg$/, '');
  const base = sharp(`${SRC}/${file}`).rotate();
  for (const w of WIDTHS) {
    const img = base.clone().resize({ width: w, height: Math.round((w * 2) / 3), fit: 'cover', position: 'attention' });
    await img.clone().webp({ quality: 74 }).toFile(`${OUT}/${name}-${w}.webp`);
    if (name === 'hero-poster') await img.clone().jpeg({ quality: 76, mozjpeg: true }).toFile(`${OUT}/${name}-${w}.jpg`);
  }
  sizes[name] = { w: 1600, h: 1067 };
  console.log('ok', name);
}

// assets-src/interieur/*.jpg: the studio's interior-design renders (service page gallery), same treatment.
for (const [dir, file] of ['projets', 'interieur'].flatMap((d) => readdirSync(`${SRC}/${d}`).filter((f) => f.endsWith('.jpg')).map((f) => [d, f]))) {
  const name = file.replace(/\.jpg$/, '');
  const base = sharp(`${SRC}/${dir}/${file}`).rotate();
  let info;
  for (const w of WIDTHS) {
    info = await base.clone().resize({ width: w, withoutEnlargement: true }).webp({ quality: 78 }).toFile(`${OUT}/${name}-${w}.webp`);
  }
  sizes[name] = { w: info.width, h: info.height };
  console.log('ok', name, `${info.width}x${info.height}`);
}
writeFileSync(`${OUT}/sizes.json`, JSON.stringify(sizes, null, 1));
