import Link from 'next/link';
import Img from '@/components/Img';
import Breadcrumbs from '@/components/Breadcrumbs';
import CtaBand from '@/components/CtaBand';
import { IconArrow } from '@/components/Icons';
import { PROCESS } from '@/lib/content';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Le studio : cabinet d’architecture à Casablanca | Auren',
  description:
    "Auren Studio, cabinet d'architecture à Casablanca : notre approche, notre méthode de l'esquisse à la remise des clés et nos engagements qualité et délais.",
  path: '/le-studio/',
});

const VALUES = [
  {
    t: 'Clarté',
    d: 'Des plans lisibles, des estimations expliquées, des comptes rendus après chaque visite. Vous comprenez chaque décision.',
  },
  {
    t: 'Exigence',
    d: 'Le détail dessiné avant d’être construit, des entreprises mises en concurrence, des travaux contrôlés sur place.',
  },
  {
    t: 'Justesse',
    d: 'Une architecture adaptée au climat, au terrain, au budget et à la façon dont vous vivez ou travaillez.',
  },
];

export default function StudioPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ name: 'Le studio', path: '/le-studio/' }]} />
          <p className="eyebrow">Le studio</p>
          <h1 className="h1">Un cabinet d’architecture à Casablanca, de l’esquisse à la clé</h1>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container split">
          <div className="media parallax reveal">
            <Img name="studio" alt="Escaliers sculpturaux en acier corten" sizes="(max-width: 900px) 100vw, 50vw" priority />
          </div>
          <div className="prose reveal d1">
            <p className="lead">
              Auren Studio est né d’une conviction : un projet de construction se réussit quand un même architecte le porte du premier
              croquis jusqu’à la remise des clés.
            </p>
            <p>
              Trop souvent, la conception, les autorisations et le chantier sont confiés à des intervenants qui ne se parlent pas. Les
              intentions se perdent, les budgets dérivent, les délais s’allongent. Nous faisons l’inverse : un interlocuteur unique, qui
              connaît votre projet dans ses moindres détails et le défend à chaque étape.
            </p>
            <p>
              Basés à Casablanca, nous concevons et réalisons tout type de projet : villas, immeubles, commerces, bureaux, hôtels, riads,
              équipements, en construction neuve comme en rénovation, extension ou surélévation. Nous nous entourons de bureaux d’études,
              géomètres et entreprises de confiance pour chaque mission.
            </p>
            <Link className="link-arrow" href="/services/" prefetch={false}>
              Voir nos services <IconArrow />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="values-title">
        <div className="container">
          <p className="eyebrow">Nos engagements</p>
          <h2 id="values-title" className="h2" style={{ marginBottom: 50 }}>
            Ce qui guide notre travail
          </h2>
          <div className="values">
            {VALUES.map((v, i) => (
              <div key={v.t} className={`reveal d${i + 1}`}>
                <h3 className="h3">{v.t}</h3>
                <p>{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark" aria-labelledby="method-title">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Méthode</p>
              <h2 id="method-title" className="h2">Six étapes, un fil conducteur</h2>
            </div>
            <p>Chaque phase se termine par une validation commune : rien n’avance sans votre accord, rien n’est découvert trop tard.</p>
          </div>
          <ol className="process">
            {PROCESS.map((p) => (
              <li key={p.k}>
                <h3>{p.k}</h3>
                <p>{p.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="prose reveal">
            <p className="eyebrow">Travailler ensemble</p>
            <h2 className="h2">Ici ou à distance</h2>
            <p>
              Une grande partie de nos échanges peut se faire à distance : visioconférences, plans partagés, comptes rendus de chantier
              photo par WhatsApp. C’est précieux pour les Marocains résidant à l’étranger qui construisent ou rénovent au pays.
            </p>
            <Link className="link-arrow" href="/guides/construire-villa-maroc/" prefetch={false}>
              Construire depuis l’étranger <IconArrow />
            </Link>
          </div>
          <div className="media parallax reveal d1">
            <Img name="studio-2" alt="Salle de réunion lumineuse" sizes="(max-width: 900px) 100vw, 50vw" />
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
