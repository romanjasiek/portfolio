import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode, faFeatherAlt } from '@fortawesome/free-solid-svg-icons';
import { faWordpress } from '@fortawesome/free-brands-svg-icons';

import Skill1 from '../img/skills/skill_card1.jpeg';
import Skill2 from '../img/skills/skill_card2.jpeg';
import Skill3 from '../img/skills/skill_card3.jpeg';

const Skills = () => {
    return(
        <>
        <section className="skills">
        <div className="container">
        <div className="skills__container">
            <div className="skills__card-container skills__card-container--flip">
                <div className="skills__card">
                <div className="skills__card-primary">
                <div className="skills__image-container">
                    <img className="skills__image" src={Skill1} alt="Nyhavn in Denmark" />
                </div>
                <div className="skills__content">
                    <h4 className="skills__content-heading"><FontAwesomeIcon icon={faFileCode}/> Web Dev</h4>
                    <p className="skills__content-subheading">My journey has just begun. Bootstrap, CSS, JS, React - so many destinations. Travel with me?</p>
                    <div className="skills__content-info">
                        <div className="skills__content-skill1">
                            <span><strong>Full Stack</strong></span>
                        </div>
                        <div className="skills__content-skill2">
                            <span>Still Learning</span>
                        </div>
                    </div>
                </div>
                <div className="skills__content-skill3-container">
                    <span>Motivation Level:</span>
                    <strong className="skills__content-skill3-highlighter">101%</strong>
                </div>
                </div>
                <div className="skills__card-hover">
                    <a href="#contact-modal" className="button button--slim button--secondary">Contact Me</a>
                </div>
                </div>
            </div>
            <div className="skills__card-container skills__card-container--3d">
                <div className="skills__card">
                <div className="skills__card-primary">
                <div className="skills__image-container">
                    <img className="skills__image" src={Skill2} alt="The Elbphilharmony in Hamburg" />
                </div>
                <div className="skills__content">
                    <h4 className="skills__content-heading"><FontAwesomeIcon icon={faWordpress}/> Word Press</h4>
                    <p className="skills__content-subheading">I know how to install and run it. Creating content, installing plugins and themes - I got you covered.</p>
                    <div className="skills__content-info">
                        <div className="skills__content-skill1">
                            <span><strong>User</strong></span>
                        </div>
                        <div className="skills__content-skill2">
                            <span>Administrator</span>
                        </div>
                    </div>
                </div>
                <div className="skills__content-skill3-container">
                    <span>Experience Level:</span>
                    <strong className="skills__content-skill3-highlighter">Mid-level</strong>
                </div>
                </div>
                <div className="skills__card-hover">
                    <a href="#contact-modal" className="button button--slim button--secondary">Contact Me</a>
                </div>
                </div>
            </div>
            <div className="skills__card-container skills__card-container--3d-hover">
                <div className="skills__card">
                <div className="skills__card-primary">
                <div className="skills__image-container">
                    <img className="skills__image" src={Skill3} alt="Tomorrow comes today" />
                </div>
                <div className="skills__content">
                    <h4 className="skills__content-heading"><FontAwesomeIcon icon={faFeatherAlt}/> Writer</h4>
                    <p className="skills__content-subheading">I have written thousands of articles since 1998. I know how to write - and how to deliver in time.</p>
                    <div className="skills__content-info">
                        <div className="skills__content-skill1">
                            <span><strong>Blogger</strong></span>
                        </div>
                        <div className="skills__content-skill2">
                            <span>Contract Author</span>
                        </div>
                    </div>
                </div>
                <div className="skills__content-skill3-container">
                    <span>Experience since:</span>
                    <strong className="skills__content-skill3-highlighter">1998</strong>
                </div>
                </div>
                <div className="skills__card-hover">
                    <a href="#contact-modal" className="button button--slim button--secondary">Contact Me</a>
                </div>
                </div>
            </div>
        </div>
        </div>
    </section>
    </>
    )
}

function addMousePositionToCss() {
    const elements = document.querySelectorAll(".skills__card-container");
    for(const element of elements) {
        element.addEventListener("mousemove", function(e) {
            var rect = element.getBoundingClientRect();
            var x = e.clientX - rect.left; 
            var y = e.clientY - rect.top;
            element.style = "--mouse-x:" + (x / element.offsetWidth) + ";--mouse-y:" + (y / element.offsetHeight) + ";";
        });
        element.addEventListener("mouseleave", function(e) {
            element.style = "";
        });
    }
}

if (document.readyState === "complete" || document.readyState === "interactive") {
    setTimeout(addMousePositionToCss, 1);
} else {
    document.addEventListener("DOMContentLoaded", addMousePositionToCss, false);
}

export default Skills;