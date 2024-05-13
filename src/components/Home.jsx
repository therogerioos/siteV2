import React, { useState } from 'react';
import '../css/styles.css'
import avatarSorrindo from '../images/avatar-1.svg'
import HomepageSlider from './HomepageSlider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Home() {
    const [currentPage, setCurrentPage] = useState(1);

    const handleClick = (pageNumber) => {
        console.log(pageNumber);
        setCurrentPage(pageNumber);

        const section = document.getElementById(`section-pages-${pageNumber}`);
        console.log(section)

        if (section) {

            section.scrollIntoView({ behavior: 'smooth' }); // Rolagem suave para a seção
        }
    };
    return (
        <div>
            <aside className="barra-lateral">
                <div className="radio-nav">
                    <form>
                        <input type="radio" className="nav" id="parte1" name="nav" onClick={() => handleClick(1)} />
                        <label htmlFor="parte1"></label><br />
                        <input type="radio" className="nav" id="parte2" name="nav" onClick={() => handleClick(2)} />
                        <label htmlFor="parte2"></label><br />
                        <input type="radio" className="nav" id="parte3" name="nav" onClick={() => handleClick(3)} />
                        <label htmlFor="parte3"></label><br />
                        <input type="radio" className="nav" id="parte4" name="nav" onClick={() => handleClick(4)} />
                        <label htmlFor="parte4"></label><br />
                    </form>
                </div>
            </aside>
            <section className="section-pages-1" id='section-pages-1'>
                <div className="identification">
                    <p className="hi">Olá,</p><br />
                    <p className="name-persona">Eu sou Rogerio Oliveira,</p><br />
                    <p className="ligation-name">mas pode chamar de:</p><br />
                    <p className="nickname">THEROGERIOOS</p>
                </div>
                <div className="quadrado">
                    <div className="conteudo-por-cima">
                        <img src={avatarSorrindo} alt="Avatar Sorrindo" />
                    </div>
                </div>
            </section>
            <section className="section-pages-2" id='section-pages-2'>
                <div className="skill-lang">
                    <h2>Minhas principais habilidades em:</h2>
                    <HomepageSlider />
                </div>
            </section>
            <section className="section-pages-3" id='section-pages-3'>
                <div className="card-group">
                    <div className="rogerioverso">
                        <h2>Veja na Rogerioverso</h2>
                    </div>
                    <div className="card-group-card">
                        <div className="card portfolio">
                            <h2><a className="h2-portfolio" href="#/portfolio">Portfólio</a></h2>
                            <p>Esse é o espaço onde ficará todo o meu talento, habilidades e desenvolvimento profissional. Não pense que estou parado no meio do Rogerioverso, pois, estou vivendo em expansão para o infinito e além!!!</p>
                        </div>
                        <div className="card tutoriais">
                            <h2><a className="h2-tutoriais" href="#/tutoriais">Tutoriais</a></h2>
                            <p>Conhecimento nunca deverá ficar privado, seria muito egoísmo. Por isso, criei essa seção para demonstrar de forma minuciosa diversos tutoriais que ajudarão aos pequenos gafanhotos que estão viajando pela Rogerioverso.</p>
                        </div>
                        <div className="card curriculo">
                            <h2><a className="h2-curriculo" href="#/curriculo">Currículo</a></h2>
                            <p>Nunca deveremos abandonar o tradicional, mas evolução é necessária. Por isso, coloquei o meu currículo em versão web, para que algum mestre Jedi possa me recrutar para seu time.</p>
                        </div>
                        <div className="card redes">
                            <h2><a className="h2-redes">Contato</a></h2>
                            <div className="icon-redes">
                                <a href="mailto:therogerioos@gmail.com?subject=Fale Conosco&body=Olá, THEROGERIOOS Team" rel="noopener noreferrer"><FontAwesomeIcon className='card-redes' icon={faEnvelope} /></a>
                                <a href="https://github.com/therogerioos" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className='card-redes' icon={faGithub} />
                                </a>
                                <a href="https://www.linkedin.com/in/rogeriooliveiradossantos" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className='card-redes' icon={faLinkedin} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-pages-4" id='section-pages-4'>
                <div className="about-resume">
                    <div className="card-about sobre">
                        <h2><a className="h2-sobre" href="#/about">Sobre mim</a></h2>
                        <p>Primeiramente, agradeço pela visita ao Rogerioverso. Eu criei uma aba com detalhamentos sobre quem sou, o que faço, meus planos e minhas áreas de estudo, apresentando um pouco da minha carreira profissional.
                            <br />Portanto, caso não tenha muito tempo para verificar mais detalhes, vou fazer um resumo bem simples.
                            <br />Quando decidi criar meu espaço na internet, quis unir minhas paixões pelos games, filmes de ficção científica e minha outra grande paixão: programar! Descobri essa paixão um pouco tarde, pois sempre acreditei que seria administrador de empresa. No entanto, quando conheci o mundo da programação, foi amor à primeira vista. E aqui estou, desenvolvendo do zero um site do meu jeito, do meu estilo e compreendendo todo o conhecimento que adquiri até a criação desse Rogerioverso. Poderia ser melhor? Sim! Nada é perfeito, sempre há margem para melhoria, mas é um prêmio pessoal conseguir criar algo do zero e entregar a aplicação na web para pessoas como você, que podem ser um "padawan" como eu ou um "mestre Jedi" interessado em conhecer meu trabalho.
                        </p>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default Home;