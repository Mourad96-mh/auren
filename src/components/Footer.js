import Link from 'next/link';
import Logo from './Logo';
import { SITE, ZONES, whatsappLink } from '@/lib/site';
import { SERVICES } from '@/lib/services';
import { GUIDES } from '@/lib/guides';
import { IconWhatsApp, IconPhone, IconMail, IconPin } from './Icons';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <Logo className="logo-light" />
          <p>{SITE.tagline}</p>
          <p className="footer-tagline">
            Villas, immeubles, commerces, bureaux, hôtels, riads, équipements… quel que soit votre projet, nous le réalisons.
          </p>
        </div>
        <div>
          <h2 className="footer-title">Services</h2>
          <ul>
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}/`} prefetch={false}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="footer-title">Ressources</h2>
          <ul>
            {GUIDES.map((g) => (
              <li key={g.slug}>
                <Link href={`/guides/${g.slug}/`} prefetch={false}>{g.nav}</Link>
              </li>
            ))}
            <li><Link href="/projets/" prefetch={false}>Types de projets</Link></li>
            <li><Link href="/le-studio/" prefetch={false}>Le studio</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="footer-title">Contact</h2>
          <ul className="footer-contact">
            <li><a href={whatsappLink()} target="_blank" rel="noopener"><IconWhatsApp /> WhatsApp</a></li>
            <li><a href={SITE.phoneHref}><IconPhone /> {SITE.phone}</a></li>
            <li><a href={`mailto:${SITE.email}`}><IconMail /> {SITE.email}</a></li>
            <li><span><IconPin /> {SITE.city}, Maroc</span></li>
          </ul>
        </div>
      </div>
      <div className="container footer-zones">
        <p>
          <strong>Zones d’intervention :</strong> Casablanca ({ZONES.casablanca.join(', ')}), {ZONES.peripherie.join(', ')}.
        </p>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} {SITE.name}, cabinet d’architecture à Casablanca</p>
        <Link href="/mentions-legales/" prefetch={false}>Mentions légales</Link>
      </div>
    </footer>
  );
}
