import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import "./carousel.css";
import fondoWebGauchosGuemes from "../assets/images/fondoWebGauchosGuemes.jpg";

import fondoChatBotUBM from "../assets/images/fondoChatBotUBM.png";
import fondoChatBotInformativo from "../assets/images/fondoChatBotInformativo.jpg";
import fondoKipuBank from "../assets/images/fondoKipuBank.png";

const Carousel = () => {
  const { t } = useTranslation();
  
  const projects = [
    {
      id: 1,
      titleKey: "projects.gauchos.title",
      descriptionKey: "projects.gauchos.description",
      image: fondoWebGauchosGuemes,
      technologies: [
        "React",
        "Styled Components",
        "WhatsApp API",
        "MySQL",
        "Astro",
      ],
      github: "https://github.com/SaltaLabs/landingPage-GauchosGuemes",
      demo: "https://gauchosdeguemes.com.ar/",
      whatsapp: null,
    },
    {
      id: 2,
      titleKey: "projects.chatbotUBM.title",
      descriptionKey: "projects.chatbotUBM.description",
      image: fondoChatBotUBM,
      technologies: [
        "TypeScript",
        "BuilderBot",
        "Node.js",
        "WhatsApp API",
        "MySQL",
      ],
      github: "https://github.com/dmbruno/UBM-BOT-WhatsApp",
      demo: null,
      whatsapp: "https://wa.me/5493874127725?text=Hola!",
    },
    {
      id: 3,
      titleKey: "projects.chatbotInfo.title",
      descriptionKey: "projects.chatbotInfo.description",
      image: fondoChatBotInformativo,
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
      technologies: ["Remix IDE","Solidity", "Foundry", "Uniswap V2", "OpenZeppelin", "Ethers.js"],
      github: "https://github.com/dmbruno/KipuBankV3",
      demo: "https://sepolia.etherscan.io/address/0x952252bEC0fE656006E310BfC4C847181c24E321",
      whatsapp: null
    }
  ];

  return (
    <section id="carousel" className="works-section">
      <div className="works-container">
        <h2 className="works-title">{t('projects.title')}</h2>

        {projects.map((project, index) => (
          <div key={project.id} className="featured-project">
            <div className="project-content">
              <div className="project-label">
                <span className="project-featured">{t('projects.featured')}</span>
              </div>
              <h3 className="project-title">{t(project.titleKey)}</h3>

              <div
                className={`project-description ${
                  index % 2 === 0
                    ? "project-description-right"
                    : "project-description-left"
                }`}
              >
                <p
                  dangerouslySetInnerHTML={{ __html: t(project.descriptionKey) }}
                ></p>
              </div>

              <ul className="project-tech-list">
                {project.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>

              <div className="project-links">
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

            <div className="project-image">
              <a
                href={project.demo || project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="image-wrapper">
                  <img src={project.image} alt={t(project.titleKey)} />
                </div>
              </a>
            </div>
          </div>
        ))}

        {/* Botón para ver más proyectos en GitHub */}
        <div className="more-projects">
          <a
            href="https://github.com/dmbruno"
            target="_blank"
            rel="noopener noreferrer"
            className="more-projects-button"
          >
            {t('projects.viewMore')}
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
