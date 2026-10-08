import Link from 'next/link';
import Img from '@/components/Img';
import Breadcrumbs from '@/components/Breadcrumbs';
import CtaBand from '@/components/CtaBand';
import { IconArrow } from '@/components/Icons';
import { TYPOLOGIES } from '@/lib/content';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Projets : villas, immeubles, bureaux, hôtels | Auren Studio',
  description:
    "Villas, immeubles d'habitation, commerces, bureaux, hôtels, riads et équipements : les types de projets que conçoit et réalise Auren Studio à Casablanca.",
  path: '/projets/',
});

// Each typology points to the most relevant service page (internal linking plan).
const SERVICE_FOR = {
  villas: 'conception-architecturale',
  immeubles: 'plans-et-autorisations',
  commerces: 'architecture-interieur',
  bureaux: 'architecture-interieur',
  hotels: 'conception-architecturale',
  riads: 'renovation-extension-surelevation',
  equipements: 'conception-architecturale',
};

export default function ProjetsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ name: 'Projets', path: '/projets/' }]} />
          <p className="eyebrow">Projets</p>
          <h1 className="h1">Tout type de projet, quelle que soit sa taille</h1>
          <p className="lead">
            Habitat, tertiaire, commerce, hôtellerie, équipements : en construction neuve comme en transformation, chaque typologie
            appelle ses propres réponses. Voici les programmes que nous concevons et réalisons.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 10 }}>
        <div className="container">
          {TYPOLOGIES.map((t, i) => (
            <article key={t.slug} id={t.slug} className="split reveal" style={{ marginBottom: 90 }}>
              <div className="media parallax" style={i % 2 ? { order: 2 } : undefined}>
                <Img name={t.img} alt={`${t.t} : illustration`} sizes="(max-width: 900px) 100vw, 50vw" />
              </div>
              <div>
                <p className="eyebrow">0{i + 1}</p>
                <h2 className="h2">{t.t}</h2>
                <p className="lead">{t.d}</p>
                <Link className="link-arrow" href={`/services/${SERVICE_FOR[t.slug]}/`} prefetch={false}>
                  Le service associé <IconArrow />
                </Link>
              </div>
            </article>
          ))}
          <p className="typo-note">
            Photographies d’illustration. Les réalisations d’Auren Studio seront publiées ici projet par projet (programme, surface,
            lieu, mission).
          </p>
        </div>
      </section>
      <CtaBand title="Un projet en tête ?" />
    </>
  );
}
