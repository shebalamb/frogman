const CONFIG = {
  limoUrl: "https://YOUR-LIMO-BOOKING-URL-HERE",
  whatsappNumber: "50366906778",
  whatsappMessage:
    "Hello, I would like to coordinate an executive transportation service with Frogman.",
};

const translations = {
  en: {
    brand: { sub: "Transportation and Security" },
    nav: {
      home: "Home",
      services: "Services",
      how: "How We Work",
      why: "Why Frogman",
      contact: "Contact",
    },
    cta: { book: "Book Now", whatsapp: "WhatsApp" },
    hero: {
      eyebrow: "Premium Executive Transport",
      title: "Executive transport, handled with precision.",
      subtitle:
        "Premium airport transfers, executive mobility and discreet operational support for clients who value punctuality, confidentiality and control.",
      cta_primary: "Reserve with Limo",
      cta_secondary: "Contact via WhatsApp",
      supporting: [
        "Airport Transfers",
        "Executive Chauffeur Service",
        "Corporate & VIP Mobility",
      ],
      badge: {
        title: "Discreet by default",
        body: "Premium service execution with low-profile control, refined presentation and reliable coordination from arrival to destination.",
      },
      stats: {
        1: { title: "Airport Transfers", body: "Smooth arrivals and departures" },
        2: { title: "Executive Mobility", body: "For high-level itineraries" },
        3: { title: "Discreet Support", body: "Integrated when needed" },
      },
    },
    about: {
      eyebrow: "About Frogman",
      title: "A premium transport experience built on discipline and discretion.",
      body: "Frogman provides executive transportation for VIPs, business travelers, delegations and clients who expect more than a standard car service. From airport arrivals to final destination, every movement is coordinated with precision, confidentiality and a premium service mindset.",
      highlight_1: "Executive-grade service",
      highlight_2: "Airport, hotel and event coordination",
      highlight_3: "Luxury fleet experience",
      highlight_4: "Confidential handling by default",
      overlay_title: "Controlled execution",
      overlay_body:
        "A service model built for clients who value timing, presentation and quiet confidence.",
    },
    services: {
      eyebrow: "Services",
      title: "Mobility solutions tailored to executive needs",
      intro:
        "From single transfers to complex itineraries, Frogman delivers smooth, reliable and discreet mobility for high-level clients and organizations.",
      items: {
        airport: {
          title: "Airport Transfers",
          body: "Private arrivals and departures with flight monitoring, meet & greet and seamless coordination.",
        },
        exec: {
          title: "Executive Transportation",
          body: "Door-to-door service for meetings, offices, hotels, dinners and business agendas.",
        },
        hourly: {
          title: "Hourly Chauffeur Service",
          body: "Vehicle and chauffeur at your disposal for hourly bookings, multi-stop schedules and custom itineraries.",
        },
        hotel: {
          title: "Hotel & Event Coordination",
          body: "Mobility support for VIP guests, delegations, executives and event-related operations.",
        },
        vip: {
          title: "Corporate & VIP Mobility",
          body: "A refined service model for principals, corporate leaders and clients who require a higher standard of movement.",
        },
        protect: {
          title: "Discreet Protective Support",
          body: "Additional operational support can be integrated when profile, itinerary or context requires a more controlled execution.",
        },
      },
    },
    why: {
      eyebrow: "Why Frogman",
      title: "A higher standard of movement",
      intro:
        "What sets Frogman apart is not only the vehicle or the route, but the way every service is planned, presented and executed.",
      items: {
        discretion: {
          title: "Discretion by default",
          body: "Privacy is not an extra. It is part of the operating standard.",
        },
        timing: {
          title: "Precision timing",
          body: "We work with time margins, real coordination and a zero-delay mindset.",
        },
        chauffeurs: {
          title: "Executive-trained chauffeurs",
          body: "Professional presence, refined etiquette and disciplined execution at every stage of the service.",
        },
        control: {
          title: "Controlled experience",
          body: "Less friction, less exposure and more control over the journey.",
        },
        tailored: {
          title: "Tailored coordination",
          body: "Each service adapts to the client’s itinerary, priorities and context.",
        },
        presentation: {
          title: "Premium presentation",
          body: "Vehicles, drivers and communication aligned with high-end expectations.",
        },
      },
    },
    experience: {
      eyebrow: "The Experience",
      title: "From arrival to destination, every detail is handled",
      intro:
        "A Frogman service is designed to feel smooth, controlled and effortless for the client.",
      items: {
        1: {
          title: "Arrival coordination",
          body: "We track timing and prepare the service before you land.",
        },
        2: {
          title: "Meet & greet",
          body: "Professional reception and smooth handoff from terminal to vehicle.",
        },
        3: {
          title: "Vehicle readiness",
          body: "Clean presentation, executive atmosphere and immediate departure.",
        },
        4: {
          title: "Seamless transfer",
          body: "A quiet, comfortable journey handled with discretion and precision.",
        },
        5: {
          title: "Destination arrival",
          body: "Hotel, office, residence or venue, without friction.",
        },
        6: {
          title: "Itinerary continuity",
          body: "When needed, the service extends beyond one transfer into full movement coordination.",
        },
      },
    },
    how: {
      eyebrow: "How We Work",
      title: "A simple process, executed professionally",
      intro:
        "Working with Frogman is straightforward on the surface and highly organized underneath.",
      items: {
        1: {
          title: "Share your itinerary",
          body: "Tell us your route, timing, service type and any specific requirements.",
        },
        2: {
          title: "We confirm logistics",
          body: "We validate service details, coordination points and operational needs.",
        },
        3: {
          title: "Your service is assigned",
          body: "Vehicle, chauffeur and execution plan are defined according to the booking.",
        },
        4: {
          title: "We monitor and execute",
          body: "Timing, routing and service flow are actively managed.",
        },
        5: {
          title: "You move without friction",
          body: "You focus on your agenda. We handle the movement.",
        },
      },
      cta: "Reserve your service",
      cta_body:
        "Direct booking for transfers, executive itineraries and tailored service requests.",
    },
    standard: {
      eyebrow: "Operational Standard",
      title: "Discreet by design",
      body: "Frogman operates with a disciplined service model shaped by anticipation, precision and low-profile control. For clients who require it, additional protective coordination can be integrated seamlessly into the overall service experience.",
    },
    client: {
      eyebrow: "Client Experience",
      title: "What clients value most",
      items: {
        1: {
          title: "On-time execution",
          body: "Reliable arrivals and departures with real coordination behind the service.",
        },
        2: {
          title: "Confidential handling",
          body: "Private, respectful and discreet communication throughout the journey.",
        },
        3: {
          title: "Personalized attention",
          body: "Preferences, timing and service details handled with care.",
        },
        4: {
          title: "Premium comfort",
          body: "Quiet cabins, smooth rides and a polished travel experience.",
        },
        5: {
          title: "Responsive communication",
          body: "Fast, clear and discreet support when plans move.",
        },
        6: {
          title: "Professional presentation",
          body: "Drivers and vehicles aligned with executive expectations.",
        },
      },
    },
    final: {
      eyebrow: "Ready When You Are",
      title: "Ready to move with confidence?",
      body: "Book your service directly or contact us for itinerary coordination, special requests or tailored executive transportation.",
      book: "Book Now",
      whatsapp: "WhatsApp Us",
      supporting: [
        "Airport transfers",
        "Executive bookings",
        "Hourly service",
        "Custom arrangements",
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Need assistance or a custom request?",
      body: "Use WhatsApp for fast coordination, or book directly through Limo if your itinerary is ready.",
    },
    footer: {
      tagline: "Premium executive transport, delivered with discretion and precision.",
    },
  },

  es: {
    brand: { sub: "Transporte y Seguridad" },
    nav: {
      home: "Inicio",
      services: "Servicios",
      how: "Cómo Trabajamos",
      why: "Por Qué Frogman",
      contact: "Contacto",
    },
    cta: { book: "Reservar", whatsapp: "WhatsApp" },
    hero: {
      eyebrow: "Transporte Ejecutivo Premium",
      title: "Transporte ejecutivo, operado con precisión.",
      subtitle:
        "Traslados premium al aeropuerto, movilidad ejecutiva y apoyo operativo discreto para clientes que valoran puntualidad, confidencialidad y control.",
      cta_primary: "Reservar con Limo",
      cta_secondary: "Contactar por WhatsApp",
      supporting: [
        "Traslados al Aeropuerto",
        "Chofer Ejecutivo",
        "Movilidad Corporativa y VIP",
      ],
      badge: {
        title: "Discreción por defecto",
        body: "Ejecución premium con control de bajo perfil, presentación impecable y coordinación confiable desde la llegada hasta el destino.",
      },
      stats: {
        1: {
          title: "Traslados al Aeropuerto",
          body: "Llegadas y salidas sin fricción",
        },
        2: {
          title: "Movilidad Ejecutiva",
          body: "Para itinerarios de alto nivel",
        },
        3: {
          title: "Apoyo Discreto",
          body: "Integrado cuando se requiere",
        },
      },
    },
    about: {
      eyebrow: "Sobre Frogman",
      title: "Una experiencia de transporte premium construida sobre disciplina y discreción.",
      body: "Frogman brinda transporte ejecutivo para VIPs, viajeros de negocios, delegaciones y clientes que esperan más que un servicio de traslado estándar. Desde la llegada al aeropuerto hasta el destino final, cada movimiento se coordina con precisión, confidencialidad y mentalidad de servicio premium.",
      highlight_1: "Servicio de nivel ejecutivo",
      highlight_2: "Coordinación con aeropuertos, hoteles y eventos",
      highlight_3: "Experiencia de flota de lujo",
      highlight_4: "Confidencialidad por defecto",
      overlay_title: "Ejecución controlada",
      overlay_body:
        "Un modelo de servicio pensado para clientes que valoran el tiempo, la presentación y la confianza silenciosa.",
    },
    services: {
      eyebrow: "Servicios",
      title: "Soluciones de movilidad adaptadas a necesidades ejecutivas",
      intro:
        "Desde traslados puntuales hasta itinerarios complejos, Frogman ofrece movilidad fluida, confiable y discreta para clientes y organizaciones de alto nivel.",
      items: {
        airport: {
          title: "Traslados al Aeropuerto",
          body: "Llegadas y salidas privadas con monitoreo de vuelos, meet & greet y coordinación sin fricción.",
        },
        exec: {
          title: "Transporte Ejecutivo",
          body: "Servicio puerta a puerta para reuniones, oficinas, hoteles, cenas y agendas corporativas.",
        },
        hourly: {
          title: "Servicio de Chofer por Horas",
          body: "Vehículo y chofer a disposición para reservas por horas, múltiples paradas e itinerarios personalizados.",
        },
        hotel: {
          title: "Coordinación con Hoteles y Eventos",
          body: "Apoyo de movilidad para huéspedes VIP, delegaciones, ejecutivos y operaciones vinculadas a eventos.",
        },
        vip: {
          title: "Movilidad Corporativa y VIP",
          body: "Un modelo de servicio refinado para principales, líderes corporativos y clientes que exigen un estándar superior de movimiento.",
        },
        protect: {
          title: "Apoyo Operativo Discreto",
          body: "Puede integrarse apoyo operativo adicional cuando el perfil, el itinerario o el contexto exigen una ejecución más controlada.",
        },
      },
    },
    why: {
      eyebrow: "Por Qué Frogman",
      title: "Un estándar superior de movimiento",
      intro:
        "Lo que distingue a Frogman no es solo el vehículo o la ruta, sino la forma en que cada servicio se planifica, se presenta y se ejecuta.",
      items: {
        discretion: {
          title: "Discreción por defecto",
          body: "La privacidad no es un extra. Es parte del estándar operativo.",
        },
        timing: {
          title: "Precisión en los tiempos",
          body: "Trabajamos con márgenes, coordinación real y mentalidad de cero demoras.",
        },
        chauffeurs: {
          title: "Choferes con estándar ejecutivo",
          body: "Presencia profesional, etiqueta refinada y ejecución disciplinada en cada etapa del servicio.",
        },
        control: {
          title: "Experiencia controlada",
          body: "Menos fricción, menos exposición y más control sobre el trayecto.",
        },
        tailored: {
          title: "Coordinación a medida",
          body: "Cada servicio se adapta al itinerario, las prioridades y el contexto del cliente.",
        },
        presentation: {
          title: "Presentación premium",
          body: "Vehículos, conductores y comunicación alineados con expectativas de alto nivel.",
        },
      },
    },
    experience: {
      eyebrow: "La Experiencia",
      title: "Desde la llegada hasta el destino, cada detalle está resuelto",
      intro:
        "Un servicio Frogman está diseñado para sentirse fluido, controlado y sin esfuerzo para el cliente.",
      items: {
        1: {
          title: "Coordinación de llegada",
          body: "Monitoreamos tiempos y preparamos el servicio antes de que aterrice.",
        },
        2: {
          title: "Meet & greet",
          body: "Recepción profesional y transición fluida desde la terminal hasta el vehículo.",
        },
        3: {
          title: "Vehículo listo",
          body: "Presentación impecable, ambiente ejecutivo y salida inmediata.",
        },
        4: {
          title: "Traslado sin fricción",
          body: "Un viaje silencioso y cómodo, ejecutado con discreción y precisión.",
        },
        5: {
          title: "Llegada al destino",
          body: "Hotel, oficina, residencia o evento, sin interrupciones.",
        },
        6: {
          title: "Continuidad del itinerario",
          body: "Cuando se requiere, el servicio se extiende más allá de un traslado puntual y pasa a coordinar toda la movilidad.",
        },
      },
    },
    how: {
      eyebrow: "Cómo Trabajamos",
      title: "Un proceso simple, ejecutado profesionalmente",
      intro:
        "Trabajar con Frogman es sencillo en la superficie y altamente organizado por detrás.",
      items: {
        1: {
          title: "Comparta su itinerario",
          body: "Indíquenos ruta, horarios, tipo de servicio y cualquier requerimiento específico.",
        },
        2: {
          title: "Confirmamos la logística",
          body: "Validamos detalles, puntos de coordinación y necesidades operativas.",
        },
        3: {
          title: "Asignamos el servicio",
          body: "Definimos vehículo, chofer y plan de ejecución según la reserva.",
        },
        4: {
          title: "Monitoreamos y ejecutamos",
          body: "Gestionamos activamente tiempos, ruta y flujo del servicio.",
        },
        5: {
          title: "Usted se mueve sin fricción",
          body: "Usted se concentra en su agenda. Nosotros resolvemos el movimiento.",
        },
      },
      cta: "Reserve su servicio",
      cta_body:
        "Reserva directa para traslados, itinerarios ejecutivos y solicitudes personalizadas.",
    },
    standard: {
      eyebrow: "Estándar Operativo",
      title: "Discreto por diseño",
      body: "Frogman opera con un modelo de servicio disciplinado, marcado por la anticipación, la precisión y el control de bajo perfil. Para los clientes que lo requieren, puede integrarse coordinación protectiva adicional de manera fluida dentro de la experiencia general del servicio.",
    },
    client: {
      eyebrow: "Experiencia del Cliente",
      title: "Lo que más valoran nuestros clientes",
      items: {
        1: {
          title: "Ejecución puntual",
          body: "Llegadas y salidas confiables con coordinación real detrás del servicio.",
        },
        2: {
          title: "Gestión confidencial",
          body: "Comunicación privada, respetuosa y discreta durante todo el trayecto.",
        },
        3: {
          title: "Atención personalizada",
          body: "Preferencias, tiempos y detalles del servicio tratados con cuidado.",
        },
        4: {
          title: "Confort premium",
          body: "Cabinas silenciosas, viaje suave y experiencia pulida.",
        },
        5: {
          title: "Comunicación ágil",
          body: "Soporte rápido, claro y discreto cuando los planes cambian.",
        },
        6: {
          title: "Presentación profesional",
          body: "Conductores y vehículos alineados con expectativas ejecutivas.",
        },
      },
    },
    final: {
      eyebrow: "Listos cuando usted lo esté",
      title: "¿Listo para moverse con confianza?",
      body: "Reserve su servicio directamente o contáctenos para coordinar itinerarios, solicitudes especiales o transporte ejecutivo a medida.",
      book: "Reservar",
      whatsapp: "Escribir por WhatsApp",
      supporting: [
        "Traslados al aeropuerto",
        "Reservas ejecutivas",
        "Servicio por horas",
        "Arreglos personalizados",
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title: "¿Necesita asistencia o una solicitud especial?",
      body: "Use WhatsApp para una coordinación rápida, o reserve directamente en Limo si su itinerario ya está definido.",
    },
    footer: {
      tagline: "Transporte ejecutivo premium, ejecutado con discreción y precisión.",
    },
  },

  fr: {
    brand: { sub: "Transport et Sécurité" },
    nav: {
      home: "Accueil",
      services: "Services",
      how: "Notre Méthode",
      why: "Pourquoi Frogman",
      contact: "Contact",
    },
    cta: { book: "Réserver", whatsapp: "WhatsApp" },
    hero: {
      eyebrow: "Transport Exécutif Premium",
      title: "Transport exécutif, opéré avec précision.",
      subtitle:
        "Transferts aéroport premium, mobilité exécutive et appui opérationnel discret pour les clients qui valorisent la ponctualité, la confidentialité et le contrôle.",
      cta_primary: "Réserver avec Limo",
      cta_secondary: "Contacter par WhatsApp",
      supporting: [
        "Transferts Aéroport",
        "Chauffeur Exécutif",
        "Mobilité Corporate et VIP",
      ],
      badge: {
        title: "Discret par défaut",
        body: "Exécution premium avec contrôle à bas profil, présentation soignée et coordination fiable de l’arrivée à la destination.",
      },
      stats: {
        1: { title: "Transferts Aéroport", body: "Arrivées et départs fluides" },
        2: {
          title: "Mobilité Exécutive",
          body: "Pour itinéraires de haut niveau",
        },
        3: { title: "Appui Discret", body: "Intégré lorsque nécessaire" },
      },
    },
    about: {
      eyebrow: "À propos de Frogman",
      title: "Une expérience de transport premium fondée sur la discipline et la discrétion.",
      body: "Frogman fournit un transport exécutif pour les VIP, voyageurs d’affaires, délégations et clients qui attendent plus qu’un simple service de voiture. De l’arrivée à l’aéroport jusqu’à la destination finale, chaque déplacement est coordonné avec précision, confidentialité et sens du service premium.",
      highlight_1: "Service de niveau exécutif",
      highlight_2: "Coordination aéroports, hôtels et événements",
      highlight_3: "Expérience de flotte haut de gamme",
      highlight_4: "Confidentialité par défaut",
      overlay_title: "Exécution contrôlée",
      overlay_body:
        "Un modèle pensé pour les clients qui valorisent le timing, la présentation et la confiance tranquille.",
    },
    services: {
      eyebrow: "Services",
      title: "Des solutions de mobilité adaptées aux besoins exécutifs",
      intro:
        "Du transfert ponctuel aux itinéraires complexes, Frogman fournit une mobilité fluide, fiable et discrète pour des clients et organisations de haut niveau.",
      items: {
        airport: {
          title: "Transferts Aéroport",
          body: "Arrivées et départs privés avec suivi des vols, meet & greet et coordination fluide.",
        },
        exec: {
          title: "Transport Exécutif",
          body: "Service porte-à-porte pour réunions, bureaux, hôtels, dîners et agendas professionnels.",
        },
        hourly: {
          title: "Service Chauffeur à l’Heure",
          body: "Véhicule et chauffeur à disposition pour réservations horaires, trajets multi-étapes et itinéraires sur mesure.",
        },
        hotel: {
          title: "Coordination Hôtels et Événements",
          body: "Soutien mobilité pour invités VIP, délégations, cadres et opérations liées à des événements.",
        },
        vip: {
          title: "Mobilité Corporate et VIP",
          body: "Un modèle de service raffiné pour les principals, dirigeants et clients qui exigent un standard supérieur de déplacement.",
        },
        protect: {
          title: "Appui Opérationnel Discret",
          body: "Un soutien opérationnel supplémentaire peut être intégré lorsque le profil, l’itinéraire ou le contexte exigent une exécution plus contrôlée.",
        },
      },
    },
    why: {
      eyebrow: "Pourquoi Frogman",
      title: "Un standard supérieur de déplacement",
      intro:
        "Ce qui distingue Frogman, ce n’est pas seulement le véhicule ou l’itinéraire, mais la manière dont chaque service est planifié, présenté et exécuté.",
      items: {
        discretion: {
          title: "Discrétion par défaut",
          body: "La confidentialité n’est pas un supplément. Elle fait partie du standard opérationnel.",
        },
        timing: {
          title: "Précision temporelle",
          body: "Nous travaillons avec des marges, une coordination réelle et une culture sans retard.",
        },
        chauffeurs: {
          title: "Chauffeurs formés au standard exécutif",
          body: "Présence professionnelle, étiquette soignée et exécution disciplinée à chaque étape du service.",
        },
        control: {
          title: "Expérience contrôlée",
          body: "Moins de friction, moins d’exposition et davantage de contrôle sur le déplacement.",
        },
        tailored: {
          title: "Coordination sur mesure",
          body: "Chaque service s’adapte à l’itinéraire, aux priorités et au contexte du client.",
        },
        presentation: {
          title: "Présentation premium",
          body: "Véhicules, chauffeurs et communication alignés avec des attentes haut de gamme.",
        },
      },
    },
    experience: {
      eyebrow: "L’Expérience",
      title: "De l’arrivée à la destination, chaque détail est pris en charge",
      intro:
        "Un service Frogman est conçu pour être fluide, contrôlé et sans effort pour le client.",
      items: {
        1: {
          title: "Coordination d’arrivée",
          body: "Nous suivons les horaires et préparons le service avant votre atterrissage.",
        },
        2: {
          title: "Meet & greet",
          body: "Accueil professionnel et transition fluide du terminal au véhicule.",
        },
        3: {
          title: "Véhicule prêt",
          body: "Présentation impeccable, atmosphère exécutive et départ immédiat.",
        },
        4: {
          title: "Transfert sans friction",
          body: "Un trajet calme et confortable, exécuté avec discrétion et précision.",
        },
        5: {
          title: "Arrivée à destination",
          body: "Hôtel, bureau, résidence ou événement, sans interruption.",
        },
        6: {
          title: "Continuité de l’itinéraire",
          body: "Lorsque nécessaire, le service va au-delà d’un simple transfert pour coordonner l’ensemble des déplacements.",
        },
      },
    },
    how: {
      eyebrow: "Notre Méthode",
      title: "Un processus simple, exécuté avec professionnalisme",
      intro:
        "Travailler avec Frogman est simple en apparence et hautement organisé en profondeur.",
      items: {
        1: {
          title: "Partagez votre itinéraire",
          body: "Indiquez-nous votre trajet, vos horaires, le type de service et vos besoins spécifiques.",
        },
        2: {
          title: "Nous confirmons la logistique",
          body: "Nous validons les détails du service, les points de coordination et les besoins opérationnels.",
        },
        3: {
          title: "Votre service est attribué",
          body: "Le véhicule, le chauffeur et le plan d’exécution sont définis selon la réservation.",
        },
        4: {
          title: "Nous suivons et exécutons",
          body: "Horaires, itinéraires et déroulement du service sont activement supervisés.",
        },
        5: {
          title: "Vous vous déplacez sans friction",
          body: "Vous vous concentrez sur votre agenda. Nous gérons le déplacement.",
        },
      },
      cta: "Réservez votre service",
      cta_body:
        "Réservation directe pour transferts, itinéraires exécutifs et demandes sur mesure.",
    },
    standard: {
      eyebrow: "Standard Opérationnel",
      title: "Discret par conception",
      body: "Frogman fonctionne selon un modèle de service discipliné, façonné par l’anticipation, la précision et le contrôle à bas profil. Pour les clients qui en ont besoin, une coordination protectrice supplémentaire peut être intégrée de manière fluide dans l’ensemble de l’expérience de service.",
    },
    client: {
      eyebrow: "Expérience Client",
      title: "Ce que nos clients valorisent le plus",
      items: {
        1: {
          title: "Exécution ponctuelle",
          body: "Arrivées et départs fiables avec une coordination réelle en coulisse.",
        },
        2: {
          title: "Gestion confidentielle",
          body: "Communication privée, respectueuse et discrète tout au long du trajet.",
        },
        3: {
          title: "Attention personnalisée",
          body: "Préférences, horaires et détails du service traités avec soin.",
        },
        4: {
          title: "Confort premium",
          body: "Habitacles silencieux, trajet fluide et expérience soignée.",
        },
        5: {
          title: "Communication réactive",
          body: "Support rapide, clair et discret lorsque les plans évoluent.",
        },
        6: {
          title: "Présentation professionnelle",
          body: "Chauffeurs et véhicules alignés avec des attentes exécutives.",
        },
      },
    },
    final: {
      eyebrow: "Prêts quand vous l’êtes",
      title: "Prêt à vous déplacer en toute confiance ?",
      body: "Réservez votre service directement ou contactez-nous pour la coordination d’itinéraires, des demandes spéciales ou un transport exécutif sur mesure.",
      book: "Réserver",
      whatsapp: "Nous écrire sur WhatsApp",
      supporting: [
        "Transferts aéroport",
        "Réservations exécutives",
        "Service horaire",
        "Solutions sur mesure",
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Besoin d’assistance ou d’une demande spéciale ?",
      body: "Utilisez WhatsApp pour une coordination rapide, ou réservez directement via Limo si votre itinéraire est déjà prêt.",
    },
    footer: {
      tagline: "Transport exécutif premium, exécuté avec discrétion et précision.",
    },
  },

  pt: {
    brand: { sub: "Transporte e Segurança" },
    nav: {
      home: "Início",
      services: "Serviços",
      how: "Como Trabalhamos",
      why: "Por Que Frogman",
      contact: "Contato",
    },
    cta: { book: "Reservar", whatsapp: "WhatsApp" },
    hero: {
      eyebrow: "Transporte Executivo Premium",
      title: "Transporte executivo, operado com precisão.",
      subtitle:
        "Traslados premium para aeroportos, mobilidade executiva e suporte operacional discreto para clientes que valorizam pontualidade, confidencialidade e controle.",
      cta_primary: "Reservar com Limo",
      cta_secondary: "Falar por WhatsApp",
      supporting: [
        "Traslados para Aeroporto",
        "Chauffeur Executivo",
        "Mobilidade Corporativa e VIP",
      ],
      badge: {
        title: "Discreto por padrão",
        body: "Execução premium com controle de baixo perfil, apresentação refinada e coordenação confiável da chegada ao destino.",
      },
      stats: {
        1: {
          title: "Traslados para Aeroporto",
          body: "Chegadas e partidas sem atrito",
        },
        2: {
          title: "Mobilidade Executiva",
          body: "Para itinerários de alto nível",
        },
        3: {
          title: "Suporte Discreto",
          body: "Integrado quando necessário",
        },
      },
    },
    about: {
      eyebrow: "Sobre a Frogman",
      title: "Uma experiência de transporte premium construída sobre disciplina e discrição.",
      body: "A Frogman oferece transporte executivo para VIPs, viajantes de negócios, delegações e clientes que esperam mais do que um serviço de carro convencional. Da chegada ao aeroporto ao destino final, cada deslocamento é coordenado com precisão, confidencialidade e mentalidade de serviço premium.",
      highlight_1: "Serviço de padrão executivo",
      highlight_2: "Coordenação com aeroportos, hotéis e eventos",
      highlight_3: "Experiência com frota de luxo",
      highlight_4: "Confidencialidade por padrão",
      overlay_title: "Execução controlada",
      overlay_body:
        "Um modelo pensado para clientes que valorizam tempo, apresentação e confiança silenciosa.",
    },
    services: {
      eyebrow: "Serviços",
      title: "Soluções de mobilidade adaptadas às necessidades executivas",
      intro:
        "De traslados pontuais a itinerários complexos, a Frogman entrega mobilidade fluida, confiável e discreta para clientes e organizações de alto nível.",
      items: {
        airport: {
          title: "Traslados para Aeroporto",
          body: "Chegadas e partidas privadas com monitoramento de voos, meet & greet e coordenação sem atrito.",
        },
        exec: {
          title: "Transporte Executivo",
          body: "Serviço porta a porta para reuniões, escritórios, hotéis, jantares e agendas corporativas.",
        },
        hourly: {
          title: "Serviço de Chauffeur por Hora",
          body: "Veículo e chauffeur à disposição para reservas por hora, múltiplas paradas e itinerários personalizados.",
        },
        hotel: {
          title: "Coordenação com Hotéis e Eventos",
          body: "Suporte de mobilidade para hóspedes VIP, delegações, executivos e operações ligadas a eventos.",
        },
        vip: {
          title: "Mobilidade Corporativa e VIP",
          body: "Um modelo de serviço refinado para principals, líderes corporativos e clientes que exigem um padrão superior de deslocamento.",
        },
        protect: {
          title: "Suporte Operacional Discreto",
          body: "Suporte operacional adicional pode ser integrado quando o perfil, o itinerário ou o contexto exigem uma execução mais controlada.",
        },
      },
    },
    why: {
      eyebrow: "Por Que Frogman",
      title: "Um padrão superior de deslocamento",
      intro:
        "O que diferencia a Frogman não é apenas o veículo ou a rota, mas a forma como cada serviço é planejado, apresentado e executado.",
      items: {
        discretion: {
          title: "Discrição por padrão",
          body: "Privacidade não é um extra. É parte do padrão operacional.",
        },
        timing: {
          title: "Precisão no tempo",
          body: "Trabalhamos com margens, coordenação real e mentalidade de zero atrasos.",
        },
        chauffeurs: {
          title: "Chauffeurs com padrão executivo",
          body: "Presença profissional, etiqueta refinada e execução disciplinada em cada etapa do serviço.",
        },
        control: {
          title: "Experiência controlada",
          body: "Menos atrito, menos exposição e mais controle sobre o deslocamento.",
        },
        tailored: {
          title: "Coordenação sob medida",
          body: "Cada serviço se adapta ao itinerário, às prioridades e ao contexto do cliente.",
        },
        presentation: {
          title: "Apresentação premium",
          body: "Veículos, motoristas e comunicação alinhados a expectativas de alto nível.",
        },
      },
    },
    experience: {
      eyebrow: "A Experiência",
      title: "Da chegada ao destino, cada detalhe é resolvido",
      intro:
        "Um serviço Frogman é pensado para ser fluido, controlado e sem esforço para o cliente.",
      items: {
        1: {
          title: "Coordenação de chegada",
          body: "Monitoramos horários e preparamos o serviço antes do pouso.",
        },
        2: {
          title: "Meet & greet",
          body: "Recepção profissional e transição fluida do terminal para o veículo.",
        },
        3: {
          title: "Veículo pronto",
          body: "Apresentação impecável, atmosfera executiva e saída imediata.",
        },
        4: {
          title: "Traslado sem atrito",
          body: "Uma viagem silenciosa e confortável, conduzida com discrição e precisão.",
        },
        5: {
          title: "Chegada ao destino",
          body: "Hotel, escritório, residência ou evento, sem interrupções.",
        },
        6: {
          title: "Continuidade do itinerário",
          body: "Quando necessário, o serviço vai além de um traslado pontual e passa a coordenar toda a mobilidade.",
        },
      },
    },
    how: {
      eyebrow: "Como Trabalhamos",
      title: "Um processo simples, executado com profissionalismo",
      intro:
        "Trabalhar com a Frogman é simples na superfície e altamente organizado nos bastidores.",
      items: {
        1: {
          title: "Compartilhe seu itinerário",
          body: "Informe rota, horários, tipo de serviço e qualquer necessidade específica.",
        },
        2: {
          title: "Confirmamos a logística",
          body: "Validamos detalhes do serviço, pontos de coordenação e necessidades operacionais.",
        },
        3: {
          title: "Seu serviço é designado",
          body: "Veículo, chauffeur e plano de execução são definidos de acordo com a reserva.",
        },
        4: {
          title: "Monitoramos e executamos",
          body: "Horários, rota e fluxo do serviço são gerenciados ativamente.",
        },
        5: {
          title: "Você se desloca sem atrito",
          body: "Você foca na sua agenda. Nós cuidamos do deslocamento.",
        },
      },
      cta: "Reserve seu serviço",
      cta_body:
        "Reserva direta para traslados, itinerários executivos e solicitações personalizadas.",
    },
    standard: {
      eyebrow: "Padrão Operacional",
      title: "Discreto por concepção",
      body: "A Frogman opera com um modelo de serviço disciplinado, moldado por antecipação, precisão e controle de baixo perfil. Para clientes que exigem isso, coordenação protetiva adicional pode ser integrada de forma fluida à experiência geral do serviço.",
    },
    client: {
      eyebrow: "Experiência do Cliente",
      title: "O que os clientes mais valorizam",
      items: {
        1: {
          title: "Execução pontual",
          body: "Chegadas e partidas confiáveis com coordenação real por trás do serviço.",
        },
        2: {
          title: "Condução confidencial",
          body: "Comunicação privada, respeitosa e discreta durante todo o trajeto.",
        },
        3: {
          title: "Atenção personalizada",
          body: "Preferências, horários e detalhes do serviço tratados com cuidado.",
        },
        4: {
          title: "Conforto premium",
          body: "Cabines silenciosas, viagem suave e experiência refinada.",
        },
        5: {
          title: "Comunicação responsiva",
          body: "Suporte rápido, claro e discreto quando os planos mudam.",
        },
        6: {
          title: "Apresentação profissional",
          body: "Motoristas e veículos alinhados a expectativas executivas.",
        },
      },
    },
    final: {
      eyebrow: "Prontos quando você estiver",
      title: "Pronto para se deslocar com confiança?",
      body: "Reserve seu serviço diretamente ou fale conosco para coordenação de itinerário, solicitações especiais ou transporte executivo sob medida.",
      book: "Reservar",
      whatsapp: "Falar no WhatsApp",
      supporting: [
        "Traslados para aeroporto",
        "Reservas executivas",
        "Serviço por hora",
        "Soluções personalizadas",
      ],
    },
    contact: {
      eyebrow: "Contato",
      title: "Precisa de assistência ou de uma solicitação especial?",
      body: "Use o WhatsApp para coordenação rápida, ou reserve diretamente no Limo se seu itinerário já estiver definido.",
    },
    footer: {
      tagline: "Transporte executivo premium, executado com discrição e precisão.",
    },
  },
};

const DEFAULT_LANG = "en";
const STORAGE_KEY = "frogman_language";

function getNestedValue(obj, path) {
  return path
    .split(".")
    .reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : null), obj);
}

function updateText(lang) {
  const dict = translations[lang] || translations[DEFAULT_LANG];
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const value = getNestedValue(dict, key);
    if (typeof value === "string") {
      el.textContent = value;
    }
  });

  const heroSupporting = document.getElementById("heroSupporting");
  if (heroSupporting) {
    heroSupporting.innerHTML = "";
    dict.hero.supporting.forEach((item) => {
      const span = document.createElement("span");
      span.textContent = item;
      heroSupporting.appendChild(span);
    });
  }

  const finalSupporting = document.getElementById("finalSupporting");
  if (finalSupporting) {
    finalSupporting.innerHTML = "";
    dict.final.supporting.forEach((item) => {
      const span = document.createElement("span");
      span.textContent = item;
      finalSupporting.appendChild(span);
    });
  }

  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  localStorage.setItem(STORAGE_KEY, lang);
}

function applyLinks() {
  const limoLink =
    CONFIG.limoUrl && CONFIG.limoUrl.startsWith("http") ? CONFIG.limoUrl : "#";

  const waMessage = encodeURIComponent(CONFIG.whatsappMessage);
  const waLink = `https://wa.me/${CONFIG.whatsappNumber}?text=${waMessage}`;

  ["headerBook", "heroBook", "standardBook", "finalBook", "footerBook"].forEach(
    (id) => {
      const el = document.getElementById(id);
      if (el) {
        el.href = limoLink;
        if (limoLink !== "#") {
          el.target = "_blank";
          el.rel = "noopener noreferrer";
        }
      }
    }
  );

  [
    "headerWhatsApp",
    "heroWhatsApp",
    "standardWhatsApp",
    "finalWhatsApp",
    "footerWhatsApp",
    "contactWhatsApp",
    "floatingWhatsApp",
  ].forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.href = waLink;
      el.target = "_blank";
      el.rel = "noopener noreferrer";
    }
  });
}

function initMenu() {
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("siteNav");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function initLanguageSwitcher() {
  document.querySelectorAll(".lang-switch button").forEach((button) => {
    button.addEventListener("click", () => updateText(button.dataset.lang));
  });

  const saved = localStorage.getItem(STORAGE_KEY);
  const browser = (navigator.language || DEFAULT_LANG).slice(0, 2).toLowerCase();
  const initial = translations[saved]
    ? saved
    : translations[browser]
    ? browser
    : DEFAULT_LANG;

  updateText(initial);
}

function initReveal() {
  const items = document.querySelectorAll("[data-reveal]");

  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  items.forEach((item) => observer.observe(item));
}

function initActiveNav() {
  const links = [...document.querySelectorAll(".nav a")];
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (!sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((link) => {
            link.classList.toggle(
              "active",
              link.getAttribute("href") === `#${entry.target.id}`
            );
          });
        }
      });
    },
    { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}

document.addEventListener("DOMContentLoaded", () => {
  applyLinks();
  initMenu();
  initLanguageSwitcher();
  initReveal();
  initActiveNav();
});
