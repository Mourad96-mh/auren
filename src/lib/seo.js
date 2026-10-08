import { SITE, ZONES, absUrl } from './site';

const ORG_ID = absUrl('/#organization');

// Page metadata with self-canonical + OG. Titles are absolute (no template) so lengths stay controlled.
export function pageMeta({ title, description, path = '/', image = '/og.jpg', type = 'website' }) {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      url: path,
      title,
      description,
      siteName: SITE.name,
      locale: SITE.locale,
      images: [{ url: image, width: 1200, height: 630, alt: SITE.name }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
  };
}

const country = { '@type': 'Country', name: 'Maroc', identifier: 'MA' };
const region = { '@type': 'AdministrativeArea', name: 'Casablanca-Settat', containedInPlace: country };

export const areaServed = () => [
  { '@type': 'City', name: 'Casablanca', containedInPlace: region },
  ...ZONES.peripherie.map((name) => ({ '@type': 'Place', name, containedInPlace: region })),
];

export function organizationLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': ORG_ID,
        name: SITE.name,
        legalName: SITE.legalName,
        url: absUrl('/'),
        logo: absUrl('/logo.png'),
        image: absUrl('/og.jpg'),
        description: SITE.description,
        slogan: SITE.tagline,
        telephone: SITE.phone.replace(/\s/g, ''),
        email: SITE.email,
        address: { '@type': 'PostalAddress', addressLocality: SITE.city, addressRegion: SITE.region, addressCountry: SITE.country },
        areaServed: areaServed(),
        knowsAbout: [
          'Architecture',
          "Architecture d'intérieur",
          'Permis de construire',
          'Suivi de chantier',
          'Rénovation',
          'Surélévation',
          'Modélisation 3D',
        ],
        knowsLanguage: ['fr', 'ar'],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: SITE.phone.replace(/\s/g, ''),
          email: SITE.email,
          contactType: 'customer service',
          areaServed: 'MA',
          availableLanguage: ['French', 'Arabic'],
        },
      },
      {
        '@type': 'WebSite',
        '@id': absUrl('/#website'),
        url: absUrl('/'),
        name: SITE.name,
        inLanguage: 'fr-MA',
        publisher: { '@id': ORG_ID },
      },
    ],
  };
}

export function serviceLd(s) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.h1,
    serviceType: s.title,
    description: s.metaDesc,
    url: absUrl(`/services/${s.slug}/`),
    image: absUrl(`/img/${s.img}-1600.webp`),
    provider: { '@id': ORG_ID },
    areaServed: areaServed(),
  };
}

export function breadcrumbLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: absUrl(it.path),
    })),
  };
}

export function faqLd(faq) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function articleLd(g) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: g.title,
    description: g.metaDesc,
    image: [absUrl(`/img/${g.img}-1600.webp`)],
    datePublished: g.published,
    dateModified: g.updated || g.published,
    inLanguage: 'fr-MA',
    mainEntityOfPage: absUrl(`/guides/${g.slug}/`),
    author: { '@type': 'Organization', '@id': ORG_ID, name: SITE.name, url: absUrl('/') },
    publisher: { '@id': ORG_ID, '@type': 'Organization', name: SITE.name, logo: { '@type': 'ImageObject', url: absUrl('/logo.png') } },
  };
}

export function heroVideoLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: "Auren Studio : architecture d'intérieur, de l'inspiration à la livraison",
    description:
      "Inspiration, choix des matières et des couleurs, agencement, finitions en marbre et zellige, livraison : les étapes d'un projet d'architecture d'intérieur avec Auren Studio à Casablanca.",
    thumbnailUrl: absUrl('/img/hero-poster-1600.jpg'),
    contentUrl: absUrl('/media/hero.mp4'),
    uploadDate: '2026-10-07',
    duration: 'PT18S',
    publisher: { '@id': ORG_ID },
  };
}
