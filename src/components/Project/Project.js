import React from "react";
import "./Project.css";

function Project(props) {
    return (
        <>
            <div className="col d-flex justify-content-center">
                <img className="border rounded portfolioImg" src={props.portfolioImg} />
            </div>
        </>
    );
}

export default Project;