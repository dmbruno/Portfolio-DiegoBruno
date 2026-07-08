import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Traducciones
const resources = {
  es: {
    translation: {
      // Header
      "nav.home": "Inicio",
      "nav.about": "Sobre Mi",
      "nav.training": "Formación",
      "nav.experience": "Experiencia",
      "nav.certifications": "Certificaciones",
      "nav.projects": "Proyectos",
      "nav.contact": "Contacto",
      "nav.downloadCV": "Descargar CV",
      
      // Home
      "home.greeting": "Hola, mi nombre es",
      "home.name": "Diego Bruno",
      "home.code.role": "Desarrollador Full Stack",
      "home.code.focus1": "Inteligencia Artificial",
      "home.code.focus2": "Web3 · Blockchain",
      "home.code.available1": "equipo",
      "home.code.available2": "freelance",
      "home.cta": "Ver mis proyectos",
      "home.nav.about": "SOBRE MÍ",
      "home.nav.training": "FORMACIÓN",
      "home.nav.projects": "PROYECTOS",
      "home.nav.contact": "CONTACTO",
      
      // About
      "about.title": "Sobre mí",
      "about.paragraph1": "Soy Diego Bruno, desarrollador Full Stack. Empecé a programar en 2021 escribiendo mi primera aplicación desde cero — ese ejercicio de entender cada pieza del sistema definió la forma en que sigo trabajando hoy.",
      "about.paragraph2": "Diseño y desarrollo productos que integran <1>Inteligencia Artificial</1> (OpenAI API, Claude API) para automatizar tareas y construir agentes conversacionales. También trabajo en el ecosistema <3>Web3</3> y <5>Blockchain</5>, desarrollando smart contracts con <7>Solidity</7>.",
      "about.paragraph3": "Mi stack incluye <1>Python</1>, <3>Node.js</3>, <5>TypeScript</5>, <7>React</7> y <9>React Native</9> en frontend y backend, y bases de datos relacionales como <11>PostgreSQL</11>, <13>MySQL</13> y <15>Supabase</15>. Priorizo el código que resuelve problemas reales de negocio por sobre la estética de un portfolio.",
      
      // Experience
      "experience.title": "Experiencias ...",
      "experience.period": "Período",
      
      // SaltaLabs
      "experience.saltalabs.title": "Backend Leader SaltaLabs",
      "experience.saltalabs.company": "@SaltaLabs",
      "experience.saltalabs.period": "Junio 2025 - Actualidad",
      "experience.saltalabs.description": "Backend Leader en SaltaLabs, una software factory que construye web apps SaaS a medida para empresas con problemáticas específicas. Diseño la arquitectura backend, realizo code review y reporto avances directamente al cliente.\n\n• Proyecto - Sistema de Gestión Comercial (SaaS): Desarrollé de forma integral un sistema para comercio local con módulos de control de stock, manejo de caja y reportes de ventas por cliente y producto. Stack: Python/Flask + React/Redux.\n\n• Proyecto - Plataforma de E-Vouchers (SaaS): App para agencia de viajes con gestión de pasajeros, servicios contratados y generación de e-vouchers con alertas automáticas ante cambios en servicios. Backend con Supabase, frontend React + Redux. Equipo de 3 personas.\n\nHerramientas: Python, Flask, React, Redux, Supabase, PostgreSQL, JavaScript, Git, Notion.",

      // Freelance IA
      "experience.freelance.title": "Desarrollador Full Stack & IA - Freelance",
      "experience.freelance.period": "2024 - Actualidad",
      "experience.freelance.description": "Desarrollo de productos propios integrando Inteligencia Artificial.\n\n• El Encargado - Asistente IA para comercios: App que levanta datos reales de venta y ofrece análisis mediante perfiles de IA configurados (CEO, Chef, Marketing, CFO). Cada perfil brinda opiniones estratégicas al dueño del negocio. Stack: Python, Flask, OpenAI API.\n\n• Asistentes Virtuales con IA: Desarrollo de chatbots y asistentes inteligentes para automatizar atención y consultas en negocios. Integración con APIs de inteligencia artificial.\n\nHerramientas: Python, Flask, OpenAI API, Chatbots, REST API.",
      
      // Telecom
      "experience.telecom.title": "Supervisor Comercial - Telecom Personal S.A",
      "experience.telecom.description": "Supervisor de la oficina comercial liderando un equipo de 30 personas en la gestión de atención al cliente.\n\n• Gestión de Colas: Supervisé eficientemente los tiempos de espera y distribución de clientes en diversas colas de servicio (facturación, reclamos, consultas generales), optimizando la experiencia del usuario.\n\n• Resolución de Conflictos: Atendí casos especiales y conflictivos, asegurando una resolución fluida tanto para usuarios finales como para clientes corporativos de alto valor.\n\n• Seguimiento de Métricas: Implementé y monitorée métricas clave de calidad de atención (satisfacción del cliente, tiempo promedio de servicio, resolución en primer contacto) y gestión operativa.\n\n• Liderazgo Directo: Coordiné equipos multidisciplinarios, motivando al personal para mantener altos estándares de servicio, cumplimiento de objetivos y desarrollo profesional en un entorno dinámico y de alto volumen.",
      
      // Centro de Contactos
      "experience.contactos.title": "Supervisor de Equipos - Centro De Contactos Salta S.A",
      "experience.contactos.description": "Líder de equipos de atención telefónica con supervisión directa de hasta 30 personas en múltiples turnos para clientes estratégicos como Movistar y Telefónica.\n\n• Gestión de Calidad: Establecí y monitoreé rigurosos estándares de calidad en la atención telefónica, asegurando cumplimiento de directrices del cliente y evaluación continua mediante auditorías de llamadas.\n\n• Tiempos de Atención: Optimicé procesos para reducir tiempos de resolución manteniendo la calidad, balanceando eficiencia operativa con satisfacción del cliente.\n\n• Desempeño Individual: Evaluación periódica de desempeño del personal, coaching personalizado para mejorar habilidades técnicas y blandas, e identificación de talentos para desarrollo profesional.\n\n• Liderazgo Operativo: Coordiné la asignación de recursos, cobertura de turnos, gestión de ausencias y escalamiento de problemas complejos. Mantuve comunicación directa con el cliente para reportes de KPIs (Answer Rate, Average Handle Time, Customer Satisfaction).",
      
      // Certifications
      "certifications.title": "Certificaciones",
      "certifications.description": "Estos son algunos de los documentos que certifican el aprendizaje en diferentes tecnologias.",
      "certifications.technologies": "Tecnologías",
      
      // Projects
      "projects.title": "Proyectos",
      "projects.featured": "Proyecto Destacado",
      "projects.viewMore": "Explora más!",
      "projects.demo": "Demo",
      "projects.github": "GitHub",
      "projects.tapToFlip": "Toca para ver descripción",
      "projects.tapToReturn": "Toca para volver",

      // Filtros de categoría
      "projects.filter.all": "Todos",
      "projects.filter.web": "Web / SaaS",
      "projects.filter.ia": "IA / Bots",
      "projects.filter.blockchain": "Blockchain",

      // Gauchos de Güemes
      "projects.gauchos.title": "Web Gauchos de Güemes",
      "projects.gauchos.description": "Plataforma web con <strong>sistema de reservas</strong> y <strong>calendario interactivo</strong> conectado a <strong>base de datos</strong>. <strong>App móvil</strong> para gestionar reservas y facilitar el <strong>contacto con clientes</strong> vía <strong>WhatsApp</strong> y <strong>email</strong>.",

      // ChatBot UBM
      "projects.chatbotUBM.title": "ChatBot - UBM",
      "projects.chatbotUBM.description": "Bot con <strong>menú interactivo</strong> para consultar <strong>promociones</strong>, <strong>salidas grupales</strong> y datos de contacto. Cualifica clientes, guarda preferencias en <strong>base de datos SQL</strong> y deriva automáticamente al <strong>vendedor ideal</strong>.",

      // ChatBot Informativo
      "projects.chatbotInfo.title": "ChatBot - Informativo",
      "projects.chatbotInfo.description": "Bot educativo que explica el potencial de la <strong>automatización conversacional</strong>. Incluye <strong>FAQs</strong>, casos de uso y funciona como <strong>portfolio interactivo</strong> para mostrar servicios de desarrollo de <strong>chatbots inteligentes</strong>.",

      // KipuBank
      "projects.kipubank.title": "KipuBank - DeFi Banking",
      "projects.kipubank.description": "Banco <strong>descentralizado</strong> que acepta <strong>ETH</strong> y <strong>tokens ERC20</strong>, convirtiéndolos automáticamente a <strong>USDC</strong> mediante <strong>Uniswap V2</strong>. Testeado con <strong>Foundry</strong> (<strong>43 tests</strong>) antes de desplegar en <strong>Sepolia testnet</strong>.",

      // TokenizAR
      "projects.tokenizar.title": "TokenizAR - Tokenización Inmobiliaria",
      "projects.tokenizar.description": "Plataforma educativa que muestra cómo tokenizar un inmueble en <strong>fracciones digitales (ERC-20)</strong> sobre la red de pruebas de <strong>Polygon</strong>. Simula la compra de fracciones, dashboards de propietario e inversor, y el reparto de rentas on-chain.",

      // SnapMoment
      "projects.snapmoment.title": "SnapMoment - Álbum Colaborativo de Eventos",
      "projects.snapmoment.description": "App para eventos: los invitados escanean un <strong>código QR</strong> y suben sus fotos a un <strong>álbum colaborativo</strong> en tiempo real. Genera contenido orgánico y espontáneo para las redes del salón o lugar del evento.",

      // PropioIA
      "projects.propioia.title": "PropioIA - Facturación por WhatsApp",
      "projects.propioia.description": "Agente de <strong>IA conectado a WhatsApp</strong> que registra y emite facturas del negocio automáticamente. Incluye <strong>dashboard en tiempo real</strong> con total facturado, IVA compra e IVA venta para Responsables Inscriptos, y monto facturado para Monotributistas.",

      // Contact
      "contact.overline": "05. Qué sigue?",
      "contact.title": "Hablemos de tu proyecto",
      "contact.description": "¿Tenés un proyecto en mente, una posición abierta, o simplemente una pregunta técnica? Escribime y te respondo a la brevedad.",
      "contact.cta": "¡Hablemos!",

      // Footer
      "footer.builtBy": "Construido por Diego Bruno © 2026",

      // Editor (estado vacío)
      "editor.emptyTitle": "No hay ningún archivo abierto",
      "editor.emptyHint": "Elegí una sección en el explorador de la izquierda",
    }
  },
  en: {
    translation: {
      // Header
      "nav.home": "Home",
      "nav.about": "About Me",
      "nav.training": "Training",
      "nav.experience": "Experience",
      "nav.certifications": "Certifications",
      "nav.projects": "Projects",
      "nav.contact": "Contact",
      "nav.downloadCV": "Download CV",
      
      // Home
      "home.greeting": "Hi, my name is",
      "home.name": "Diego Bruno",
      "home.code.role": "Full Stack Developer",
      "home.code.focus1": "Artificial Intelligence",
      "home.code.focus2": "Web3 · Blockchain",
      "home.code.available1": "team",
      "home.code.available2": "freelance",
      "home.cta": "View my projects",
      "home.nav.about": "ABOUT ME",
      "home.nav.training": "TRAINING",
      "home.nav.projects": "PROJECTS",
      "home.nav.contact": "CONTACT",
      
      // About
      "about.title": "About Me",
      "about.paragraph1": "I'm Diego Bruno, a Full Stack developer. I started programming in 2021, writing my first application from scratch — that exercise of understanding every piece of the system still shapes how I work today.",
      "about.paragraph2": "I design and build products that integrate <1>Artificial Intelligence</1> (OpenAI API, Claude API) to automate tasks and build conversational agents. I also work in the <3>Web3</3> and <5>Blockchain</5> ecosystem, developing smart contracts with <7>Solidity</7>.",
      "about.paragraph3": "My stack includes <1>Python</1>, <3>Node.js</3>, <5>TypeScript</5>, <7>React</7> and <9>React Native</9> on the frontend and backend, plus relational databases like <11>PostgreSQL</11>, <13>MySQL</13> and <15>Supabase</15>. I prioritize code that solves real business problems over portfolio aesthetics.",
      
      // Experience
      "experience.title": "Experience ...",
      "experience.period": "Period",
      
      // SaltaLabs
      "experience.saltalabs.title": "Backend Leader SaltaLabs",
      "experience.saltalabs.company": "@SaltaLabs",
      "experience.saltalabs.period": "June 2025 - Present",
      "experience.saltalabs.description": "Backend Leader at SaltaLabs, a software factory that builds custom SaaS web apps for companies with specific business needs. I design backend architecture, conduct code reviews and report progress directly to clients.\n\n• Project - Commercial Management System (SaaS): Built end-to-end a system for a local business with inventory control, cash register management and sales reports by customer and product. Stack: Python/Flask + React/Redux.\n\n• Project - E-Voucher Platform (SaaS): App for a travel agency with passenger database management, contracted services and e-voucher generation with automatic alerts on service changes. Backend with Supabase, frontend React + Redux. Team of 3.\n\nTools: Python, Flask, React, Redux, Supabase, PostgreSQL, JavaScript, Git, Notion.",

      // Freelance IA
      "experience.freelance.title": "Full Stack Developer & AI - Freelance",
      "experience.freelance.period": "2024 - Present",
      "experience.freelance.description": "Building AI-powered products as personal projects.\n\n• El Encargado - AI Assistant for Businesses: App that ingests real sales data and provides analysis through configured AI profiles (CEO, Chef, Marketing, CFO). Each profile offers strategic insights to the business owner. Stack: Python, Flask, OpenAI API.\n\n• AI Virtual Assistants: Development of chatbots and intelligent assistants to automate customer support and business queries. Integration with AI APIs.\n\nTools: Python, Flask, OpenAI API, Chatbots, REST API.",
      
      // Telecom
      "experience.telecom.title": "Commercial Supervisor - Telecom Personal S.A",
      "experience.telecom.description": "Commercial office supervisor leading a team of 30 people in customer service management.\n\n• Queue Management: Efficiently supervised waiting times and customer distribution across multiple service queues (billing, complaints, general inquiries), optimizing the overall customer experience.\n\n• Conflict Resolution: Handled special and complex cases, ensuring smooth resolution for both individual customers and high-value corporate accounts.\n\n• Metrics Tracking: Implemented and monitored key quality metrics (customer satisfaction, average service time, first-contact resolution) and operational management KPIs.\n\n• Team Leadership: Coordinated multidisciplinary teams, motivating staff to maintain high service standards, meet objectives, and foster professional development in a high-volume dynamic environment.",

      // Centro de Contactos
      "experience.contactos.title": "Team Supervisor - Centro De Contactos Salta S.A",
      "experience.contactos.description": "Leader of telephone support teams with direct supervision of up to 30 people across multiple shifts for strategic clients including Movistar and Telefónica.\n\n• Quality Assurance: Established and monitored rigorous quality standards in telephone support, ensuring client compliance through continuous call audits and performance evaluations.\n\n• Call Center Optimization: Optimized processes to reduce resolution times while maintaining quality, balancing operational efficiency with customer satisfaction metrics.\n\n• Individual Performance Management: Conducted periodic performance evaluations, provided personalized coaching for technical and soft skills improvement, and identified talent for professional development.\n\n• Operational Leadership: Coordinated resource allocation, shift coverage, absence management, and escalation of complex issues. Maintained direct client communication for KPI reporting (Answer Rate, Average Handle Time, Customer Satisfaction).",
      
      // Certifications
      "certifications.title": "Certifications",
      "certifications.description": "These are some of the documents that certify learning in different technologies.",
      "certifications.technologies": "Technologies",
      
      // Projects
      "projects.title": "Projects",
      "projects.featured": "Featured Project",
      "projects.viewMore": "Explore more!",
      "projects.demo": "Demo",
      "projects.github": "GitHub",
      "projects.tapToFlip": "Tap to see description",
      "projects.tapToReturn": "Tap to go back",

      // Category filters
      "projects.filter.all": "All",
      "projects.filter.web": "Web / SaaS",
      "projects.filter.ia": "AI / Bots",
      "projects.filter.blockchain": "Blockchain",

      // Gauchos de Güemes
      "projects.gauchos.title": "Gauchos de Güemes Website",
      "projects.gauchos.description": "Web platform with <strong>reservation system</strong> and <strong>interactive calendar</strong> connected to <strong>database</strong>. <strong>Mobile app</strong> to manage bookings and facilitate <strong>customer contact</strong> via <strong>WhatsApp</strong> and <strong>email</strong>.",

      // ChatBot UBM
      "projects.chatbotUBM.title": "ChatBot - UBM",
      "projects.chatbotUBM.description": "Bot with <strong>interactive menu</strong> to check <strong>promotions</strong>, <strong>group tours</strong> and contact information. Qualifies clients, saves preferences in <strong>SQL database</strong> and automatically routes to the <strong>ideal salesperson</strong>.",

      // ChatBot Informativo
      "projects.chatbotInfo.title": "ChatBot - Informative",
      "projects.chatbotInfo.description": "Educational bot that explains the potential of <strong>conversational automation</strong>. Includes <strong>FAQs</strong>, use cases and works as an <strong>interactive portfolio</strong> to showcase <strong>intelligent chatbot</strong> development services.",

      // KipuBank
      "projects.kipubank.title": "KipuBank - DeFi Banking",
      "projects.kipubank.description": "<strong>Decentralized</strong> bank that accepts <strong>ETH</strong> and <strong>ERC20 tokens</strong>, automatically converting them to <strong>USDC</strong> via <strong>Uniswap V2</strong>. Tested with <strong>Foundry</strong> (<strong>43 tests</strong>) before deploying on <strong>Sepolia testnet</strong>.",

      // TokenizAR
      "projects.tokenizar.title": "TokenizAR - Real Estate Tokenization",
      "projects.tokenizar.description": "Educational platform showing how to tokenize a property into <strong>digital fractions (ERC-20)</strong> on the <strong>Polygon</strong> testnet. Simulates fraction purchases, owner/investor dashboards, and on-chain rent distribution.",

      // SnapMoment
      "projects.snapmoment.title": "SnapMoment - Collaborative Event Album",
      "projects.snapmoment.description": "Event app: guests scan a <strong>QR code</strong> and upload their photos to a real-time <strong>collaborative album</strong>. Generates organic, spontaneous content for the venue's social media.",

      // PropioIA
      "projects.propioia.title": "PropioIA - WhatsApp Invoicing",
      "projects.propioia.description": "AI agent <strong>connected to WhatsApp</strong> that automatically records and issues business invoices. Includes a <strong>real-time dashboard</strong> with total billed, purchase/sales VAT for registered taxpayers, and total billed for simplified-tax payers.",

      // Contact
      "contact.overline": "05. What's Next?",
      "contact.title": "Let's talk about your project",
      "contact.description": "Have a project in mind, an open position, or just a technical question? Write to me and I'll get back to you shortly.",
      "contact.cta": "Let's Talk!",
      
      // Footer
      "footer.builtBy": "Built by Diego Bruno © 2026",

      // Editor (empty state)
      "editor.emptyTitle": "No file is open",
      "editor.emptyHint": "Pick a section from the explorer on the left",
    }
  }
};

i18n
  .use(LanguageDetector) // Detecta el idioma del navegador
  .use(initReactI18next) // Pasa i18n a react-i18next
  .init({
    resources,
    fallbackLng: 'es', // Idioma por defecto
    lng: 'es', // Idioma inicial
    interpolation: {
      escapeValue: false // React ya escapa por defecto
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;
