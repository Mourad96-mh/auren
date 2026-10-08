'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Logo from './Logo';

const NAV = [
  { href: '/services/', label: 'Services' },
  { href: '/projets/', label: 'Projets' },
  { href: '/le-studio/', label: 'Le studio' },
  { href: '/guides/', label: 'Guides' },
  { href: '/contact/', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const overHero = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  const solid = scrolled || !overHero || open;

  return (
    <header className={`site-header ${solid ? 'is-solid' : 'is-clear'}`}>
      <div className="container header-inner">
        <Link href="/" className="header-logo" aria-label="Auren Studio, accueil" prefetch={false}>
          <Logo />
        </Link>
        <nav id="main-nav" className={`main-nav ${open ? 'is-open' : ''}`} aria-label="Navigation principale">
          <ul>
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} prefetch={false} aria-current={pathname.startsWith(n.href) ? 'page' : undefined}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button
          type="button"
          className={`burger ${open ? 'is-open' : ''}`}
          aria-expanded={open}
          aria-controls="main-nav"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
