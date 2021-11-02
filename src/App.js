import React from 'react';
import './styles/app.scss';
import SimpleReactLightbox from "simple-react-lightbox";

import Header from './components/Header';
import Motivation from './components/Motivation';
import Technologies from './components/Technologies';
import MoreTech from './components/MoreTech';
import Story from './components/Story';
import Skills from './components/Skills';
import Gallery from './components/Gallery';
import AboutMe from './components/AboutMe';
import MoreAboutMe from './components/MoreAboutMe';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import Sidenav from './components/Sidenav';

function App() {
  return (
    <div className="App">
      <SimpleReactLightbox>
        <Header />
        <Motivation />
        <Technologies />
        <MoreTech />
        <Story />
        <Skills />
        <Gallery />
        <AboutMe />
        <MoreAboutMe />
        <Projects />
        <Footer />
        <ContactModal />
        <Sidenav />
      </SimpleReactLightbox>
    </div>
  );
}

export default App;
