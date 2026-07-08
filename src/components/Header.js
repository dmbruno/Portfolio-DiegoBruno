import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import { getSections } from './Sidebar';
import './Header.css';

function Header({ sidebarOpen, onMenuToggle, openTabs, activeTab, onSelectFile, onCloseFile }) {
  const { i18n } = useTranslation();
  const SECTIONS = getSections(i18n.language);
  const activeFile = SECTIONS.find((s) => s.id === activeTab)?.file || 'sin título';

  const handleClose = (e, id) => {
    e.stopPropagation();
    onCloseFile(id);
  };

  return (
    <div className="header-container">
      <header className="header tab-bar">
        <button
          className={`hamburger-menu ${sidebarOpen ? 'active' : ''}`}
          onClick={onMenuToggle}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className="tab-strip">
          {openTabs.map((id) => {
            const section = SECTIONS.find((s) => s.id === id);
            if (!section) return null;
            const isActive = activeTab === id;

            return (
              <button
                key={id}
                className={`tab-item ${isActive ? 'active' : ''}`}
                onClick={() => onSelectFile(id)}
              >
                <span className="tab-item-name">{section.file}</span>
                <span
                  className="tab-item-close"
                  onClick={(e) => handleClose(e, id)}
                  role="button"
                  aria-label={`Cerrar ${section.file}`}
                >
                  &times;
                </span>
              </button>
            );
          })}
        </div>

        <div className="tab-breadcrumb-mobile">{activeFile}</div>

        <div className="tab-bar-right">
          <LanguageSwitcher />
        </div>
      </header>
    </div>
  );
}

export default Header;
