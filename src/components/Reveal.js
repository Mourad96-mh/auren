'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

// Adds .is-in to .reveal elements as they enter the viewport. Content stays visible without JS (see globals.css).
export default function Reveal() {
  const pathname = usePathname();
  useEffect(() => {
    document.documentElement.classList.add('js');
    const els = document.querySelectorAll('.reveal:not(.is-in)');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in');
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);
  return null;
}
