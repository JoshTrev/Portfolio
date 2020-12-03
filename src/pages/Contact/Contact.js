import React from "react";
import "./Contact.css";

function Contact(props) {
    return (
        <>
            <main className={props.dropDownActive === "Active" ? "DropDownActiveContact container bg-light border rounded container1" : "DropDownNotActiveContact container bg-light border rounded container1"} id="contactContainer">

                <form>

                    <div id="Header2">
                        <h1>Contact</h1>
                    </div>

                    <section className="form-group">
                        <label htmlFor="exampleFormControlInput1">Name</label>
                        <input type="text" className="form-control" placeholder="Name" />
                    </section>

                    <section className="form-group">
                        <label htmlFor="exampleFormControlInput1">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email" />
                    </section>

                    <section className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Message"
                            rows="3"></textarea>
                    </section>

                    <button type="button" id="submitButton">Submit</button>

                </form>

            </main>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </>
    )
}

export default Contact;