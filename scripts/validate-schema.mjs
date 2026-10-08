// Validates all JSON-LD in dist/ against Google's documented rich-result requirements.
// Mirrors (does not replace) search.google.com/test/rich-results. Run: node scripts/validate-schema.mjs
// Exit code 1 if any errors (missing required fields / invalid JSON).
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { resolve, relative } from 'node:path'

const distDir = resolve('out')
function walk(dir) {
  let out = []
  for (const e of readdirSync(dir)) {
    const p = resolve(dir, e)
    if (statSync(p).isDirectory()) out = out.concat(walk(p))
    else if (e.endsWith('.html')) out.push(p)
  }
  return out
}

const has = (o, k) => o && o[k] !== undefined && o[k] !== null && o[k] !== ''
const errs = []
const warns = []
let blockCount = 0

function validate(type, o, ctx) {
  const E = (m) => errs.push(`${ctx} [${type}] ✗ ${m}`)
  const W = (m) => warns.push(`${ctx} [${type}] ⚠ ${m}`)
  switch (type) {
    case 'Course':
      if (!has(o, 'name')) E('missing required "name"')
      if (!has(o, 'description')) E('missing required "description"')
      if (!has(o, 'provider')) E('missing required "provider"')
      if (!has(o, 'offers') && !has(o, 'hasCourseInstance')) W('no "offers" or "hasCourseInstance" (limits enhanced Course result)')
      if (has(o, 'hasCourseInstance') && !has(o.hasCourseInstance, 'courseMode')) W('hasCourseInstance missing "courseMode"')
      if (has(o, 'offers')) {
        const of = Array.isArray(o.offers) ? o.offers[0] : o.offers
        if (!has(of, 'price') && !has(of, 'priceSpecification')) W('offers missing "price"')
        if (!has(of, 'priceCurrency') && !has(of, 'priceSpecification')) W('offers missing "priceCurrency"')
      }
      break
    case 'Product':
      if (!has(o, 'name')) E('missing required "name"')
      if (!has(o, 'image')) W('missing recommended "image"')
      if (!has(o, 'offers') && !has(o, 'review') && !has(o, 'aggregateRating')) W('add offers/review/aggregateRating for the Product rich result')
      if (has(o, 'offers')) {
        const of = Array.isArray(o.offers) ? o.offers[0] : o.offers
        if (!has(of, 'price') && !has(of, 'priceSpecification')) E('offers missing "price"')
        if (!has(of, 'priceCurrency') && !has(of, 'priceSpecification')) E('offers missing "priceCurrency"')
        if (!has(of, 'availability')) W('offers missing recommended "availability"')
        // Merchant listings (free Shopping results) also want these two:
        if (!has(of, 'shippingDetails')) W('offers missing "shippingDetails" (merchant listing)')
        if (!has(of, 'hasMerchantReturnPolicy')) W('offers missing "hasMerchantReturnPolicy" (merchant listing)')
      }
      break
    case 'FAQPage':
      if (!Array.isArray(o.mainEntity) || o.mainEntity.length === 0) E('mainEntity must be a non-empty array of Question')
      else for (const q of o.mainEntity) {
        if (!has(q, 'name')) E('Question missing "name"')
        if (!has(q, 'acceptedAnswer') || !has(q.acceptedAnswer, 'text')) E('Question missing acceptedAnswer.text')
      }
      W('FAQ rich results limited by Google to authoritative gov/health sites — markup valid but unlikely to surface')
      break
    case 'BreadcrumbList':
      if (!Array.isArray(o.itemListElement) || o.itemListElement.length === 0) E('itemListElement must be a non-empty array')
      else o.itemListElement.forEach((li, i) => {
        if (!has(li, 'position')) E(`ListItem[${i}] missing "position"`)
        if (!has(li, 'name')) E(`ListItem[${i}] missing "name"`)
        if (!has(li, 'item')) W(`ListItem[${i}] missing "item" (ok only for last crumb)`)
      })
      break
    case 'Article':
    case 'NewsArticle':
    case 'BlogPosting':
      if (!has(o, 'headline')) E('missing required "headline"')
      if (!has(o, 'image')) W('missing recommended "image"')
      if (!has(o, 'datePublished')) W('missing recommended "datePublished"')
      if (!has(o, 'author')) W('missing recommended "author"')
      if (has(o, 'publisher') && !has(o.publisher, 'logo')) W('publisher missing "logo"')
      break
    case 'ItemList':
      if (!Array.isArray(o.itemListElement) || o.itemListElement.length === 0) E('itemListElement must be a non-empty array')
      else o.itemListElement.forEach((li, i) => {
        if (!has(li, 'position')) E(`ListItem[${i}] missing "position"`)
        // Google's carousel "summary page" format uses `url`; the "all-in-one" format uses `item`.
        if (!has(li, 'item') && !has(li, 'url')) E(`ListItem[${i}] missing "item" or "url"`)
      })
      break
    case 'Organization':
    case 'LocalBusiness':
    case 'ProfessionalService':
      if (!has(o, 'name')) E('missing "name"')
      if (!has(o, 'url')) W('missing recommended "url"')
      if (!has(o, 'logo')) W('missing recommended "logo"')
      if (!has(o, 'address')) W('missing recommended "address"')
      break
    default:
      W(`no validator for @type "${type}" (skipped)`)
  }
}

for (const f of walk(distDir).sort()) {
  const ctx = relative(distDir, f).replace(/\\/g, '/')
  const html = readFileSync(f, 'utf8')
  for (const b of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    blockCount++
    let json
    try { json = JSON.parse(b[1]) } catch (e) { errs.push(`${ctx} ✗ INVALID JSON: ${e.message}`); continue }
    // A block may be a node, an array of nodes, or { "@context", "@graph": [...] } —
    // without unwrapping @graph, every node in it was silently skipped as type "undefined".
    const nodes = (Array.isArray(json) ? json : [json]).flatMap((o) => (Array.isArray(o?.['@graph']) ? o['@graph'] : [o]))
    for (const o of nodes) {
      const t = o['@type']
      if (Array.isArray(t)) t.forEach((tt) => validate(tt, o, ctx))
      else validate(t, o, ctx)
    }
  }
}

console.log(`Scanned ${walk(distDir).length} pages, ${blockCount} JSON-LD blocks.\n`)
if (errs.length) { console.log(`✗ ${errs.length} ERROR(S):`); errs.forEach((e) => console.log('  ' + e)) }
else console.log('✓ No errors — all blocks parse and meet required fields for their type.')
const wCount = {}
warns.forEach((w) => { const k = w.replace(/^[^[]+/, ''); wCount[k] = (wCount[k] || 0) + 1 })
const uniq = Object.keys(wCount)
if (uniq.length) { console.log(`\n⚠ ${warns.length} notice(s) (${uniq.length} unique):`); uniq.forEach((k) => console.log(`  ×${wCount[k]} ${k}`)) }
process.exit(errs.length ? 1 : 0)
