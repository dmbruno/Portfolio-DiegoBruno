import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './certificaciones2.css';

import cloudFoundryLogo from '../assets/images/cloudfoundry.svg';

// Importar certificados
import certDesarrolloWeb from '../assets/images/certificados/certificado-desarrolloWeb.png';
import certJavaScript from '../assets/images/certificados/certificado-javascript.png';
import certReactJs from '../assets/images/certificados/certificado-ReactJs.png';
import certReactNative from '../assets/images/certificados/certificado-ReactNative.png';
import certCarrera from '../assets/images/certificados/certificado-carreraDesarrolloDeApp.png';
import certPython from '../assets/images/certificados/Python-Full-Stack.png';


const Certificaciones2 = () => {
    const { t } = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const sliderRef = useRef(null);

    const certificates = [
        {
            className: 'desarrolloWeb',
            image: certDesarrolloWeb,
        },
        {
            className: 'javaScript',
            image: certJavaScript,
        },
        {
            className: 'reactJs',
            image: certReactJs,
        },
        {
            className: 'reactNative',
            image: certReactNative,
        },
        {
            className: 'carrera',
            image: certCarrera,
        },
        {
            className: 'python',
            image: certPython,
        }
    ];

    // Duplicamos los certificados para crear el efecto infinito
    const extendedCertificates = [...certificates, ...certificates, ...certificates];

    useEffect(() => {
        // Comenzar desde el medio del array extendido
        setCurrentIndex(certificates.length);
    }, []);

    const cardWidth = 600; // ancho de cada card + gap
    const gap = 24; // var(--spacing-xl) aproximadamente 24px

    const nextSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex(prev => prev + 1);
    };

    const prevSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex(prev => prev - 1);
    };

    const handleTransitionEnd = () => {
        setIsTransitioning(false);
        
        // Si llegamos al final del array, volvemos al inicio sin animación
        if (currentIndex >= certificates.length * 2) {
            setCurrentIndex(certificates.length);
            if (sliderRef.current) {
                sliderRef.current.style.transition = 'none';
                setTimeout(() => {
                    if (sliderRef.current) {
                        sliderRef.current.style.transition = 'transform 0.5s ease-in-out';
                    }
                }, 50);
            }
        }
        
        // Si llegamos al inicio del array, volvemos al final sin animación
        if (currentIndex <= 0) {
            setCurrentIndex(certificates.length);
            if (sliderRef.current) {
                sliderRef.current.style.transition = 'none';
                setTimeout(() => {
                    if (sliderRef.current) {
                        sliderRef.current.style.transition = 'transform 0.5s ease-in-out';
                    }
                }, 50);
            }
        }
    };

    const translateX = currentIndex * (cardWidth + gap);

    return (
        <section id='certificaciones' className="certificaciones-section">
            <div className="certificaciones-container">
                <h2 className="certificaciones-title">{t('certifications.title')}</h2>
                <p className="certificaciones-description dark">
                    {t('certifications.description')}
                </p>

                <div className="certificaciones-slider-wrapper">
                    <div 
                        ref={sliderRef}
                        className="certificaciones-grid" 
                        style={{ 
                            transform: `translateX(-${translateX}px)`,
                            transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
                        }}
                        onTransitionEnd={handleTransitionEnd}
                    >
                    {extendedCertificates.map((cert, index) => (
                            <div 
                                key={index} 
                                className={`certificaciones-card ${cert.className}`}
                                style={{
                                    backgroundImage: `url(${cert.image})`
                                }}
                            >
                                <div className="certificaciones-overlay">
                                    <h2 className="certificaciones-title-card">{cert.title}</h2>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Controles del slider */}
                <div className="slider-controls">
                    <button className="slider-arrow" onClick={prevSlide}>
                        ←
                    </button>
                    <button className="slider-arrow" onClick={nextSlide}>
                        →
                    </button>
                </div>

                {/* Indicadores de posición */}
                <div className="slider-indicators">
                    {certificates.map((_, index) => (
                        <div
                            key={index}
                            className={`slider-dot ${(currentIndex % certificates.length) === index ? 'active' : ''}`}
                            onClick={() => {
                                setIsTransitioning(true);
                                setCurrentIndex(certificates.length + index);
                            }}
                        />
                    ))}
                </div>
            </div>
            <div className="tech-section">
                <h3>{t('certifications.technologies')}</h3>
                <div className="tech-carousel-wrapper">
                    <div className="tech-carousel">
                        <div className="tech-carousel-track">
                            <i className="fab fa-python tech-icon"></i>
                            <i className="fab fa-react tech-icon"></i>
                            <i className="fab fa-js-square tech-icon"></i>
                            <i className="fab fa-html5 tech-icon"></i>
                            <i className="fab fa-css3 tech-icon"></i>
                            <i className="fab fa-sass tech-icon"></i>
                            <i className="fab fa-node-js tech-icon"></i>
                            <i className="fab fa-git tech-icon"></i>
                            <i className="fab fa-github tech-icon"></i>
                            <i className="fab fa-bootstrap tech-icon"></i>
                            <i className="fab fa-docker tech-icon"></i>
                            <i className="fas fa-database tech-icon"></i>
                            <i className="fab fa-npm tech-icon"></i>
                            <i className="fab fa-figma tech-icon"></i>
                            <i className="fab fa-ethereum tech-icon"></i>
                            
                            <img src={cloudFoundryLogo} alt="Cloud Foundry" className="tech-icon tech-icon-img tech-icon-cloudfoundry" />
                            
                            {/* Duplicado para efecto infinito */}
                            <i className="fab fa-python tech-icon"></i>
                            <i className="fab fa-react tech-icon"></i>
                            <i className="fab fa-js-square tech-icon"></i>
                            <i className="fab fa-html5 tech-icon"></i>
                            <i className="fab fa-css3 tech-icon"></i>
                            <i className="fab fa-sass tech-icon"></i>
                            <i className="fab fa-node-js tech-icon"></i>
                            <i className="fab fa-git tech-icon"></i>
                            <i className="fab fa-github tech-icon"></i>
                            <i className="fab fa-bootstrap tech-icon"></i>
                            <i className="fab fa-docker tech-icon"></i>
                            <i className="fas fa-database tech-icon"></i>
                            <i className="fab fa-npm tech-icon"></i>
                            <i className="fab fa-figma tech-icon"></i>
                            <i className="fab fa-ethereum tech-icon"></i>
                           
                            <img src={cloudFoundryLogo} alt="Cloud Foundry" className="tech-icon tech-icon-img tech-icon-cloudfoundry" />
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certificaciones2;
