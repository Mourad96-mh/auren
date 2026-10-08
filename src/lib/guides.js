// Informational guides targeting price / permit / how-to queries (seo/01-audit-concurrentiel.md §3.3).
// Figures are indicative market references and must be validated by the architect before publishing.

export const GUIDES = [
  {
    slug: 'prix-architecte-maroc',
    nav: 'Prix d’un architecte',
    title: "Prix d'un architecte au Maroc : honoraires, barème et ce qui est inclus",
    metaTitle: 'Prix et honoraires d’un architecte au Maroc (2026)',
    metaDesc:
      "Combien coûte un architecte au Maroc ? Honoraires en pourcentage des travaux, ce qui fait varier le prix, missions incluses et conseils pour comparer les devis.",
    excerpt:
      'Pourcentage des travaux, mission complète ou partielle, ce qui fait varier le montant : comprendre les honoraires avant de demander un devis.',
    img: 'studio-2',
    published: '2026-10-07',
    service: 'conception-architecturale',
    sections: [
      {
        h: 'Comment sont calculés les honoraires',
        p: [
          "Au Maroc, les honoraires d'un architecte sont le plus souvent exprimés en pourcentage du coût prévisionnel des travaux. Ils peuvent aussi prendre la forme d'un forfait, notamment pour des missions courtes (rendu 3D, avis technique, aménagement d'une pièce).",
          "Les ordres de grandeur couramment cités sur le marché se situent entre 6 et 12 % du montant des travaux pour une mission complète, de la conception à la réception. Ce n'est qu'une indication : chaque proposition dépend du projet, et seul un devis écrit engage le cabinet.",
        ],
      },
      {
        h: 'Ce qui fait varier le prix',
        list: [
          "L'étendue de la mission : conception et permis seuls, ou mission complète avec suivi de chantier.",
          'La complexité : une villa sur mesure demande plus d’études qu’un bâtiment simple et répétitif.',
          'La surface et le budget des travaux.',
          'Le type d’intervention : la rénovation et la surélévation nécessitent relevés et diagnostics.',
          'Le niveau de détail attendu en architecture d’intérieur (mobilier sur mesure, calepinage…).',
          'La durée du chantier, qui détermine le nombre de visites et de réunions.',
        ],
      },
      {
        h: 'Ce que comprend une mission complète',
        p: [
          "Une mission complète couvre généralement l'étude de faisabilité, l'esquisse, l'avant-projet, le dossier de permis de construire et son suivi, les plans d'exécution, la consultation des entreprises, la direction des travaux et la réception.",
          "Ne sont en général pas inclus : le levé topographique (géomètre), les études de structure et de fluides (bureau d'études), les taxes et frais administratifs, ni bien sûr les travaux eux-mêmes. Demandez toujours que le devis précise ces points.",
        ],
      },
      {
        h: 'Le prix d’un plan seul : une fausse économie ?',
        p: [
          "Acheter « juste les plans du permis » coûte moins cher au départ, mais c'est sur le chantier que se jouent la plupart des dépassements de budget : devis non comparables, détails non dessinés, malfaçons découvertes trop tard. Le suivi de chantier par l'architecte représente une part des honoraires qui se rembourse souvent d'elle-même.",
        ],
      },
      {
        h: 'Comment comparer deux devis d’architecte',
        list: [
          'Vérifier que les deux couvrent les mêmes phases (permis seul ou mission complète).',
          'Regarder le nombre de visites de chantier prévues.',
          'Demander qui réalise les études techniques et si elles sont incluses.',
          "Vérifier l'inscription de l'architecte à l'Ordre national des architectes.",
          'Demander des références de projets comparables.',
        ],
      },
    ],
    faq: [
      {
        q: 'Existe-t-il un barème officiel des honoraires d’architecte au Maroc ?',
        a: "Des références de barème circulent dans la profession, mais les honoraires restent fixés par contrat entre le client et l'architecte. Renseignez-vous auprès de l'Ordre et demandez un devis détaillé.",
      },
      {
        q: 'Le prix d’un architecte d’intérieur se calcule-t-il au m² ?',
        a: "Souvent, oui, pour l'aménagement : un prix au m² ou un forfait selon le niveau de détail. Le suivi des travaux et le mobilier sur mesure s'ajoutent selon la mission.",
      },
    ],
  },
  {
    slug: 'permis-de-construire-casablanca',
    nav: 'Permis de construire',
    title: 'Permis de construire à Casablanca : étapes, documents et délais',
    metaTitle: 'Permis de construire à Casablanca : étapes et délais',
    metaDesc:
      "Permis de construire à Casablanca : note de renseignement, plans d'architecte, dépôt sur Rokhas, commission, délais et permis d'habiter, pas à pas.",
    excerpt:
      'Note de renseignement, plans, dépôt sur Rokhas, commission, permis d’habiter : les étapes d’une autorisation de construire.',
    img: 'chantier-2',
    published: '2026-10-07',
    service: 'plans-et-autorisations',
    sections: [
      {
        h: '1. Vérifier ce que le terrain autorise',
        p: [
          "Avant de dessiner, il faut savoir ce que le document d'urbanisme permet sur la parcelle : vocation de la zone, hauteur maximale, nombre de niveaux, retraits, emprise au sol. La note de renseignement urbanistique, demandée auprès de la commune ou de l'agence urbaine, donne ces informations.",
          "On vérifie aussi la situation foncière du terrain (titre foncier, certificat de propriété) et les éventuelles servitudes.",
        ],
      },
      {
        h: '2. Réunir les intervenants',
        list: [
          "L'architecte conçoit le projet, établit les plans et dépose le dossier.",
          'Le géomètre-topographe réalise le levé du terrain.',
          "Le bureau d'études technique dimensionne la structure (béton armé) et, selon le projet, les réseaux.",
        ],
      },
      {
        h: '3. Constituer et déposer le dossier',
        p: [
          "Le dossier comprend notamment les plans de situation et de masse, les plans des niveaux, coupes et façades, les pièces foncières et les documents techniques demandés. Il est déposé de façon dématérialisée par l'architecte sur la plateforme Rokhas, qui centralise l'instruction des autorisations d'urbanisme.",
        ],
      },
      {
        h: '4. L’instruction en commission',
        p: [
          "Le dossier est étudié par une commission réunissant notamment la commune, l'agence urbaine et les services concernés (selon le projet : protection civile, réseaux…). Elle peut émettre un avis favorable, défavorable ou demander des modifications. Un dossier complet et conforme dès le premier dépôt évite la plupart des allers-retours.",
          "Les délais varient fortement selon la taille du projet et la complétude du dossier. À titre indicatif, la presse économique a rapporté pour Casablanca des délais moyens de l'ordre d'un à deux mois pour les petits projets ces dernières années, et nettement plus longs pour certains dossiers.",
        ],
      },
      {
        h: '5. Pendant et après les travaux',
        p: [
          "Une fois le permis obtenu, le chantier peut démarrer dans le délai de validité de l'autorisation. À la fin des travaux, le permis d'habiter (ou le certificat de conformité pour les autres usages) est demandé : il atteste que la construction respecte le dossier autorisé. C'est une raison de plus de faire suivre le chantier par l'architecte.",
        ],
      },
      {
        h: 'Cas particuliers : surélévation, extension, régularisation',
        p: [
          "Une surélévation ou une extension suit la même logique, avec deux vérifications supplémentaires : que le règlement autorise la surface ou la hauteur ajoutée, et que la structure existante peut la supporter. Une part importante des demandes déposées à Casablanca concerne justement des surélévations.",
        ],
      },
    ],
    sources: [
      { t: 'Médias24 : délais d’octroi des autorisations à Casablanca', u: 'https://medias24.com/2018/11/07/autorisations-de-construire-les-delais-doctroi-sameliorent-a-casablanca/' },
      { t: 'Le360 : les architectes et les délais de permis à Casablanca', u: 'https://fr.le360.ma/politique/casablanca-les-architectes-se-plaignent-des-retards-pour-lobtention-des-permis-de-construire-et_2W5MTDYTSRECXF3FALNNDW7VMM/' },
      { t: 'FNH : bilan de la plateforme Rokhas', u: 'https://fnh.ma/article/actualites-marocaines/administration-numerique-bilan-globalement-satisfaisant-de-la-plateforme-rokhas' },
    ],
    faq: [
      {
        q: 'Qui dépose le permis de construire sur Rokhas ?',
        a: "L'architecte, qui dispose d'un accès professionnel à la plateforme. Le propriétaire peut suivre l'avancement de son dossier.",
      },
      {
        q: 'Mon dossier a reçu un avis défavorable, que faire ?',
        a: "Analyser les motifs, modifier le projet en conséquence et redéposer. Nous reprenons aussi des dossiers montés par d'autres.",
      },
    ],
  },
  {
    slug: 'construire-villa-maroc',
    nav: 'Construire une villa',
    title: 'Construire une villa au Maroc : étapes, budget et suivi à distance',
    metaTitle: 'Construire une villa au Maroc : étapes et budget',
    metaDesc:
      "Construire une villa à Casablanca ou au Maroc : terrain, architecte, permis, chantier, budget, et conseils aux MRE qui font construire depuis l'étranger.",
    excerpt:
      'Du choix du terrain à la remise des clés, les étapes et les postes de budget, y compris quand on fait construire depuis l’étranger.',
    img: 'maison',
    published: '2026-10-07',
    service: 'conception-architecturale',
    sections: [
      {
        h: 'Les grandes étapes',
        list: [
          'Terrain : vérifier le titre foncier et ce que le règlement autorise (note de renseignement).',
          'Programme et budget : surfaces, nombre de pièces, piscine, niveau de finitions.',
          'Conception : esquisse, avant-projet et rendus 3D avec l’architecte.',
          'Autorisation : plans de permis, études techniques, dépôt et obtention.',
          'Consultation : plans d’exécution et mise en concurrence des entreprises.',
          'Chantier : gros œuvre, second œuvre, finitions, aménagements extérieurs.',
          "Réception : levée des réserves, puis permis d'habiter.",
        ],
      },
      {
        h: 'Les postes du budget',
        p: [
          "Le coût d'une villa dépend avant tout de la surface construite, du niveau de finitions (standing), de la complexité de la structure et des aménagements extérieurs (piscine, jardin, clôtures). À ces travaux s'ajoutent le terrain, les honoraires (architecte, bureau d'études, géomètre), les taxes et frais administratifs, ainsi que les raccordements aux réseaux.",
          "Prévoyez toujours une réserve pour imprévus. L'estimation donnée dès l'esquisse, puis affinée à l'avant-projet, permet d'ajuster le projet au budget avant que les choix ne coûtent cher.",
        ],
      },
      {
        h: 'Où construire autour de Casablanca',
        p: [
          "Les villas se construisent aussi bien dans les quartiers résidentiels de Casablanca (Anfa, Californie, Oasis, CIL) que dans la périphérie, à Dar Bouazza, Bouskoura ou Ville Verte, où les parcelles sont plus grandes. Chaque secteur a ses propres règles (hauteur, retraits, emprise) : elles conditionnent la forme de la maison.",
        ],
      },
      {
        h: 'Faire construire depuis l’étranger (MRE)',
        p: [
          "C'est possible et courant, à condition d'avoir un interlocuteur de confiance sur place. L'architecte peut déposer le permis, consulter les entreprises, vérifier les situations de travaux avant chaque paiement et vous rendre compte régulièrement (photos, vidéos, comptes rendus).",
          "Une procuration notariée ou consulaire peut être nécessaire pour certaines démarches. Organisez dès le départ un rythme de points réguliers en visio, et ne payez jamais une situation de travaux sans validation sur place.",
        ],
      },
    ],
    faq: [
      {
        q: 'Combien de temps pour construire une villa ?',
        a: "Il faut compter la conception et l'autorisation (plusieurs mois selon le projet et les délais d'instruction), puis le chantier, dont la durée dépend de la taille et du niveau de finitions. Nous établissons un planning réaliste au démarrage.",
      },
      {
        q: 'Peut-on adapter un plan de villa trouvé sur internet ?',
        a: "Un plan doit être adapté au terrain (orientation, accès, pente) et au règlement de la zone, puis signé par un architecte pour être autorisé. Il sert surtout de point de départ pour exprimer vos envies.",
      },
    ],
  },
];

export const getGuide = (slug) => GUIDES.find((g) => g.slug === slug);
