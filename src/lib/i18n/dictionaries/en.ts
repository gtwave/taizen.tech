import type { Dictionary } from "./pt";

const en: Dictionary = {
  nav: {
    home: "Home",
    servicos: "Services",
    poc: "POC",
    cases: "Case Studies",
    artigos: "Articles",
    contato: "Contact",
    agendarImersao: "Book a session",
  },

  hero: {
    tagline: "Senior Software Engineering & Digital Innovation",
    lines: ["Faster delivery", "with real senior", "engineering."],
    text: "Resilient cloud infrastructure, practical AI integration and agile delivery run by specialists with 20+ years of market experience — no juniors learning on your project.",
    ctaPoc: "See the POC Proposal",
    ctaImersao: "Book a technical session",
    stats: [
      { value: "20+", label: "years of technical experience" },
      { value: "100%", label: "senior devs and leads" },
      { value: "2-4 wks.", label: "to validate with a POC" },
    ],
  },

  home: {
    desafios: {
      tagline: "Current market challenges",
      heading: "The bottlenecks stalling your roadmap.",
      text: "That's what we solve first — before proposing squads, cloud or AI.",
      cards: [
        {
          icon: "⏳",
          title: "Development Bottlenecks",
          text: "Scarcity of senior talent, long learning curves paid for by the client, and constant delays delivering critical new features for the business.",
        },
        {
          icon: "⚠️",
          title: "Rigid Systems & Risk",
          text: "Lack of CI/CD automation, legacy architectures that are hard to migrate to the cloud, and uncertainty about applying Artificial Intelligence in practice.",
        },
      ],
    },
    portfolio: {
      tagline: "Service portfolio",
      heading: "Pick your track.",
      cards: [
        {
          icon: "🧑‍💻",
          title: "Outsourcing & Scrum",
          description: "Strategic allocation of senior developers and agile management of high-performance teams focused on steady throughput.",
        },
        {
          icon: "☁️",
          title: "Cloud & DevOps",
          description: "Safe migration to cloud infrastructure, CI/CD automation, resilience and infrastructure-as-code implementation.",
        },
        {
          icon: "🤖",
          title: "AI Integrations",
          description: "Incorporating generative and predictive Artificial Intelligence into existing workflows and software systems.",
        },
        {
          icon: "🛠️",
          title: "24/7 Support",
          description: "Preventive maintenance, ongoing support for critical applications and rapid bug fixes without interrupting the business.",
        },
      ],
    },
    diferencial: {
      tagline: "Competitive edge",
      heading: "Total mitigation of technology risk.",
      text: "Unlike large consultancies that send interns and juniors to run your operation, at Taizen every project has the direct participation and oversight of leaders with 20+ years of market experience.",
      cards: [
        {
          icon: "🏆",
          title: "Years of technical experience",
          text: "A consultancy founded by engineers and directors with over two decades of leadership building complex architectures for major players.",
        },
        {
          icon: "🎯",
          title: "Zero junior training ground",
          text: "We guarantee your project won't be a training ground for junior professionals. Executive maturity with direct attention from the founders.",
        },
        {
          icon: "⚡",
          title: "Precision from sprint one",
          text: "Every architecture, pipeline or code decision is executed with surgical precision from day one — no learning curve paid for by the client.",
        },
      ],
    },
    cases: {
      tagline: "Case studies",
      heading: "Real results in real products.",
      text: "From physical consulting to a scalable digital platform — two cases where leading the architecture from scratch made the difference.",
      cards: [
        {
          icon: "💳",
          title: "WEXP — Fintech · Spin-off · SaaS",
          text: "A digital platform for corporate expense optimization, built from scratch as a spin-off of Willy Consultoria — from Design Sprint to full software architecture.",
          extra: "R$5M+ in transactions processed",
        },
        {
          icon: "🏥",
          title: "ISA — Healthtech",
          text: "Decentralized mobile and home healthcare — logistics for professionals, patients and exams orchestrated with Web & Mobile, Cloud and Data & AI.",
          extra: "Real-time scalable infrastructure",
        },
      ],
    },
  },

  comparisonTable: {
    tagline: "Traditional model vs Taizen",
    heading: "Built & delivered.",
    theadTradicional: "Traditional consultancies",
    theadTaizen: "Taizen Consulting (Boutique)",
    rows: [
      {
        label: "Team composition",
        tradicional: "Junior/mid-level staff led remotely",
        taizen: "100% senior specialists (20+ years)",
      },
      {
        label: "Learning curve",
        tradicional: "Paid for by the client during the first weeks",
        taizen: "None. Immediate productive work",
      },
      {
        label: "Relationship & management",
        tradicional: "Account managers detached from the real code",
        taizen: "Direct contact with the engineer-partners",
      },
      {
        label: "Contract flexibility",
        tradicional: "Long, rigid contracts with high costs",
        taizen: "Validated via a prior POC with scalable squads",
      },
    ],
  },

  journeySteps: {
    tagline: "How it works",
    heading: "POC execution journey.",
    text: "Four weeks, from mapping the bottleneck to presenting performance and ROI results.",
    steps: [
      { n: "1", title: "Week 1: Immersion", text: "Mapping the specific technical bottleneck (e.g. slow pipeline or AI integration)." },
      { n: "2", title: "Week 2: Architecture", text: "Designing the technical solution and setting up the test environment with the senior team." },
      { n: "3", title: "Week 3: Execution", text: "Focused development or automation sprint delivering working code." },
      { n: "4", title: "Week 4: Validation", text: "Presenting performance results, ROI and an expansion plan." },
    ],
  },

  ctaDefault: {
    heading: "Ready to book a session?",
    text: "Get an upfront diagnosis of your engineering, cloud or AI challenges — a free 30-minute technical session with the partners.",
    ctaLabel: "Book a technical session",
  },

  footer: {
    text: "Senior Software Engineering & Digital Innovation — outsourcing, cloud/DevOps, applied AI and support, led by 20+ years of market experience.",
    newsletterLabel: "Get technical content and updates",
    emailPlaceholder: "Your email...",
    submitLabel: "Send",
    copyright: "Taizen Consulting — Senior Software Engineering & Digital Innovation.",
  },

  servicosPage: {
    banner: {
      tagline: "Service Portfolio",
      lines: ["Pick your", "track."],
      text: "Four service tracks — always with senior specialists leading the project, from the first diagnosis to ongoing support.",
    },
    blocks: [
      {
        heading: "Outsourcing & Agile Squads",
        icon: "🧑‍💻",
        text: "Strategic allocation of senior developers and agile management of high-performance teams focused on steady throughput — no learning curve paid for by the client.",
        points: [
          "100% senior devs — squads tailored to your roadmap",
          "Specialized Scrum management with on-time delivery",
          "Immediate ramp-up, no unproductive learning curve",
          "Flexible scalability to match business demand",
        ],
      },
      {
        heading: "Cloud, DevOps & CI/CD",
        icon: "☁️",
        text: "Safe migration to cloud infrastructure, CI/CD automation, resilience and infrastructure-as-code implementation — more frequent, safer releases.",
        points: [
          "Cloud migration (AWS, Azure, GCP) with zero downtime",
          "End-to-end automated CI/CD pipelines",
          "Reproducible, traceable Infrastructure as Code (IaC)",
          "Cost optimization (FinOps) across cloud environments",
        ],
      },
      {
        heading: "AI Integrations",
        icon: "🧠",
        text: "Incorporating generative and predictive Artificial Intelligence into existing workflows and software systems — from prompt engineering to production deployment.",
        points: [
          "LLMs integrated into real support and analysis workflows",
          "Intelligent automation with agents and predictive AI",
          "Semantic search across internal databases and documents",
          "Production deployment with continuous monitoring",
        ],
      },
      {
        heading: "24/7 Support",
        icon: "🛠️",
        text: "Preventive maintenance, ongoing support for critical applications and rapid bug fixes without interrupting the business — with AI applied practically, not experimentally.",
        points: [
          "Continuous support for legacy and production systems",
          "Security and compliance with vulnerability monitoring",
          "Agile SLA response for critical incidents",
          "Bug fixes without interrupting operations",
        ],
      },
    ],
    cta: {
      heading: "Want to validate before you commit?",
      text: "Check out our POC Proposal — a hands-on 2-to-4-week validation to prove our seniority with tangible results, before any long-term commitment.",
      ctaLabel: "See the POC →",
    },
  },

  pocPage: {
    banner: {
      tagline: "Risk-free validation model",
      lines: ["Proof of Concept", "(POC) Proposal"],
      text: "We build a hands-on 2-to-4-week validation proposal to solve a real bottleneck in your IT, prove our seniority and present tangible results before any long-term commitment.",
    },
    comparison: {
      tagline: "Traditional model vs Taizen",
      heading: "Why validate with Taizen?",
    },
    cta: {
      heading: "Ready to book a session?",
      text: "Get an upfront diagnosis of your engineering, cloud or AI challenges — a free 30-minute technical session with the partners, with a scope tailored to your POC.",
    },
  },

  casesPage: {
    banner: {
      tagline: "Taizen Consulting",
      lines: ["Case studies."],
      text: "Real results in real products — two cases where leading the architecture from scratch made the difference.",
    },
    blocks: [
      {
        id: "wexp",
        heading: "WEXP",
        icon: "💳",
        text: "The need to turn years of physical consulting expertise and complex business rules into a scalable, proprietary digital product. WEXP is a digital platform focused on corporate expense optimization and efficient financial resource management, conceived as a spin-off of Willy Consultoria. End-to-end delivery: led the Design Sprint phase with the founders and key stakeholders, followed by building the complete software architecture.",
        points: [
          "Fintech · Spin-off · SaaS startup",
          "Host: Azure · Backend: C# · Frontend: NodeJS/ReactJS",
          "Native apps: Kotlin (Android) and Swift (iOS)",
          "R$5M+ in transactions processed",
        ],
      },
      {
        id: "isa",
        heading: "ISA",
        icon: "🏥",
        text: "Sustaining and scaling a business model built around mobile and home healthcare demanded flawless technology: orchestrating complex logistics for professionals, patients and exams in a decentralized way, with sensitive health data always accessible, secure and in real time. ISA brings healthcare wherever the patient is, with decentralized, personalized and humanized care. Delivered across three fronts: Web & Mobile Development, Cloud Infrastructure and Data & AI.",
        points: [
          "Healthtech · Healthcare Wherever You Are",
          "Host: GCP · Backend: C# · Frontend: NodeJS/ReactJS",
          "Native apps: Kotlin (Android) and Swift (iOS)",
          "Real-time scalable infrastructure",
        ],
      },
    ],
  },

  contatoPage: {
    banner: {
      tagline: "Risk-free validation model",
      lines: ["Ready to book", "a session?"],
      text: "Get an upfront diagnosis of your engineering, cloud or AI challenges — a free 30-minute technical session with the partners, with a scope tailored to your POC.",
    },
    grid: {
      tagline: "Get in touch",
      heading: "Pick the channel you prefer.",
      cards: [
        { icon: "💬", title: "WhatsApp", text: "(13) 9 9798-5262" },
        { icon: "📧", title: "Email", text: "uriel@taizentreinamentos.com.br" },
        { icon: "📍", title: "Office", text: "Rua Fumio Miyazi, 141 - sala 1412, Boqueirão, Praia Grande/SP, Brazil" },
      ],
    },
    cta: {
      heading: "Talk directly to a partner",
      text: "A free 30-minute technical session, with a scope tailored to your POC.",
      ctaLabel: "Chat on WhatsApp",
    },
  },
};

export default en;
