import React from "react";
import "./Header.css";

function Header(props) {
    return (
        <>
            <h1>{props.content}</h1>
        </>
    );
}

export default Header;