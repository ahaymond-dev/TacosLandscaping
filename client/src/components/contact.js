import React from "react";

function Contact() {
    return (
        <div id="contact">
            <h2 className="text-center">CONTACT</h2>
            <div id="contactItem" className="list-group-item">
            <p className="text-center">Reach out to us today and let us know how we can help you!</p>
            <div className="card text-center row">
                <ul className="list-group list-group-flush">
                    <li id="contactItem" className="list-group-item">
                        <h5>
                            PHONE
                        </h5>
                        <a id="contactLink" href="tel:480-233-5632">(480) 233-5632</a>
                    </li>
                    <li id="contactItem" className="list-group-item">
                        <h5>
                            EMAIL
                        </h5>
                        <a id="contactLink" href="mailto:josepepesanchez2014@gmail.com?Subject=Taco's Landscaping" target="_top">josepepesanchez2014@gmail.com</a>
                    </li>
                    <li id="contactItem" className="list-group-item">
                        <h5>
                            FACEBOOK
                        </h5>
                        <a id="contactLink" href="https://www.facebook.com/Tacos-Landscaping-111572150566066/" target="blank">Taco's Landscaping</a>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    );
}

export default Contact;