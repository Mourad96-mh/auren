// Writes src/app/icon.svg (favicon): the gold mark on the dark ink square.
import { writeFileSync } from 'node:fs';
import { markSvg, MARK_W, MARK_H } from './brand-mark.mjs';

const s = 52 / MARK_W;
const tx = (64 - MARK_W * s) / 2;
const ty = (64 - MARK_H * s) / 2;
writeFileSync(
  'src/app/icon.svg',
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="10" fill="#17150f"/>${markSvg(`translate(${tx.toFixed(2)} ${ty.toFixed(2)}) scale(${s.toFixed(5)})`).replace(/\n\s*/g, '')}</svg>\n`,
);
console.log('icon.svg written');
