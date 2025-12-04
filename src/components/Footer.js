import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-left">
          <p><i className="fas fa-user"></i> Diego M. Bruno</p> 
          <p><i className="fas fa-map-marker-alt"></i> Salta, Argentina</p>
          <p><i className="fas fa-phone-alt"></i> Cel +54 9 387 5051112</p>
          <p><i className="fas fa-envelope"></i> dmbruno61@gmail.com</p>
        </div>
        <div className="footer-right">
          <a href="https://www.linkedin.com/in/diego-martin-bruno/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/hongobr_/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com/diego.bruno.758" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://github.com/dmbruno" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>{t('footer.builtBy')}</p>
      </div>
    </footer>
  );
}

export default Footer;



