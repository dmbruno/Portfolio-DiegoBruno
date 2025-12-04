import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import './Header.css';

function Header() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Estado para controlar visibilidad
  const [lastScrollTop, setLastScrollTop] = useState(0); // Guarda la última posición de scroll

  // Función que maneja el evento de scroll
  const handleScroll = () => {
    const scrollTop = window.scrollY;

    if (scrollTop > 350) {
      setScrolled(true);

      if (scrollTop > 700) {
        if (scrollTop > lastScrollTop) {
          // Si el usuario hace scroll hacia abajo, ocultamos el header
          setIsVisible(false);
        } else {
          // Si el usuario hace scroll hacia arriba, mostramos el header
          setIsVisible(true);
        }
      } else {
        // Mostrar el header si el scroll está entre 400 y 600px
        setIsVisible(true);
      }
    } else {
      setScrolled(false);
      setIsVisible(true); // Siempre mostrar el header si el scroll es menor a 400px
    }

    // Guardamos la última posición del scroll
    setLastScrollTop(scrollTop);
  };

  // Efecto para escuchar el evento de scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <div className='header-container'>
      <header className={`header ${scrolled ? 'scrolled-header' : ''} ${!isVisible ? 'hidden' : ''}`}>
        <nav className='nav-container'>
          <ul className={`header-links-container ${scrolled ? 'scrolled' : ''}`}>
            <li><Link to="home" className={`link-header ${scrolled ? 'scrolled' : ''}`} smooth={true} duration={500}>{t('nav.home')}</Link></li>
            <li><Link to="about" className={`link-header ${scrolled ? 'scrolled' : ''}`}>{t('nav.about')}</Link></li>
            <li><Link to="certificaciones" className={`link-header ${scrolled ? 'scrolled' : ''}`}>{t('nav.training')}</Link></li>
            <li><Link to="carousel" className={`link-header ${scrolled ? 'scrolled' : ''}`}>{t('nav.projects')}</Link></li>
            <li><Link to="contact" className={`link-header ${scrolled ? 'scrolled' : ''}`}>{t('nav.contact')}</Link></li>
            <li>
              <a href="/CV-DiegoBruno.pdf" download className={`cv-download-link ${scrolled ? 'scrolled' : ''}`}>
                {t('nav.downloadCV')}
              </a>
            </li>
            <li>
              <LanguageSwitcher />
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;




