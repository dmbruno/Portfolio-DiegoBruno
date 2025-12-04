import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import './Header.css';

function Header() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false); // Estado para el menú móvil

  // Función que maneja el evento de scroll
  const handleScroll = () => {
    const scrollTop = window.scrollY;

    if (scrollTop > 350) {
      setScrolled(true);

      if (scrollTop > 700) {
        if (scrollTop > lastScrollTop) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }
    } else {
      setScrolled(false);
      setIsVisible(true);
    }

    setLastScrollTop(scrollTop);
  };

  // Toggle del menú móvil
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Cerrar menú al hacer clic en un link
  const closeMenu = () => {
    setMenuOpen(false);
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
          {/* Hamburger Menu Button */}
          <div className={`hamburger-menu ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul className={`header-links-container ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'active' : ''}`}>
            <li><Link to="home" className={`link-header ${scrolled ? 'scrolled' : ''}`} smooth={true} duration={500} onClick={closeMenu}>{t('nav.home')}</Link></li>
            <li><Link to="about" className={`link-header ${scrolled ? 'scrolled' : ''}`} smooth={true} duration={500} onClick={closeMenu}>{t('nav.about')}</Link></li>
            <li><Link to="certificaciones" className={`link-header ${scrolled ? 'scrolled' : ''}`} smooth={true} duration={500} onClick={closeMenu}>{t('nav.training')}</Link></li>
            <li><Link to="carousel" className={`link-header ${scrolled ? 'scrolled' : ''}`} smooth={true} duration={500} onClick={closeMenu}>{t('nav.projects')}</Link></li>
            <li><Link to="contact" className={`link-header ${scrolled ? 'scrolled' : ''}`} smooth={true} duration={500} onClick={closeMenu}>{t('nav.contact')}</Link></li>
            <li>
              <a href="/CV-DiegoBruno.pdf" download className={`cv-download-link ${scrolled ? 'scrolled' : ''}`} onClick={closeMenu}>
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




