import React from "react";
import Project from "../../components/Project";
import "./Portfolio.css";

function Portfolio(props) {
    return (
        <>
            <main className="container bg-light border rounded" id="portfolioContainer">
                <h1>Portfolio</h1>
                <section className="row row-cols-2">
                    <Project 
                    portfolioImg={props.portfolioImg1}
                    onClick={props.onClick}
                    imgID="1"
                    />
                    <Project 
                    portfolioImg={props.portfolioImg2}
                    onClick={props.onClick}
                    imgID="2"
                    />
                </section>

                <br></br>

                <section className="row row-cols-2">
                <Project 
                    portfolioImg={props.portfolioImg3}
                    onClick={props.onClick}
                    imgID="3"
                    />
                    <Project 
                    portfolioImg={props.portfolioImg4}
                    onClick={props.onClick}
                    imgID="4"
                    />
                </section>

                <br></br>

                <section className="row row-cols-2">
                <Project 
                    portfolioImg={props.portfolioImg5}
                    onClick={props.onClick}
                    imgID="5"
                    />
                    <Project 
                    portfolioImg={props.portfolioImg6}
                    onClick={props.onClick}
                    imgID="6"
                    />
                </section>
            </main>
            <div id="blankspace" />
        </>
    )
}

export default Portfolio;