import React from "react";
import Project from "../../components/Project";
import "./Portfolio.css";

function Portfolio(props) {
    return (
        <>
            <main className="container bg-light border rounded" id="portfolioContainer">
                <h1>Portfolio</h1>
                <section className="row row-cols-2">
                    <Project portfolioImg={props.portfolioImg1} />
                    <Project portfolioImg={props.portfolioImg2} />
                </section>

                <br></br>

                <section className="row row-cols-2">
                    <Project portfolioImg={props.portfolioImg3} />
                    <Project portfolioImg={props.portfolioImg4} />
                </section>

                <br></br>

                <section className="row row-cols-2">
                    <Project portfolioImg={props.portfolioImg5} />
                    <Project portfolioImg={props.portfolioImg6} />
                </section>
            </main>
        </>
    )
}

export default Portfolio;