import React from 'react';

import Agadir from '../img/gallery/agadir.jpeg';
import Barcelona from '../img/gallery/barcelona.jpeg';
import Chimp from '../img/gallery/chimps.jpeg';
import CruiseShips from '../img/gallery/cruiseships.jpeg';
import Lanzarote from '../img/gallery/lanzarote.jpeg';
import Oslo from '../img/gallery/oslo.jpeg';
import VnvNation from '../img/gallery/vnvnation.jpeg';

import Agadir2 from '../img/gallery2/agadir2.jpeg';
import Cannes from '../img/gallery2/cannes.jpeg';
import Corsica from '../img/gallery2/corsica.jpeg';
import Monkeys from '../img/gallery2/monkeys.jpeg';
import Ocean from '../img/gallery2/ocean.jpeg';
import VaticanCity from '../img/gallery2/vaticancity.jpeg';
import Wismar from '../img/gallery2/wismar.jpeg';

const Gallery = () => {
    return(
        <>
        <section className="gallery" id="gallery">
        <div className="gallery__container">
            <h3 className="gallery__heading">Gallery</h3>

            <div className="gallery__list">
                <a className="gallery__list-item gallery__list-item--first" href="#gallery">
                    <img className="gallery__list-item-image" src={Agadir} alt="Agadir" onClick="openModal();currentSlide(1)" />
                </a>
                <a className="gallery__list-item" href="#gallery">
                    <img className="gallery__list-item-image" src={Barcelona} alt="Barcelona" onClick="openModal();currentSlide(2)" />
                </a>
                <a className="gallery__list-item" href="#gallery">
                    <img className="gallery__list-item-image" src={Chimp} alt="Chimp" onClick="openModal();currentSlide(3)" />
                </a>
                <a className="gallery__list-item" href="#gallery">
                    <img className="gallery__list-item-image" src={CruiseShips} alt="Cruise Ships" onClick="openModal();currentSlide(4)" />
                </a>
                <a className="gallery__list-item" href="#gallery">
                    <img className="gallery__list-item-image" src={Lanzarote} alt="Lanzarote" onClick="openModal();currentSlide(5)" />
                </a>
                <a className="gallery__list-item" href="#gallery">
                    <img className="gallery__list-item-image" src={Oslo} alt="Oslo" onClick="openModal();currentSlide(6)" />
                </a>
                <a className="gallery__list-item" href="#gallery">
                    <img className="gallery__list-item-image" src={VnvNation} alt="VNV Nation" onClick="openModal();currentSlide(7)" />
                </a>
            </div>
            <input className="gallery__cb-toggle" id="gallery__cb-toggle" type="checkbox" autoComplete="off" />
            <div className="gallery__more-button-container">
                <label className="button" htmlFor="gallery__cb-toggle">Load More</label>
            </div>
            <div className="gallery__list gallery__list--cb-toggle">
                <a className="gallery__list-item gallery__list-item--last" href="#gallery" onclick="openModal();currentSlide(8)">
                    <span className="gallery__list-item-bg-image" style={{ background: `url(${Agadir2})`, backgroundSize: 'cover' }} />
                </a>
                <a className="gallery__list-item" href="#gallery" onclick="openModal();currentSlide(9)">
                    <span className="gallery__list-item-bg-image" style={{ background: `url(${Cannes})`,backgroundSize: 'cover' }} />
                </a>
                <a className="gallery__list-item" href="#gallery" onclick="openModal();currentSlide(10)">
                    <span className="gallery__list-item-bg-image" style={{ background: `url(${Corsica})`, backgroundSize: 'cover' }} />
                </a>
                <a className="gallery__list-item" href="#gallery" onclick="openModal();currentSlide(11)">
                    <span className="gallery__list-item-bg-image" style={{ background: `url(${Monkeys})`, backgroundSize: 'cover' }} />
                </a>
                <a className="gallery__list-item" href="#gallery" onclick="openModal();currentSlide(12)">
                    <span className="gallery__list-item-bg-image" style={{ background: `url(${Ocean})`, backgroundSize: 'cover' }} />
                </a>
                <a className="gallery__list-item" href="#gallery" onclick="openModal();currentSlide(13)">
                    <span className="gallery__list-item-bg-image" style={{ background: `url(${VaticanCity})`, backgroundSize: 'cover' }} />
                </a>
                <a className="gallery__list-item" href="#gallery    " onclick="openModal();currentSlide(14)">
                    <span className="gallery__list-item-bg-image" style={{ background: `url(${Wismar})`, backgroundSize: 'cover' }} />
                </a>
            </div>
        </div>
    </section>
    </>
    )
}

export default Gallery;