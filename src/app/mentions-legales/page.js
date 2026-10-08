import Breadcrumbs from '@/components/Breadcrumbs';
import { SITE } from '@/lib/site';
import { pageMeta } from '@/lib/seo';

export const metadata = {
  ...pageMeta({
    title: 'Mentions légales | Auren Studio',
    description: 'Mentions légales et politique de confidentialité du site Auren Studio, cabinet d’architecture à Casablanca.',
    path: '/mentions-legales/',
  }),
  robots: { index: false, follow: true },
};

export default function LegalPage() {
  return (
    <section className="page-hero">
      <div className="container">
        <Breadcrumbs items={[{ name: 'Mentions légales', path: '/mentions-legales/' }]} />
        <h1 className="h1">Mentions légales</h1>
        <div className="article prose">
          <h2>Éditeur du site</h2>
          <p>
            {SITE.legalName}, cabinet d’architecture, {SITE.city}, Maroc.
            <br />
            Téléphone : {SITE.phone} · E-mail : <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </p>
          <h2>Données personnelles</h2>
          <p>
            Le formulaire de contact ne stocke aucune donnée : il prépare un message que vous envoyez vous-même via WhatsApp. Les
            informations que vous nous transmettez par WhatsApp, téléphone ou e-mail servent uniquement à répondre à votre demande et ne
            sont jamais cédées à des tiers. Conformément à la loi 09-08, vous pouvez demander l’accès, la rectification ou la suppression
            de vos données en nous écrivant.
          </p>
          <h2>Crédits</h2>
          <p>
            Photographies d’illustration : archive Unsplash publiée sous licence CC0 sur Wikimedia Commons. Vidéo d’ouverture : montage
            réalisé à partir de séquences Mixkit (licence libre Mixkit).
          </p>
        </div>
      </div>
    </section>
  );
}
