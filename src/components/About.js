import React from 'react';
import './about.css';

import fotoColor from '../assets/images/fotoColor.jpeg';
import DownloadCV from './DownloadCV';
import Experience from './Experience';


function About() {
    return (
        <section id="about" className="about-section">
            <div className="about-content">
                <div className="about-text">
                    <h2>Hola,</h2>
                    <p>
                        Soy <strong>Diego M. Bruno</strong>, un programador apasionado por resolver problemas a través del <strong>código</strong>. Tengo experiencia en <strong>HTML</strong>, <strong>CSS</strong>, <strong>Sass</strong>, <strong>JavaScript</strong>, <strong>ReactJS</strong>, <strong>React Native</strong>, y desarrollo <strong>Full Stack</strong> con <strong>Python</strong> y <strong>Flask</strong>. También manejo herramientas como <strong>Git</strong>, <strong>GitHub</strong>, <strong>MySQL</strong> y <strong>Firebase</strong>, <strong>entre otras...</strong>.
                    </p>
                    <p>
                        En mi carrera, he trabajado en proyectos <strong>desafiantes</strong> que me han permitido perfeccionar mis habilidades y ofrecer <strong>soluciones efectivas</strong>. Mi enfoque está en crear <strong>aplicaciones útiles</strong> y mejorar continuamente a través de la <strong>innovación</strong>.
                    </p>
                    <p>
                        Si buscas a alguien comprometido con la <strong>excelencia</strong> y la <strong>resolución de problemas</strong>, estaré encantado de conectar contigo.
                    </p>
                </div>
                <div className="about-image">
                    <img src={fotoColor} alt="about" />
                </div>
                


            </div>
            <div className='about-parteDos'>
                <div className='container-download'>
                    <DownloadCV />
                </div>
                <div className='experience'>
                    <Experience />
                </div>
            </div>
        </section>
    );
}

export default About;

