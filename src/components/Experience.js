import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './experience.css';

const Experience = () => {
    const { t } = useTranslation();
    // Estado para manejar la experiencia seleccionada
    const [selectedExperience, setSelectedExperience] = useState('saltalabs');

    // Información de las experiencias laborales
    const experiences = {
        saltalabs: {
            title: t('experience.saltalabs.title'),
            company: t('experience.saltalabs.company'),
            period: t('experience.saltalabs.period'),
            description: t('experience.saltalabs.description'),
            link: 'https://saltalabs.com/es/'
        },
        experience1: {
            title: t('experience.bellify.title'),
            description: t('experience.bellify.description')
        },
        experience2: {
            title: t('experience.comerciante.title'),
            description: t('experience.comerciante.description')
        },
        experience3: {
            title: t('experience.bar.title'),
            description: t('experience.bar.description')
        },
        experience4: {
            title: t('experience.telecom.title'),
            description: t('experience.telecom.description')
        },
        experience5: {
            title: t('experience.contactos.title'),
            description: t('experience.contactos.description')
        },
    };

    // Función para cambiar la experiencia seleccionada
    const handleExperienceClick = (experienceKey) => {
        setSelectedExperience(experienceKey);
    };

    return (
        <div className='container-principal'>
            <h3>{t('experience.title')}</h3>
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
                    <h2>
                        {experiences[selectedExperience].title}
                        {experiences[selectedExperience].company && (
                            <>
                                {' '}
                                <a 
                                    href={experiences[selectedExperience].link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="company-link"
                                >
                                    {experiences[selectedExperience].company}
                                </a>
                            </>
                        )}
                    </h2>
                    {experiences[selectedExperience].period && (
                        <p className="experience-period">{experiences[selectedExperience].period}</p>
                    )}
                    <p>{experiences[selectedExperience].description}</p>
                </div>
            </div>
        </div>
    );
};

export default Experience;
