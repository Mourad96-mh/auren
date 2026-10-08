import Link from 'next/link';
import Img from '@/components/Img';
import Breadcrumbs from '@/components/Breadcrumbs';
import CtaBand from '@/components/CtaBand';
import Faq from '@/components/Faq';
import JsonLd from '@/components/JsonLd';
import { IconArrow, IconWhatsApp } from '@/components/Icons';
import { SERVICES } from '@/lib/services';
import { GUIDES } from '@/lib/guides';
import { PROCESS } from '@/lib/content';
import { absUrl, whatsappLink } from '@/lib/site';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Services d’architecte à Casablanca | Auren Studio',
  description:
    "Conception, permis de construire, suivi de chantier, rénovation, surélévation, architecture d'intérieur et 3D : nos services d'architecte à Casablanca.",
  path: '/services/',
});

const itemList = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Services Auren Studio',
  itemListElement: SERVICES.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: s.title,
    item: absUrl(`/services/${s.slug}/`),
  })),
};

const bySlug = Object.fromEntries(SERVICES.map((s) => [s.slug, s]));

// Two ways to hire the studio.
const FORMULAS = [
  {
    k: 'Mission complète',
    t: 'De la première esquisse à la remise des clés',
    d: 'Un seul architecte porte votre projet du début à la fin : il conçoit, obtient les autorisations, choisit les entreprises avec vous et dirige le chantier.',
    points: [
      'Un interlocuteur unique, aucune perte d’information entre les étapes',
      'Un budget estimé dès l’esquisse et suivi jusqu’à la réception',
      'Un chantier conforme au dossier autorisé',
    ],
    services: ['conception-architecturale', 'plans-et-autorisations', 'suivi-de-chantier', 'architecture-interieur'],
    note: 'Recommandée pour une construction neuve, une villa ou un immeuble.',
  },
  {
    k: 'Mission à la carte',
    t: 'Une étape précise, quand vous en avez besoin',
    d: 'Vous avez déjà une partie de l’équipe ou du projet : nous intervenons exactement là où il manque une expertise.',
    points: [
      'Un dossier de permis à monter ou à débloquer',
      'Un chantier à reprendre en main',
      'Un intérieur à repenser, un avis avant d’acheter',
    ],
    services: ['plans-et-autorisations', 'suivi-de-chantier', 'renovation-extension-surelevation', '3d-expertise-conseil'],
    note: 'Proposition écrite après un premier rendez-vous.',
  },
];

// "Where do I start?" — each situation points to the services it actually needs.
const SITUATIONS = [
  { t: 'J’ai un terrain et je veux construire', d: 'Vérifier ce que le terrain permet, concevoir, obtenir le permis puis construire sans dériver.', s: ['conception-architecturale', 'plans-et-autorisations', 'suivi-de-chantier'] },
  { t: 'J’hésite à acheter un terrain ou un bien', d: 'Savoir avant de signer : règles d’urbanisme, potentiel, état du bâtiment et coût des travaux.', s: ['3d-expertise-conseil', 'conception-architecturale'] },
  { t: 'Je veux agrandir ou surélever', d: 'Faisabilité structurelle, plans de transformation et autorisation adaptée à l’existant.', s: ['renovation-extension-surelevation', 'plans-et-autorisations'] },
  { t: 'Mon chantier dérape ou est bloqué', d: 'Un diagnostic, une reprise en main des entreprises, du planning et des paiements.', s: ['suivi-de-chantier', '3d-expertise-conseil'] },
  { t: 'Je veux repenser un intérieur', d: 'Distribution, matériaux, lumière et mobilier sur mesure, visualisés en 3D avant les travaux.', s: ['architecture-interieur', '3d-expertise-conseil'] },
  { t: 'J’ouvre un commerce, un bureau ou un hôtel', d: 'Un espace qui sert l’exploitation et l’image, conforme et livré dans les délais.', s: ['architecture-interieur', 'conception-architecturale', 'plans-et-autorisations'] },
];

const FAQ = [
  {
    q: 'Puis-je vous confier une seule étape de mon projet ?',
    a: 'Oui. En mission à la carte, nous pouvons monter uniquement le dossier de permis, reprendre le suivi d’un chantier, concevoir un intérieur ou donner un avis technique avant un achat.',
  },
  {
    q: 'Comment se déroule le premier rendez-vous ?',
    a: 'Au studio, sur votre terrain ou en visioconférence. Nous écoutons votre projet, regardons les documents dont vous disposez (titre foncier, plans existants, note de renseignements) et vous indiquons la mission adaptée.',
  },
  {
    q: 'Combien coûtent vos services ?',
    a: 'Les honoraires dépendent de la mission (complète ou partielle), de la surface et de la complexité du projet. Nous établissons une proposition écrite après le premier rendez-vous ; notre guide sur le prix d’un architecte donne des repères.',
  },
  {
    q: 'Travaillez-vous avec des bureaux d’études et des géomètres ?',
    a: 'Oui. Nous coordonnons le géomètre, le bureau d’études structure et fluides et les autres intervenants pour que vous n’ayez qu’un seul interlocuteur.',
  },
  {
    q: 'Je vis à l’étranger : pouvez-vous suivre mon projet à distance ?',
    a: 'Oui. Les validations se font à distance, chaque visite de chantier donne lieu à un compte rendu avec photos et les rendez-vous peuvent se tenir en visioconférence.',
  },
  {
    q: 'Intervenez-vous en dehors de Casablanca ?',
    a: 'Nous intervenons dans toute la ville et sa périphérie (Dar Bouazza, Bouskoura, Mohammedia, Berrechid…). Les projets ailleurs au Maroc sont étudiés au cas par cas.',
  },
];

const rdv = (t) => whatsappLink(`Bonjour Auren Studio, je souhaite un rendez-vous pour : ${t}.`);

export default function ServicesPage() {
  return (
    <>
      {/* ---------- Hero + index ---------- */}
      <section className="page-hero svc-hero">
        <div className="container svc-hero-grid">
          <div>
            <Breadcrumbs items={[{ name: 'Services', path: '/services/' }]} />
            <p className="eyebrow">Nos services</p>
            <h1 className="h1">Services d’architecte à Casablanca</h1>
            <p className="lead">
              Six expertises complémentaires pour mener un projet de bout en bout, ou intervenir sur une étape précise : un permis de
              construire, un chantier à reprendre, un intérieur à repenser.
            </p>
            <div className="hero-actions svc-hero-actions">
              <a className="btn btn-wa" href={whatsappLink('Bonjour Auren Studio, je souhaite parler de mon projet.')} target="_blank" rel="noopener">
                <IconWhatsApp /> Parler de mon projet
              </a>
              <a className="btn btn-outline" href="#choisir">Par où commencer ?</a>
            </div>
          </div>
          <nav className="svc-index" aria-label="Sommaire des services">
            <p className="svc-index-title">Sommaire</p>
            <ol>
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <a href={`#${s.slug}`}>
                    <span className="n">{s.num}</span>
                    <span className="t">{s.title}</span>
                    <IconArrow />
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </section>

      {/* ---------- Two formulas ---------- */}
      <section className="section section-alt" aria-labelledby="formules-title">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <p className="eyebrow">Deux façons de travailler ensemble</p>
              <h2 id="formules-title" className="h2">Tout le projet, <em>ou seulement une étape</em></h2>
            </div>
            <p>Vous choisissez le niveau d’accompagnement. Dans les deux cas, c’est le même cabinet, la même méthode et la même exigence.</p>
          </div>
          <div className="formulas">
            {FORMULAS.map((f, i) => (
              <article key={f.k} className={`formula reveal d${i + 1} ${i === 0 ? 'formula-dark' : ''}`}>
                <p className="formula-k">{f.k}</p>
                <h3>{f.t}</h3>
                <p className="formula-d">{f.d}</p>
                <ul className="checks">
                  {f.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <div className="formula-services">
                  {f.services.map((slug) => (
                    <a key={slug} href={`#${slug}`}>{bySlug[slug].num} · {bySlug[slug].title}</a>
                  ))}
                </div>
                <p className="formula-note">{f.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- One chapter per service ---------- */}
      <section className="section" aria-labelledby="expertises-title">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <p className="eyebrow">Six expertises</p>
              <h2 id="expertises-title" className="h2">Ce que nous faisons, <em>en détail</em></h2>
            </div>
            <p>Pour chaque service : ce qu’il couvre, les étapes et les documents que vous recevez. Chaque fiche renvoie vers sa page complète.</p>
          </div>

          <div className="svc-chapters">
            {SERVICES.map((s, i) => (
              <article key={s.slug} id={s.slug} className={`svc-chapter ${i % 2 ? 'is-flip' : ''}`}>
                <div className="svc-chapter-media reveal">
                  <Link href={`/services/${s.slug}/`} prefetch={false} tabIndex={-1} aria-hidden="true" className="media">
                    <Img name={s.img} alt="" sizes="(max-width: 960px) 100vw, 42vw" />
                  </Link>
                  <span className="svc-chapter-num" aria-hidden="true">{s.num}</span>
                </div>
                <div className="svc-chapter-body reveal d1">
                  <p className="eyebrow">Service {s.num}</p>
                  <h3 className="svc-chapter-title">
                    <Link href={`/services/${s.slug}/`} prefetch={false}>{s.title}</Link>
                  </h3>
                  <p className="svc-chapter-lead">{s.lead}</p>
                  <div className="svc-chapter-cols">
                    <div>
                      <h4>Ce que vous recevez</h4>
                      <ul className="checks">
                        {s.deliverables.map((d) => (
                          <li key={d}>{d}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4>Les étapes</h4>
                      <ol className="mini-steps">
                        {s.steps.map((st) => (
                          <li key={st.t}>
                            <b>{st.t}</b>
                            <span>{st.d}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                  <div className="svc-chapter-actions">
                    <Link className="link-arrow" href={`/services/${s.slug}/`} prefetch={false} aria-label={`Tout savoir : ${s.title}`}>
                      Tout savoir sur ce service <IconArrow />
                    </Link>
                    <a className="svc-rdv" href={rdv(s.title)} target="_blank" rel="noopener">
                      <IconWhatsApp /> Demander un rendez-vous
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Where to start ---------- */}
      <section id="choisir" className="section section-alt" aria-labelledby="choisir-title">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <p className="eyebrow">Par où commencer ?</p>
              <h2 id="choisir-title" className="h2">Partez de votre situation</h2>
            </div>
            <p>Vous ne savez pas quel service demander ? Trouvez votre cas : nous vous indiquons les expertises utiles, dans l’ordre.</p>
          </div>
          <div className="situations">
            {SITUATIONS.map((x, i) => (
              <article key={x.t} className={`situation reveal d${(i % 3) + 1}`}>
                <span className="situation-n" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <h3>{x.t}</h3>
                <p>{x.d}</p>
                <ul>
                  {x.s.map((slug) => (
                    <li key={slug}>
                      <Link href={`/services/${slug}/`} prefetch={false}>{bySlug[slug].title}</Link>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Method ---------- */}
      <section className="section section-dark" aria-labelledby="methode-title">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <p className="eyebrow">Notre méthode</p>
              <h2 id="methode-title" className="h2">Quelle que soit la mission, <em>la même rigueur</em></h2>
            </div>
            <p>Chaque phase se termine par une validation commune : rien n’avance sans votre accord, rien n’est découvert trop tard.</p>
          </div>
          <ol className="process">
            {PROCESS.map((p, i) => (
              <li key={p.k} className={`reveal d${(i % 3) + 1}`}>
                <h3>{p.k}</h3>
                <p>{p.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Faq items={FAQ} title="Vos questions sur nos services" id="faq-services" />

      {/* ---------- Guides ---------- */}
      <section className="section section-alt" aria-labelledby="guides-title">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <p className="eyebrow">Avant de vous lancer</p>
              <h2 id="guides-title" className="h2">Nos guides pour bien préparer votre projet</h2>
            </div>
            <p>Honoraires, permis de construire, budget d’une villa : des repères concrets, à lire avant le premier rendez-vous.</p>
          </div>
          <div className="guides-grid">
            {GUIDES.map((g, i) => (
              <article key={g.slug} className={`guide-card reveal d${i + 1}`}>
                <div className="media">
                  <Img name={g.img} alt="" sizes="(max-width: 900px) 100vw, 33vw" />
                </div>
                <div className="guide-card-body">
                  <h3>
                    <Link href={`/guides/${g.slug}/`} prefetch={false}>{g.title}</Link>
                  </h3>
                  <p>{g.excerpt}</p>
                  <Link className="link-arrow" href={`/guides/${g.slug}/`} prefetch={false} aria-label={`Lire le guide : ${g.nav}`}>
                    Lire le guide <IconArrow />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <JsonLd data={itemList} />
      <CtaBand />
    </>
  );
}
