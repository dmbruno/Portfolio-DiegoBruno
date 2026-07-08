import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './certificaciones2.css';

import cloudFoundryLogo from '../assets/images/cloudfoundry.svg';
import desarrolloWebImg from '../assets/images/certificados/certificado-desarrolloWeb.png';
import javaScriptImg from '../assets/images/certificados/certificado-javascript.png';
import reactJsImg from '../assets/images/certificados/certificado-ReactJs.png';
import reactNativeImg from '../assets/images/certificados/certificado-ReactNative.png';
import carreraImg from '../assets/images/certificados/certificado-carreraDesarrolloDeApp.png';
import pythonImg from '../assets/images/certificados/Python-Full-Stack.png';
import ethKipuImg from '../assets/images/certificados/CertificadoDevPackEth.png';

const TECH_CATEGORIES = [
    {
        label: 'Lenguajes',
        items: [
            { name: 'Python', icon: 'fab fa-python' },
            { name: 'JavaScript', icon: 'fab fa-js-square' },
        ],
    },
    {
        label: 'Frontend',
        items: [
            { name: 'React', icon: 'fab fa-react' },
            { name: 'HTML5', icon: 'fab fa-html5' },
            { name: 'CSS3', icon: 'fab fa-css3' },
            { name: 'Sass', icon: 'fab fa-sass' },
            { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
            { name: 'Figma', icon: 'fab fa-figma' },
        ],
    },
    {
        label: 'Backend & datos',
        items: [
            { name: 'Node.js', icon: 'fab fa-node-js' },
            { name: 'Bases de datos', icon: 'fas fa-database' },
        ],
    },
    {
        label: 'Herramientas',
        items: [
            { name: 'Git', icon: 'fab fa-git' },
            { name: 'GitHub', icon: 'fab fa-github' },
            { name: 'npm', icon: 'fab fa-npm' },
            { name: 'Docker', icon: 'fab fa-docker' },
        ],
    },
    {
        label: 'Web3 & Cloud',
        items: [
            { name: 'Ethereum', icon: 'fab fa-ethereum' },
            { name: 'Cloud Foundry', image: cloudFoundryLogo },
        ],
    },
];

const CERTIFICATIONS = [
    {
        file: 'desarrollo-web.png',
        title: 'Desarrollo Web',
        issuer: 'Coderhouse',
        date: '2023-08',
        duration: '38 hs',
        image: desarrolloWebImg,
    },
    {
        file: 'javascript.png',
        title: 'JavaScript',
        issuer: 'Coderhouse',
        date: '2023-11',
        duration: '36 hs',
        image: javaScriptImg,
    },
    {
        file: 'react-js.png',
        title: 'React JS',
        issuer: 'Coderhouse',
        date: '2024-01',
        duration: '30 hs',
        image: reactJsImg,
    },
    {
        file: 'desarrollo-apps.png',
        title: 'Desarrollo de Aplicaciones',
        issuer: 'Coderhouse',
        date: '2024-03',
        duration: '36 hs',
        image: reactNativeImg,
    },
    {
        file: 'carrera-frontend-react.png',
        title: 'Carrera de Desarrollo Frontend React',
        issuer: 'Coderhouse',
        date: '2024-01',
        duration: '27 sem',
        image: carreraImg,
    },
    {
        file: 'full-stack-python.png',
        title: 'Full Stack Python (Codo a Codo 4.0)',
        issuer: 'Buenos Aires Aprende',
        date: null,
        duration: '198 hs',
        image: pythonImg,
    },
    {
        file: 'eth-developer-pack.png',
        title: 'Ethereum Developer Pack',
        issuer: 'ETH Kipu · Talento Tech',
        date: '2025-11',
        duration: '42 hs',
        image: ethKipuImg,
    },
];

const Certificaciones2 = () => {
    const { t } = useTranslation();
    const [activeIndex, setActiveIndex] = useState(0);
    const active = CERTIFICATIONS[activeIndex];

    return (
        <section id='certificaciones' className="certificaciones-section">
            <div className="certificaciones-container">
                <h2 className="certificaciones-title">{t('certifications.title')}</h2>
                <p className="certificaciones-description dark">
                    {t('certifications.description')}
                </p>

                <div className="cert-explorer">
                    <div className="cert-file-list">
                        <div className="cert-list-prompt">
                            <span className="cert-list-prompt-sign">$</span> ls -la ./certificaciones
                        </div>
                        {CERTIFICATIONS.map((cert, index) => (
                            <button
                                type="button"
                                key={cert.file}
                                className={`cert-row ${index === activeIndex ? 'active' : ''}`}
                                onClick={() => setActiveIndex(index)}
                            >
                                <i className="fas fa-file-alt cert-row-icon" aria-hidden="true"></i>
                                <span className="cert-row-name">{cert.file}</span>
                                <span className="cert-row-issuer">{cert.issuer}</span>
                                <span className="cert-row-meta">{cert.duration}</span>
                            </button>
                        ))}
                    </div>

                    <div className="cert-preview">
                        <div className="cert-preview-header">
                            <span className="cert-preview-dot"></span>
                            <span className="cert-preview-dot"></span>
                            <span className="cert-preview-dot active"></span>
                            <span className="cert-preview-filename">{active.file}</span>
                        </div>
                        <img className="cert-preview-img" src={active.image} alt={active.title} />
                        <div className="cert-preview-meta">
                            <span className="cert-preview-title">{active.title}</span>
                            <span className="cert-preview-sep">·</span>
                            <span>{active.issuer}</span>
                            {active.date && (
                                <>
                                    <span className="cert-preview-sep">·</span>
                                    <span>{active.date}</span>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="tech-section">
                <h3>{t('certifications.technologies')}</h3>
                <div className="tech-grid">
                    {TECH_CATEGORIES.map((category) => (
                        <div className="tech-category" key={category.label}>
                            <div className="tech-category-label">{category.label}</div>
                            <div className="tech-chips">
                                {category.items.map((item) => (
                                    <span className="tech-chip" key={item.name}>
                                        {item.image ? (
                                            <img src={item.image} alt="" className="tech-chip-img" aria-hidden="true" />
                                        ) : (
                                            <i className={`${item.icon} tech-chip-icon`} aria-hidden="true"></i>
                                        )}
                                        {item.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificaciones2;
