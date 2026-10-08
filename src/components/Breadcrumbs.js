import Link from 'next/link';
import JsonLd from './JsonLd';
import { breadcrumbLd } from '@/lib/seo';

export default function Breadcrumbs({ items }) {
  const all = [{ name: 'Accueil', path: '/' }, ...items];
  return (
    <>
      <nav className="crumbs" aria-label="Fil d’Ariane">
        <ol>
          {all.map((it, i) => (
            <li key={it.path}>
              {i < all.length - 1 ? <Link href={it.path} prefetch={false}>{it.name}</Link> : <span aria-current="page">{it.name}</span>}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd data={breadcrumbLd(all)} />
    </>
  );
}
