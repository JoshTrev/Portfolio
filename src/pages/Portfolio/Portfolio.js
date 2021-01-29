import React from "react";
import Project from "../../components/Project";
import "./Portfolio.css";

function Portfolio(props) {
    return (
        <>
            <main className="container bg-light border rounded container2" id="portfolioContainer">

                <div id="Header3">
                    <h1>Portfolio</h1>
                </div>

                <div className="Project border-top border-bottom" id="Project1">
                    <Project
                        portfolioImg={props.portfolioImg1}
                        onClick={props.onClick}
                        imgID="1"
                    />
                </div>

                <div className="Project border-top border-bottom" id="Project2">
                <Project
                    portfolioImg={props.portfolioImg2}
                    onClick={props.onClick}
                    imgID="2"
                />
                </div>

                <div className="Project border-top border-bottom" id="Project3">
                <Project
                    portfolioImg={props.portfolioImg3}
                    onClick={props.onClick}
                    imgID="3"
                />
                </div>

                <div className="Project border-top border-bottom" id="Project4">
                <Project
                    portfolioImg={props.portfolioImg4}
                    onClick={props.onClick}
                    imgID="4"
                />
                </div>

                <div className="Project border-top border-bottom" id="Project5">
                <Project
                    portfolioImg={props.portfolioImg5}
                    onClick={props.onClick}
                    imgID="5"
                />
                </div>

                <div className="Project border-top border-bottom" id="Project6">
                <Project
                    portfolioImg={props.portfolioImg6}
                    onClick={props.onClick}
                    imgID="6"
                />
                </div>

            </main>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </>
    )
}

export default Portfolio;