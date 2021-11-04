import React from 'react';

const ThanksModal = () => {

    return(
        <>
        <section className="thanks-modal" id="thanks-modal">
        <div className="thanks-modal__content">
            <a className="thanks-modal__close" href="#">x</a>
            <h3 className="thanks-modal__heading">Thank you!</h3>
            <p>I have received your message and will get back to you as soon as possible.</p>
        </div>
        </section>
        </>
    )
}

function contactModalFixClose() {
    const elements = document.querySelectorAll(".thanks-modal__close");
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
    setTimeout(contactModalFixClose, 1);
} else {
    document.addEventListener("DOMContentLoaded", contactModalFixClose, false);
}

export default ThanksModal;