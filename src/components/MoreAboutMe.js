import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode, faRssSquare, faFileSignature, faCameraRetro, faPenSquare } from '@fortawesome/free-solid-svg-icons';
import { faWordpress } from '@fortawesome/free-brands-svg-icons';
import CurriculumVitae from "../assets/cv/Roman-Jasiek_CV_EN.pdf";

const MoreAboutMe = () => {
    return(
    <>
    <section className="more-about">
    <ul id="services" className="auto-grid">
        <li>
            <h4 className="more-about__heading"><FontAwesomeIcon icon={faFileCode}/>&nbsp;<span>Full Stack Developer</span></h4>
            <p>Frontend to Backend: HTML, CSS, Bootstrap, Javascript, React, Databases, ... you name it. Whatever it takes to get your business online - I'm here for you. PS: I just started this journey as a student at the Digital Career Institute.</p>
        </li>
        <li><h4 className="more-about__heading"><FontAwesomeIcon icon={faWordpress}/>&nbsp;<span>Wordpress Enthusiast</span></h4>
            <p>Creating websites using WordPress is one of my biggest interests. Again and again, I try out different things, start new projects or bring websites of third parties online. Everything I know and can do regarding WordPress, CMS, Online Publishing until today, I taught myself as an autodidact.</p>
        </li>
        <li>
            <h4 className="more-about__heading"><FontAwesomeIcon icon={faRssSquare}/>&nbsp;<span>Blogger</span></h4>
            <p>I started my first blogs back in the late 90s and have worked with many entertainment industry partners since then. My latest blog (again about music) is already in the works. I know how to write and how to meet deadlines. Surely this can be useful for your business as well.</p>
        </li>
        <li>
            <h4 className="more-about__heading"><FontAwesomeIcon icon={faFileSignature}/>&nbsp;<span>Contract Author</span></h4>
            <p>Besides blogging, I can also write texts on behalf of others. Advertorials or biographies - no problem. For example, I wrote the band biography of the Berlin electro-pop band Adam is a Girl on the occasion of their release of "Soldier" (single + video) in 2016, in different lengths for different formats/platforms.</p>
        </li>
        <li>
            <h4 className="more-about__heading"><FontAwesomeIcon icon={faCameraRetro}/>&nbsp;<span>Taking Pictures</span></h4>
            <p>I usually try to illustrate the articles that I publish on my own sites with my own photos. For example, for music reviews I often use concert photos which I took myself and then edited with Photoshop and Lightroom.</p>
        </li>
        <li>
            <h4 className="more-about__heading"><FontAwesomeIcon icon={faPenSquare}/>&nbsp;<span>Image Editing</span></h4>
            <p>I am not a pixel magician in Photoshop, yet my knowledge of Photoshop and Lightroom is good enough to be able to illustrate my projects appropriately.</p>
        </li>
      </ul>
      <div className="download-cv">
          <a className="button" href={CurriculumVitae} download="CurriculumVitae">Download CV</a>
      </div>
</section>
</>
)
};

export default MoreAboutMe;