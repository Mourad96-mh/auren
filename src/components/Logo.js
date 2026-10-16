import { useId } from 'react';

// Auren Studio logo (client's official logo, 2026-10). The mark, a brushed-gold "A" whose
// crossbar is a ribbon sweeping out of the triangle, is redrawn as SVG from
// assets-src/logo/auren-logo-client.jpeg (coordinates are the source's pixels).
// The AUREN wordmark is a raster mask (public/brand/wordmark.png, see scripts/make-logo.mjs)
// coloured in CSS; STUDIO is set in HTML.
export const MARK_VIEWBOX = '130 100 1010 735';
export const MARK_PATHS = (id) => (
  <>
    <defs>
      <linearGradient id={`${id}t`} gradientUnits="userSpaceOnUse" x1="200" y1="120" x2="660" y2="700">
        <stop offset="0" stopColor="#7d5220" />
        <stop offset="0.45" stopColor="#c08c4c" />
        <stop offset="1" stopColor="#8f6129" />
      </linearGradient>
      <linearGradient id={`${id}b`} gradientUnits="userSpaceOnUse" x1="200" y1="790" x2="640" y2="480">
        <stop offset="0" stopColor="#b88648" />
        <stop offset="0.6" stopColor="#e2bd80" />
        <stop offset="1" stopColor="#c99a5a" />
      </linearGradient>
      <linearGradient id={`${id}r`} gradientUnits="userSpaceOnUse" x1="560" y1="420" x2="1130" y2="820">
        <stop offset="0" stopColor="#c4924f" />
        <stop offset="0.38" stopColor="#f2dba4" />
        <stop offset="0.7" stopColor="#c99550" />
        <stop offset="1" stopColor="#9a6a2c" />
      </linearGradient>
    </defs>
    <path d="M578 110H602L176 795H138Z" fill="#6e4718" />
    <path d="M602 110H644V795H176Z" fill={`url(#${id}t)`} />
    <path d="M176 795C440 545 540 475 644 466V795Z" fill={`url(#${id}b)`} />
    <path
      d="M176 795C400 590 540 450 644 422C720 398 770 382 815 386C920 398 1085 590 1130 828C1095 730 1010 615 860 548C770 505 700 470 644 466C540 475 440 545 176 795Z"
      fill={`url(#${id}r)`}
    />
  </>
);

export function LogoMark({ className = 'logo-mark' }) {
  const id = useId().replace(/:/g, '');
  return (
    <svg className={className} viewBox={MARK_VIEWBOX} aria-hidden="true">
      {MARK_PATHS(id)}
    </svg>
  );
}

export default function Logo({ className = '' }) {
  return (
    <span className={`logo ${className}`}>
      <LogoMark />
      <span className="logo-text">
        <span className="logo-name" role="img" aria-label="Auren" />
        <span className="logo-sub">Studio</span>
      </span>
    </span>
  );
}
