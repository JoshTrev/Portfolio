import React from "react";
import "./Contact.css";

function Contact() {
    return (
        <>
            <main className="container bg-light border rounded" id="contactContainer">
                <form>
                    <h1>Contact</h1>
                    <section className="form-group">
                        <label for="exampleFormControlInput1">Name</label>
                        <input type="text" className="form-control" placeholder="Name" />
                    </section>
                    <section className="form-group">
                        <label for="exampleFormControlInput1">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email" />
                    </section>
                    <section className="form-group">
                        <label for="exampleFormControlTextarea1">Message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Message"
                            rows="3"></textarea>
                    </section>
                    <button type="button" id="submitButton">Submit</button>
                </form>
            </main>
        </>
    )
}

export default Contact;