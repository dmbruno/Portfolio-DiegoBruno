import React from 'react';
import { useTranslation } from 'react-i18next';
import './Sidebar.css';

// Todos los nombres de archivo cambian según el idioma, para que el criterio
// sea el mismo en los 5 (antes solo "about" cambiaba y el resto quedaba
// siempre en español, incluso en la versión en inglés).
export const getSections = (lang) => {
  const en = lang === 'en';
  return [
    { id: 'home', file: en ? 'home.tsx' : 'inicio.tsx', navKey: 'nav.home' },
    { id: 'about', file: en ? 'aboutMe.tsx' : 'sobreMi.tsx', navKey: 'nav.about' },
    { id: 'certificaciones', file: en ? 'training.tsx' : 'formacion.tsx', navKey: 'nav.training' },
    { id: 'carousel', file: en ? 'projects.tsx' : 'proyectos.tsx', navKey: 'nav.projects' },
    { id: 'contact', file: en ? 'contact.tsx' : 'contacto.tsx', navKey: 'nav.contact' },
  ];
};

function Sidebar({ isOpen, onClose, openTabs, activeTab, onSelectFile }) {
  const { t, i18n } = useTranslation();
  const SECTIONS = getSections(i18n.language);

  const handleSelect = (id) => {
    onSelectFile(id);
    onClose();
  };

  return (
    <>
      <aside className={`sidebar-explorer ${isOpen ? 'open' : ''}`}>
        <button className="sidebar-wordmark" onClick={() => handleSelect('home')}>
          <span className="wordmark-bracket">&gt;</span>diego.bruno<span className="wordmark-cursor">_</span>
        </button>

        <div className="sidebar-label">explorer</div>

        <ul className="sidebar-tree">
          {SECTIONS.map(({ id, file, navKey }) => {
            const isActive = activeTab === id;
            const isOpenTab = openTabs.includes(id);

            return (
              <li key={id}>
                <button
                  className={`sidebar-file ${isActive ? 'active' : ''}`}
                  onClick={() => handleSelect(id)}
                >
                  <span className="sidebar-file-icon">&lt;/&gt;</span>
                  <span className="sidebar-file-name">{file}</span>
                  {isOpenTab && !isActive && <span className="sidebar-file-dot" aria-hidden="true"></span>}
                  <span className="sidebar-file-label">{t(navKey)}</span>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="sidebar-footer">
          <span className="sidebar-branch"><i className="fas fa-code-branch"></i> main</span>
        </div>
      </aside>
      {isOpen && <div className="sidebar-backdrop" onClick={onClose}></div>}
    </>
  );
}

export default Sidebar;
