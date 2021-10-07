import React from 'react';

import RJ1 from '../img/about/rj.jpg';
import RJ2 from '../img/about/rj2.jpg';
import RJ3 from '../img/about/rj3.jpg';
import RJ4 from '../img/about/rj4.jpg';

const AboutMe = () => {
    return (
        <>
    <section className="about" id="aboutme">
        <div className="container">
            <div className="about__slideshow">
                <img className="about__img" src={RJ1} alt="Roman Jasiek" />
                <img className="about__img about__img--slideshow about__img--slideshow-1" src={RJ2} alt="Roman Jasiek" />
                <img className="about__img about__img--slideshow about__img--slideshow-2" src={RJ3} alt="Roman Jasiek" />
                <img className="about__img about__img--slideshow about__img--slideshow-3" src={RJ4} alt="Roman Jasiek" />
            </div>
            <div className="about__text">
                <h3 className="about__heading">About Me</h3>
                <p className="about__paragraph">Every story has a beginning. Mine began as a bookseller, back in the late 1990s. In the years up to now, I've done many jobs, worked in many different companies and industries.</p>
                <p className="about__paragraph">Most recently, I was self-employed as a kind of insurance agent. Then Corona came along. And I had to reorient myself. I decided to turn a hobby into a profession and started retraining as a web developer at the Digital Career Institute.</p>
                <blockquote className="about__quote">And here I am now. This site is a testimony of what I learned in that one year. The topics we covered in class. I learned a lot. And I also know that I have much, much more to learn. That's what I'm looking forward to.</blockquote>
            </div>
        </div>
    </section>
        </>
    )
}

export default AboutMe;