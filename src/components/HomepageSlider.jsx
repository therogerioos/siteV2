import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faAngleLeft, faAngleRight, faDatabase, faS } from '@fortawesome/free-solid-svg-icons';
import { faPython, faWindows, faHtml5, faCss3Alt, faReact, faJava, faRust, faGitAlt, faGithub, faDocker, faJs } from '@fortawesome/free-brands-svg-icons';


function HomepageSlider() {

  const [collection, setCollection] = useState([
    { termo: 'Python', figura: faPython },
    { termo: 'SQL', figura: faDatabase },
    { termo: 'Power BI', figura: faWindows },
    { termo: 'HTML5', figura: faHtml5 },
    { termo: 'CSS3', figura: faCss3Alt },
    { termo: 'Javascript', figura: faJs },
    { termo: 'React', figura: faReact },
    { termo: 'Java', figura: faJava },
    { termo: 'Rust', figura: faRust },
    { termo: 'SpringBoot', figura: faS },
    { termo: 'Git', figura: faGitAlt },
    { termo: 'GitHub', figura: faGithub },
    { termo: 'Docker', figura: faDocker },
    // Adicione mais objetos à coleção conforme necessário
  ]);

  return (
    <div className="def-carousel">
      {collection.map((item, index) => (
        <div className='icon-skill' key={index}>
          <FontAwesomeIcon className='icon-skill-font' icon={item.figura} />
          <a className='icon-skill-text'>{item.termo}</a>
        </div>
      ))}
    </div>
  );
}

export default HomepageSlider;