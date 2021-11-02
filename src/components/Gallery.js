import React from 'react';
import { SRLWrapper } from "simple-react-lightbox";

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
        <SRLWrapper>
        <section className="gallery">
        <div className="gallery__container">
            <h3 className="gallery__heading" id="galleries">Gallery</h3>

            <div className="gallery__list">
                <div className="gallery__list-item gallery__list-item--first">
                    <img className="gallery__list-item-image" src={Agadir} alt="Agadir" />
                </div>
                <div className="gallery__list-item" href="#gallery">
                    <img className="gallery__list-item-image" src={Barcelona} alt="Barcelona" />
                </div>
                <div className="gallery__list-item" href="#gallery">
                    <img className="gallery__list-item-image" src={Chimp} alt="Chimp" />
                </div>
                <div className="gallery__list-item" href="#gallery">
                    <img className="gallery__list-item-image" src={CruiseShips} alt="Cruise Ships" />
                </div>
                <div className="gallery__list-item" href="#gallery">
                    <img className="gallery__list-item-image" src={Lanzarote} alt="Lanzarote" />
                </div>
                <div className="gallery__list-item" href="#gallery">
                    <img className="gallery__list-item-image" src={Oslo} alt="Oslo" />
                </div>
                <div className="gallery__list-item" href="#gallery">
                    <img className="gallery__list-item-image" src={VnvNation} alt="VNV Nation" />
                </div>
                <div className="gallery__list-item">
                    <img className="gallery__list-item-image" src={Agadir2} alt="Agadir" />
                </div>
                <div className="gallery__list-item">
                    <img className="gallery__list-item-image" src={Cannes} alt="Cannes" />
                </div>
                <div className="gallery__list-item">
                    <img className="gallery__list-item-image" src={Corsica} alt="Corsica" />
                </div>
                <div className="gallery__list-item">
                    <img className="gallery__list-item-image" src={Monkeys} alt="Monkeys" />
                </div>
                <div className="gallery__list-item">
                    <img className="gallery__list-item-image" src={Ocean} alt="Ocean" />
                </div>
                <div className="gallery__list-item">
                    <img className="gallery__list-item-image" src={VaticanCity} alt="Vatican City" />
                </div>
                <div className="gallery__list-item gallery__list-item--last">
                    <img className="gallery__list-item-image" src={Wismar} alt="Wismar" />
                </div>
            </div>
        </div>
    </section>
    </SRLWrapper>
    </>
    )
}

export default Gallery;