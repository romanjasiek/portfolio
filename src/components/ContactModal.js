import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactModal = () => {

    const [state, handleSubmit] = useForm("xrgrdvvj");
    if (state.succeeded) {
        return <p>Thanks for the message!</p>;
    }

    return(
        <>
            <section className="contact-modal" id="contact-modal">
        <div className="contact-modal__content">
            <a className="contact-modal__close" href="#">x</a>
            <h3 className="contact-modal__heading">Get In Touch</h3>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form__horizontal">
                <div className="form__group">
                    <input type="text" className="form__input" id="contact-modal-name" placeholder="Name" autoComplete="new-password" />
                    <label className="form__label" htmlFor="contact-modal-name">Name</label>
                </div>
                <div className="form__group">
                    <input type="email" className="form__input" id="contact-modal-email" placeholder="E-Mail" autoComplete="new-password" />
                    <ValidationError 
                        prefix="Email" 
                        field="contact-modal-email"
                        errors={state.errors}
                    />
                    <label className="form__label" htmlFor="contact-modal-email">E-Mail</label>
                </div>
                <div className="form__group">
                    <textarea className="form__textarea" id="contact-modal-message" placeholder="Message"></textarea>
                    <ValidationError 
                        prefix="Message" 
                        field="contact-modal-message"
                        errors={state.errors}
                    />
                    <label className="form__label" htmlFor="contact-modal-message">Message</label>
                </div>
                </div>
                <p className="contact-modal__paragraph">Topic:</p>
                <div className="form__radio-group">
                    <div className="form__radio-item form__radio-item--white">
                        <input className="form__radio-item-radio" type="radio" name="type" value="joboffer" id="booking-modal-type-joboffer" />
                        <label className="form__radio-item-label" htmlFor="booking-modal-type-joboffer">I have a Intern/Job Offer</label>
                    </div>
                    <div className="form__radio-item form__radio-item--white">
                        <input className="form__radio-item-radio" type="radio" name="type" value="generalinquiry" id="booking-modal-type-generalinquiry" />
                        <label className="form__radio-item-label" htmlFor="booking-modal-type-generalinquiry">I have a General Inquiry</label>
                    </div>
                </div>

                <div className="contact-modal__submit-container">
                    <input type="submit" className="button button--form" value="Send!" disabled={state.submitting}/>
                </div>
            </form>
            <p className="contact-modal__notice">Please note: Since this website is hosted on GitHub Pages, the only way you can contact me is via <a className="contact-modal__notice-link" href="https://github.com/romanjasiek" target="_blank">GitHub</a> or via <a className="contact-modal__notice-link" href="#getintouch">e-mail</a>.</p>
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