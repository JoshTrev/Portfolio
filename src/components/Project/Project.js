import React from "react";
import "./Project.css";

function Project(props) {
    return (
        <>
            <div className="projectImage">
                <img onClick={props.onClick} id={props.imgID} className="border rounded portfolioImg" src={props.portfolioImg} />
            </div>
        </>
    );
}

export default Project;