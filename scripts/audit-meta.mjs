// Checks every built page: title/description length (entities decoded), one H1, canonical, OG image, JSON-LD types.
import { readdirSync, statSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
const walk = (d) => readdirSync(d).flatMap((f) => { const p = join(d, f); return statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') ? [p] : []; });
const dec = (s = '') => s.replace(/&#x27;|&#39;/g, "'").replace(/&amp;/g, '&').replace(/&quot;/g, '"');
let bad = 0;
const titles = new Map();
for (const f of walk('out')) {
  if (/404|_not-found/.test(f)) continue;
  const h = readFileSync(f, 'utf8');
  const head = h.slice(0, h.indexOf('</head>'));
  const title = dec(head.match(/<title>([^<]*)/)?.[1]);
  const desc = dec(head.match(/name="description" content="([^"]*)/)?.[1]);
  const canon = head.match(/rel="canonical" href="([^"]*)/)?.[1];
  const og = head.match(/property="og:image" content="([^"]*)/)?.[1];
  const h1 = (h.match(/<h1[\s>]/g) || []).length;
  const ld = [...h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => { const j = JSON.parse(m[1]); return j['@type'] || (j['@graph'] || []).map((x) => x['@type']).join('+'); });
  const issues = [];
  if (!title || title.length > 60 || title.length < 30) issues.push(`title ${title?.length}`);
  if (!desc || desc.length > 160 || desc.length < 110) issues.push(`desc ${desc?.length}`);
  if (h1 !== 1) issues.push(`h1 x${h1}`);
  if (!canon) issues.push('no canonical');
  if (!og) issues.push('no og:image');
  if (titles.has(title)) issues.push('dup title');
  titles.set(title, f);
  if (issues.length) bad++;
  console.log(`${issues.length ? '✗' : '✓'} ${f.replaceAll('\\', '/').replace('out', '').replace('index.html', '')} | ${title?.length}c ${desc?.length}c | ${ld.join(', ')} ${issues.length ? '<< ' + issues.join('; ') : ''}`);
}
console.log(bad ? `${bad} page(s) with issues` : 'all pages OK');
