import React from 'react';
import { useTranslation } from 'react-i18next';
import './MainContent.css';

import About from './About';
import Contact from './Contact';
import Carousel from './Carousel';
import Certificaciones2 from './Certificaciones2';
import Home from './Home';

const COMPONENTS = {
  home: Home,
  about: About,
  certificaciones: Certificaciones2,
  carousel: Carousel,
  contact: Contact,
};

function MainContent({ activeTab, onSelectFile }) {
  const { t } = useTranslation();

  if (!activeTab || !COMPONENTS[activeTab]) {
    return (
      <main className="editor-empty">
        <div className="editor-empty-inner">
          <span className="editor-empty-icon">&lt;/&gt;</span>
          <p className="editor-empty-text">{t('editor.emptyTitle')}</p>
          <p className="editor-empty-hint">{t('editor.emptyHint')}</p>
        </div>
      </main>
    );
  }

  if (activeTab === 'home') {
    return (
      <main>
        <Home onSelectFile={onSelectFile} />
      </main>
    );
  }

  const ActiveComponent = COMPONENTS[activeTab];

  return (
    <main>
      <ActiveComponent />
    </main>
  );
}

export default MainContent;
