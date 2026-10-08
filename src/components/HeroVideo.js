'use client';

import { useEffect, useRef, useState } from 'react';

// Chapters match the montage in public/media/hero.mp4 (one clip every 3.4 s, see README).
const CHAPTERS = [
  { t: 0, label: 'Inspiration' },
  { t: 3.4, label: 'Matières' },
  { t: 6.8, label: 'Agencement' },
  { t: 10.2, label: 'Finitions' },
  { t: 13.6, label: 'Livraison' },
];

export default function HeroVideo() {
  const ref = useRef(null);
  const [chapter, setChapter] = useState(0);
  const [src, setSrc] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      v.pause(); // reduced motion: the poster stays, no loop
      return;
    }
    // Attach the video only once the page has painted: the poster + headline stay the LCP, the loop follows.
    const start = () => setSrc(true);
    let idle;
    if (document.readyState === 'complete') idle = setTimeout(start, 600);
    else window.addEventListener('load', () => (idle = setTimeout(start, 600)), { once: true });
    const onTime = () => {
      let i = 0;
      CHAPTERS.forEach((c, idx) => {
        if (v.currentTime >= c.t) i = idx;
      });
      setChapter(i);
    };
    v.addEventListener('timeupdate', onTime);
    return () => {
      clearTimeout(idle);
      v.removeEventListener('timeupdate', onTime);
    };
  }, []);

  useEffect(() => {
    const v = ref.current;
    if (!src || !v) return;
    v.load(); // <source> children were added after mount
    v.play().catch(() => {}); // autoplay refused: the poster stays
  }, [src]);

  return (
    <>
      <video
        ref={ref}
        className="hero-video"
        muted
        loop
        playsInline
        preload="none"
        poster="/img/hero-poster-1600.jpg"
        aria-hidden="true"
      >
        {src && <source src="/media/hero.webm" type="video/webm" />}
        {src && <source src="/media/hero.mp4" type="video/mp4" />}
      </video>
      <div className="hero-chapters" aria-hidden="true">
        {CHAPTERS.map((c, i) => (
          <span key={c.label} className={i === chapter ? 'is-active' : i < chapter ? 'is-done' : ''}>
            <i />
            {c.label}
          </span>
        ))}
      </div>
    </>
  );
}
