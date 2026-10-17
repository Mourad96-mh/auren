import Link from 'next/link';
import HeroVideo from '@/components/HeroVideo';
import Img from '@/components/Img';
import Faq from '@/components/Faq';
import CtaBand from '@/components/CtaBand';
import JsonLd from '@/components/JsonLd';
import GuideLinks from '@/components/GuideLinks';
import { IconArrow, IconWhatsApp } from '@/components/Icons';
import { SERVICES } from '@/lib/services';
import { PILLARS, PROCESS, PROJECTS, TYPOLOGIES, HOME_FAQ } from '@/lib/content';
import { SITE, ZONES, whatsappLink } from '@/lib/site';
import { heroVideoLd, pageMeta } from '@/lib/seo';

// Only counts derived from the site's own data: no invented years, projects or clients.
const FIGURES = [
  { n: SERVICES.length, l: 'expertises réunies dans un même cabinet' },
  { n: PROCESS.length, l: 'étapes, de l’écoute à la remise des clés' },
  { n: ZONES.casablanca.length + ZONES.peripherie.length, l: 'quartiers et villes couverts autour de Casablanca' },
  { n: 1, l: 'interlocuteur unique du début à la fin' },
];
const MARQUEE = ['Villas', 'Immeubles', 'Commerces', 'Bureaux', 'Hôtels', 'Riads', 'Intérieurs', 'Équipements'];

export const metadata = pageMeta({
  title: 'Architecte Casablanca, cabinet d’architecture | Auren Studio',
  description:
    "Cabinet d'architecture à Casablanca : villas, immeubles, permis de construire, suivi de chantier, rénovation, architecture d'intérieur. De l'esquisse à la clé.",
  path: '/',
});

export default function Home() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="hero" aria-labelledby="hero-title">
        <HeroVideo />
        <div className="container hero-content">
          <h1 id="hero-title">
            <span className="hero-kicker">Architecte et architecte d’intérieur à Casablanca</span>
            <span className="hero-title">
              Tous vos projets, de la première esquisse <em>à la dernière clé.</em>
            </span>
          </h1>
          <p className="hero-sub">
            Architecture, plans, autorisations, suivi de chantier et aménagement : nous concevons et réalisons tout type de projet.
          </p>
          <div className="hero-actions">
            <a className="btn btn-wa" href={whatsappLink('Bonjour Auren Studio, je souhaite parler de mon projet.')} target="_blank" rel="noopener">
              <IconWhatsApp /> Parler de mon projet
            </a>
            <Link className="btn btn-ghost" href="/services/" prefetch={false}>
              Découvrir nos services
            </Link>
          </div>
        </div>
      </section>
      <JsonLd data={heroVideoLd()} />

      {/* ---------- Manifesto ---------- */}
      <section className="section" aria-labelledby="studio-title">
        <div className="container manifesto">
          <div className="manifesto-text reveal">
            <p className="eyebrow">Auren Studio</p>
            <h2 id="studio-title" className="h2">
              Un seul architecte pour tous vos projets, <em>quelle que soit leur taille.</em>
            </h2>
            <p className="lead">
              Cabinet d’architecture à Casablanca, nous accompagnons particuliers, investisseurs et entreprises de l’étude du terrain à
              la remise des clés.
            </p>
            <Link className="link-arrow" href="/le-studio/" prefetch={false}>
              Découvrir le studio <IconArrow />
            </Link>
          </div>
          <div className="pillars">
            {PILLARS.map((p, i) => (
              <details key={p.t} className={`pillar reveal d${i + 1}`}>
                <summary>
                  <span className="pillar-num">0{i + 1}</span>
                  <h3>{p.t}</h3>
                </summary>
                <p>{p.d}</p>
              </details>
            ))}
          </div>
        </div>
        <div className="container">
          <dl className="figures">
            {FIGURES.map((f, i) => (
              <div key={f.l} className={`figure reveal d${Math.min(i + 1, 3)}`}>
                <dt className="figure-l">{f.l}</dt>
                <dd className="figure-n">{f.n}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ---------- Services ---------- */}
      <section className="section section-alt" aria-labelledby="services-title">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <p className="eyebrow">Nos services</p>
              <h2 id="services-title" className="h2">Six expertises, un même interlocuteur</h2>
            </div>
          </div>
          <div className="services-grid">
            {SERVICES.map((s, i) => (
              <article key={s.slug} className={`service-card reveal d${(i % 3) + 1}`}>
                <Link href={`/services/${s.slug}/`} className="media" prefetch={false} tabIndex={-1} aria-hidden="true">
                  <Img name={s.img} alt="" sizes="(max-width: 640px) 100vw, (max-width: 1020px) 50vw, 33vw" />
                  <span className="num">{s.num}</span>
                </Link>
                <h3>
                  <Link href={`/services/${s.slug}/`} prefetch={false}>{s.title}</Link>
                </h3>
                <p>{s.short}</p>
                <Link className="link-arrow" href={`/services/${s.slug}/`} prefetch={false} aria-label={`En savoir plus : ${s.title}`}>
                  En savoir plus <IconArrow />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Process ---------- */}
      <section className="section section-dark" aria-labelledby="process-title">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <p className="eyebrow">Notre méthode</p>
              <h2 id="process-title" className="h2">De l’esquisse à la clé, en six étapes</h2>
            </div>
            <Link className="link-arrow" href="/le-studio/#methode" prefetch={false}>
              Le détail de chaque étape <IconArrow />
            </Link>
          </div>
          <ol className="process process-compact">
            {PROCESS.map((p, i) => (
              <li key={p.k} className={`reveal d${(i % 3) + 1}`}>
                <h3>{p.k}</h3>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Projets ---------- */}
      <section className="section" aria-labelledby="projets-title">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <p className="eyebrow">Nos projets</p>
              <h2 id="projets-title" className="h2">Derniers projets du studio</h2>
            </div>
          </div>
          <div className="pj-cards">
            {PROJECTS.map((p, i) => (
              <article key={p.slug} className={`pj-card reveal d${i + 1}`}>
                <Link href={`/projets/#${p.slug}`} className="media" prefetch={false} tabIndex={-1} aria-hidden="true">
                  <Img name={p.imgs[0].name} alt="" sizes="(max-width: 900px) 100vw, 33vw" />
                </Link>
                <p className="pj-card-meta">{p.lieu} · {p.annee}</p>
                <h3>
                  <Link href={`/projets/#${p.slug}`} prefetch={false}>{p.t}</Link>
                </h3>
                <p>{p.programme}</p>
              </article>
            ))}
          </div>
          <Link className="link-arrow pj-all" href="/projets/" prefetch={false}>
            Voir tous les projets <IconArrow />
          </Link>
        </div>
      </section>

      {/* ---------- Typologies ---------- */}
      <section className="section" aria-labelledby="typo-title">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <p className="eyebrow">Tout type de projet</p>
              <h2 id="typo-title" className="h2">Du logement à l’équipement, nous concevons et réalisons</h2>
            </div>
          </div>
          <div className="typo-grid">
            {TYPOLOGIES.map((t, i) => (
              <Link key={t.slug} href="/projets/" prefetch={false} className={`typo parallax reveal d${(i % 3) + 1}`}>
                <Img name={t.img} alt="" sizes={i < 2 ? '(max-width: 900px) 100vw, 60vw' : '(max-width: 900px) 50vw, 33vw'} />
                <div className="typo-body">
                  <h3>{t.t}</h3>
                  <p>{t.d}</p>
                </div>
              </Link>
            ))}
          </div>
          <p className="typo-note">Photographies d’illustration.</p>
        </div>
      </section>

      {/* ---------- Marquee ---------- */}
      <div aria-hidden="true">
        <div className="marquee">
          <div className="marquee-track">
            {[...MARQUEE, ...MARQUEE].map((w, i) => (
              <span key={i}>{w}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ---------- Guides ---------- */}
      <section className="section section-alt" aria-labelledby="guides-title">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <p className="eyebrow">Guides</p>
              <h2 id="guides-title" className="h2">Bien préparer votre projet</h2>
            </div>
            <Link className="link-arrow" href="/guides/" prefetch={false}>
              Tous les guides <IconArrow />
            </Link>
          </div>
          <GuideLinks />
        </div>
      </section>

      <Faq items={HOME_FAQ} title={`Vos questions sur ${SITE.name}`} />
      <CtaBand />
    </>
  );
}
