import React from 'react';
import { useTranslation } from 'react-i18next';
import './languageSwitcher.css';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'es' ? 'en' : 'es';
        i18n.changeLanguage(newLang);
    };

    return (
        <button 
            className="language-switcher" 
            onClick={toggleLanguage}
            aria-label="Cambiar idioma"
        >
            <span className={i18n.language === 'es' ? 'active' : ''}>ES</span>
            <span className="separator">/</span>
            <span className={i18n.language === 'en' ? 'active' : ''}>EN</span>
        </button>
    );
};

export default LanguageSwitcher;
