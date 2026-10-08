import Breadcrumbs from '@/components/Breadcrumbs';
import ContactForm from '@/components/ContactForm';
import { IconWhatsApp, IconPhone, IconMail, IconPin } from '@/components/Icons';
import { SITE, ZONES, whatsappLink } from '@/lib/site';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Contact et rendez-vous | Architecte Casablanca, Auren Studio',
  description:
    'Contactez Auren Studio, architecte à Casablanca : WhatsApp, téléphone ou formulaire. Décrivez votre projet et prenez rendez-vous pour une première rencontre.',
  path: '/contact/',
});

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ name: 'Contact', path: '/contact/' }]} />
          <p className="eyebrow">Contact</p>
          <h1 className="h1">Parlons de votre projet</h1>
          <p className="lead">
            Quelques informations suffisent pour commencer. Nous vous rappelons pour organiser un premier rendez-vous, au studio, sur
            votre terrain ou en visioconférence.
          </p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 10 }}>
        <div className="container contact-grid">
          <ContactForm />
          <div>
            <h2 className="h3">Nous joindre directement</h2>
            <ul className="contact-list">
              <li>
                <a href={whatsappLink('Bonjour Auren Studio, je souhaite parler de mon projet.')} target="_blank" rel="noopener">
                  <IconWhatsApp />
                  <span>
                    WhatsApp
                    <small>Réponse rapide, photos et plans bienvenus</small>
                  </span>
                </a>
              </li>
              <li>
                <a href={SITE.phoneHref}>
                  <IconPhone />
                  <span>
                    {SITE.phone}
                    <small>Appel</small>
                  </span>
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`}>
                  <IconMail />
                  <span>
                    {SITE.email}
                    <small>E-mail</small>
                  </span>
                </a>
              </li>
              <li>
                <span>
                  <IconPin />
                  <span>
                    {SITE.city}, Maroc
                    <small>Interventions à Casablanca, {ZONES.peripherie.slice(0, 4).join(', ')}</small>
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
