import React from 'react';
import { Link } from 'react-scroll';
import { useTranslation, Trans } from 'react-i18next';
import './home.css';

const Home = () => {
    const { t } = useTranslation();
    
    return (
        <div className='container-home' id='home'>
            <div className='home-content'>
                <p className='home-greeting'>{t('home.greeting')}</p>
                <h1 className='home-name'>{t('home.name')}</h1>
                
                <p className='home-description'>
                    <Trans i18nKey="home.description">
                        Desarrollador <span className='highlight'>Full Stack</span> especializado en construir aplicaciones web 
                        modernas y escalables. Mi foco actual está en el ecosistema <span className='highlight'>Web3</span> y <span className='highlight'>Blockchain</span>, 
                        desarrollando soluciones descentralizadas. También trabajo con tecnologías como <span className='highlight'>React</span>, <span className='highlight'>Python</span> y <span className='highlight'>Node.js</span><span> </span>
                        para crear experiencias digitales robustas y eficientes.
                    </Trans>
                </p>
                <Link to="carousel" smooth={true} duration={500} className='home-cta'>
                    {t('home.cta')}
                </Link>
            </div>

            <div className='container-links'>
                <Link to="about" smooth={true} duration={500}>
                    <h1>{t('home.nav.about')}</h1>
                </Link>
                <Link to="certificaciones" smooth={true} duration={500}>
                    <h1>{t('home.nav.training')}</h1>
                </Link>
                <Link to="carousel" smooth={true} duration={500}>
                    <h1>{t('home.nav.projects')}</h1>
                </Link>
                <Link to="contact" smooth={true} duration={500}>
                    <h1>{t('home.nav.contact')}</h1>
                </Link>
            </div>
        </div>
    );
};

export default Home;

