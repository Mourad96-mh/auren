import Link from 'next/link';
import Img from '@/components/Img';
import Breadcrumbs from '@/components/Breadcrumbs';
import CtaBand from '@/components/CtaBand';
import { IconArrow } from '@/components/Icons';
import { GUIDES } from '@/lib/guides';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Guides : prix, permis, construire au Maroc | Auren Studio',
  description:
    "Honoraires d'architecte au Maroc, permis de construire à Casablanca, budget d'une villa : nos guides pour bien préparer votre projet de construction.",
  path: '/guides/',
});

export default function GuidesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ name: 'Guides', path: '/guides/' }]} />
          <p className="eyebrow">Guides</p>
          <h1 className="h1">Bien préparer son projet de construction</h1>
          <p className="lead">
            Les réponses claires aux questions que se posent nos clients avant de se lancer : combien coûte un architecte, comment obtenir
            un permis de construire, comment faire construire une villa au Maroc.
          </p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 10 }}>
        <div className="container guides-grid">
          {GUIDES.map((g, i) => (
            <article key={g.slug} className={`guide-card reveal d${i + 1}`}>
              <div className="media">
                <Img name={g.img} alt="" sizes="(max-width: 900px) 100vw, 33vw" />
              </div>
              <div className="guide-card-body">
                <h2 className="h3">
                  <Link href={`/guides/${g.slug}/`} prefetch={false}>{g.title}</Link>
                </h2>
                <p>{g.excerpt}</p>
                <Link className="link-arrow" href={`/guides/${g.slug}/`} prefetch={false} aria-label={`Lire le guide : ${g.nav}`}>
                  Lire le guide <IconArrow />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
