import React from 'react';
import './downloadCV.css';
const DownloadCV = () => {
  return (
    <div className='download-container'>
      <a href="/CV-DiegoBruno.pdf" download>
        <button className="download-cv-btn">
          Descargar CV
          <i class="fa-solid fa-download"></i>
        </button>
      </a>
    </div>
  );
};

export default DownloadCV;
