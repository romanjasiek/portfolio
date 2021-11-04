import React from 'react';

const ContactModal = () => {

    return(
        <>
            <section className="contact-modal" id="contact-modal">
        <div className="contact-modal__content">
            <a className="contact-modal__close" href="#">x</a>
            <h3 className="contact-modal__heading">Get In Touch</h3>
            <form className="form" action="https://usebasin.com/f/64b9747ac831" method="POST">
                <div className="form__horizontal">
                <div className="form__group">
                    <input type="text" name="name" className="form__input" id="contact-modal-name" placeholder="Name" autoComplete="new-password" />
                    <label className="form__label" htmlFor="contact-modal-name">Name</label>
                </div>
                <div className="form__group">
                    <input type="email" name="email" className="form__input" id="contact-modal-email" placeholder="E-Mail" autoComplete="new-password" />
                    <label className="form__label" htmlFor="contact-modal-email">E-Mail</label>
                </div>
                <div className="form__group">
                    <textarea name="message" className="form__textarea" id="contact-modal-message" placeholder="Message"></textarea>
                    <label className="form__label" htmlFor="contact-modal-message">Message</label>
                </div>
                </div>
                <p className="contact-modal__paragraph">Topic:</p>
                <div className="form__radio-group">
                    <div className="form__radio-item form__radio-item--white">
                        <input name="joboffer" className="form__radio-item-radio" type="radio" value="joboffer" id="booking-modal-type-joboffer" />
                        <label className="form__radio-item-label" htmlFor="booking-modal-type-joboffer">I have a Internship/Job Offer</label>
                    </div>
                    <div className="form__radio-item form__radio-item--white">
                        <input name="generalinquiry" className="form__radio-item-radio" type="radio" value="generalinquiry" id="booking-modal-type-generalinquiry" />
                        <label className="form__radio-item-label" htmlFor="booking-modal-type-generalinquiry">I have a General Inquiry</label>
                    </div>
                </div>

                <div className="contact-modal__submit-container">
                    <input type="submit" className="button button--form" value="Send!" />
                </div>
            </form>
            <p className="contact-modal__notice">Please note: Since this website is hosted on GitHub Pages, I'm using <a className="contact-modal__notice-link" href="https://usebasin.com" target="blank" rel="noreferrer">Basin</a> to receive mails. You can also contact me via <a className="contact-modal__notice-link" href="https://github.com/romanjasiek" target="_blank" rel="noreferrer">GitHub</a> or via <a className="contact-modal__notice-link" href="#getintouch">e-mail</a>.</p>
        </div>
    </section>
        </>
    )
}

function contactModalFixClose() {
    const elements = document.querySelectorAll(".contact-modal__close");
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

export default ContactModal;