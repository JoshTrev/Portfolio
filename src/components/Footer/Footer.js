import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <>
            <footer className="fixed-bottom">
                <section className="row skinnyBar">

                </section>
                <section className="row row-cols-3 footerTextBlock align-items-center">
                    <div className="col-md-4">

                    </div>
                    <div className="col-md-4 d-flex justify-content-center text-secondary">
                        © 2020 Copyright
                    </div>
                    <div className="col-md-4">

                    </div>
                </section>
            </footer>
        </>
    );
}

export default Footer;