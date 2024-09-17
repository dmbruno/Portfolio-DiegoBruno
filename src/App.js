
import '../src/assets/styles/App.css';
import '../src/assets/styles/index.css';

import MainContent from './components/MainContent.js';
import Footer from './components/Footer.js';

import Header from './components/Header.js'

function App() {
  return (
    <div className="App">
      <Header/>
      <MainContent/>
      <Footer/>
    </div>
  );
}

export default App;
