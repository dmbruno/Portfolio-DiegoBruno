import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';
import 'animate.css'

function Contact() {
    const [statusMessage, setStatusMessage] = useState('');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Envío del formulario usando EmailJS
        emailjs.sendForm('service_m1irnh9', 'template_waum28s', e.target, 'PF66LwYQWu4ejLXcq')
            .then((result) => {
                setStatusMessage('¡Mensaje enviado con éxito! Te responderé pronto.');
            }, (error) => {
                setStatusMessage('Oops! Algo salió mal. Por favor, intenta de nuevo.');
            });

        // Resetea el formulario después de enviarlo
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <div className="contact-info-container">
                    <h3 className='contact-title'>Te dejo mis datos!</h3>
                    <div className='data-container'>
                        <p><i className="fas fa-user"></i> Diego M. Bruno</p>
                        <p><i className="fas fa-map-marker-alt"></i> Salta, Argentina</p>
                        <p><i className="fas fa-phone-alt"></i> Cel +54 9 387 5051112</p>
                        <p><i className="fas fa-envelope"></i> dmbruno61@gmail.com</p>
                    </div>

                    <div className="social-icons-contact">
                        <p><strong>Redes Sociales</strong></p>
                        <div className='icons-container'>
                            <a className="linkedin" href="https://www.linkedin.com/in/diego-martin-bruno/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a className="instagram" href="https://www.instagram.com/hongobr_/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a className="facebook" href="https://www.facebook.com/diego.bruno.758" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a className="github" href="https://github.com/dmbruno" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i>
                            </a>

                        </div>
                    </div>
                </div>
                <div className="contact-form-container">
                    <h2>Enviame un correo!</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Nombre</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Correo Electrónico</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Mensaje</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>


                        <div className='btn-container'>
                            <button type="submit" className='boton'>
                                <span className=''>Enviar</span>
                                <i class="material-icons">send</i>
                            </button>
                        </div>
                    </form>
                    {statusMessage && <p className="status-message">{statusMessage}</p>}
                </div>


            </div>
        </section>
    );
}

export default Contact;
