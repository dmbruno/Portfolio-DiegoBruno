import React, { useState } from 'react';
import './experience.css';

const Experience = () => {
    // Estado para manejar la experiencia seleccionada
    const [selectedExperience, setSelectedExperience] = useState('experience1');

    // Información de las experiencias laborales
    const experiences = {
        experience1: {
            title: 'Centro De Contactos Salta S.A',
            description: 'Lideré equipos de hasta 30 personas en la atención telefónica para clientes como Movistar y Telefónica. Guié al equipo para cumplir con métricas clave, incluyendo calidad de atención, tiempos de resolución y eficiencia operativa, siguiendo las directrices del cliente. Mi enfoque en la supervisión directa contribuyó a mantener altos estándares de servicio y un rendimiento sobresaliente.'
        },

        experience2: {
            title: 'Telecom Personal S.A',
            description: 'Como supervisor de la oficina comercial, gestioné eficientemente los tiempos de espera y la atención al cliente en diversas colas de servicio. Atendí casos especiales, asegurando una experiencia fluida para usuarios finales y corporativos. Lideré un equipo de 30 personas, trabajando en conjunto para alcanzar métricas clave de calidad y gestión, impulsando la satisfacción y fidelización en un entorno dinámico.'
        },

        experience3: {
            title: 'Propietario de Bar',
            description: 'Propietario y gerente de un bar durante más de 3 años, liderando un equipo de 4 personas. Gestioné de manera integral el negocio, incluyendo la administración de cuentas con proveedores y clientes, control de stock, compras, liquidación de sueldos e impuestos. Desarrollé sólidas habilidades organizativas y de gestión, destacándome por la capacidad de tomar decisiones bajo presión y asegurar el funcionamiento eficiente del negocio.'
        },

        experience4: {
            title: 'Comerciante Independiente',
            description: 'Propietario y gerente de un lubricentro durante más de 6 años, especializado en mantenimiento ligero de vehículos. Gestioné cuentas con proveedores y clientes, incluyendo corporativos, además de listas de precios, control de stock, y liquidación de sueldos e impuestos. Desarrollé habilidades clave en administración, logística y atención al cliente.'
        },

        experience5: {
            title: 'Programador en Bellify.io',
            description: 'Fui contratado para desarrollar un producto utilizando FlutterFlow, una tecnología con la que no tenía experiencia previa. A través de investigación autodidacta y aprendizaje rápido, logré dominar la herramienta y cumplir con éxito los requisitos del proyecto. Mi capacidad para adaptarme a nuevas tecnologías y superar obstáculos técnicos fue clave para el desarrollo exitoso.'
        },
    };

    // Función para cambiar la experiencia seleccionada
    const handleExperienceClick = (experienceKey) => {
        setSelectedExperience(experienceKey);
    };

    return (
        <div className='container-principal'>
            <h3>Experiencias previas...</h3>
            <div className="experience-container">
                <div className="sidebar">
                    {Object.keys(experiences).map((experienceKey) => (
                        <button
                            key={experienceKey}
                            className={`sidebar-item ${selectedExperience === experienceKey ? 'active' : ''}`}
                            onClick={() => handleExperienceClick(experienceKey)}
                        >
                            {experiences[experienceKey].title}
                        </button>
                    ))}
                </div>

                <div className="content-area">
                    <h2>{experiences[selectedExperience].title}</h2>
                    <p>{experiences[selectedExperience].description}</p>
                </div>
            </div>
        </div>
    );
};

export default Experience;
