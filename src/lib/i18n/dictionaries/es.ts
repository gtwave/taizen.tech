import type { Dictionary } from "./pt";

const es: Dictionary = {
  nav: {
    home: "Inicio",
    servicos: "Servicios",
    poc: "POC",
    cases: "Casos",
    artigos: "Artículos",
    contato: "Contacto",
    agendarImersao: "Agendar sesión",
  },

  hero: {
    tagline: "Ingeniería de Software e Innovación Digital Senior",
    lines: ["Aceleración de entregas", "con ingeniería senior", "de verdad."],
    text: "Infraestructura resiliente en la nube, integración práctica de IA y gestión ágil ejecutada por especialistas con más de 20 años de mercado — sin juniors aprendiendo en tu proyecto.",
    ctaPoc: "Conocer la Propuesta de POC",
    ctaImersao: "Agendar sesión técnica",
    stats: [
      { value: "20+", label: "años de experiencia técnica" },
      { value: "100%", label: "devs y líderes senior" },
      { value: "2-4 sem.", label: "para validar con un POC" },
    ],
  },

  home: {
    desafios: {
      tagline: "Desafíos actuales del mercado",
      heading: "Los cuellos de botella que frenan tu roadmap.",
      text: "Eso es lo que resolvemos antes que nada — antes de proponer squads, cloud o IA.",
      cards: [
        {
          icon: "⏳",
          title: "Cuellos de botella en desarrollo",
          text: "Escasez de talento senior, curvas de aprendizaje largas pagadas por el cliente y retrasos constantes en la entrega de funcionalidades críticas para el negocio.",
        },
        {
          icon: "⚠️",
          title: "Sistemas rígidos y riesgos",
          text: "Falta de automatización en CI/CD, arquitecturas heredadas difíciles de migrar a la nube e incertidumbre sobre cómo aplicar Inteligencia Artificial de forma práctica.",
        },
      ],
    },
    portfolio: {
      tagline: "Portafolio de servicios",
      heading: "Elige tu frente.",
      cards: [
        {
          icon: "🧑‍💻",
          title: "Outsourcing & Scrum",
          description: "Asignación estratégica de desarrolladores senior y gestión ágil de equipos de alto rendimiento enfocada en un flujo constante de entregas.",
        },
        {
          icon: "☁️",
          title: "Cloud & DevOps",
          description: "Migración segura a infraestructura cloud, automatización de CI/CD, resiliencia e implementación de infraestructura como código.",
        },
        {
          icon: "🤖",
          title: "Integraciones de IA",
          description: "Incorporación de Inteligencia Artificial generativa y predictiva en flujos de trabajo y sistemas de software existentes.",
        },
        {
          icon: "🛠️",
          title: "Soporte 24/7",
          description: "Mantenimiento preventivo, soporte continuo a aplicaciones críticas y corrección ágil de errores sin interrumpir el negocio.",
        },
      ],
    },
    diferencial: {
      tagline: "Diferencial competitivo",
      heading: "Mitigación total del riesgo tecnológico.",
      text: "A diferencia de las grandes consultoras que envían becarios y juniors a operar tu proyecto, en Taizen todos los proyectos cuentan con participación directa y supervisión de líderes con más de 20 años de mercado.",
      cards: [
        {
          icon: "🏆",
          title: "Años de experiencia técnica",
          text: "Consultora fundada por ingenieros y directores con más de dos décadas liderando la creación de arquitecturas complejas para grandes empresas.",
        },
        {
          icon: "🎯",
          title: "Cero laboratorio de juniors",
          text: "Garantizamos que tu proyecto no sea un laboratorio para profesionales junior. Madurez ejecutiva con atención directa de los fundadores.",
        },
        {
          icon: "⚡",
          title: "Precisión desde el primer sprint",
          text: "Cada decisión de arquitectura, pipeline o código se ejecuta con precisión quirúrgica desde el primer día — sin curva de aprendizaje pagada por el cliente.",
        },
      ],
    },
    cases: {
      tagline: "Casos",
      heading: "Resultados reales en productos reales.",
      text: "De consultoría física a una plataforma digital escalable — dos casos donde liderar la arquitectura desde cero marcó la diferencia.",
      cards: [
        {
          icon: "💳",
          title: "WEXP — Fintech · Spin-off · SaaS",
          text: "Plataforma digital de optimización de gastos corporativos, construida desde cero como spin-off de Willy Consultoria — del Design Sprint a la arquitectura de software completa.",
          extra: "R$5 mill+ en transacciones procesadas",
        },
        {
          icon: "🏥",
          title: "ISA — Healthtech",
          text: "Atención de salud móvil y domiciliaria descentralizada — logística de profesionales, pacientes y exámenes orquestada con Web & Mobile, Cloud y Data & IA.",
          extra: "Infraestructura escalable en tiempo real",
        },
      ],
    },
  },

  comparisonTable: {
    tagline: "Modelo tradicional vs Taizen",
    heading: "Creación y ejecución.",
    theadTradicional: "Consultoras tradicionales",
    theadTaizen: "Taizen Consulting",
    rows: [
      {
        label: "Composición del equipo",
        tradicional: "Junior/semi-senior liderados a distancia",
        taizen: "100% especialistas senior (20+ años)",
      },
      {
        label: "Curva de aprendizaje",
        tradicional: "Pagada por el cliente durante las primeras semanas",
        taizen: "Cero. Aporte productivo inmediato",
      },
      {
        label: "Relación y gestión",
        tradicional: "Gerentes de cuenta alejados del código real",
        taizen: "Contacto directo con los socios ingenieros",
      },
      {
        label: "Flexibilidad de contrato",
        tradicional: "Contratos largos y rígidos con altos costos",
        taizen: "Validación mediante POC previo y squads escalables",
      },
    ],
  },

  journeySteps: {
    tagline: "Cómo funciona",
    heading: "Recorrido de ejecución del POC.",
    text: "Cuatro semanas, desde el mapeo del cuello de botella hasta la presentación de resultados de rendimiento y ROI.",
    steps: [
      { n: "1", title: "Semana 1: Inmersión", text: "Mapeo del cuello de botella técnico específico (ej: pipeline lento o integración de IA)." },
      { n: "2", title: "Semana 2: Arquitectura", text: "Diseño de la solución técnica y configuración del entorno de pruebas por el equipo senior." },
      { n: "3", title: "Semana 3: Ejecución", text: "Sprint enfocado de desarrollo o automatización con código funcional entregado." },
      { n: "4", title: "Semana 4: Validación", text: "Presentación de los resultados de rendimiento, ROI y plan de expansión." },
    ],
  },

  ctaDefault: {
    heading: "¿Agendamos una sesión?",
    text: "Recibe un diagnóstico previo de tus desafíos de ingeniería, cloud o IA — sesión técnica de 30 minutos con los socios, sin costo.",
    ctaLabel: "Agendar sesión técnica",
  },

  footer: {
    text: "Ingeniería de Software e Innovación Digital Senior — outsourcing, cloud/DevOps, IA aplicada y soporte, liderados por 20+ años de mercado.",
    newsletterLabel: "Recibe contenido técnico y novedades",
    emailPlaceholder: "Tu correo...",
    submitLabel: "Enviar",
    copyright: "Taizen Consulting — Ingeniería de Software e Innovación Digital Senior.",
  },

  servicosPage: {
    banner: {
      tagline: "Portafolio de Servicios",
      lines: ["Elige tu", "frente."],
      text: "Cuatro frentes de actuación — siempre con especialistas senior al mando del proyecto, desde el primer diagnóstico hasta el soporte continuo.",
    },
    blocks: [
      {
        heading: "Outsourcing & Squads Ágiles",
        icon: "🧑‍💻",
        text: "Asignación estratégica de desarrolladores senior y gestión ágil de equipos de alto rendimiento enfocada en un flujo constante — sin curva de aprendizaje pagada por el cliente.",
        points: [
          "Devs 100% senior — squads a medida para tu roadmap",
          "Gestión Scrum especializada con entregas a tiempo",
          "Incorporación inmediata, sin curva de aprendizaje improductiva",
          "Escalabilidad flexible según las demandas del negocio",
        ],
      },
      {
        heading: "Cloud, DevOps & CI/CD",
        icon: "☁️",
        text: "Migración segura a infraestructura cloud, automatización de CI/CD, resiliencia e implementación de infraestructura como código — lanzamientos más frecuentes y seguros.",
        points: [
          "Migración a la nube (AWS, Azure, GCP) sin downtime",
          "Pipelines de CI/CD automatizados de punta a punta",
          "Infraestructura como Código (IaC) reproducible y trazable",
          "Optimización de costos (FinOps) en entornos cloud",
        ],
      },
      {
        heading: "Integraciones de IA",
        icon: "🧠",
        text: "Incorporación de Inteligencia Artificial generativa y predictiva en flujos de trabajo y sistemas de software existentes — del prompt engineering al despliegue en producción.",
        points: [
          "LLMs integrados en flujos reales de atención y análisis",
          "Automatización inteligente con agentes e IA predictiva",
          "Búsqueda semántica en bases de datos y documentos internos",
          "Despliegue en producción con monitoreo continuo",
        ],
      },
      {
        heading: "Soporte 24/7",
        icon: "🛠️",
        text: "Mantenimiento preventivo, soporte continuo a aplicaciones críticas y corrección ágil de errores sin interrumpir el negocio — con IA integrada de forma práctica, no experimental.",
        points: [
          "Soporte continuo de sistemas heredados y producción",
          "Seguridad y cumplimiento con monitoreo de vulnerabilidades",
          "Atención ágil (SLA) para incidentes críticos",
          "Corrección de errores sin interrumpir la operación",
        ],
      },
    ],
    cta: {
      heading: "¿Quieres validar antes de contratar?",
      text: "Conoce nuestra Propuesta de POC — una validación práctica de 2 a 4 semanas para comprobar nuestra experiencia con resultados tangibles, antes de cualquier compromiso a largo plazo.",
      ctaLabel: "Conocer el POC →",
    },
  },

  pocPage: {
    banner: {
      tagline: "Modelo de validación sin riesgo",
      lines: ["Propuesta de Prueba", "de Concepto (POC)"],
      text: "Desarrollamos una propuesta de validación práctica de 2 a 4 semanas para resolver un cuello de botella real de tu TI, comprobar nuestra experiencia y presentar resultados tangibles antes de cualquier compromiso a largo plazo.",
    },
    comparison: {
      tagline: "Modelo tradicional vs Taizen",
      heading: "¿Por qué validar con Taizen?",
    },
    cta: {
      heading: "¿Agendamos una sesión?",
      text: "Recibe un diagnóstico previo de tus desafíos de ingeniería, cloud o IA — sesión técnica de 30 minutos con los socios, sin costo, con un alcance personalizado para tu POC.",
    },
  },

  casesPage: {
    banner: {
      tagline: "Taizen Consulting",
      lines: ["Casos."],
      text: "Resultados reales en productos reales — dos casos donde liderar la arquitectura desde cero marcó la diferencia.",
    },
    blocks: [
      {
        id: "wexp",
        heading: "WEXP",
        icon: "💳",
        text: "La necesidad de transformar años de experiencia en consultoría física y reglas de negocio complejas en un producto digital propio y escalable. WEXP es una plataforma digital dedicada a la optimización de gastos corporativos y la gestión eficiente de recursos financieros, concebida como spin-off de Willy Consultoria. Actuación de punta a punta: se lideró la fase de Design Sprint junto a los fundadores y principales stakeholders, seguida de la construcción completa de la arquitectura de software.",
        points: [
          "Fintech · Spin-off · Startup SaaS",
          "Host: Azure · Backend: C# · Frontend: NodeJS/ReactJS",
          "Apps nativas: Kotlin (Android) y Swift (iOS)",
          "R$5 mill+ en transacciones procesadas",
        ],
      },
      {
        id: "isa",
        heading: "ISA",
        icon: "🏥",
        text: "Sostener y escalar un modelo de negocio basado en atención de salud móvil y domiciliaria exigía tecnología impecable: orquestar una logística compleja de profesionales, pacientes y exámenes de forma descentralizada, con información sensible de salud siempre accesible, segura y en tiempo real. ISA lleva servicios de salud a donde esté el paciente, con atención descentralizada, personalizada y humanizada. Actuación en tres frentes: Web & Mobile Development, Cloud Infrastructure y Data & IA.",
        points: [
          "Healthtech · Salud Donde Estés",
          "Host: GCP · Backend: C# · Frontend: NodeJS/ReactJS",
          "Apps nativas: Kotlin (Android) y Swift (iOS)",
          "Infraestructura escalable en tiempo real",
        ],
      },
    ],
  },

  contatoPage: {
    banner: {
      tagline: "Modelo de validación sin riesgo",
      lines: ["¿Agendamos", "una sesión?"],
      text: "Recibe un diagnóstico previo de tus desafíos de ingeniería, cloud o IA — sesión técnica de 30 minutos con los socios, sin costo, con un alcance personalizado para tu POC.",
    },
    grid: {
      tagline: "Habla con nosotros",
      heading: "Elige el canal que prefieras.",
      cards: [
        { icon: "💬", title: "WhatsApp", text: "(13) 9 9798-5262" },
        { icon: "📧", title: "Correo", text: "uriel@taizentreinamentos.com.br" },
        { icon: "📍", title: "Sede", text: "Rua Fumio Miyazi, 141 - sala 1412, Boqueirão, Praia Grande/SP, Brasil" },
      ],
    },
    cta: {
      heading: "Habla directo con un socio",
      text: "Sesión técnica de 30 minutos, sin costo, con un alcance personalizado para tu POC.",
      ctaLabel: "Hablar por WhatsApp",
    },
  },
};

export default es;
