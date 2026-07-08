import React from 'react';
import { useTranslation } from 'react-i18next';
import './home.css';

const Home = ({ onSelectFile }) => {
    const { t } = useTranslation();

    return (
        <div className='container-home' id='home'>
            <div className='home-content'>
                <p className='home-prompt'><span className='prompt-sign'>$</span> whoami</p>
                <p className='home-greeting'>{t('home.greeting')}</p>
                <h1 className='home-name'>{t('home.name')}</h1>

                <div className='home-code-block'>
                    <div className='code-line'><span className='code-keyword'>const</span> developer = <span className='code-punct'>{'{'}</span></div>
                    <div className='code-line code-indent'>role: <span className='code-string'>"{t('home.code.role')}"</span>,</div>
                    <div className='code-line code-indent'>stack: <span className='code-punct'>{'{'}</span></div>
                    <div className='code-line code-indent-2'>backend: [<span className='code-tag'>"Python"</span>, <span className='code-tag'>"Node.js"</span>, <span className='code-tag'>"Flask"</span>, <span className='code-tag'>"Supabase"</span>],</div>
                    <div className='code-line code-indent-2'>frontend: [<span className='code-tag'>"React"</span>, <span className='code-tag'>"TypeScript"</span>, <span className='code-tag'>"React Native"</span>],</div>
                    <div className='code-line code-indent-2'>databases: [<span className='code-tag'>"PostgreSQL"</span>, <span className='code-tag'>"MySQL"</span>],</div>
                    <div className='code-line code-indent'><span className='code-punct'>{'}'}</span>,</div>
                    <div className='code-line code-indent'>focus: [<span className='code-tag'>"{t('home.code.focus1')}"</span>, <span className='code-tag'>"{t('home.code.focus2')}"</span>],</div>
                    <div className='code-line code-indent'>availableFor: [<span className='code-tag'>"{t('home.code.available1')}"</span>, <span className='code-tag'>"{t('home.code.available2')}"</span>],</div>
                    <div className='code-line'><span className='code-punct'>{'}'}</span></div>
                </div>
                <button type="button" className='home-cta' onClick={() => onSelectFile('carousel')}>
                    <span className='prompt-sign'>&gt;</span> {t('home.cta')}
                </button>
            </div>
        </div>
    );
};

export default Home;
