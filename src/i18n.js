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
      "home.description": "Desarrollador <1>Full Stack</1> que convierte ideas en productos web reales. Integro <3>Inteligencia Artificial</3> (OpenAI, Claude) para automatizar y potenciar productos. Construyo con <5>React</5>, <7>Python</7> y <9>Node.js</9> — y si tu proyecto apunta a <11>Web3</11> o Blockchain, también. Disponible para proyectos freelance y posiciones en equipo.",
      "home.cta": "Ver mis proyectos",
      "home.nav.about": "SOBRE MÍ",
      "home.nav.training": "FORMACIÓN",
      "home.nav.projects": "PROYECTOS",
      "home.nav.contact": "CONTACTO",
      
      // About
      "about.title": "Sobre mí",
      "about.paragraph1": "¡Hola! Mi nombre es Diego y disfruto crear cosas que viven en internet. Mi interés por el desarrollo web comenzó en 2021 cuando decidí aprender a construir mi primera aplicación — resulta que crear funcionalidades desde cero me enseñó mucho sobre <1>JavaScript</1> y <3>React</3>!",
      "about.paragraph2": "Desde entonces trabajé en proyectos variados: integré <1>Inteligencia Artificial</1> usando <3>OpenAI API</3> y <5>Claude API</5> para construir agentes y automatizaciones conversacionales. También construyo en el ecosistema <7>Web3</7> y <9>Blockchain</9>, desarrollando <11>smart contracts</11> con <13>Solidity</13>.",
      "about.paragraph3": "También trabajo constantemente con tecnologías como <1>React</1>, <3>React Native</3>, <5>Python</5>, <7>Node.js</7>, <9>Flask</9>, y bases de datos <11>Relacionales</11> y <13>NO-Relacionales</13>.",
      
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
      "projects.title": "Proyectos ...",
      "projects.featured": "Proyecto Destacado",
      "projects.viewMore": "Explora más!",
      "projects.demo": "Demo",
      "projects.github": "GitHub",
      "projects.tapToFlip": "Toca para ver descripción",
      "projects.tapToReturn": "Toca para volver",
      
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
      
      // Contact
      "contact.overline": "05. Qué sigue?",
      "contact.title": "Pongámonos en Contacto",
      "contact.description": "Me gusta escuchar nuevas ideas y propuestas. Ya sea que tengas un proyecto en mente, una pregunta, o simplemente quieras charlar sobre tecnología, mi bandeja de entrada está siempre abierta. ¡Haré lo posible por responderte lo antes posible!",
      "contact.cta": "¡Hablemos!",

      // Footer
      "footer.builtBy": "Construido por Diego Bruno © 2026",
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
      "home.description": "<1>Full Stack</1> Developer who turns ideas into real web products. I integrate <3>Artificial Intelligence</3> (OpenAI, Claude) to automate and enhance products. I build with <5>React</5>, <7>Python</7> and <9>Node.js</9> — and if your project targets <11>Web3</11> or Blockchain, I've got you covered too. Available for freelance projects and full-time positions.",
      "home.cta": "View my projects",
      "home.nav.about": "ABOUT ME",
      "home.nav.training": "TRAINING",
      "home.nav.projects": "PROJECTS",
      "home.nav.contact": "CONTACT",
      
      // About
      "about.title": "About Me",
      "about.paragraph1": "Hello! My name is Diego and I enjoy creating things that live on the internet. My interest in web development started in 2021 when I decided to learn how to build my first application — it turns out that creating functionalities from scratch taught me a lot about <1>JavaScript</1> and <3>React</3>!",
      "about.paragraph2": "Since then, I've worked on varied projects: I integrated <1>Artificial Intelligence</1> using <3>OpenAI API</3> and <5>Claude API</5> to build agents and conversational automations. I also build in the <7>Web3</7> and <9>Blockchain</9> ecosystem, developing <11>smart contracts</11> with <13>Solidity</13>.",
      "about.paragraph3": "I also constantly work with technologies like <1>React</1>, <3>React Native</3>, <5>Python</5>, <7>Node.js</7>, <9>Flask</9>, and <11>Relational</11> and <13>Non-Relational</13> databases.",
      
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
      "projects.title": "Projects ...",
      "projects.featured": "Featured Project",
      "projects.viewMore": "Explore more!",
      "projects.demo": "Demo",
      "projects.github": "GitHub",
      "projects.tapToFlip": "Tap to see description",
      "projects.tapToReturn": "Tap to go back",
      
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
      
      // Contact
      "contact.overline": "05. What's Next?",
      "contact.title": "Get In Touch",
      "contact.description": "I enjoy hearing new ideas and proposals. Whether you have a project in mind, a question, or simply want to chat about technology, my inbox is always open. I'll do my best to get back to you as soon as possible!",
      "contact.cta": "Let's Talk!",
      
      // Footer
      "footer.builtBy": "Built by Diego Bruno © 2026",
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
