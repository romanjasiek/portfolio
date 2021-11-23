import React from 'react';

import webMVideo from '../video/loop.webm';
import mp4Video from '../video/loop.mp4';
import ogvVideo from '../video/loop.ogv';

const Story = () => {
    return(
        <section className="story">
        <video className="story__video" loop playsInline autoPlay muted>
            <source type="video/webm" src={webMVideo} />
            <source type="video/mp4" src={mp4Video} />
            <source type="video/ogg" src={ogvVideo} />
        </video>

        <div className="story__video-colorize"></div>

        <div className="story__container">
            <h3 className="story__heading">Additional Infos</h3>
                <div className="story__desc">
                    <p>To be honest: there is still a lot of work to be done here.</p>
                    <p>Some things are still non functional in the way I want them to be, mobile optimization needs to be improvend and so on.</p>
                    <p>But I decided to keep it that way for now.</p>
                    <p>Why?</p>
                    <p>Because I'm still learning. Everything you find what is not perfect right now is something I still need and want to learn more about.</p>
                    <p></p>
                </div>
                <div className="story__contact">
                    <a className="button button--white button--background-blur" href="#contact-modal">Contact Me</a>
                </div>
        </div>
    </section>
    )
}

function checkScroll() {
    const videos = document.querySelectorAll(".story__video");

    for(const video of videos) {
        const boundingRect = video.getBoundingClientRect();
        const visible = (boundingRect.top + boundingRect.height > 0 &&
            boundingRect.top < window.innerHeight);

        if (visible) {
            video.play();
        } else {
            video.pause();
        }
    }
}

checkScroll();
window.addEventListener('load', checkScroll, false);
window.addEventListener('scroll', checkScroll, false);
window.addEventListener('resize', checkScroll, false);

export default Story;