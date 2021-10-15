import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3, faGithub, faReact, faBootstrap } from '@fortawesome/free-brands-svg-icons';

import Card1 from '../img/technologies/card1.jpeg';
import Card2 from '../img/technologies/card2.jpeg';
import Card3 from '../img/technologies/card3.jpeg';
import Card4 from '../img/technologies/card4.jpeg';
import Card5 from '../img/technologies/card5.jpeg';

const Technologies = () => {
    return(
        <>
        <section className="technologies" id="usedtechnologies">
        <div className="technologies__container">
        <h2 className="technologies__heading">Used Web Technologies</h2>
        <div className="technologies__cards">
            <div className="technologies__card">
                <img className="technologies__card-image" src={Card1} alt="HTML" />
                <div className="technologies__card-icon-background"></div>
                <div className="technologies__icon-container"><p><FontAwesomeIcon icon={faHtml5} color="#fefefe" size="2x"/></p></div>
                <div className="technologies__card-content">
                    <h5 className="technologies__card-heading">HTML</h5>
                    <p className="technologies__card-used-tech">HTML5&nbsp;<FontAwesomeIcon icon={faCheck}/></p>
                    <p className="technologies__card-used-tech-desc">The very basic framework. Without it, nothing would be here.</p>
                </div>
        </div>
            <div className="technologies__card">
                <img className="technologies__card-image" src={Card2} alt="CSS" />
                <div className="technologies__card-icon-background"></div>
                <div className="technologies__icon-container"><p><FontAwesomeIcon icon={faCss3} color="#fefefe" size="2x"/></p></div>
                <div className="technologies__card-content">
                    <h5 className="technologies__card-heading">CSS</h5>
                    <p className="technologies__card-used-tech">CSS3&nbsp;<FontAwesomeIcon icon={faCheck}/></p>
                    <p className="technologies__card-used-tech-desc">Used Sass/SCSS, Font Awesome and Google Fonts. Locally, of course.</p>
                </div>
            </div>
            <div className="technologies__card">
                <img className="technologies__card-image" src={Card3} alt="HTML" />
                <div className="technologies__card-icon-background"></div>
                <div className="technologies__icon-container"><p><FontAwesomeIcon icon={faGithub} color="#fefefe" size="2x"/></p></div>
                <div className="technologies__card-content">
                    <h5 className="technologies__card-heading">GitHub</h5>
                    <p className="technologies__card-used-tech">GitHub&nbsp;<FontAwesomeIcon icon={faCheck}/></p>
                    <p className="technologies__card-used-tech-desc">Used main and development branches, GitHub CLI, GitHub pages.</p>
                </div>
            </div>
            <div className="technologies__card">
                <img className="technologies__card-image" src={Card4} alt="HTML" />
                <div className="technologies__card-icon-background"></div>
                <div className="technologies__icon-container"><p><FontAwesomeIcon icon={faReact} color="#fefefe" size="2x"/></p></div>
                <div className="technologies__card-content">
                    <h5 className="technologies__card-heading">React</h5>
                    <p className="technologies__card-used-tech">React&nbsp;<FontAwesomeIcon icon={faCheck}/></p>
                    <p className="technologies__card-used-tech-desc">This whole portfolio was built in React.</p>
                </div>
            </div>
            <div className="technologies__card">
                <img className="technologies__card-image" src={Card5} alt="HTML" />
                <div className="technologies__card-icon-background"></div>
                <div className="technologies__icon-container"><p><FontAwesomeIcon icon={faBootstrap} color="#fefefe" size="2x"/></p></div>
                <div className="technologies__card-content">
                    <h5 className="technologies__card-heading">Bootstrap</h5>
                    <p className="technologies__card-used-tech">Bootstrap&nbsp;<FontAwesomeIcon icon={faCheck}/></p>
                    <p className="technologies__card-used-tech-desc">Some Bootstrap 5 elements included. Locally, of course.</p>
                </div>
            </div>
        </div>
        </div>
    </section>
        </>
    )
}

export default Technologies;