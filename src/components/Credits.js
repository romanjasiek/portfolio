import React from 'react';

const CreditsModal = () => {

    return(
        <>
        <section className="credits-modal" id="credits-modal">
        <div className="credits-modal__content">
            <a className="credits-modal__close" href="#footer">x</a>
            <h3 className="credits-modal__heading">Credits</h3>
            <p className="credits-modal__paragraph">All Pictures on this Website are taken and edited by Roman Jasiek.</p>
            <p className="credits-modal__paragraph">This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.</p>
            <p className="credits-modal__paragraph">The Video used on this side is from Video von <a href="https://pixabay.com/de/users/osmij-8621397/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=71122">Osmij</a> / <a href="https://pixabay.com/de/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=71122">Pixabay.</a></p>
            <p className="credits-modal__paragraph">The SVG are from <a href="https://freesvg.org">freesvg.org</a>, every other icon/symbol/logo was provided by <a href="https://fontawesome.com">Font Awesome</a>.</p>
            <p className="credits-modal__paragraph">Every third party trademarks (including logos and icons) referenced by me on this Portfolio remain the property of their respective owners. Unless specifically identified as such, my use of a third party trademark does not indicate any relationship, sponsorship, or endorsement between me and the owners of these trademarks. All references by me to third party trademarks are just to identify the corresponding third party goods and/or services and intended to constitute nominative fair use under applicable trademark laws.</p>
        </div>
        </section>
        </>
    )
}

function creditsModalFixClose() {
    const elements = document.querySelectorAll(".credits-modal__close");
    for(const element of elements) {
        element.addEventListener("click", function() {
            const scrollY = window.scrollY;
            const scrollX = window.scrollX;
            setTimeout(function() {
                window.scrollTo({top: scrollY, left: scrollX});
            }, 1);
        });
    }
}

if (document.readyState === "complete" || document.readyState === "interactive") {
    setTimeout(creditsModalFixClose, 1);
} else {
    document.addEventListener("DOMContentLoaded", creditsModalFixClose, false);
}

export default CreditsModal;