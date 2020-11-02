import React from "react";
import "./Header.css";

function Header(props) {
    return (
        <>
            <h1>{props.content}</h1>
            <button onClick={props.onClick} id="AboutMe">AboutMe</button>
            <button onClick={props.onClick} id="Contact">Contact</button>
            <button onClick={props.onClick} id="Portfolio">Portfolio</button>
        </>
    );
}

export default Header;