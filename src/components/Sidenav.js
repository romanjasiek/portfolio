import React from 'react';

const Sidenav = () => {
    return(
        <>
        <section className="sidenav">
        <label htmlFor="sidenav__opened" className="sidenav__background"></label>
        <div className="sidenav__container">
            <label htmlFor="sidenav__opened" className="sidenav__close">X</label>
            <nav>
                <ul className="sidenav__nav">
                    <li><a href="#home" className="sidenav__nav-link">Home</a></li>
                    <li><a href="#usedtechnologies" className="sidenav__nav-link">Used Technologies</a></li>
                    <li><a href="#gallery" className="sidenav__nav-link">Reflections</a></li>
                    <li><a href="#aboutme" className="sidenav__nav-link">About Me</a></li>
                    <li><a href="#getintouch" className="sidenav__nav-link">Contact</a></li>
                </ul>
            </nav>
        </div>
    </section>
        </>
    )
}

export default Sidenav;