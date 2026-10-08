import Link from 'next/link';
import { SITE, whatsappLink } from '@/lib/site';
import { IconWhatsApp, IconPhone } from './Icons';

export default function CtaBand({ title = 'Parlons de votre projet', text = 'Un terrain, un bâtiment à transformer, un intérieur à repenser ? Décrivez-nous votre projet : nous vous rappelons rapidement pour un premier rendez-vous.' }) {
  return (
    <section className="cta-band">
      <div className="container cta-inner">
        <div>
          <h2 className="h2">{title}</h2>
          <p>{text}</p>
        </div>
        <div className="cta-actions">
          <a className="btn btn-wa" href={whatsappLink('Bonjour Auren Studio, je souhaite parler de mon projet.')} target="_blank" rel="noopener">
            <IconWhatsApp /> WhatsApp
          </a>
          <a className="btn btn-light" href={SITE.phoneHref}>
            <IconPhone /> {SITE.phone}
          </a>
          <Link className="link-arrow light" href="/contact/" prefetch={false}>Formulaire de contact</Link>
        </div>
      </div>
    </section>
  );
}
