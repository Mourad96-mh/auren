import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import WhatsAppFab from '@/components/WhatsAppFab';
import JsonLd from '@/components/JsonLd';
import { SITE } from '@/lib/site';
import { organizationLd, pageMeta } from '@/lib/seo';

const display = Cormorant_Garamond({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});
const sans = Manrope({ subsets: ['latin', 'latin-ext'], variable: '--font-sans', display: 'swap' });

export const metadata = {
  metadataBase: new URL(SITE.url),
  ...pageMeta({
    title: 'Architecte Casablanca, cabinet d’architecture | Auren Studio',
    description: SITE.description,
  }),
  applicationName: SITE.name,
  formatDetection: { telephone: false },
};

export const viewport = {
  themeColor: '#14130f',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr-MA" className={`${display.variable} ${sans.variable}`}>
      <body>
        <a className="skip" href="#contenu">Aller au contenu</a>
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
        <WhatsAppFab />
        <Reveal />
        <JsonLd data={organizationLd()} />
      </body>
    </html>
  );
}
