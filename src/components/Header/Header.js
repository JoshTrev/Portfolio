import React from "react";
import "./Header.css";

function Header(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
                <a className="navbar-brand" href="/">Joshua Trevethan</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <button onClick={props.onClick} id="AboutMe" className="buttonActive">About</button>
                        </li>
                        <li className="nav-item">
                            <button onClick={props.onClick} id="Portfolio" className="buttonNotActive">Portfolio</button>
                        </li>
                        <li className="nav-item">
                            <button onClick={props.onClick} id="Contact" className="buttonNotActive">Contact</button>
                        </li>
                    </ul>
                </div>
            </nav>
            <br></br>
            <br></br>
            <br></br>
        </>
    );
}

export default Header;