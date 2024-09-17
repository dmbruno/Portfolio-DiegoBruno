import React from 'react';
import './certificaciones2.css';


const Certificaciones2 = () => {
    return (
        <section id='info' className="certificaciones-section">
            <div className="certificaciones-container">
                <h1 className="certificaciones-title">Certificaciones</h1>
                <p className="certificaciones-description dark">
                    Estos son algunos de los documentos que certifican el aprendizaje en diferentes tecnologias.
                </p>

                <div className="certificaciones-grid">
                    <div className="certificaciones-card desarrolloWeb">
                        <div className="certificaciones-overlay">
                            <h2 className="certificaciones-title-card">Desarrollo Web</h2>
                            <a
                                href="https://www.coderhouse.com/ar/certificados/65041af40367829a9e3d2ec1?lang=es" /* Reemplaza esta URL con la URL de tu certificado */
                                className="certificaciones-subtitle"
                                target="_blank" /* Opcional: abre el enlace en una nueva pestaña */
                                rel="noopener noreferrer" /* Opcional: mejora la seguridad al abrir en una nueva pestaña */
                            >
                                Link Web
                            </a>
                        </div>
                    </div>
                    <div className="certificaciones-card carrera">
                        <div className="certificaciones-overlay">
                            <h2 className="certificaciones-title-card">Carrera Desarrollador Frontend</h2>
                            <a
                                href="https://www.coderhouse.com/ar/certificados/660ef6b87b7d66573257b0a0?lang=es" /* Reemplaza esta URL con la URL de tu certificado */
                                className="certificaciones-subtitle"
                                target="_blank" /* Opcional: abre el enlace en una nueva pestaña */
                                rel="noopener noreferrer" /* Opcional: mejora la seguridad al abrir en una nueva pestaña */
                            >
                                Link Web
                            </a>
                        </div>
                    </div>
                    <div className="certificaciones-card javaScript">
                        <div className="certificaciones-overlay">
                            <h2 className="certificaciones-title-card">JavaScript</h2>
                            <a
                                href="https://www.coderhouse.com/ar/certificados/65561e92936e8e3b7caddb37?lang=es" /* Reemplaza esta URL con la URL de tu certificado */
                                className="certificaciones-subtitle"
                                target="_blank" /* Opcional: abre el enlace en una nueva pestaña */
                                rel="noopener noreferrer" /* Opcional: mejora la seguridad al abrir en una nueva pestaña */
                            >
                                Link Web
                            </a>
                        </div>
                    </div>
                    <div className="certificaciones-card reactJs">
                        <div className="certificaciones-overlay">
                            <h2 className="certificaciones-title-card">React Js</h2>
                            <a
                                href="https://www.coderhouse.com/ar/certificados/65b7f37ee692ef19b8cd6098?lang=es"
                                className="certificaciones-subtitle"
                                target="_blank" /* Opcional: abre el enlace en una nueva pestaña */
                                rel="noopener noreferrer" /* Opcional: mejora la seguridad al abrir en una nueva pestaña */
                            >
                                Link Web
                            </a>
                        </div>
                    </div>
                    <div className="certificaciones-card reactNative">
                        <div className="certificaciones-overlay">
                            <h2 className="certificaciones-title-card">React Native</h2>
                            <a
                                href="https://www.coderhouse.com/ar/certificados/660ef6b77b7d6630a857b079?lang=es"
                                className="certificaciones-subtitle"
                                target="_blank" /* Opcional: abre el enlace en una nueva pestaña */
                                rel="noopener noreferrer" /* Opcional: mejora la seguridad al abrir en una nueva pestaña */
                            >
                                Link Web
                            </a>
                        </div>
                    </div>
                    <div className="certificaciones-card python">
                        <div className="certificaciones-overlay">
                            <h2 className="certificaciones-title-card">Python Full-Stack</h2>
                            <a
                                href="https://aulasvirtuales.bue.edu.ar/mod/customcert/view.php?id=579849&downloadown=1"
                                className="certificaciones-subtitle"
                                target="_blank" /* Opcional: abre el enlace en una nueva pestaña */
                                rel="noopener noreferrer" /* Opcional: mejora la seguridad al abrir en una nueva pestaña */
                            >
                                Link Web
                            </a>
                        </div>
                    </div>


                </div>
            </div>
            <div className="tech-section">
                <h3>Tecnologías</h3>
                <div class="tech-icons">
                    <i class="fab fa-python tech-icon"></i>
                    <i class="fab fa-react tech-icon"></i>
                    <i class="fab fa-js-square tech-icon"></i>
                    <i class="fab fa-html5 tech-icon"></i>
                    <i class="fab fa-css3 tech-icon"></i>
                </div>
                <div class="tech-icons">
                    <i class="fab fa-sass tech-icon"></i>
                    <i class="fab fa-node-js tech-icon"></i>
                    <i class="fab fa-git tech-icon"></i>
                    <i class="fab fa-github tech-icon"></i>
                    <i class="fab fa-bootstrap tech-icon"></i>
                </div>


            </div>
        </section>
    );
};

export default Certificaciones2;


