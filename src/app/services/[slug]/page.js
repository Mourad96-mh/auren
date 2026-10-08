import Link from 'next/link';
import { notFound } from 'next/navigation';
import Img from '@/components/Img';
import Breadcrumbs from '@/components/Breadcrumbs';
import Faq from '@/components/Faq';
import CtaBand from '@/components/CtaBand';
import JsonLd from '@/components/JsonLd';
import { IconWhatsApp } from '@/components/Icons';
import { SERVICES, getService } from '@/lib/services';
import { getGuide } from '@/lib/guides';
import { ZONES, whatsappLink } from '@/lib/site';
import { pageMeta, serviceLd } from '@/lib/seo';

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return pageMeta({
    title: s.metaTitle,
    description: s.metaDesc,
    path: `/services/${s.slug}/`,
    image: `/img/${s.img}-1600.webp`,
  });
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();
  const guide = getGuide(s.guide);
  const related = s.related.map(getService);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ name: 'Services', path: '/services/' }, { name: s.title, path: `/services/${s.slug}/` }]} />
          <p className="eyebrow">Service {s.num}</p>
          <h1 className="h1">{s.h1}</h1>
          <p className="lead">{s.lead}</p>
          <div className="page-hero-media">
            <Img name={s.img} alt={s.imgAlt} sizes="100vw" priority />
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container detail-grid">
          <div className="prose">
            {s.body.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
            <p>
              Nous intervenons à Casablanca ({ZONES.casablanca.slice(0, 6).join(', ')}…) et dans sa périphérie :{' '}
              {ZONES.peripherie.slice(0, 4).join(', ')}.
            </p>
            {guide && (
              <div className="callout">
                <p>
                  <strong>À lire aussi :</strong>{' '}
                  <Link href={`/guides/${guide.slug}/`} prefetch={false}>{guide.title}</Link>
                </p>
              </div>
            )}
          </div>
          <aside className="aside-card">
            <h2>Ce que vous recevez</h2>
            <ul>
              {s.deliverables.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
            <a
              className="btn btn-wa"
              href={whatsappLink(`Bonjour Auren Studio, je souhaite un rendez-vous pour : ${s.title}.`)}
              target="_blank"
              rel="noopener"
            >
              <IconWhatsApp /> Demander un rendez-vous
            </a>
          </aside>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="steps-title">
        <div className="container">
          <p className="eyebrow">Déroulement</p>
          <h2 id="steps-title" className="h2" style={{ marginBottom: 40 }}>
            Les étapes de la mission
          </h2>
          <ol className="steps">
            {s.steps.map((st) => (
              <li key={st.t}>
                <h3>{st.t}</h3>
                <p>{st.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Faq items={s.faq} title={`Questions sur ${s.title.toLowerCase()}`} />

      <section className="section-sm" aria-labelledby="related-title" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2 id="related-title" className="h3" style={{ marginBottom: 24 }}>
            Services complémentaires
          </h2>
          <div className="related">
            {related.map((r) => (
              <Link key={r.slug} href={`/services/${r.slug}/`} prefetch={false}>
                <span className="k">Service {r.num}</span>
                <span className="t">{r.title}</span>
              </Link>
            ))}
            <Link href="/contact/" prefetch={false}>
              <span className="k">Contact</span>
              <span className="t">Décrire mon projet</span>
            </Link>
          </div>
        </div>
      </section>

      <JsonLd data={serviceLd(s)} />
      <CtaBand />
    </>
  );
}
