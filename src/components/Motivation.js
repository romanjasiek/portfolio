import React from 'react';

import Aberfoyle from '../img/motivation/aberfoyle.jpeg';
import Bali from '../img/motivation/bali.jpeg';
import FieldsOfTheNephilim from '../img/motivation/fieldsofthenephilim.jpeg';

const Motivation = () => {
    return(
        <>
        <section className="motivation">
        <div className="container">
            <div className="motivation__column-text">
                <h2 className="motivation__text-heading">About <br />Roman Jasiek</h2>
                <p className="motivation__text">Welcome to my portfolio! It looks like a photography portfolio (and in a way it is, since all the photos are taken and edited by me), but at the same time it is also a document of what I have learned so far on my way to become a web developer.</p>
            </div>
            <div className="motivation__column-images">
                <picture>
                    <img className="motivation__image motivation__image--first" src={Aberfoyle} alt="" />
                </picture>
                <picture>
                    <img className="motivation__image motivation__image--second" src={Bali} alt="" />
                </picture>
                <picture>
                    <img className="motivation__image motivation__image--third" src={FieldsOfTheNephilim} alt="" />
                </picture>
            </div>
        </div>
    </section>
    </>
    )
}

export default Motivation;