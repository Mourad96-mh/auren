import Link from 'next/link';
import { IconArrow } from './Icons';
import { GUIDES } from '@/lib/guides';

// Compact guide teaser: titles only, the full cards live on /guides/.
export default function GuideLinks() {
  return (
    <ul className="guide-links">
      {GUIDES.map((g, i) => (
        <li key={g.slug} className={`reveal d${i + 1}`}>
          <Link href={`/guides/${g.slug}/`} prefetch={false}>
            <span className="n" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
            <span className="t">{g.title}</span>
            <IconArrow />
          </Link>
        </li>
      ))}
    </ul>
  );
}
