// The 6 money pages. Each one owns a distinct search intent (see seo/01-audit-concurrentiel.md §3.2).

export const SERVICES = [
  {
    slug: 'conception-architecturale',
    num: '01',
    title: 'Conception architecturale',
    short:
      "Étude de faisabilité, esquisse, avant-projet et plans d'exécution, pour tout type de bâtiment.",
    img: 'conception',
    imgAlt: 'Façade contemporaine aux ouvertures sculptées, conception architecturale',
    metaTitle: 'Architecte villa et immeuble à Casablanca | Auren Studio',
    metaDesc:
      "Conception de villas, immeubles, commerces et bureaux à Casablanca : faisabilité, esquisse, avant-projet, plans d'exécution et 3D par votre architecte.",
    h1: 'Conception architecturale à Casablanca',
    lead:
      "Villa, immeuble, commerce, bureau, hôtel, équipement ou bâtiment industriel : nous transformons un terrain et une intention en un projet précis, chiffrable et constructible.",
    body: [
      "Tout commence par une écoute. Nous analysons votre terrain, les règles d'urbanisme qui s'y appliquent (plan d'aménagement, hauteur, retraits, coefficient d'occupation) et votre programme : nombre de pièces, surfaces, usages, budget et délais. Cette étude de faisabilité vous dit, avant d'aller plus loin, ce qu'il est possible de construire et à quel coût approximatif.",
      "Vient ensuite l'esquisse : plusieurs intentions d'implantation et de volumétrie, présentées en plans et en 3D pour que vous puissiez vous projeter. Une fois une direction choisie, l'avant-projet précise les surfaces, les façades, les matériaux et l'estimation des travaux. Les plans d'exécution, coordonnés avec le bureau d'études structure et fluides, donnent enfin aux entreprises tout ce qu'il faut pour chiffrer et construire sans improviser.",
      "Notre approche : une architecture lumineuse, adaptée au climat de Casablanca (orientation, ventilation naturelle, protection solaire), des espaces qui servent la vie quotidienne et des choix de matériaux qui vieillissent bien.",
    ],
    steps: [
      { t: 'Faisabilité', d: "Analyse du terrain, de la réglementation et du programme. Première estimation." },
      { t: 'Esquisse', d: 'Intentions de plans et de volumes, rendus 3D, choix d’une direction.' },
      { t: 'Avant-projet', d: 'Plans, coupes, façades cotés, matériaux et estimation affinée.' },
      { t: "Plans d'exécution", d: 'Dossier technique détaillé, coordonné avec les bureaux d’études.' },
    ],
    deliverables: [
      'Étude de faisabilité et note réglementaire',
      'Esquisses et rendus 3D',
      'Avant-projet sommaire et détaillé (APS / APD)',
      "Plans d'exécution et carnet de détails",
      'Estimation du coût des travaux',
    ],
    faq: [
      {
        q: 'Quels types de bâtiments concevez-vous ?',
        a: "Tous : villas, maisons, immeubles d'habitation, commerces, bureaux, hôtels, riads, équipements et bâtiments industriels, en construction neuve comme en transformation.",
      },
      {
        q: 'Pouvez-vous partir d’un terrain que je n’ai pas encore acheté ?',
        a: "Oui, c'est même recommandé. Une étude de faisabilité avant l'achat vérifie ce que le plan d'aménagement autorise réellement et évite les mauvaises surprises.",
      },
      {
        q: 'Est-ce que je vois le projet en 3D avant de valider ?',
        a: 'Oui. Chaque étape de conception est présentée en plans et en images 3D, pour décider en connaissance de cause.',
      },
    ],
    related: ['plans-et-autorisations', '3d-expertise-conseil'],
    guide: 'construire-villa-maroc',
  },
  {
    slug: 'plans-et-autorisations',
    num: '02',
    title: 'Plans et autorisations',
    short:
      'Préparation des plans à autoriser, dépôt du permis de construire et suivi du dossier jusqu’à l’obtention.',
    img: 'plans',
    imgAlt: "Architecte traçant des plans à la règle pour un dossier de permis de construire",
    metaTitle: 'Architecte permis de construire Casablanca | Auren Studio',
    metaDesc:
      "Plans autorisables, dépôt du permis de construire sur Rokhas et suivi du dossier à Casablanca : votre architecte gère les autorisations jusqu'au permis.",
    h1: 'Plans et permis de construire à Casablanca',
    lead:
      "Un permis de construire bien préparé, c'est un dossier qui passe en commission sans aller-retour. Nous montons, déposons et suivons votre dossier d'autorisation jusqu'à son obtention.",
    body: [
      "Au Maroc, la demande d'autorisation de construire passe par un architecte, qui établit les plans et dépose le dossier, aujourd'hui de façon dématérialisée via la plateforme Rokhas. Le dossier est ensuite étudié par une commission (commune, agence urbaine et services concernés) qui vérifie sa conformité au document d'urbanisme.",
      "Notre rôle est d'anticiper ce que la commission va regarder : respect du plan d'aménagement, hauteurs, retraits, surfaces, stationnement, sécurité. Nous coordonnons les pièces des autres intervenants (levé topographique du géomètre, notes du bureau d'études) et répondons aux observations éventuelles pour éviter qu'un dossier ne reste bloqué.",
      "Nous traitons les constructions neuves, mais aussi les dossiers plus délicats : surélévation d'un bâtiment existant, extension, changement d'usage ou régularisation, qui demandent une lecture attentive des règles applicables à la parcelle.",
    ],
    steps: [
      { t: 'Vérifications', d: 'Note de renseignement urbanistique, titre foncier, contraintes de la parcelle.' },
      { t: 'Plans autorisables', d: 'Plans, coupes, façades et pièces graphiques conformes au règlement.' },
      { t: 'Dépôt', d: 'Constitution et dépôt du dossier complet sur Rokhas.' },
      { t: 'Suivi', d: 'Suivi de la commission, réponses aux observations, obtention du permis.' },
    ],
    deliverables: [
      'Analyse réglementaire de la parcelle',
      'Plans de permis (situation, masse, niveaux, coupes, façades)',
      'Coordination géomètre et bureau d’études',
      'Dépôt et suivi du dossier sur Rokhas',
      'Accompagnement jusqu’au permis d’habiter',
    ],
    faq: [
      {
        q: 'Combien de temps faut-il pour obtenir un permis à Casablanca ?',
        a: "Cela dépend de la taille du projet, de la complétude du dossier et de la commune. Un dossier complet et conforme dès le premier dépôt est le meilleur moyen de réduire les délais. Nous vous donnons une estimation réaliste pour votre projet.",
      },
      {
        q: 'Gérez-vous les dossiers de surélévation ?',
        a: "Oui. Une surélévation exige de vérifier ce que le plan d'aménagement autorise et la capacité de la structure existante (avec un bureau d'études). Nous montons le dossier complet.",
      },
      {
        q: 'Je vis à l’étranger, pouvez-vous déposer le dossier pour moi ?',
        a: "Oui. Nous gérons le dépôt et le suivi ; une procuration peut être nécessaire pour certaines pièces. Nous vous tenons informé à chaque étape par WhatsApp et par e-mail.",
      },
    ],
    related: ['conception-architecturale', 'renovation-extension-surelevation'],
    guide: 'permis-de-construire-casablanca',
  },
  {
    slug: 'suivi-de-chantier',
    num: '03',
    title: 'Suivi et direction de chantier',
    short:
      'Coordination des entreprises, contrôle de la qualité, respect du budget et des délais, jusqu’à la réception.',
    img: 'chantier',
    imgAlt: 'Chef de chantier contrôlant les travaux sur un échafaudage',
    metaTitle: 'Suivi de chantier par un architecte à Casablanca',
    metaDesc:
      "Direction et suivi de chantier à Casablanca : consultation des entreprises, visites, contrôle qualité, budget et délais tenus jusqu'à la réception des travaux.",
    h1: 'Suivi et direction de chantier à Casablanca',
    lead:
      "Un bon projet peut être perdu sur le chantier. Nous restons à vos côtés jusqu'à la remise des clés, pour que ce qui est construit corresponde à ce qui a été dessiné, au prix convenu.",
    body: [
      "Avant le démarrage, nous consultons les entreprises sur la base des plans d'exécution, comparons les offres poste par poste et vous aidons à choisir. Des devis comparables, ce sont des marchés clairs et moins d'avenants en cours de route.",
      "Pendant les travaux, nous organisons des visites régulières, animons les réunions de chantier et rédigeons les comptes rendus. Nous contrôlons la conformité aux plans, la qualité de mise en œuvre et l'avancement, et nous vérifions les situations de travaux avant chaque paiement.",
      "À la fin, nous organisons la réception, listons les réserves et suivons leur levée. Vous recevez un bâtiment conforme, avec les documents nécessaires pour la suite (dont la demande de permis d'habiter).",
    ],
    steps: [
      { t: 'Consultation', d: 'Appel d’offres, analyse comparative des devis, choix des entreprises.' },
      { t: 'Préparation', d: 'Planning, organisation du chantier, réunion de lancement.' },
      { t: 'Direction', d: 'Visites, réunions, comptes rendus, contrôle qualité et budget.' },
      { t: 'Réception', d: 'Réception des travaux, réserves, levée des réserves, remise des clés.' },
    ],
    deliverables: [
      'Dossier de consultation des entreprises',
      'Tableau comparatif des offres',
      'Planning des travaux',
      'Comptes rendus de chantier (photos à l’appui)',
      'Vérification des situations de travaux',
      'Procès-verbal de réception',
    ],
    faq: [
      {
        q: 'À quelle fréquence venez-vous sur le chantier ?',
        a: "La fréquence est fixée au contrat selon la taille du projet et la phase des travaux : plus soutenue au gros œuvre et aux étapes clés. Chaque visite donne lieu à un compte rendu.",
      },
      {
        q: 'Puis-je suivre mon chantier depuis l’étranger ?',
        a: 'Oui : comptes rendus photo, points vidéo et un interlocuteur unique joignable sur WhatsApp. C’est une demande fréquente des Marocains résidant à l’étranger.',
      },
      {
        q: 'Prenez-vous un chantier dont vous n’avez pas fait les plans ?',
        a: "C'est possible après analyse du dossier existant (plans, permis, marchés). Nous vous dirons franchement si des reprises sont nécessaires.",
      },
    ],
    related: ['conception-architecturale', 'renovation-extension-surelevation'],
    guide: 'construire-villa-maroc',
  },
  {
    slug: 'renovation-extension-surelevation',
    num: '04',
    title: 'Rénovation, extension et surélévation',
    short: 'Transformation et réhabilitation de tout bâtiment existant, quelle que soit sa taille ou son état.',
    img: 'renovation',
    imgAlt: 'Appartement rénové, lumineux, aux murs blancs et parquet ancien',
    metaTitle: 'Rénovation, extension, surélévation Casablanca',
    metaDesc:
      "Rénovation de villa ou d'appartement, extension et surélévation à Casablanca : diagnostic, plans, autorisations et suivi des travaux par un architecte.",
    h1: 'Rénovation, extension et surélévation à Casablanca',
    lead:
      "Agrandir, surélever, redistribuer ou remettre à neuf : un bâtiment existant a des contraintes, mais aussi un potentiel. Nous l'évaluons avant de le transformer.",
    body: [
      "Chaque transformation commence par un diagnostic : état de la structure, des réseaux et de l'enveloppe, conformité aux plans d'origine, possibilités offertes par le règlement d'urbanisme. Pour une surélévation ou l'ouverture d'un mur porteur, nous associons un bureau d'études structure afin de vérifier ce que le bâtiment peut supporter.",
      "Nous redessinons ensuite les espaces : plan plus ouvert, nouvelles pièces, étage supplémentaire, extension sur le jardin, mise en valeur d'une villa des années 70 ou d'un appartement Art déco du centre-ville. Les dossiers d'autorisation nécessaires sont montés et suivis.",
      "En rénovation, le chantier se fait souvent en site occupé ou dans un immeuble en copropriété : nous organisons les travaux pour limiter les nuisances et éviter les mauvaises surprises de budget.",
    ],
    steps: [
      { t: 'Diagnostic', d: 'État du bâti, structure, réseaux, règles applicables.' },
      { t: 'Projet', d: 'Plans de transformation, 3D, estimation des travaux.' },
      { t: 'Autorisations', d: 'Dossier de permis ou d’autorisation de travaux si nécessaire.' },
      { t: 'Travaux', d: 'Consultation des entreprises et suivi jusqu’à la réception.' },
    ],
    deliverables: [
      'Relevé de l’existant et diagnostic',
      'Plans de transformation et rendus 3D',
      'Étude de faisabilité de surélévation (avec BET)',
      "Dossier d'autorisation",
      'Suivi des travaux',
    ],
    faq: [
      {
        q: 'Peut-on surélever n’importe quelle maison ?',
        a: "Non. Il faut que le plan d'aménagement autorise la hauteur supplémentaire et que la structure (fondations, poteaux) puisse supporter la charge, ce que vérifie un bureau d'études. Nous faisons cette vérification avant tout engagement.",
      },
      {
        q: 'Rénovez-vous aussi les appartements ?',
        a: "Oui : redistribution, cuisine et salles de bain, électricité et plomberie, finitions. Pour l'aménagement et la décoration, voir notre service d'architecture d'intérieur.",
      },
      {
        q: 'Mon bâtiment n’a pas de plans, est-ce un problème ?',
        a: 'Non, nous réalisons un relevé complet de l’existant qui sert de base au projet.',
      },
    ],
    related: ['plans-et-autorisations', 'architecture-interieur'],
    guide: 'permis-de-construire-casablanca',
  },
  {
    slug: 'architecture-interieur',
    num: '05',
    title: "Architecture d'intérieur et aménagement",
    short: 'Agencement des espaces, choix des matériaux et des finitions, pour des lieux fonctionnels et harmonieux.',
    img: 'interieur',
    imgAlt: "Salon aménagé par un architecte d'intérieur, lumière naturelle et mobilier épuré",
    metaTitle: "Architecte d'intérieur à Casablanca | Auren Studio",
    metaDesc:
      "Architecte d'intérieur à Casablanca : aménagement d'appartements, villas, bureaux et commerces. Plans, 3D, matériaux, mobilier sur mesure et suivi des travaux.",
    h1: "Architecte d'intérieur à Casablanca",
    lead:
      "Un intérieur réussi se vit avant de se regarder. Nous dessinons des espaces qui fonctionnent au quotidien, avec des matériaux et une lumière qui leur donnent du caractère.",
    body: [
      "Appartement, villa, bureau, boutique, restaurant ou hôtel : nous partons de vos usages pour organiser les espaces, les circulations et les rangements. Le projet est présenté en plans d'aménagement et en vues 3D, avec une planche de matériaux et de couleurs.",
      "Nous dessinons ensuite les éléments sur mesure (cuisine, dressing, bibliothèque, comptoir, menuiseries), les plans d'électricité et d'éclairage, et le calepinage des sols et revêtements. Pour les espaces professionnels, l'aménagement intègre l'image de marque et les contraintes d'exploitation.",
      "Nous pouvons aussi coordonner les artisans et les fournisseurs jusqu'à l'installation du mobilier, pour un résultat fidèle aux images validées.",
    ],
    steps: [
      { t: 'Programme', d: 'Usages, style, budget, relevé des lieux.' },
      { t: 'Concept', d: 'Plans d’aménagement, ambiances, vues 3D.' },
      { t: 'Détails', d: 'Mobilier sur mesure, éclairage, matériaux, calepinage.' },
      { t: 'Réalisation', d: 'Coordination des artisans et suivi jusqu’à l’installation.' },
    ],
    deliverables: [
      "Plans d'aménagement",
      'Vues 3D et planche de matériaux',
      'Plans de mobilier sur mesure',
      "Plans d'électricité et d'éclairage",
      'Suivi des travaux et des fournisseurs',
    ],
    faq: [
      {
        q: 'Intervenez-vous pour un seul espace, comme une cuisine ?',
        a: 'Oui, nous intervenons aussi bien sur une pièce que sur un logement ou un plateau de bureaux complet.',
      },
      {
        q: 'Aménagez-vous des bureaux et des commerces ?',
        a: "Oui : bureaux, cabinets, boutiques, showrooms, cafés et restaurants, en intégrant les contraintes d'exploitation et l'image de votre marque.",
      },
      {
        q: 'Comment est fixé le prix d’une mission d’architecture d’intérieur ?',
        a: "Selon la surface, le niveau de détail demandé et l'étendue de la mission (conception seule ou avec suivi). Nous établissons une proposition après une première visite. Voir aussi notre guide des prix.",
      },
    ],
    related: ['renovation-extension-surelevation', '3d-expertise-conseil'],
    guide: 'prix-architecte-maroc',
  },
  {
    slug: '3d-expertise-conseil',
    num: '06',
    title: '3D, expertise et conseil',
    short: "Rendus 3D réalistes, diagnostic, avis technique et assistance à l'achat d'un bien.",
    img: 'maquette',
    imgAlt: 'Maquette de maison et plans sur la table de travail de l’architecte',
    metaTitle: 'Rendus 3D, expertise bâtiment et conseil | Casablanca',
    metaDesc:
      "Rendus 3D réalistes de villas et d'intérieurs, diagnostic de bâtiment, avis technique et assistance à l'achat d'un bien immobilier à Casablanca.",
    h1: 'Rendus 3D, expertise et conseil en architecture',
    lead:
      "Voir un projet avant qu'il existe, comprendre un bâtiment avant de l'acheter : des missions courtes qui évitent des décisions coûteuses.",
    body: [
      "Rendus 3D : images réalistes et visites virtuelles de villas, d'immeubles et d'intérieurs, pour valider un projet, convaincre un associé ou commercialiser un programme sur plan.",
      "Expertise et diagnostic : fissures, humidité, désordres, conformité d'une construction aux plans autorisés. Nous visitons, analysons et rédigeons un avis technique clair, avec les pistes de solution et, si nécessaire, l'intervention d'un bureau d'études spécialisé.",
      "Assistance à l'achat : avant de signer pour une villa, un appartement ou un terrain, nous vérifions l'état du bien, ce que le règlement d'urbanisme permettra d'y faire (extension, surélévation) et l'ordre de grandeur des travaux à prévoir.",
    ],
    steps: [
      { t: 'Demande', d: 'Vous décrivez le besoin : images, avis technique ou achat.' },
      { t: 'Visite / données', d: 'Visite du bien ou réception des plans existants.' },
      { t: 'Analyse', d: 'Modélisation 3D, diagnostic ou étude réglementaire.' },
      { t: 'Restitution', d: 'Images, rapport écrit ou réunion de conseil.' },
    ],
    deliverables: [
      'Rendus 3D et visites virtuelles',
      'Rapport de diagnostic',
      'Avis technique écrit',
      "Note d'assistance à l'achat",
    ],
    faq: [
      {
        q: 'Pouvez-vous faire des rendus 3D à partir de plans existants ?',
        a: "Oui, à partir de vos plans (papier, PDF ou DWG) nous modélisons le projet et produisons des images réalistes, extérieures et intérieures.",
      },
      {
        q: 'Que vérifiez-vous avant l’achat d’une villa ?',
        a: "L'état du gros œuvre et des réseaux, les signes de désordres, la conformité apparente aux plans autorisés et le potentiel du bien selon le règlement d'urbanisme, avec un ordre de grandeur des travaux.",
      },
    ],
    related: ['conception-architecturale', 'architecture-interieur'],
    guide: 'prix-architecte-maroc',
  },
];

export const getService = (slug) => SERVICES.find((s) => s.slug === slug);
