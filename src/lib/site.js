// Single source of truth for the studio's identity (NAP, zones, URLs).
// Values marked TODO are still awaited from the client — never invent them.

export const SITE = {
  name: 'Auren Studio',
  legalName: 'Auren Studio', // TODO: raison sociale exacte
  url: 'https://www.aurenstudio.com', // TODO: confirmer le domaine
  tagline: 'Tous vos projets, de la première esquisse à la dernière clé.',
  description:
    "Auren Studio, cabinet d'architecture à Casablanca : conception, plans et permis de construire, suivi de chantier, rénovation, surélévation et architecture d'intérieur.",
  phone: '+212 6 51 90 62 18',
  phoneHref: 'tel:+212651906218',
  whatsapp: '212651906218',
  email: 'contact@aurenstudio.com',
  city: 'Casablanca',
  region: 'Casablanca-Settat',
  country: 'MA',
  // TODO: adresse postale, horaires, coordonnées GPS, lien Google Business Profile
  address: null,
  instagram: null, // TODO
  locale: 'fr_MA',
};

// Zones d'intervention : quartiers de Casablanca + périphérie (modificateurs vus dans l'autocomplétion Google).
export const ZONES = {
  casablanca: ['Anfa', 'Californie', 'Maârif', 'Gauthier', 'Racine', 'Bourgogne', 'Oasis', 'CIL', 'Aïn Chock', 'Aïn Sebaâ', 'Hay Hassani', 'Sidi Maârouf'],
  peripherie: ['Dar Bouazza', 'Bouskoura', 'Ville Verte', 'Mohammedia', 'Tit Mellil', 'Berrechid', 'Nouaceur'],
};

export const whatsappLink = (text) =>
  `https://wa.me/${SITE.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

export const absUrl = (path = '/') => `${SITE.url}${path}`;
