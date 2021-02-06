import React from "react";
import "./Header.css";

function Header(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
                <a className="navbar-brand JoshLink" href="#">Joshua Trevethan</a>
                <button onClick={props.onClickDropDown} className="navbar-toggler" id="TEST!" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <button onClick={props.onClick} id="AboutMe" className={props.currentPage === "AboutMe" ? "buttonActive" : "buttonNotActive"}>About</button>
                        </li>
                        <li className="nav-item">
                            <button onClick={props.onClick} id="Portfolio" className={props.currentPage === "Portfolio" ? "buttonActive" : "buttonNotActive"}>Portfolio</button>
                        </li>
                        <li className="nav-item">
                            <button onClick={props.onClick} id="Resume" className={props.currentPage === "Resume" ? "buttonActive" : "buttonNotActive"}>Resume</button>
                        </li>
                        <li className="nav-item">
                            <button onClick={props.onClick} id="Contact" className={props.currentPage === "Contact" ? "buttonActive" : "buttonNotActive"}>Contact</button>
                        </li>
                        <div className="underbar"></div>
                    </ul>
                </div>
            </nav>

            <div id="full-dropdown" className={props.dropDownActive === "Active" ? "DropDownActive" : "DropDownNotActive"}>
                <div className="skinnyBar2"></div>

                <div id="dropdown">
                    <button onClick={props.onClick} id="AboutMe2" className={props.currentPage === "AboutMe" ? "buttonActive" : "buttonNotActive"}>
                    About
                    <span></span>
                    </button>

                    <button onClick={props.onClick} id="Portfolio2" className={props.currentPage === "Portfolio" ? "buttonActive" : "buttonNotActive"}>
                    Portfolio
                    <span></span>
                    </button>

                    <button onClick={props.onClick} id="Resume2" className={props.currentPage === "Resume" ? "buttonActive" : "buttonNotActive"}>
                    Resume
                    <span></span>
                    </button>

                    <button onClick={props.onClick} id="Contact2" className={props.currentPage === "Contact" ? "buttonActive" : "buttonNotActive"}>
                    Contact
                    <span></span>
                    </button>
                </div>
            </div>
        </>
    );
}

export default Header;