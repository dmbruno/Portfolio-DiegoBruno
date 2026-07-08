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
            slug: 'saltalabs',
            title: t('experience.saltalabs.title'),
            company: t('experience.saltalabs.company'),
            period: t('experience.saltalabs.period'),
            description: t('experience.saltalabs.description'),
            link: 'https://saltalabs.com/es/'
        },
        freelance: {
            slug: 'freelance',
            title: t('experience.freelance.title'),
            period: t('experience.freelance.period'),
            description: t('experience.freelance.description'),
        },
        experience4: {
            slug: 'telecom',
            title: t('experience.telecom.title'),
            description: t('experience.telecom.description')
        },
        experience5: {
            slug: 'contactos',
            title: t('experience.contactos.title'),
            description: t('experience.contactos.description')
        },
    };

    // Función para cambiar la experiencia seleccionada
    const handleExperienceClick = (experienceKey) => {
        setSelectedExperience(experienceKey);
    };

    const active = experiences[selectedExperience];

    return (
        <div className='container-principal'>
            <h3>{t('experience.title')}</h3>

            <div className="experience-explorer">
                <div className="exp-file-list">
                    <div className="exp-list-prompt">
                        <span className="exp-prompt-sign">$</span> ls -la ./experiencia
                    </div>
                    {Object.keys(experiences).map((experienceKey) => (
                        <button
                            key={experienceKey}
                            className={`exp-row ${selectedExperience === experienceKey ? 'active' : ''}`}
                            onClick={() => handleExperienceClick(experienceKey)}
                        >
                            <i className="fas fa-briefcase exp-row-icon" aria-hidden="true"></i>
                            <span className="exp-row-name">{experiences[experienceKey].title}</span>
                        </button>
                    ))}
                </div>

                <div className="exp-preview">
                    <div className="exp-preview-header">
                        <span className="exp-preview-dot"></span>
                        <span className="exp-preview-dot"></span>
                        <span className="exp-preview-dot active"></span>
                        <span className="exp-preview-filename">{active.slug}.job</span>
                    </div>

                    <div className="exp-preview-body">
                        <div className="exp-field">
                            <span className="exp-field-key">role:</span>{' '}
                            <span className="exp-field-value">"{active.title}"</span>
                        </div>

                        {active.company && (
                            <div className="exp-field">
                                <span className="exp-field-key">company:</span>{' '}
                                <a
                                    href={active.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="exp-field-link"
                                >
                                    "{active.company}" ↗
                                </a>
                            </div>
                        )}

                        {active.period && (
                            <div className="exp-field">
                                <span className="exp-field-key">period:</span>{' '}
                                <span className="exp-field-value">"{active.period}"</span>
                            </div>
                        )}

                        <p className="exp-description">{active.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
