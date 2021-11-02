import React from "react";
import CurriculumVitae from "../assets/cv/Roman-Jasiek_CV_EN.pdf";

export default function SideNavbarCategories({ isOpen }) {
  return (
    <ul className="SideNavbarCategories" style={{ right: isOpen ? 0 : -1000 }}>
      <li><a className="navigation__list-item-link-sidebar" href="#">Home</a></li>
      <li><a className="navigation__list-item-link-sidebar" href="#usedtechnologies">Used Technologies</a></li>
      <li><a className="navigation__list-item-link-sidebar" href="#gallery">Reflections</a></li>
      <li><a className="navigation__list-item-link-sidebar" href="#aboutme">About Me</a></li>
      <li><a className="navigation__list-item-link-sidebar" href="#projects">Projects</a></li>
      <li><a className="navigation__list-item-link-sidebar" href="#getintouch">Contact</a></li>
      <li><a className="navigation__list-item-link-sidebar" href={CurriculumVitae} download="CurriculumVitae">Download CV</a></li>
    </ul>
  );
}