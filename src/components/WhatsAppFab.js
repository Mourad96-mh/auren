import { whatsappLink } from '@/lib/site';
import { IconWhatsApp } from './Icons';

export default function WhatsAppFab() {
  return (
    <a
      className="wa-fab"
      href={whatsappLink('Bonjour Auren Studio, je souhaite parler de mon projet.')}
      target="_blank"
      rel="noopener"
      aria-label="Écrire à Auren Studio sur WhatsApp"
    >
      <IconWhatsApp />
    </a>
  );
}
