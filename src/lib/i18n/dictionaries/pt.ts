const pt = {
  nav: {
    home: "Home",
    servicos: "Serviços",
    poc: "POC",
    cases: "Cases",
    artigos: "Artigos",
    contato: "Contato",
    agendarImersao: "Agendar imersão",
  },

  hero: {
    tagline: "Engenharia de Software & Inovação Digital Sênior",
    lines: ["Aceleração de entregas", "com engenharia sênior", "de verdade."],
    text: "Infraestrutura resiliente em Cloud, integração prática de IA e gestão ágil executada por especialistas com mais de 20 anos de mercado — sem juniores aprendendo no seu projeto.",
    ctaPoc: "Conhecer a Proposta de POC",
    ctaImersao: "Agendar imersão técnica",
    stats: [
      { value: "20+", label: "anos de bagagem técnica" },
      { value: "100%", label: "devs e líderes sêniores" },
      { value: "2-4 sem.", label: "para validar com POC" },
    ],
  },

  home: {
    desafios: {
      tagline: "Desafios atuais do mercado",
      heading: "Os gargalos que travam o seu roadmap.",
      text: "É isso que resolvemos antes de qualquer coisa — antes de propor squads, cloud ou IA.",
      cards: [
        {
          icon: "⏳",
          title: "Gargalos em Desenvolvimento",
          text: "Escassez de talentos sêniores, curvas de aprendizado longas pagas pelo cliente e atrasos constantes na entrega de novos recursos críticos para o negócio.",
        },
        {
          icon: "⚠️",
          title: "Sistemas Engessados & Riscos",
          text: "Falta de automação em CI/CD, arquiteturas legadas difíceis de migrar para a nuvem e incertezas sobre como aplicar Inteligência Artificial de forma prática.",
        },
      ],
    },
    portfolio: {
      tagline: "Portfólio de serviços",
      heading: "Escolha sua frente.",
      cards: [
        {
          icon: "🧑‍💻",
          title: "Outsourcing & Scrum",
          description: "Alocação estratégica de desenvolvedores sêniores e gestão ágil de times de alta performance focada em vazão constante.",
        },
        {
          icon: "☁️",
          title: "Cloud & DevOps",
          description: "Migração segura para infraestrutura cloud, automação de CI/CD, resiliência e implementação de infraestrutura como código.",
        },
        {
          icon: "🤖",
          title: "Integrações de IA",
          description: "Incorporação de Inteligência Artificial generativa e preditiva em fluxos de trabalho e sistemas de software existentes.",
        },
        {
          icon: "🛠️",
          title: "Sustentação 24/7",
          description: "Manutenção preventiva, suporte continuado a aplicações críticas e correção ágil de bugs sem interromper o negócio.",
        },
      ],
    },
    diferencial: {
      tagline: "Diferencial competitivo",
      heading: "Mitigação total de risco tecnológico.",
      text: "Diferente das grandes consultorias que enviam estagiários e juniores para a sua operação, na Taizen todos os projetos têm participação direta e supervisão de líderes com mais de 20 anos de mercado.",
      cards: [
        {
          icon: "🏆",
          title: "Anos de bagagem técnica",
          text: "Consultoria fundada pela união de engenheiros e diretores com mais de duas décadas de liderança na criação de arquiteturas complexas para grandes players.",
        },
        {
          icon: "🎯",
          title: "Zero laboratório de juniores",
          text: "Garantimos que o seu projeto não seja laboratório para profissionais juniores. Maturidade executiva com atendimento direto dos fundadores.",
        },
        {
          icon: "⚡",
          title: "Precisão desde a primeira sprint",
          text: "Cada decisão de arquitetura, pipeline ou código é executada com precisão cirúrgica desde o primeiro dia — sem curva de aprendizado paga pelo cliente.",
        },
      ],
    },
    cases: {
      tagline: "Cases",
      heading: "Resultado real em produtos reais.",
      text: "De consultoria física a plataforma digital escalável — dois cases onde liderar a arquitetura do zero fez a diferença.",
      cards: [
        {
          icon: "💳",
          title: "WEXP — Fintech · Spin-off · SaaS",
          text: "Plataforma digital de otimização de despesas corporativas, construída do zero como spin-off da Willy Consultoria — do Design Sprint à arquitetura completa de software.",
          extra: "R$ 5 mi+ em transações processadas",
        },
        {
          icon: "🏥",
          title: "ISA — Healthtech",
          text: "Atendimento de saúde móvel e domiciliar descentralizado — logística de profissionais, pacientes e exames orquestrada com Web & Mobile, Cloud e Data & IA.",
          extra: "Infraestrutura escalável em tempo real",
        },
      ],
    },
  },

  comparisonTable: {
    tagline: "Modelo tradicional vs Taizen",
    heading: "Criação & execução.",
    theadTradicional: "Consultorias tradicionais",
    theadTaizen: "Taizen Consulting (Boutique)",
    rows: [
      {
        label: "Composição do time",
        tradicional: "Alocação de juniores/plenos liderados à distância",
        taizen: "100% especialistas sêniores (20+ anos)",
      },
      {
        label: "Curva de aprendizado",
        tradicional: "Paga pelo cliente durante as primeiras semanas",
        taizen: "Zero. Atuação produtiva imediata",
      },
      {
        label: "Relacionamento e gestão",
        tradicional: "Gerentes de conta distantes do código real",
        taizen: "Contato direto com os sócios engenheiros",
      },
      {
        label: "Flexibilidade de contrato",
        tradicional: "Contratos longos e engessados com altos custos",
        taizen: "Validação via POC prévia e squads escaláveis",
      },
    ],
  },

  journeySteps: {
    tagline: "Como funciona",
    heading: "Jornada de Execução da POC.",
    text: "Quatro semanas, do mapeamento do gargalo à apresentação de resultados de performance e ROI.",
    steps: [
      { n: "1", title: "Semana 1: Imersão", text: "Mapeamento do gargalo técnico específico (ex: pipeline lento ou integração de IA)." },
      { n: "2", title: "Semana 2: Arquitetura", text: "Desenho da solução técnica e configuração do ambiente de testes pela equipe sênior." },
      { n: "3", title: "Semana 3: Execução", text: "Sprint focada de desenvolvimento ou automação com código funcional entregue." },
      { n: "4", title: "Semana 4: Validação", text: "Apresentação dos resultados de performance, ROI e plano de expansão." },
    ],
  },

  ctaDefault: {
    heading: "Vamos agendar uma imersão?",
    text: "Receba um diagnóstico prévio dos seus desafios de engenharia, cloud ou IA — sessão técnica de 30 minutos com os sócios, sem custo.",
    ctaLabel: "Agendar imersão técnica",
  },

  footer: {
    text: "Engenharia de Software & Inovação Digital Sênior — outsourcing, cloud/DevOps, IA aplicada e sustentação, liderados por quem tem 20+ anos de mercado.",
    newsletterLabel: "Receba conteúdo técnico e novidades",
    emailPlaceholder: "Seu e-mail...",
    submitLabel: "Enviar",
    copyright: "Taizen Consulting — Engenharia de Software & Inovação Digital Sênior.",
  },

  servicosPage: {
    banner: {
      tagline: "Portfólio de Serviços",
      lines: ["Escolha sua", "frente."],
      text: "Quatro frentes de atuação — sempre com especialistas sêniores à frente do projeto, do primeiro diagnóstico à sustentação contínua.",
    },
    blocks: [
      {
        heading: "Outsourcing & Squads Ágeis",
        icon: "🧑‍💻",
        text: "Alocação estratégica de desenvolvedores sêniores e gestão ágil de times de alta performance focada em vazão constante — sem curva de aprendizado paga pelo cliente.",
        points: [
          "Devs 100% sêniores — squads sob medida para o seu roadmap",
          "Gestão Scrum especializada com entregas no prazo",
          "Integração imediata, sem curva de aprendizado improdutiva",
          "Escalabilidade flexível conforme as demandas do negócio",
        ],
      },
      {
        heading: "Cloud, DevOps & CI/CD",
        icon: "☁️",
        text: "Migração segura para infraestrutura cloud, automação de CI/CD, resiliência e implementação de infraestrutura como código — lançamentos mais frequentes e seguros.",
        points: [
          "Migração para Cloud (AWS, Azure, GCP) sem downtime",
          "Pipelines de CI/CD automatizados de ponta a ponta",
          "Infraestrutura como Código (IaC) reproduzível e rastreável",
          "Otimização de custos (FinOps) em ambientes de nuvem",
        ],
      },
      {
        heading: "Integrações de IA",
        icon: "🧠",
        text: "Incorporação de Inteligência Artificial generativa e preditiva em fluxos de trabalho e sistemas de software existentes — do prompt engineering ao deploy em produção.",
        points: [
          "LLMs integrados a fluxos reais de atendimento e análise",
          "Automação inteligente com agentes e IA preditiva",
          "Busca semântica em bases de dados e documentos internos",
          "Deploy em produção com monitoramento contínuo",
        ],
      },
      {
        heading: "Sustentação 24/7",
        icon: "🛠️",
        text: "Manutenção preventiva, suporte continuado a aplicações críticas e correção ágil de bugs sem interromper o negócio — com IA integrada de forma prática, não experimental.",
        points: [
          "Sustentação contínua de sistemas legados e produção",
          "Segurança e compliance com monitoramento de vulnerabilidades",
          "Atendimento ágil (SLA) para incidentes críticos",
          "Correção de bugs sem interromper a operação",
        ],
      },
    ],
    cta: {
      heading: "Quer validar antes de contratar?",
      text: "Conheça nossa Proposta de POC — uma validação prática de 2 a 4 semanas para comprovar nossa senioridade com resultados tangíveis, antes de qualquer compromisso longo.",
      ctaLabel: "Conhecer a POC →",
    },
  },

  pocPage: {
    banner: {
      tagline: "Modelo de validação sem risco",
      lines: ["Proposta de Prova", "de Conceito (POC)"],
      text: "Desenvolvemos uma proposta de validação prática de 2 a 4 semanas para solucionar um gargalo real da sua TI, comprovar nossa senioridade e apresentar resultados tangíveis antes de qualquer compromisso longo.",
    },
    comparison: {
      tagline: "Modelo tradicional vs Taizen",
      heading: "Por que validar com a Taizen?",
    },
    cta: {
      heading: "Vamos agendar uma imersão?",
      text: "Receba um diagnóstico prévio dos seus desafios de engenharia, cloud ou IA — sessão técnica de 30 minutos com os sócios, sem custo, e escopo personalizado para sua POC.",
    },
  },

  casesPage: {
    banner: {
      tagline: "Taizen Consulting",
      lines: ["Cases."],
      text: "Resultado real em produtos reais — dois cases onde liderar a arquitetura do zero fez a diferença.",
    },
    blocks: [
      {
        id: "wexp",
        heading: "WEXP",
        icon: "💳",
        text: "A necessidade de transformar anos de expertise de consultoria física e regras de negócio complexas em um produto digital próprio e escalável. WEXP é uma plataforma digital que se dedica à otimização de despesas corporativas e à gestão eficiente de recursos financeiros, concebida como spin-off da Willy Consultoria. Atuação de ponta a ponta: liderou-se a fase de Design Sprint junto aos fundadores e principais stakeholders, seguida da construção completa da arquitetura de software.",
        points: [
          "Fintech · Spin-off · Startup SaaS",
          "Host: Azure · Back-end: C# · Front-end: NodeJS/ReactJS",
          "Apps nativos: Kotlin (Android) e Swift (iOS)",
          "R$ 5 mi+ em transações processadas",
        ],
      },
      {
        id: "isa",
        heading: "ISA",
        icon: "🏥",
        text: "Sustentar e escalar um modelo de negócio baseado em atendimento de saúde móvel e domiciliar exigia tecnologia impecável: orquestrar uma logística complexa de profissionais, pacientes e exames de forma descentralizada, com informações sensíveis de saúde sempre acessíveis, seguras e em tempo real. ISA leva serviços de saúde onde o paciente estiver, com atendimento descentralizado, personalizado e humanizado. Atuação em três frentes: Web & Mobile Development, Cloud Infrastructure e Data & IA.",
        points: [
          "Healthtech · Saúde Onde Você Estiver",
          "Host: GCP · Back-end: C# · Front-end: NodeJS/ReactJS",
          "Apps nativos: Kotlin (Android) e Swift (iOS)",
          "Infraestrutura escalável em tempo real",
        ],
      },
    ],
  },

  contatoPage: {
    banner: {
      tagline: "Modelo de validação sem risco",
      lines: ["Vamos agendar", "uma imersão?"],
      text: "Receba um diagnóstico prévio dos seus desafios de engenharia, cloud ou IA — sessão técnica de 30 minutos com os sócios, sem custo, e escopo personalizado para sua POC.",
    },
    grid: {
      tagline: "Fale com a gente",
      heading: "Escolha o canal que preferir.",
      cards: [
        { icon: "💬", title: "WhatsApp", text: "(13) 9 9798-5262" },
        { icon: "📧", title: "E-mail", text: "uriel@taizentreinamentos.com.br" },
        { icon: "📍", title: "Sede", text: "Rua Fumio Miyazi, 141 - sala 1412, Boqueirão, Praia Grande/SP" },
      ],
    },
    cta: {
      heading: "Fale direto com um sócio",
      text: "Sessão técnica de 30 minutos, sem custo, com escopo personalizado para a sua POC.",
      ctaLabel: "Falar no WhatsApp",
    },
  },
};

export default pt;
export type Dictionary = typeof pt;
