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

// Approximate centre of each zone [lat, lng], for the map on the home page (not addresses).
export const ZONE_COORDS = {
  Anfa: [33.5885, -7.6625],
  Californie: [33.5395, -7.6275],
  Maârif: [33.5800, -7.6370],
  Gauthier: [33.5915, -7.6285],
  Racine: [33.5865, -7.6420],
  Bourgogne: [33.5990, -7.6445],
  Oasis: [33.5555, -7.6335],
  CIL: [33.5665, -7.6540],
  'Aïn Chock': [33.5380, -7.6060],
  'Aïn Sebaâ': [33.6045, -7.5400],
  'Hay Hassani': [33.5600, -7.6800],
  'Sidi Maârouf': [33.5310, -7.6460],
  'Dar Bouazza': [33.5250, -7.8150],
  Bouskoura: [33.4490, -7.6510],
  'Ville Verte': [33.4720, -7.6180],
  Mohammedia: [33.6870, -7.3830],
  'Tit Mellil': [33.5560, -7.4860],
  Berrechid: [33.2650, -7.5870],
  Nouaceur: [33.3680, -7.5850],
};

export const whatsappLink = (text) =>
  `https://wa.me/${SITE.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

export const absUrl = (path = '/') => `${SITE.url}${path}`;
