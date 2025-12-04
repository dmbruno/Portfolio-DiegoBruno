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
      "home.description": "Desarrollador <1>Full Stack</1> especializado en construir aplicaciones web modernas y escalables. Mi foco actual está en el ecosistema <3>Web3</3> y <5>Blockchain</5>, desarrollando soluciones descentralizadas. También trabajo con tecnologías como <7>React</7>, <9>Python</9> y <11>Node.js</11> para crear experiencias digitales robustas y eficientes.",
      "home.cta": "Ver mis proyectos",
      "home.nav.about": "SOBRE MÍ",
      "home.nav.training": "FORMACIÓN",
      "home.nav.projects": "PROYECTOS",
      "home.nav.contact": "CONTACTO",
      
      // About
      "about.title": "Sobre mí",
      "about.paragraph1": "¡Hola! Mi nombre es Diego y disfruto crear cosas que viven en internet. Mi interés por el desarrollo web comenzó hace años cuando decidí aprender a construir mi primera aplicación — resulta que crear funcionalidades desde cero me enseñó mucho sobre <1>JavaScript</1> y <3>React</3>!",
      "about.paragraph2": "Avancemos al presente: he tenido el privilegio de trabajar en proyectos variados, desde aplicaciones web tradicionales hasta <1>aplicaciones descentralizadas</1>. Actualmente, mi enfoque principal está en construir productos accesibles en el ecosistema <3>Web3</3> y <5>Blockchain</5>, desarrollando <7>smart contracts</7> con <9>Solidity</9> y utilizando herramientas como <11>Remix IDE</11> y <13>Foundry</13>.",
      "about.paragraph3": "También trabajo constantemente con tecnologías como <1>React</1>, <3>React Native</3>, <5>Python</5>, <7>Node.js</7>, <9>Flask</9>, y bases de datos <11>Relacionales</11> y <13>NO-Relacionales</13>.",
      
      // Experience
      "experience.title": "Experiencias ...",
      "experience.period": "Período",
      
      // SaltaLabs
      "experience.saltalabs.title": "Backend Leader SaltaLabs",
      "experience.saltalabs.company": "@SaltaLabs",
      "experience.saltalabs.period": "Enero 2024 - Actualidad",
      "experience.saltalabs.description": "Socio fundador y Backend Leader en SaltaLabs, una agencia digital especializada en ofrecer soluciones tecnológicas innovadoras para empresas locales. Lideramos proyectos de SEO, desarrollo de bots de WhatsApp, aplicaciones web y móviles, brindando respuestas efectivas a diversas problemáticas empresariales. Mi rol incluye la arquitectura de sistemas backend, coordinación técnica del equipo y desarrollo de soluciones escalables.",
      
      // Bellify
      "experience.bellify.title": "Programador en Bellify.io",
      "experience.bellify.description": "Fui contratado para desarrollar un producto utilizando FlutterFlow, una tecnología con la que no tenía experiencia previa. A través de investigación autodidacta y aprendizaje rápido, logré dominar la herramienta y cumplir con éxito los requisitos del proyecto. Mi capacidad para adaptarme a nuevas tecnologías y superar obstáculos técnicos fue clave para el desarrollo exitoso.",
      
      // Comerciante
      "experience.comerciante.title": "Comerciante Independiente",
      "experience.comerciante.description": "Propietario y gerente de un lubricentro durante más de 6 años, especializado en mantenimiento ligero de vehículos. Gestioné cuentas con proveedores y clientes, incluyendo corporativos, además de listas de precios, control de stock, y liquidación de sueldos e impuestos. Desarrollé habilidades clave en administración, logística y atención al cliente.",
      
      // Bar
      "experience.bar.title": "Propietario de Bar",
      "experience.bar.description": "Propietario y gerente de un bar durante más de 3 años, liderando un equipo de 4 personas. Gestioné de manera integral el negocio, incluyendo la administración de cuentas con proveedores y clientes, control de stock, compras, liquidación de sueldos e impuestos. Desarrollé sólidas habilidades organizativas y de gestión, destacándome por la capacidad de tomar decisiones bajo presión y asegurar el funcionamiento eficiente del negocio.",
      
      // Telecom
      "experience.telecom.title": "Telecom Personal S.A",
      "experience.telecom.description": "Como supervisor de la oficina comercial, gestioné eficientemente los tiempos de espera y la atención al cliente en diversas colas de servicio. Atendí casos especiales, asegurando una experiencia fluida para usuarios finales y corporativos. Lideré un equipo de 30 personas, trabajando en conjunto para alcanzar métricas clave de calidad y gestión, impulsando la satisfacción y fidelización en un entorno dinámico.",
      
      // Centro de Contactos
      "experience.contactos.title": "Centro De Contactos Salta S.A",
      "experience.contactos.description": "Lideré equipos de hasta 30 personas en la atención telefónica para clientes como Movistar y Telefónica. Guié al equipo para cumplir con métricas clave, incluyendo calidad de atención, tiempos de resolución y eficiencia operativa, siguiendo las directrices del cliente. Mi enfoque en la supervisión directa contribuyó a mantener altos estándares de servicio y un rendimiento sobresaliente.",
      
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
      "contact.cta": "Hablemos!",
      
      // Footer
      "footer.builtBy": "Construido por Diego Bruno © 2024",
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
      "home.description": "<1>Full Stack</1> Developer specialized in building modern and scalable web applications. My current focus is on the <3>Web3</3> and <5>Blockchain</5> ecosystem, developing decentralized solutions. I also work with technologies like <7>React</7>, <9>Python</9> and <11>Node.js</11> to create robust and efficient digital experiences.",
      "home.cta": "View my projects",
      "home.nav.about": "ABOUT ME",
      "home.nav.training": "TRAINING",
      "home.nav.projects": "PROJECTS",
      "home.nav.contact": "CONTACT",
      
      // About
      "about.title": "About Me",
      "about.paragraph1": "Hello! My name is Diego and I enjoy creating things that live on the internet. My interest in web development started years ago when I decided to learn how to build my first application — it turns out that creating functionalities from scratch taught me a lot about <1>JavaScript</1> and <3>React</3>!",
      "about.paragraph2": "Fast-forward to today: I've had the privilege of working on varied projects, from traditional web applications to <1>decentralized applications</1>. Currently, my main focus is on building accessible products in the <3>Web3</3> and <5>Blockchain</5> ecosystem, developing <7>smart contracts</7> with <9>Solidity</9> and using tools like <11>Remix IDE</11> and <13>Foundry</13>.",
      "about.paragraph3": "I also constantly work with technologies like <1>React</1>, <3>React Native</3>, <5>Python</5>, <7>Node.js</7>, <9>Flask</9>, and <11>Relational</11> and <13>Non-Relational</13> databases.",
      
      // Experience
      "experience.title": "Experience ...",
      "experience.period": "Period",
      
      // SaltaLabs
      "experience.saltalabs.title": "Backend Leader SaltaLabs",
      "experience.saltalabs.company": "@SaltaLabs",
      "experience.saltalabs.period": "January 2024 - Present",
      "experience.saltalabs.description": "Founding partner and Backend Leader at SaltaLabs, a digital agency specialized in offering innovative technological solutions for local businesses. We lead SEO projects, WhatsApp bot development, web and mobile applications, providing effective responses to various business challenges. My role includes backend system architecture, technical team coordination, and development of scalable solutions.",
      
      // Bellify
      "experience.bellify.title": "Programmer at Bellify.io",
      "experience.bellify.description": "I was hired to develop a product using FlutterFlow, a technology I had no prior experience with. Through self-directed research and rapid learning, I managed to master the tool and successfully meet the project requirements. My ability to adapt to new technologies and overcome technical obstacles was key to successful development.",
      
      // Comerciante
      "experience.comerciante.title": "Independent Merchant",
      "experience.comerciante.description": "Owner and manager of an oil change shop for over 6 years, specialized in light vehicle maintenance. I managed accounts with suppliers and clients, including corporates, as well as price lists, stock control, and payroll and tax settlement. I developed key skills in administration, logistics, and customer service.",
      
      // Bar
      "experience.bar.title": "Bar Owner",
      "experience.bar.description": "Owner and manager of a bar for over 3 years, leading a team of 4 people. I comprehensively managed the business, including account administration with suppliers and clients, stock control, purchases, payroll and tax settlement. I developed solid organizational and management skills, standing out for my ability to make decisions under pressure and ensure efficient business operation.",
      
      // Telecom
      "experience.telecom.title": "Telecom Personal S.A",
      "experience.telecom.description": "As supervisor of the commercial office, I efficiently managed waiting times and customer service across various service queues. I handled special cases, ensuring a smooth experience for end users and corporates. I led a team of 30 people, working together to achieve key quality and management metrics, driving satisfaction and loyalty in a dynamic environment.",
      
      // Centro de Contactos
      "experience.contactos.title": "Centro De Contactos Salta S.A",
      "experience.contactos.description": "I led teams of up to 30 people in telephone support for clients like Movistar and Telefónica. I guided the team to meet key metrics, including quality of service, resolution times, and operational efficiency, following client guidelines. My focus on direct supervision contributed to maintaining high service standards and outstanding performance.",
      
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
      "footer.builtBy": "Built by Diego Bruno © 2024",
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
