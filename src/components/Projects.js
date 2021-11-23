import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHistory } from '@fortawesome/free-solid-svg-icons';

import MusicEvangelists from '../img/projects/musicevangelists.jpg';
import MonochromeReflections from '../img/projects/monochromereflections.jpg';
import Avalost from '../img/projects/avalost.jpg';
import Schottenschulle from '../img/projects/schottenschulle.jpg';
import GuidingLight from '../img/projects/guidinglight.jpg';
import PirpleHomework from '../img/projects/pirplehomework.jpg';
import BasicPortfolio from '../img/projects/basicportfolio.jpg';
import PhotoProject from '../img/projects/photoproject.jpg';
import Portfolio from '../img/projects/portfolio.jpg';
import VagueMusicPlayer from '../img/projects/vaguemusicplayer.jpg';
import ExpanseTracker from '../img/projects/expansetracker.jpg';
import Mahlzeit from '../img/projects/mahlzeit.jpg';
import MernSocialNetworkDeployed from '../img/projects/mernsocialnetworkdeployedapp.jpg';
import MernSocialNetworkServer from '../img/projects/mernsocialnetworkserver.jpg';
import MernSocialNetworkClient from '../img/projects/mernsocialnetworkclient.jpg';

const Projects = () => {
    return(
<div>
  <main className="projects-container">
    <section className="py-5 text-center container">
      <div className="row py-lg-3">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 id="projects">Projects</h1>
          <p className="lead text-muted">This is a little showcase of projects I did either for myself or for others. Some projects are finished, some are designed to be ongoing and some are still work in progress.</p>
        </div>
      </div>
    </section>
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div className="col">
            <div className="card shadow-sm">
              <img className="projects__image projects__image--highlighter" src={MusicEvangelists} alt="Music Evangelists Screenshot" />
              <div className="card-body">
                <p className="card-text"><strong>Music Evangelists</strong>: It is the successor of my previous blog AVALOST. I focus here only on the topic of music (news, reviews, concert reviews etc). I realized it with WordPress including some paid themes and plugins.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="button button--secondary button--small"><a href="https://musicevangelists.com" target="blank" rel="noreferrer">View</a></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
            <img className="projects__image projects__image--highlighter" src={MonochromeReflections} alt="Monochrome Reflections Screenshot" />
              <div className="card-body">
                <p className="card-text"><strong>Monochrome Reflections</strong>: It is my (black and white only) photography portfolio. All pictures taken are by me, all edits done by me. This was also realized with WordPress and some paid themes and plugins.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="button button--secondary button--small"><a href="https://monochromereflections.com" target="blank" rel="noreferrer">View</a></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
            <img className="projects__image projects__image--highlighter" src={Avalost} alt="AVALOST Screenshot" />
              <div className="card-body">
                <p className="card-text"><strong>AVALOST</strong>: I ran this blog from 2013 to 2021. Topics included music, movies, books, video games and travel. AVALOST was also realized with WordPress. Discontinued in May 2021.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="button button--secondary button--small"><a href="https://web.archive.org/web/20201106180236/http://avalost.blog/" target="blank" rel="noreferrer">Wayback Machine: <FontAwesomeIcon icon={faHistory}></FontAwesomeIcon></a></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
            <img className="projects__image projects__image--highlighter" src={Schottenschulle} alt="Schottenschulle Screenshot" />
              <div className="card-body">
                <p className="card-text"><strong>Schottenschulle</strong>: The goal was to replace an old HTML-based website with an easy to manage Wordpress Installation. Tasks included installation, theme customization, a quick introduction in how to use Wordpress, ...</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="button button--secondary button--small"><a href="https://schottenschulle.de" target="blank" rel="noreferrer">View</a></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
            <img className="projects__image projects__image--highlighter" src={GuidingLight} alt="Guiding Light Screenshot" />
              <div className="card-body">
                <p className="card-text"><strong>Guiding Light</strong>: The goal was to replace an old HTML-based website with an easy to manage Wordpress Installation. Tasks included installation, theme customization, a quick introduction in how to use Wordpress, ...</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="button button--secondary button--small"><a href="https://guiding-light.de" target="blank" rel="noreferrer">View</a></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
            <img className="projects__image projects__image--highlighter" src={PirpleHomework} alt="Pirple.com Homework Screenshot" />
              <div className="card-body">
                <p className="card-text"><strong>Pirple.com Homework: Frontpage</strong>: I was tasked with rebuilding the home page of a popular website using only HTML/CSS and decided to go with Apple. This was at the very beginning of my intensive studies @ Digital Career Institute.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="button button--secondary button--small"><a href="https://romanjasiek.github.io/project_frontend/" target="blank" rel="noreferrer">View</a></button>
                    <button type="button" className="button button--secondary button--small"><a href="https://romanjasiek.github.io/project_frontend/" target="blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> Repo</a></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
            <img className="projects__image projects__image--highlighter" src={BasicPortfolio} alt="Basic Portfolio Screenshot" />
              <div className="card-body">
                <p className="card-text"><strong>DCI Project: Basic Portfolio</strong>: A basic HTML/CSS/SCSS/Bootstrap portfolio. This was my project at the end of the HTML/CSS/Bootstrap module of my intensive studies at Digital Career Institute.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                  <button type="button" className="button button--secondary button--small"><a href="https://romanjasiek.github.io/ui-basics-portfolio-project-romanjasiek/" target="blank" rel="noreferrer">View</a></button>
                    <button type="button" className="button button--secondary button--small"><a href="https://github.com/romanjasiek/ui-basics-portfolio-project-romanjasiek" target="blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> Repo</a></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
            <img className="projects__image projects__image--highlighter" src={PhotoProject} alt="Photography / Portfolio Screenshot" />
              <div className="card-body">
                <p className="card-text"><strong>Photography / Portfolio Project</strong>: A very comprehensive HMTL/CSS/SCSS (and a little JavaScript) portfolio. It's based on a Udemy tutorial with a lot of enhancements by me (like Font Awesome or Bootstrap).</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                  <button type="button" className="button button--secondary button--small"><a href="https://romanjasiek.github.io/photo_project/" target="blank" rel="noreferrer">View</a></button>
                    <button type="button" className="button button--secondary button--small"><a href="https://github.com/romanjasiek/photo_project" target="blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> Repo</a></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
            <img className="projects__image projects__image--highlighter" loading="lazy" src={Portfolio} alt="Portfolio Screenshot" />
              <div className="card-body">
                <p className="card-text"><strong className="projects-highlighter">Portfolio</strong>: You're looking at it right now. My most extensive work to date. It's my Photo Project converted into a React App with many extensions and much more content. I put more than 100 hours of work in it so far.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="button button--secondary button--small"><a href="https://github.com/romanjasiek/portfolio" target="blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> Repo</a></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
            <img className="projects__image projects__image--highlighter" loading="lazy" src={ExpanseTracker} alt="Expanse Tracker" />
              <div className="card-body">
                <p className="card-text"><strong>Expanse Tracker</strong>: One of my first contacts with React. A very basic Expanse Tracker app, which is not yet finished. I have decided to showcase it here to document my progress in learning React.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="button button--secondary button--small"><a href="https://github.com/romanjasiek/React-To-Do-App" target="blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> Repo</a></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
            <img className="projects__image projects__image--highlighter" loading="lazy" src={VagueMusicPlayer} alt="Vague Music Player Screenshot" />
              <div className="card-body">
                <p className="card-text"><strong>Vague Music Player / Coding Tunes</strong>: This is a simple Music Player app, containing some relaxing tunes, created in React. This was my project at the end of the React module of my intensive studies at DCI.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="button button--secondary button--small"><a href="https://romanjasiek.github.io/vague-music-player/" target="blank" rel="noreferrer">View</a></button>
                    <button type="button" className="button button--secondary button--small"><a href="https://github.com/romanjasiek/vague-music-player" target="blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> Repo</a></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
            <img className="projects__image projects__image--highlighter" loading="lazy" src={Mahlzeit} alt="Mahlzeit" />
              <div className="card-body">
                <p className="card-text"><strong>Mahlzeit!</strong>: Some kind of Food Order app, created with Create-React-App and Sass. Another small project to understand React better and practice more. Still work in progress.</p>
                <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                    <button type="button" className="button button--secondary button--small"><a href="https://romanjasiek.github.io/food-order/" target="blank" rel="noreferrer">View</a></button>
                    <button type="button" className="button button--secondary button--small"><a href="https://github.com/romanjasiek/food-order" target="blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> Repo</a></button>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
            <img className="projects__image projects__image--highlighter" loading="lazy" src={MernSocialNetworkClient} alt="MERN Social Network Client Screenshot" />
              <div className="card-body">
                <p className="card-text"><strong>MERN Social Network / Client Side</strong>: The client side of a very basic Twitter-/Instagram-like social network, built with MongoDB, Expres, React and Node.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="button button--secondary button--small"><a href="https://github.com/romanjasiek/thesocialnetwork-client" target="blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> Repo</a></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
            <img className="projects__image projects__image--highlighter" loading="lazy" src={MernSocialNetworkServer} alt="MERN Social Network Server Screenshot" />
              <div className="card-body">
                <p className="card-text"><strong>MERN Social Network / Server Side</strong>: The server side of a very basic Twitter-/Instagram-like social network, built with MongoDB, Expres, React and Node.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="button button--secondary button--small"><a href="https://github.com/romanjasiek/thesocialnetwork-server" target="blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> Repo</a></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
            <img className="projects__image projects__image--highlighter" loading="lazy" src={MernSocialNetworkDeployed} alt="Deployed MERN Social Network Screenshot" />
              <div className="card-body">
                <p className="card-text"><strong>MERN Social Network / Deployed App</strong>: Server side and client side deployed on a Droplet on Digital Ocean. Registering is disabled, because this is not really intended to be used at the moment.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="button button--secondary button--small"><a href="http://178.128.202.104/" target="blank" rel="noreferrer">View</a></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main></div>
    )
}

export default Projects;