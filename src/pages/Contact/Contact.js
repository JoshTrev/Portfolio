import React, { useState } from "react";
import emailjs from 'emailjs-com';
import "./Contact.css";

function Contact(props) {
    const [isEmailSent, setIsEmailSent] = useState({
        emailSent: "NotSent"
    });

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_lva146m', 'template_rsrpvsg', e.target, 'user_Ds9A3AbORSpz9ffZS6Tua')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();

        setIsEmailSent({ emailSent: "Sent" });
    }

    return (
        <>
            <section className="gridContainer" id="headerItem">
                <div className="item rounded bg-light border" >
                    <h1>Contact Me</h1>
                </div>
            </section>

            <form onSubmit={sendEmail} >
                <section className="container bg-light border rounded container1" id="contactContainer2">

                    <section className={isEmailSent.emailSent === "Sent" ? "Sent form-group" : "NotSent form-group"} >
                        <label htmlFor="exampleFormControlInput1">Name</label>
                        <input type="text" className="form-control" placeholder="Name" name="name" />
                    </section>

                    <section className={isEmailSent.emailSent === "Sent" ? "Sent form-group" : "NotSent form-group"} >
                        <label htmlFor="exampleFormControlInput1">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email" name="email" />
                    </section>

                    <section className={isEmailSent.emailSent === "Sent" ? "Sent form-group" : "NotSent form-group"} >
                        <label htmlFor="exampleFormControlTextarea1">Message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Message" rows="3" name="message" ></textarea>
                    </section>

                    <button type="submit" id="submitButton" className={isEmailSent.emailSent === "Sent" ? "Sent" : "NotSent"} >Submit</button>

                    <section className={isEmailSent.emailSent === "Sent" ? "NotSent form-group" : "Sent form-group"} >
                        <p id="thankYouMessage" className="rounded">Thank you for your submission!</p>
                    </section>
                </section>
            </form>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

        </>
    )
}

export default Contact;