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
                            Soy Diego Bruno, desarrollador Full Stack. Empecé a programar en 2023 escribiendo mi primera aplicación desde cero — ese ejercicio de entender cada pieza del sistema definió la forma en que sigo trabajando hoy.
                        </Trans>
                    </p>
                    <p>
                        <Trans i18nKey="about.paragraph2">
                            Diseño y desarrollo productos que integran <strong>Inteligencia Artificial</strong> (OpenAI API, Claude API) para automatizar tareas y construir agentes conversacionales. También trabajo en el ecosistema <strong>Web3</strong> y <strong>Blockchain</strong>, desarrollando smart contracts con <strong>Solidity</strong>.
                        </Trans>
                    </p>
                    <p>
                        <Trans i18nKey="about.paragraph3">
                            Mi stack incluye <strong>Python</strong>, <strong>Node.js</strong>, <strong>TypeScript</strong>, <strong>React</strong> y <strong>React Native</strong> en frontend y backend, y bases de datos relacionales como <strong>PostgreSQL</strong>, <strong>MySQL</strong> y <strong>Supabase</strong>. Priorizo el código que resuelve problemas reales de negocio por sobre la estética de un portfolio.
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

