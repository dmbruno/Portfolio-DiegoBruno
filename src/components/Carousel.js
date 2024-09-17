import React from 'react';
import './carousel.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import fondoUbm from '../assets/images/fondoUbm4.jpg'
import fondoAqua from '../assets/images/fondoAqua.jpg'
import menuInteractivo from '../assets/images/fondoMenuInteractivo.jpg'
import fonfoGrizzly from '../assets/images/fondoGrizzly.jpg'
import github from '../assets/images/contribucionesGithub.png'





const Carousel = () => {
    return (
        <div id='carousel' className='container-fluid'>
            <div className='container'>
                <div>
                    <p className="primerTextoTitulo">
                        WORKS.
                    </p>

                </div>
                <div id="carouselExampleCaptions" className="carousel slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={fondoUbm} className="d-block w-100" alt="Foto para ubm" />
                            <div className="carousel-caption ubm d-none d-md-block">
                                <h5>UBM - Viajes y Turismo</h5>
                                <p>App Web para la carga de datos de pasajeros.</p>
                                <a
                                    href="https://github.com/dmbruno/ubmtool"
                                    className="btn btn-outline-info btn-sm mt-2"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Mira el repo en Github
                                </a>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={fondoAqua} className="d-block w-100" alt="..." />
                            <div className="carousel-caption aqua d-none d-md-block">
                                <h5>Aqua s.a.s</h5>
                                <p>App Web para el calculo de presupuestos rapido y facil.</p>
                                <a
                                    href="https://github.com/dmbruno/AQUA"
                                    className="btn btn-outline-info btn-sm mt-2"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Mira el repo en Github
                                </a>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={menuInteractivo} className="d-block w-100" alt="..." />
                            <div className="carousel-caption menuInteractivo d-none d-md-block">
                                <h5>Menu Interactivo</h5>
                                <p>Menu Interactivo / carrito de compras para Bar.</p>
                                <a
                                    href="https://github.com/dmbruno/ReactJs-Comision49910-DiegoBruno"
                                    className="btn btn-outline-info btn-sm mt-2"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Mira el repo en Github
                                </a>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={fonfoGrizzly} className="d-block w-100" alt="..." />
                            <div className="carousel-caption grizzly d-none d-md-block">
                                <h5>App Movil para la gestión de pedidos</h5>
                                <p>Menu interactivo para eliminar la espera en los Bares y Cafe.</p>
                                <a
                                    href="https://github.com/dmbruno/ReactNative-DiegoBruno"
                                    className="btn btn-outline-info btn-sm mt-2"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Mira el repo en Github
                                </a>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div className="projects-image text-right" style={{ fontFamily: 'montserrat' }}>
                    <p className="segundoTexto">
                        Contribuciones en Github ...
                    </p>
                    <div className='githubImage'>
                        <img src={github} alt='Contribuciones Github'></img>
                    </div>
                    <div className="text-center mt-6 link">
                        <a
                            href="https://github.com/dmbruno"
                            className="text-blue-500 hover:underline text-lg font-medium"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            ¡Visita mi perfil completo en GitHub!
                        </a>
                    </div>
                    <div className='despedida'>
                        <p className="despedida">
                            ¡Pronto habra mas para ver...!
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Carousel;
