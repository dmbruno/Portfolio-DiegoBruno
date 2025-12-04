import React from 'react';
import { useTranslation } from 'react-i18next';
import './contact.css';

function Contact() {
    const { t } = useTranslation();
    
    const handleEmailClick = () => {
        window.location.href = 'mailto:dmbruno61@gmail.com';
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <p className="contact-overline">{t('contact.overline')}</p>
                <h2 className="contact-title">{t('contact.title')}</h2>
                <p className="contact-description">
                    {t('contact.description')}
                </p>
                <button className="contact-button" onClick={handleEmailClick}>
                    {t('contact.cta')}
                </button>
            </div>
        </section>
    );
}

export default Contact;
