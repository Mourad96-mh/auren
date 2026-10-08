// Auren Studio logo: an "A" drawn as an architectural section — the legs form a gable,
// the crossbar is a bronze floor slab cantilevered past the right leg. Wordmark in Manrope.
export function LogoMark({ className = 'logo-mark' }) {
  return (
    <svg className={className} viewBox="0 0 40 40" aria-hidden="true">
      <path d="M7 36 20 4l13 32" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="miter" strokeMiterlimit="10" />
      <path d="M11.4 25.2H38" fill="none" stroke="var(--accent)" strokeWidth="2.4" />
    </svg>
  );
}

export default function Logo({ className = '' }) {
  return (
    <span className={`logo ${className}`}>
      <LogoMark />
      <span className="logo-text">
        <span className="logo-name">Auren</span>{' '}
        <span className="logo-sub">Studio</span>
      </span>
    </span>
  );
}
