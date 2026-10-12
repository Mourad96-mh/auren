import Link from 'next/link';
import Img from '@/components/Img';
import Breadcrumbs from '@/components/Breadcrumbs';
import CtaBand from '@/components/CtaBand';
import JsonLd from '@/components/JsonLd';
import ProjectGallery from '@/components/ProjectGallery';
import { IconArrow } from '@/components/Icons';
import { PROJECTS, TYPOLOGIES } from '@/lib/content';
import { pageMeta, projectsLd } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Projets et réalisations : villas, commerces | Auren Studio',
  description:
    'Villa F. Signature à Témara, Villa H Signature à Bouskoura, Lara’s Corner à Dar Bouazza : les projets d’Auren Studio et les programmes que nous concevons.',
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
            Villas, commerces, habitat, tertiaire, hôtellerie : en construction neuve comme en transformation, chaque programme appelle
            ses propres réponses. Découvrez nos derniers projets, puis les typologies que nous concevons et réalisons.
          </p>
        </div>
      </section>

      {/* ---------- Réalisations ---------- */}
      <section className="section" style={{ paddingTop: 10 }} aria-label="Nos projets">
        <div className="container">
          {PROJECTS.map((p, i) => (
            <article key={p.slug} id={p.slug} className="pj">
              <header className="pj-head reveal">
                <div>
                  <p className="eyebrow">Projet 0{i + 1}</p>
                  <h2 className="h2">{p.t}</h2>
                </div>
                <dl className="pj-meta">
                  <div><dt>Programme</dt><dd>{p.programme}</dd></div>
                  <div><dt>Lieu</dt><dd>{p.lieu}, Maroc</dd></div>
                  <div><dt>Année</dt><dd>{p.annee}</dd></div>
                </dl>
              </header>
              <ProjectGallery project={p} />
              <div className="pj-foot">
                <span>Perspectives 3D</span>
                <Link className="link-arrow" href={`/services/${SERVICE_FOR[p.type]}/`} prefetch={false}>
                  Le service associé <IconArrow />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- Typologies ---------- */}
      <section className="section section-alt" aria-labelledby="typo-title">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <p className="eyebrow">Typologies</p>
              <h2 id="typo-title" className="h2">Du logement à l’équipement, nous concevons et réalisons</h2>
            </div>
            <p>Construction neuve, rénovation, extension ou surélévation : chaque programme a ses contraintes, ses usages et ses règles.</p>
          </div>
          {TYPOLOGIES.map((t, i) => (
            <article key={t.slug} id={t.slug} className="split reveal" style={{ marginBottom: 90 }}>
              <div className="media parallax" style={i % 2 ? { order: 2 } : undefined}>
                <Img name={t.img} alt={`${t.t} : illustration`} sizes="(max-width: 900px) 100vw, 50vw" />
              </div>
              <div>
                <p className="eyebrow">0{i + 1}</p>
                <h3 className="h2">{t.t}</h3>
                <p className="lead">{t.d}</p>
                <Link className="link-arrow" href={`/services/${SERVICE_FOR[t.slug]}/`} prefetch={false}>
                  Le service associé <IconArrow />
                </Link>
              </div>
            </article>
          ))}
          <p className="typo-note">Photographies d’illustration pour les typologies ; nos projets sont présentés plus haut.</p>
        </div>
      </section>
      <JsonLd data={projectsLd(PROJECTS)} />
      <CtaBand title="Un projet en tête ?" />
    </>
  );
}
