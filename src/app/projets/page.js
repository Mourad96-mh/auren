import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import CtaBand from '@/components/CtaBand';
import JsonLd from '@/components/JsonLd';
import ProjectGallery from '@/components/ProjectGallery';
import { IconArrow } from '@/components/Icons';
import { PROJECTS } from '@/lib/content';
import { pageMeta, projectsLd } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Projets et réalisations : villas, commerces | Auren Studio',
  description:
    'Villa F. Signature à Témara, Villa H Signature à Bouskoura, Lara’s Corner à Dar Bouazza : les projets d’Auren Studio et les programmes que nous concevons.',
  path: '/projets/',
});

// Each project type points to the most relevant service page (internal linking plan).
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
            ses propres réponses. Découvrez nos derniers projets.
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

      <JsonLd data={projectsLd(PROJECTS)} />
      <CtaBand title="Un projet en tête ?" />
    </>
  );
}
