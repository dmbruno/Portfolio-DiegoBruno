import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./carousel.css";
import fondoWebGauchosGuemes from "../assets/images/fondoWebGauchosGuemes.jpg";
import fondoChatBotUBM from "../assets/images/fondoChatBotUBM.png";
import fondoChatBotInformativo from "../assets/images/fondoChatBotInformativo.jpg";
import fondoKipuBank from "../assets/images/fondoKipuBank.png";
import fondoTokenizAR from "../assets/tokenizar.png";
import fondoSnapMoment from "../assets/snapMoment.png";
import fondoPropioIA from "../assets/PropioIA.png";

// Para sumar un proyecto nuevo, agregá un objeto más a este array.
// category acepta: "web", "ia" o "blockchain" (ver FILTERS más abajo).
const PROJECTS = [
  {
    id: 1,
    titleKey: "projects.gauchos.title",
    descriptionKey: "projects.gauchos.description",
    image: fondoWebGauchosGuemes,
    category: "web",
    technologies: ["React", "Styled Components", "WhatsApp API", "MySQL", "Astro"],
    github: "https://github.com/SaltaLabs/landingPage-GauchosGuemes",
    demo: "https://gauchosdeguemes.com.ar/",
    whatsapp: null,
  },
  {
    id: 2,
    titleKey: "projects.chatbotUBM.title",
    descriptionKey: "projects.chatbotUBM.description",
    image: fondoChatBotUBM,
    category: "ia",
    technologies: ["TypeScript", "BuilderBot", "Node.js", "WhatsApp API", "MySQL"],
    github: "https://github.com/dmbruno/UBM-BOT-WhatsApp",
    demo: null,
    whatsapp: "https://wa.me/5493874127725?text=Hola!",
  },
  {
    id: 3,
    titleKey: "projects.chatbotInfo.title",
    descriptionKey: "projects.chatbotInfo.description",
    image: fondoChatBotInformativo,
    category: "ia",
    technologies: ["TypeScript", "Node.js", "Meta API", "MySQL"],
    github: "https://github.com/dmbruno/ChatbotInformativo-DB",
    demo: null,
    whatsapp: "https://wa.me/5493874046150?text=Hola!",
  },
  {
    id: 4,
    titleKey: "projects.kipubank.title",
    descriptionKey: "projects.kipubank.description",
    image: fondoKipuBank,
    category: "blockchain",
    technologies: ["Remix IDE", "Solidity", "Foundry", "Uniswap V2", "OpenZeppelin", "Ethers.js"],
    github: "https://github.com/dmbruno/KipuBankV3",
    demo: "https://sepolia.etherscan.io/address/0x952252bEC0fE656006E310BfC4C847181c24E321",
    whatsapp: null,
  },
  {
    id: 5,
    titleKey: "projects.tokenizar.title",
    descriptionKey: "projects.tokenizar.description",
    image: fondoTokenizAR,
    category: "blockchain",
    technologies: ["React", "Solidity", "Polygon", "Ethers.js", "ERC-20"],
    github: "https://github.com/dmbruno/tokenizAR",
    demo: "https://tokeniz-ar.vercel.app/",
    whatsapp: null,
  },
  {
    id: 6,
    titleKey: "projects.snapmoment.title",
    descriptionKey: "projects.snapmoment.description",
    image: fondoSnapMoment,
    category: "web",
    technologies: ["React", "Node.js", "Supabase", "QR", "Cloud Storage"],
    github: "https://github.com/dmbruno/SnapMoment",
    demo: "https://www.snapmoment.com.ar",
    whatsapp: null,
  },
  {
    id: 7,
    titleKey: "projects.propioia.title",
    descriptionKey: "projects.propioia.description",
    image: fondoPropioIA,
    category: "ia",
    technologies: ["Python", "Flask", "OpenAI API", "WhatsApp API", "AFIP"],
    github: "https://github.com/dmbruno/Asistente-emprendedores",
    demo: "https://propio-ia-landing.vercel.app/servicios/facturacion",
    whatsapp: null,
  },
];

const FILTERS = [
  { key: "all", labelKey: "projects.filter.all" },
  { key: "web", labelKey: "projects.filter.web" },
  { key: "ia", labelKey: "projects.filter.ia" },
  { key: "blockchain", labelKey: "projects.filter.blockchain" },
];

const Carousel = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeFilter);

  return (
    <section id="carousel" className="works-section">
      <div className="works-container">
        <h2 className="works-title">{t("projects.title")}</h2>

        <div className="projects-filters" role="tablist">
          {FILTERS.map((filter) => (
            <button
              key={filter.key}
              role="tab"
              aria-selected={activeFilter === filter.key}
              className={`filter-tab ${activeFilter === filter.key ? "active" : ""}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {t(filter.labelKey)}
            </button>
          ))}
        </div>

        <div className="projects-list">
          {filteredProjects.map((project) => (
            <article key={project.id} className="project-row">
              <a
                href={project.demo || project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-row-image"
              >
                <span className="project-row-dots" aria-hidden="true">
                  <span></span><span></span><span></span>
                </span>
                <img src={project.image} alt={t(project.titleKey)} />
              </a>

              <div className="project-row-body">
                <span className={`project-row-badge badge-${project.category}`}>
                  {t(`projects.filter.${project.category}`)}
                </span>

                <h3 className="project-row-title">
                  <span className="project-row-monogram">&lt;db/&gt;</span> {t(project.titleKey)}
                </h3>

                <p
                  className="project-row-description"
                  dangerouslySetInnerHTML={{ __html: t(project.descriptionKey) }}
                ></p>

                <ul className="project-row-tech">
                  {project.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>

                <div className="project-row-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label="GitHub Repository"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="External Link"
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  )}
                  {project.whatsapp && (
                    <a
                      href={project.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="WhatsApp Bot"
                    >
                      <i className="fab fa-whatsapp"></i>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="more-projects">
          <a
            href="https://github.com/dmbruno"
            target="_blank"
            rel="noopener noreferrer"
            className="more-projects-button"
          >
            {t("projects.viewMore")}
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
