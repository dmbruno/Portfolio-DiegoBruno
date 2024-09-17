import React from 'react';
import './MainContent.css'; // Importa los estilos específicos
import About from './About';

import Contact from './Contact';
import Carousel from './Carousel';

import Certificaciones2 from './Certificaciones2';


import Home from './Home';



function MainContent() {
  return (
    <main>
      <Home/>
      <About/>
      <Certificaciones2/>
      <Carousel/>
      <Contact/>
    </main>
  );
}

export default MainContent;
