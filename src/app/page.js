import Link from 'next/link';
import HeroVideo from '@/components/HeroVideo';
import Img from '@/components/Img';
import Faq from '@/components/Faq';
import ZonesMap from '@/components/ZonesMap';
import CtaBand from '@/components/CtaBand';
import JsonLd from '@/components/JsonLd';
import { IconArrow, IconWhatsApp } from '@/components/Icons';
import { SERVICES } from '@/lib/services';
import { GUIDES } from '@/lib/guides';
import { PILLARS, PROCESS, TYPOLOGIES, HOME_FAQ } from '@/lib/content';
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
              Auren Studio est un cabinet d’architecture basé à Casablanca. Nous accompagnons particuliers, investisseurs et entreprises
              de l’étude du terrain à la remise des clés : conception, permis de construire, chantier et aménagement intérieur.
            </p>
            <Link className="link-arrow" href="/le-studio/" prefetch={false}>
              Notre méthode <IconArrow />
            </Link>
          </div>
          <div className="pillars">
            {PILLARS.map((p, i) => (
              <div key={p.t} className={`pillar reveal d${i + 1}`}>
                <span className="pillar-num">0{i + 1}</span>
                <div>
                  <h3>{p.t}</h3>
                  <p>{p.d}</p>
                </div>
              </div>
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
            <p>
              De la conception au permis de construire, du chantier à l’aménagement intérieur : chaque étape de votre projet est prise
              en charge par le même cabinet.
            </p>
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
            <p>
              Une méthode claire, des décisions prises au bon moment et un budget suivi à chaque phase. Vous savez toujours où en est
              votre projet et ce qui vient ensuite.
            </p>
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

      {/* ---------- Typologies ---------- */}
      <section className="section" aria-labelledby="typo-title">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <p className="eyebrow">Tout type de projet</p>
              <h2 id="typo-title" className="h2">Du logement à l’équipement, nous concevons et réalisons</h2>
            </div>
            <p>
              Construction neuve, rénovation, extension ou surélévation : chaque programme a ses contraintes, ses usages et ses règles.
              Nous les maîtrisons.
            </p>
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
          <p className="typo-note">Photographies d’illustration. Nos réalisations seront présentées projet par projet.</p>
        </div>
      </section>

      {/* ---------- Statement ---------- */}
      <section className="section-sm section-alt" aria-label="Types de projets">
        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {[...MARQUEE, ...MARQUEE].map((w, i) => (
              <span key={i}>{w}</span>
            ))}
          </div>
        </div>
        <div className="container reveal statement-wrap">
          <p className="statement">
            « Villas, immeubles, commerces, bureaux, hôtels, riads, équipements… <em>quel que soit votre projet, nous le réalisons.</em> »
          </p>
        </div>
      </section>

      {/* ---------- Zones ---------- */}
      <section className="section" aria-labelledby="zones-title">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <p className="eyebrow">Zones d’intervention</p>
              <h2 id="zones-title" className="h2">Architecte à Casablanca et dans sa région</h2>
            </div>
            <p>
              Basés à Casablanca, nous connaissons les règles d’urbanisme de chaque secteur et les délais des services instructeurs.
              Nous intervenons dans toute la ville et sa périphérie ; les projets ailleurs au Maroc sont étudiés au cas par cas.
            </p>
          </div>
          <div className="reveal d1">
            <ZonesMap />
          </div>
        </div>
      </section>

      {/* ---------- Guides ---------- */}
      <section className="section section-alt" aria-labelledby="guides-title">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <p className="eyebrow">Guides</p>
              <h2 id="guides-title" className="h2">Bien préparer votre projet</h2>
            </div>
            <p>Honoraires, permis de construire, budget d’une villa : nos réponses aux questions que l’on nous pose le plus souvent.</p>
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

      <Faq items={HOME_FAQ} title={`Vos questions sur ${SITE.name}`} />
      <CtaBand />
    </>
  );
}
