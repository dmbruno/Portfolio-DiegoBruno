import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import './about.css';

import fotoColor from '../assets/images/fotoColor.jpeg';
import Experience from './Experience';


function About() {
    const { t } = useTranslation();
    
    return (
        <section id="about" className="about-section">
            <div className="about-content">
                <div className="about-text">
                    <h2>{t('about.title')}</h2>
                    <p>
                        <Trans i18nKey="about.paragraph1">
                            ¡Hola! Mi nombre es Diego y disfruto crear cosas que viven en internet. Mi interés por el desarrollo web comenzó hace años cuando decidí aprender a construir mi primera aplicación — resulta que crear funcionalidades desde cero me enseñó mucho sobre <strong>JavaScript</strong> y <strong>React</strong>!
                        </Trans>
                    </p>
                    <p>
                        <Trans i18nKey="about.paragraph2">
                            Avancemos al presente: he tenido el privilegio de trabajar en proyectos variados, desde aplicaciones web tradicionales hasta <strong>aplicaciones descentralizadas</strong>. Actualmente, mi enfoque principal está en construir productos accesibles en el ecosistema <strong>Web3</strong> y <strong>Blockchain</strong>, desarrollando <strong>smart contracts</strong> con <strong>Solidity</strong> y utilizando herramientas como <strong>Remix IDE</strong> y <strong>Foundry</strong>.
                        </Trans>
                    </p>
                    <p>
                        <Trans i18nKey="about.paragraph3">
                            También trabajo constantemente con tecnologías como <strong>React</strong>, <strong>React Native</strong>, <strong>Python</strong>, <strong>Node.js</strong>, <strong>Flask</strong>, y bases de datos <strong>Relacionales</strong> y <strong>NO-Relacionales</strong>.
                        </Trans>
                    </p>
                    <p>
                        
                    </p>
                </div>
                <div className="about-image">
                    <img src={fotoColor} alt="about" />
                </div>
                


            </div>
            <div className='about-parteDos'>
                <div className='experience'>
                    <Experience />
                </div>
            </div>
        </section>
    );
}

export default About;

