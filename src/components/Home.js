import React from 'react';
import { Link } from 'react-scroll';
import './home.css';

const Home = () => {
    return (
        <div className='container-home' id='home'>
            <div className='container-datos'>
                <h1 className='nombre'>Diego M. Bruno.</h1>
                <p className='profesion'>Frontend <span className='developer'>Dev</span>eloper.</p>

            </div>
            <div className='container-links'>
                <Link className='about' to="about" smooth={true} duration={500}>
                    <h1 >ABOUT</h1>
                </Link>
                <Link className='services' to="carousel" smooth={true} duration={500}>
                    <h1 >WORKS</h1>
                </Link>
                <Link className='contacto' to="contact" smooth={true} duration={500}>
                    <h1 >CONTACT</h1>
                </Link>
                <Link className='info' to="info" smooth={true} duration={500}>
                    <h1 >INFO.</h1>
                </Link>
            </div>
        </div>
    );
};

export default Home;

