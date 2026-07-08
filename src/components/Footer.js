import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="footer-terminal">
        <div className="footer-terminal-header">
          <span className="footer-terminal-dot"></span>
          <span className="footer-terminal-dot"></span>
          <span className="footer-terminal-dot active"></span>
          <span className="footer-terminal-filename">contacto.sh</span>
        </div>

        <div className="footer-terminal-body">
          <p className="footer-terminal-line">
            <span className="ft-prompt">$</span> whoami
          </p>
          <p className="footer-terminal-output">
            <i className="fas fa-user"></i> Diego M. Bruno
          </p>

          <p className="footer-terminal-line">
            <span className="ft-prompt">$</span> cat ubicacion.txt
          </p>
          <p className="footer-terminal-output">
            <i className="fas fa-map-marker-alt"></i> Salta, Argentina
          </p>

          <p className="footer-terminal-line">
            <span className="ft-prompt">$</span> cat contacto.txt
          </p>
          <div className="footer-terminal-output footer-terminal-links">
            <a href="tel:+5493875051112">
              <i className="fas fa-phone-alt"></i> +54 9 387 5051112
            </a>
            <a href="mailto:dmbruno61@gmail.com">
              <i className="fas fa-envelope"></i> dmbruno61@gmail.com
            </a>
          </div>

          <p className="footer-terminal-line">
            <span className="ft-prompt">$</span> ls ./redes
          </p>
          <div className="footer-terminal-output footer-terminal-social">
            <a href="https://www.linkedin.com/in/diego-martin-bruno/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i> linkedin
            </a>
            <a href="https://www.instagram.com/diegob_dev/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i> instagram
            </a>
            <a href="https://www.facebook.com/diego.bruno.758" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i> facebook
            </a>
            <a href="https://github.com/dmbruno" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> github
            </a>
          </div>

          <p className="footer-terminal-line footer-terminal-final">
            <span className="ft-prompt">$</span> echo $BUILD_INFO
          </p>
          <p className="footer-terminal-output">
            <span className="footer-monogram">&lt;db/&gt;</span> {t('footer.builtBy')}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
