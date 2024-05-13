import React, { useState } from 'react';
import '../css/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';



function Curriculo() {
    const meusDados = [
        { id: 1, nomeCompleto: 'Rogerio Oliveira dos Santos', nome: 'Rogerio', Sobrenome: 'Oliveira dos Santos', funcao: 'Developer & Data Analyst', cidade: 'Feira de Santana', uf: 'Bahia', pais: 'Brasil', email: 'therogerioos@gmail.com', telefoneCelular: '75 992055896' }
    ];

    const profileMe = [
        {nome: 'Rogerio', profileDesk: 'Estudante de programação começando a trajetória como Analista de Planejamento em um ambiente de call center. Demonstro proficiência na avaliação e análise de dados, fornecendo suporte a decisões estratégicas. Possuo habilidades sólidas em Excel, VBA e SQL, combinadas com a capacidade de utilizar Python para extrair, transformar e importar dados. Minha experiência se estende à criação de dashboards no Power BI para proporcionar uma visualização eficaz de informações. Tenho habilidades em desenvolvimento web, utilizano o framework React, e desenvolvo aplicações que rodam na máquina, usando Tauri.'}

    ];

    const [collectionSkills, setCollectionSkills] = useState([
        { linguagem: 'Python', nivel: 'Avançado' },
        { linguagem: 'Pandas', nivel: 'Avançado' },
        { linguagem: 'SQL', nivel: 'Avançado' },
        { linguagem: 'HTML, CSS e JS', nivel: 'Avançado' },
        { linguagem: 'JSON', nivel: 'Avançado' },
        { linguagem: 'Tauri js', nivel: 'Avançado' },
        { linguagem: 'Análise de Dados', nivel: 'Avançado' },
        { linguagem: 'React js', nivel: 'Intermediário' },
        { linguagem: 'Power BI', nivel: 'Intermediário' },
        { linguagem: 'Java', nivel: 'Iniciante' },
        { linguagem: 'Spring Boot', nivel: 'Iniciante' },
        { linguagem: 'Docker', nivel: 'Iniciante' },
        { linguagem: 'C## & .NET', nivel: 'Iniciante' },
        { linguagem: 'Rust', nivel: 'Iniciante' },

    ]);

    const [collectionIdiomas, setCollectionIdiomas] = useState([
        { linguagem: 'Portuguese', nivel: 'Avançado' },
        { linguagem: 'English', nivel: 'Iniciante' },
        { linguagem: 'Spanish', nivel: 'Iniciante' },
    ]);

    const [collectionEducation, setCollectionEducation] = useState([
        { education: 'DIO', inicio: 'Forever', fim: '', descricao: 'Maior plataforma aberta de ensino de programação da América Latina, possuindo parcerias com empresas inovadoras do mercado'},
        { education: 'Estacio de Sá', inicio: 'Jan 2022', fim: 'Atual', descricao: 'Nível Superior Tecnólogo: Análise e Desenvolvimento de Sistemas'},
    ]);

    const [collectionJobs, setCollectionJobs] = useState([
        { workFunction: 'Analista de Mailing', empresa: 'Tel Centro de Contatos', jobIn: 'Dez 2021', jobOut: 'Atual', atividade1: 'Avaliação e análise de dados comportamentais dos clientes atendidos no call center, utilizando ferramentas como Excel, VBA, SQL e Python.', atividade2: 'Extração, transformação e importação de dados utilizando Python, garantindo a integridade e qulidade dos dados analisados, usando técnicas de ETL.', atividade3: 'Colaboração com a equipe de gestão na tomada de decisão estratégica com base em diagnósticos obtidos a partir da análise de dados.', atividade4: 'Criação de dashboards no Power BI para visualização dos dados extraídos e levantamento de informação para desenvolvimento de estratégias que aumentem a produtividade operacional.'},

        { workFunction: 'Analista de Planejamento JR', empresa: 'Tel Centro de Contatos', jobIn: 'Jan 2020', jobOut: 'Dez 2021', atividade1: 'Acompanhamento do tempo real, buscando alternativas que garantem a melhor performance do discador.', atividade2: 'Avaliação do arquivo de mailing, verificando integridade dos dados para importação no discador.', atividade3: 'Elaboração de dashboards para envio de reports aos gestores operacionais.', atividade4: 'Análise dos dados gerados e sinalização de possíveis desvios que prejudique o desempenho das métricas.'},

        { workFunction: 'Assistente de Planejamento II', empresa: 'Tel Centro de Contatos', jobIn: 'Jul 2018', jobOut: 'Jan 2020', atividade1: 'Acompanhamento do tempo real, buscando alternativas que garantem a melhor performance do discador.', atividade2: 'Avaliação do arquivo de mailing, verificando integridade dos dados para importação no discador.', atividade3: 'Suporte ao analista de planejamento, entregando informações geradas da base de dados operacionais.', atividade4: ''},

    ]);

    return (
        <section className="section-pages-post">
            <div className="card-post-text">
                <div className="dados-curriculo">
                    <div className="card-curriculo">
                        <div className="lado-esquerdo">
                            <div className="w3-white w3-text-grey w3-card-4">
                                <div className="w3-container">
                                    <h2>{meusDados[0].nomeCompleto}</h2>
                                </div>
                                <div className="nome-curriculo-dados">
                                    <p><FontAwesomeIcon className="icon-themes" icon={faBriefcase} /> {meusDados[0].funcao}</p>
                                    <p><FontAwesomeIcon icon={faHome} /> {meusDados[0].cidade} - {meusDados[0].uf}, {meusDados[0].pais}</p>
                                    <p><FontAwesomeIcon icon={faEnvelope} /> {meusDados[0].email}</p>
                                    <p><FontAwesomeIcon icon={faPhone} /> {meusDados[0].telefoneCelular}</p>
                                    <br />
                                    <h3><FontAwesomeIcon icon={faTrophy} /> Skills</h3>
                                </div>
                                <div className="progresso-skill">
                                    {collectionSkills.map((item, index) => (
                                        <div className="evolution" key={index}>
                                            <p>{item.linguagem} - Nível: {item.nivel}</p>
                                        </div>
                                    ))}
                                </div>
                                <br />
                                <br />
                                <div className="languages-skill">
                                    <h3><FontAwesomeIcon icon={faGlobe} /> Languages</h3>
                                    {collectionIdiomas.map((item, index) => (
                                        <div className="evolution" key={index}>
                                            <p>{item.linguagem} - Nível: {item.nivel}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="lado-direito">
                            <h2><FontAwesomeIcon icon={faUser} /> Profile</h2>
                            <p>{profileMe[0].profileDesk}</p>

                            <h2><FontAwesomeIcon icon={faBriefcase} /> Work Experience</h2>
                            {collectionJobs.map((item, index) => (
                                <div key={index}>
                                    <h3 className="work-function">{item.workFunction} - {item.empresa}</h3>
                                    <h4 className="work-function-date"><FontAwesomeIcon icon={faCalendar} /> {item.jobIn} - <span className="w3-tag w3-teal w3-round">{item.jobOut}</span></h4>
                                    <p>{item.atividade1 ? '-':''} {item.atividade1}</p>
                                    <p>{item.atividade2 ? '-':''} {item.atividade2}</p>
                                    <p>{item.atividade3 ? '-':''} {item.atividade3}</p>
                                    <p>{item.atividade4 ? '-':''} {item.atividade4}</p>
                                </div>
                            ))}

                            <h2><FontAwesomeIcon icon={faUserGraduate} /> Education</h2>
                            {collectionEducation.map((item, index) => (
                                <div key={index}>
                                    <h3 className="work-function">{item.education}</h3>
                                    <h4 className="work-function-date"><FontAwesomeIcon icon={faCalendar} /> {item.inicio}<span className="w3-tag w3-teal w3-round"> {item.fim ? '-': ''} {item.fim}</span></h4>
                                    <p>{item.descricao ? '-':''} {item.descricao}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Curriculo;