import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
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
import CreditsModal from './components/Credits';
import Impressum from './components/Impressum';
import Datenschutz from './components/Datenschutz';

function App() {
  return (
    <div className="App">
      <Router>
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
        <Routes>
            <Route path='/' element={<Outlet />} />
            <Route path='datenschutz' element={<Datenschutz />} />
            <Route path='impressum' element={<Impressum />} />
          </Routes>
        <Footer />
        <ContactModal />
        <CreditsModal />
        <Sidenav />
      </SimpleReactLightbox>
      </Router>
    </div>
  );
}

export default App;
