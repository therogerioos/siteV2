import React, { useState } from 'react';
import '../css/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    // Função para alternar o estado do menu de navegação
    const toggleMenu = () => {
        setIsOpen(!isOpen); // Inverte o valor de isOpen (true -> false, false -> true)
    };

    return (
        <header className="header-menu">
            <div className="name-logo">
                THEROGERIOOS
            </div>
            <div className="hamburger" id="hamburger" onClick={toggleMenu}>
                <FontAwesomeIcon className='icon-hamburger' icon={isOpen ? faTimes : faBars} />
            </div>
            <nav className="nav">
                <ol className="nav-menu">
                    <a className="item" href="/">Página Inicial</a>
                    <a className="item" href="/portfolio">Portfólio</a>
                    <a className="item" href="/tutoriais">Tutoriais</a>
                    <a className="item" href="/curriculo">Currículo</a>
                    <a className="item" href="/about">Sobre mim</a>
                </ol>
            </nav>
            <div className="social-icons-header">
                <a href="https://www.linkedin.com/in/rogeriooliveiradossantos" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://github.com/therogerioos" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="mailto:therogerioos@gmail.com?subject=Fale Conosco&body=Olá, THEROGERIOOS Team" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} /></a>
            </div>
            <ul className={isOpen ? 'option-menu-low show' : 'option-menu-low'} id="nav-links">
                <li><a className="item" href="/">Página Inicial</a></li>
                <li><a className="item" href="/portfolio">Portfólio</a></li>
                <li><a className="item" href="/tutoriais">Tutoriais</a></li>
                <li><a className="item" href="/curriculo">Currículo</a></li>
                <li><a className="item" href="/about">Sobre mim</a></li>
            </ul>
        </header>
    );
}

export default Header;