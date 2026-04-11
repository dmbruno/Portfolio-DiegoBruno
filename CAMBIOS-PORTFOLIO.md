# Cambios para tu Portfolio - diegobruno.com.ar

## Archivos a modificar:
1. `src/i18n.js` - Textos de experiencias (ES y EN)
2. `src/components/Experience.js` - Reemplazar "bellify" por "freelance" en la estructura

---

## 1. Cambios en `src/i18n.js`

### ESPAÑOL - Reemplazar la sección de experiencias:

Buscar y reemplazar las siguientes keys:

---

### `experience.saltalabs.period`
**ANTES:** `"Enero 2024 - Actualidad"`
**DESPUÉS:** `"Junio 2025 - Actualidad"`

### `experience.saltalabs.description`
**ANTES:**
```
"Backend Leader en SaltaLabs, una agencia digital especializada en ofrecer soluciones tecnológicas innovadoras para empresas locales. Lideramos proyectos de SEO, desarrollo de bots de WhatsApp, aplicaciones web y móviles, brindando respuestas efectivas a diversas problemáticas empresariales. Mi rol incluye la arquitectura de sistemas backend, coordinación técnica del equipo y desarrollo de soluciones escalables."
```

**DESPUÉS:**
```
"Backend Leader en SaltaLabs, una software factory que construye web apps SaaS a medida para empresas con problemáticas específicas. Diseño la arquitectura backend, realizo code review y reporto avances directamente al cliente.\n\n• Proyecto - Sistema de Gestión Comercial (SaaS): Desarrollé de forma integral un sistema para comercio local con módulos de control de stock, manejo de caja y reportes de ventas por cliente y producto. Stack: Python/Flask + React/Redux.\n\n• Proyecto - Plataforma de E-Vouchers (SaaS): App para agencia de viajes con gestión de pasajeros, servicios contratados y generación de e-vouchers con alertas automáticas ante cambios en servicios. Backend con Supabase, frontend React + Redux. Equipo de 3 personas.\n\nHerramientas: Python, Flask, React, Redux, Supabase, PostgreSQL, JavaScript, Git, Notion."
```

---

### Reemplazar `experience.bellify.*` por `experience.freelance.*`:

**ANTES (bellify):**
```js
"experience.bellify.title": "Programador en Bellify.io",
"experience.bellify.description": "Fui contratado para desarrollar un producto utilizando FlutterFlow..."
```

**DESPUÉS (freelance):**
```js
"experience.freelance.title": "Desarrollador Full Stack & IA - Freelance",
"experience.freelance.period": "2024 - Actualidad",
"experience.freelance.description": "Desarrollo de productos propios integrando Inteligencia Artificial.\n\n• El Encargado - Asistente IA para comercios: App que levanta datos reales de venta y ofrece análisis mediante perfiles de IA configurados (CEO, Chef, Marketing, CFO). Cada perfil brinda opiniones estratégicas al dueño del negocio. Stack: Python, Flask, OpenAI API.\n\n• Asistentes Virtuales con IA: Desarrollo de chatbots y asistentes inteligentes para automatizar atención y consultas en negocios. Integración con APIs de inteligencia artificial.\n\nHerramientas: Python, Flask, OpenAI API, Chatbots, REST API."
```

---

### INGLÉS - Mismos cambios:

### `experience.saltalabs.period`
**DESPUÉS:** `"June 2025 - Present"`

### `experience.saltalabs.description`
**DESPUÉS:**
```
"Backend Leader at SaltaLabs, a software factory that builds custom SaaS web apps for companies with specific business needs. I design backend architecture, conduct code reviews and report progress directly to clients.\n\n• Project - Commercial Management System (SaaS): Built end-to-end a system for a local business with inventory control, cash register management and sales reports by customer and product. Stack: Python/Flask + React/Redux.\n\n• Project - E-Voucher Platform (SaaS): App for a travel agency with passenger database management, contracted services and e-voucher generation with automatic alerts on service changes. Backend with Supabase, frontend React + Redux. Team of 3.\n\nTools: Python, Flask, React, Redux, Supabase, PostgreSQL, JavaScript, Git, Notion."
```

### Reemplazar `experience.bellify.*` por `experience.freelance.*`:

**DESPUÉS:**
```js
"experience.freelance.title": "Full Stack Developer & AI - Freelance",
"experience.freelance.period": "2024 - Present",
"experience.freelance.description": "Building AI-powered products as personal projects.\n\n• El Encargado - AI Assistant for Businesses: App that ingests real sales data and provides analysis through configured AI profiles (CEO, Chef, Marketing, CFO). Each profile offers strategic insights to the business owner. Stack: Python, Flask, OpenAI API.\n\n• AI Virtual Assistants: Development of chatbots and intelligent assistants to automate customer support and business queries. Integration with AI APIs.\n\nTools: Python, Flask, OpenAI API, Chatbots, REST API."
```

---

## 2. Cambios en `src/components/Experience.js`

Buscar el objeto `experiences` y reemplazar la entrada `experience1` (bellify):

**ANTES:**
```js
experience1: {
  title: 'experience.bellify.title',
  description: 'experience.bellify.description',
},
```

**DESPUÉS:**
```js
freelance: {
  title: 'experience.freelance.title',
  period: 'experience.freelance.period',
  description: 'experience.freelance.description',
},
```

Y en el estado inicial, si hay referencia a `experience1`, cambiarla por el nombre que corresponda en el sidebar.

---

## 3. Nota sobre el CSS

Si las descripciones con `\n\n` no generan saltos de línea visibles, agregar en `experience.css`:

```css
.experience-description {
  white-space: pre-line;
}
```

Esto hará que los `\n` se rendericen como saltos de línea.
