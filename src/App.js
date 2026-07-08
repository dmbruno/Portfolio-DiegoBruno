import { useState, useEffect } from 'react';

import '../src/assets/styles/App.css';
import '../src/assets/styles/index.css';

import MainContent from './components/MainContent.js';
import Footer from './components/Footer.js';

import Header from './components/Header.js'
import Sidebar from './components/Sidebar.js'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openTabs, setOpenTabs] = useState(['home']);
  const [activeTab, setActiveTab] = useState('home');

  // Al cambiar de pestaña, volvemos el scroll al tope. Si no, al venir de una
  // sección larga (ej. Proyectos) y abrir una más corta (ej. Contacto), el
  // scroll quedaba a mitad de página y el header (sticky) se veía "subido"
  // o directamente fuera de vista hasta que el usuario scrolleaba.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const openFile = (id) => {
    setOpenTabs((prev) => (prev.includes(id) ? prev : [...prev, id]));
    setActiveTab(id);
  };

  const closeFile = (id) => {
    setOpenTabs((prev) => {
      const idx = prev.indexOf(id);
      const next = prev.filter((tabId) => tabId !== id);

      if (activeTab === id) {
        if (next.length === 0) {
          setActiveTab(null);
        } else {
          const neighborIndex = Math.min(idx, next.length - 1);
          setActiveTab(next[neighborIndex]);
        }
      }

      return next;
    });
  };

  return (
    <div className="App ide-shell">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        openTabs={openTabs}
        activeTab={activeTab}
        onSelectFile={openFile}
      />
      <div className="ide-main">
        <Header
          sidebarOpen={sidebarOpen}
          onMenuToggle={() => setSidebarOpen((v) => !v)}
          openTabs={openTabs}
          activeTab={activeTab}
          onSelectFile={openFile}
          onCloseFile={closeFile}
        />
        <MainContent activeTab={activeTab} onSelectFile={openFile} />
        <Footer/>
      </div>
    </div>
  );
}

export default App;
