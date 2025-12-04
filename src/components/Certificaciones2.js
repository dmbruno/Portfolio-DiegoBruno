import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './certificaciones2.css';

import cloudFoundryLogo from '../assets/images/cloudfoundry.svg';

const Certificaciones2 = () => {
    const { t } = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const sliderRef = useRef(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const certificates = [
        { className: 'desarrolloWeb' },
        { className: 'javaScript' },
        { className: 'reactJs' },
        { className: 'reactNative' },
        { className: 'carrera' },
        { className: 'python' }
    ];

    // Para desktop - duplicamos los certificados
    const extendedCertificates = isMobile 
        ? certificates 
        : [...certificates, ...certificates, ...certificates];

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Detectar scroll en mobile para actualizar indicadores
    useEffect(() => {
        if (!isMobile || !sliderRef.current) return;

        const handleScroll = () => {
            const slider = sliderRef.current;
            const scrollLeft = slider.scrollLeft;
            const cardWidth = slider.querySelector('.certificaciones-card')?.offsetWidth || 0;
            const gap = 24;
            const index = Math.round(scrollLeft / (cardWidth + gap));
            setCurrentIndex(index);
        };

        const slider = sliderRef.current;
        slider?.addEventListener('scroll', handleScroll);
        return () => slider?.removeEventListener('scroll', handleScroll);
    }, [isMobile]);

    // Solo para desktop
    useEffect(() => {
        if (isMobile) {
            setCurrentIndex(0);
            return;
        }
        setCurrentIndex(certificates.length);
    }, [isMobile]);

    const getCardWidth = () => {
        const width = window.innerWidth;
        if (width <= 360) return 200;
        if (width <= 480) return 240;
        if (width <= 768) return 360;
        return 600;
    };

    const [cardWidth, setCardWidth] = useState(getCardWidth());
    const gap = 24;

    useEffect(() => {
        const handleResize = () => {
            setCardWidth(getCardWidth());
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        if (isTransitioning || isMobile) return;
        setIsTransitioning(true);
        setCurrentIndex(prev => prev + 1);
    };

    const prevSlide = () => {
        if (isTransitioning || isMobile) return;
        setIsTransitioning(true);
        setCurrentIndex(prev => prev - 1);
    };

    const handleTransitionEnd = () => {
        if (isMobile) return;
        
        setIsTransitioning(false);
        
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

                <div className="certificaciones-slider-wrapper" ref={isMobile ? sliderRef : null}>
                    <div 
                        ref={!isMobile ? sliderRef : null}
                        className="certificaciones-grid" 
                        style={!isMobile ? { 
                            transform: `translateX(-${translateX}px)`,
                            transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
                        } : {}}
                        onTransitionEnd={handleTransitionEnd}
                    >
                        {extendedCertificates.map((cert, index) => (
                            <div key={index} className={`certificaciones-card ${cert.className}`}>
                                <div className="certificaciones-overlay">
                                    <h2 className="certificaciones-title-card">{cert.title}</h2>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Controles del slider - solo desktop */}
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
                            className={`slider-dot ${
                                isMobile 
                                    ? currentIndex === index ? 'active' : ''
                                    : (currentIndex % certificates.length) === index ? 'active' : ''
                            }`}
                            onClick={() => {
                                if (isMobile) {
                                    const slider = sliderRef.current;
                                    const cardWidth = slider?.querySelector('.certificaciones-card')?.offsetWidth || 0;
                                    slider?.scrollTo({
                                        left: index * (cardWidth + gap),
                                        behavior: 'smooth'
                                    });
                                } else {
                                    setIsTransitioning(true);
                                    setCurrentIndex(certificates.length + index);
                                }
                            }}
                        />
                    ))}
                </div>
            </div>
            <div className="tech-section">
                <h3>{t('certifications.technologies')}</h3>
                <div className="tech-carousel-wrapper">
                    <div className="tech-carousel">
                        {/* Primera fila - dirección normal */}
                        <div className="tech-carousel-track">
                            <i className="fab fa-python tech-icon"></i>
                            <i className="fab fa-react tech-icon"></i>
                            <i className="fab fa-js-square tech-icon"></i>
                            <i className="fab fa-html5 tech-icon"></i>
                            <i className="fab fa-css3 tech-icon"></i>
                            <i className="fab fa-sass tech-icon"></i>
                            <i className="fab fa-node-js tech-icon"></i>
                            <i className="fab fa-git tech-icon"></i>
                            
                            {/* Duplicado para efecto infinito */}
                            <i className="fab fa-python tech-icon"></i>
                            <i className="fab fa-react tech-icon"></i>
                            <i className="fab fa-js-square tech-icon"></i>
                            <i className="fab fa-html5 tech-icon"></i>
                            <i className="fab fa-css3 tech-icon"></i>
                            <i className="fab fa-sass tech-icon"></i>
                            <i className="fab fa-node-js tech-icon"></i>
                            <i className="fab fa-git tech-icon"></i>
                        </div>
                        
                        {/* Segunda fila - dirección inversa */}
                        <div className="tech-carousel-track">
                            <i className="fab fa-github tech-icon"></i>
                            <i className="fab fa-bootstrap tech-icon"></i>
                            <i className="fab fa-docker tech-icon"></i>
                            <i className="fas fa-database tech-icon"></i>
                            <i className="fab fa-npm tech-icon"></i>
                            <i className="fab fa-figma tech-icon"></i>
                            <i className="fab fa-ethereum tech-icon"></i>
                            <img src={cloudFoundryLogo} alt="Cloud Foundry" className="tech-icon tech-icon-img tech-icon-cloudfoundry" />
                            
                            {/* Duplicado para efecto infinito */}
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
