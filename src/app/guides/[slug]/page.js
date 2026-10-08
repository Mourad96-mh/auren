import Link from 'next/link';
import { notFound } from 'next/navigation';
import Img from '@/components/Img';
import Breadcrumbs from '@/components/Breadcrumbs';
import Faq from '@/components/Faq';
import CtaBand from '@/components/CtaBand';
import JsonLd from '@/components/JsonLd';
import { IconArrow } from '@/components/Icons';
import { GUIDES, getGuide } from '@/lib/guides';
import { getService } from '@/lib/services';
import { articleLd, pageMeta } from '@/lib/seo';

export const dynamicParams = false;

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) return {};
  return pageMeta({
    title: g.metaTitle,
    description: g.metaDesc,
    path: `/guides/${g.slug}/`,
    image: `/img/${g.img}-1600.webp`,
    type: 'article',
  });
}

const fmt = (d) => new Date(d).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });

export default async function GuidePage({ params }) {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) notFound();
  const service = getService(g.service);
  const others = GUIDES.filter((x) => x.slug !== g.slug);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ name: 'Guides', path: '/guides/' }, { name: g.nav, path: `/guides/${g.slug}/` }]} />
          <p className="eyebrow">Guide</p>
          <h1 className="h1" style={{ maxWidth: '22ch' }}>{g.title}</h1>
          <p className="article-meta">
            Par Auren Studio, cabinet d’architecture à Casablanca · Publié le <time dateTime={g.published}>{fmt(g.published)}</time>
          </p>
          <div className="page-hero-media">
            <Img name={g.img} alt="" sizes="100vw" priority />
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 10 }}>
        <div className="container">
          <article className="article prose">
            <p className="lead">{g.excerpt}</p>
            {g.sections.map((sec) => (
              <section key={sec.h}>
                <h2>{sec.h}</h2>
                {sec.p?.map((p) => (
                  <p key={p.slice(0, 30)}>{p}</p>
                ))}
                {sec.list && (
                  <ul>
                    {sec.list.map((li) => (
                      <li key={li}>{li}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <div className="callout">
              <p>
                <strong>Votre projet est à Casablanca ou dans sa région ?</strong> Notre service{' '}
                <Link href={`/services/${service.slug}/`} prefetch={false}>{service.title.toLowerCase()}</Link> vous accompagne,
                et nous répondons à vos questions sans engagement.
              </p>
            </div>

            {g.sources && (
              <div className="sources">
                <p>Sources et lectures complémentaires :</p>
                <ul>
                  {g.sources.map((s) => (
                    <li key={s.u}>
                      <a href={s.u} target="_blank" rel="noopener nofollow">{s.t}</a>
                    </li>
                  ))}
                </ul>
                <p>Les informations de ce guide sont générales et ne remplacent pas l’étude de votre dossier.</p>
              </div>
            )}
          </article>
        </div>
      </section>

      {g.faq && <Faq items={g.faq} />}

      <section className="section-sm" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2 className="h3" style={{ marginBottom: 24 }}>Autres guides</h2>
          <div className="related">
            {others.map((o) => (
              <Link key={o.slug} href={`/guides/${o.slug}/`} prefetch={false}>
                <span className="k">Guide</span>
                <span className="t">{o.title}</span>
              </Link>
            ))}
            <Link href="/services/" prefetch={false}>
              <span className="k">Services</span>
              <span className="t">
                Tous nos services <IconArrow />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <JsonLd data={articleLd(g)} />
      <CtaBand />
    </>
  );
}
