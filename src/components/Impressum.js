import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';

const Impressum = () => {
  return (
    <section className='impressum__container'>
      <h3 className='impressum__heading'>Impressum</h3>
      <h4>Angaben gemäß § 5 TMG:</h4>
      <p>Schottenschulle</p>
      <p>Roman Jasiek</p>
      <p>Schillerstr. 47</p>
      <p>39108 Magdeburg</p>
      <h4>Kontakt</h4>
      <p>Telefon: 0172-4563446</p>
      <p>E-Mail: romanjasiek@me.com</p>
      <div className='impressum__close-link'>
        <Link to='/'>
          <FontAwesomeIcon icon={faTimesCircle} />Impressum schließen
        </Link>
      </div>
    </section>
  );
};

export default Impressum;
