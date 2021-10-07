import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faImages, faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import { faApple, faSlack, faSpotify, faStackOverflow, faWindows } from '@fortawesome/free-brands-svg-icons';

const MoreTech = () => {
    return(
        <>
            <section className="more-tech">
        <div className="container px-4 py-5" id="icon-grid">
            <h2 className="pb-2 border-bottom more-tech__heading">More Tools</h2>
        
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
              <div className="col d-flex align-items-start">
              <FontAwesomeIcon icon={faApple}/>&nbsp;
                <div>
                  <h4 className="fw-bold mb-0">MacOS Big Sur</h4>
                  <p>This whole page was created on an Apple MacBook. No additional hardware.</p>
                </div>
              </div>
              <div className="col d-flex align-items-start">
              <FontAwesomeIcon icon={faWindows}/>&nbsp;
                <div>
                  <h4 className="fw-bold mb-0">Visual Studio Code</h4>
                  <p>Monochrome Reflections was coded using Microsoft's Visual Studio Code with some extensions.</p>
                </div>
              </div>
              <div className="col d-flex align-items-start">
              <FontAwesomeIcon icon={faImage}/>&nbsp;
                <div>
                  <h4 className="fw-bold mb-0">Adobe Photoshop 2021</h4>
                  <p>Was used, for example, to mask/crop the photo of Bali for the background.</p>
                </div>
              </div>
              <div className="col d-flex align-items-start">
              <FontAwesomeIcon icon={faCameraRetro}/>&nbsp;
                <div>
                  <h4 className="fw-bold mb-0">Adobe Lightroom</h4>
                  <p>General image editing was done with Adobe Lightroom.</p>
                </div>
              </div>
              <div className="col d-flex align-items-start">
              <FontAwesomeIcon icon={faImages}/>&nbsp;
                <div>
                  <h4 className="fw-bold mb-0">Sony Alpha 7</h4>
                  <p>Every picture on this website was taken by myself, mostly with a Sony Alpha 7 DSLR camera.</p>
                </div>
              </div>
              <div className="col d-flex align-items-start">
              <FontAwesomeIcon icon={faSlack}/>&nbsp;
                <div>
                  <h4 className="fw-bold mb-0">Slack</h4>
                  <p>While this site is basically based on an <a className="more-tech__link" href="https://www.udemy.com/course/css-und-sass/" target="_blank" rel="noreferrer">Udemy</a> course, I kept checking back with my instructor and classmates from DCI via Slack during development.</p>
                </div>
              </div>
              <div className="col d-flex align-items-start">
              <FontAwesomeIcon icon={faStackOverflow}/>&nbsp;
                <div>
                  <h4 className="fw-bold mb-0">Stack Overflow</h4>
                  <p>The ultimate resource where every developer sooner or later looks for answers. And so did I.</p>
                </div>
              </div>
              <div className="col d-flex align-items-start">
              <FontAwesomeIcon icon={faSpotify}/>&nbsp;
                <div>
                  <h4 className="fw-bold mb-0">Spotify</h4>
                  <p>Music is what keeps my engine running and helps me focus. That's why I used Spotify a lot.</p>
                </div>
              </div>
            </div>
          </div>
    </section>
        </>
    )
}

export default MoreTech;