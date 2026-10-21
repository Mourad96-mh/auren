// Auren Studio logo (client's official logo, 2026-10-21: "SA" monogram + AUREN STUDIO).
// The parts are vectors traced from assets-src/logo/auren-logo-2026-10.jpeg by scripts/make-logo.mjs
// (public/brand/mark.svg, name.svg) and painted in CSS through masks, so the colour follows the context.
// The LUXURY | DESIGN | INTERIOR tagline is left out: it would be ~4 px tall at header size.
export default function Logo({ className = '' }) {
  return (
    <span className={`logo ${className}`} role="img" aria-label="Auren Studio">
      <span className="logo-mark" />
      <span className="logo-name" />
    </span>
  );
}
