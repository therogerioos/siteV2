import React, { useState } from 'react';
import '../css/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


function components() {
    const anoAtual = new Date().getFullYear();
    return (
        <footer className="footer-rodape">
            <div className="final-page-bg">
                <h4>Desenvolvido por:</h4>
                <div className="footer-name-logo">THEROGERIOOS</div>
                <h5 className="copy">{anoAtual} @ Todos Direitos Reservados</h5>
            </div>
            <div className="mapa-site">
                <h4 className="home">Página Inicial</h4>
                <h4 className="port">Portfólio</h4>
                <h4 className="tuto">Tutoriais</h4>
                <h4 className="curri">Currículo</h4>
                <h4 className="about">Sobre mim</h4>
            </div>
            <div className="frase">
                "Seja o escritor de sua própria história!!"
            </div>
            <div className="social-icons-footer">
                <a href="https://www.linkedin.com/in/rogeriooliveiradossantos" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://github.com/therogerioos" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="mailto:therogerioos@gmail.com?subject=Fale Conosco&body=Olá, THEROGERIOOS Team" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} /></a>
            </div>
        </footer>
    );
}

export default components;