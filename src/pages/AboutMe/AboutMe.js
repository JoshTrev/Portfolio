import React from "react";
import "./AboutMe.css";

function AboutMe(props) {
    return (
        <>
            <section className="container bg-light border rounded" id="indexContainer1">
                <div id="Header">
                    <h1>About Me</h1>
                </div>
            </section>

            <section className="container bg-light border rounded" id="indexContainer2">

                <section id="section">

                    <div className="col" id="JoshPic-container">
                        <img className="border rounded" id="JoshPic" src={props.aboutMeImg} width="100%" />
                    </div>

                    <div className="col border-top border-bottom" id="Josh-text-container">

                        <div className="col border-bottom aboutbox">
                            <p className="indexText">My name is Josh Trevethan. I'm 22 years old and have recently finished the Penn LPS Full-Time Coding Boot Camp. I live in King of Prussia, Pennsylvania.</p>
                        </div>

                        <div className="col border-top border-bottom aboutbox">
                            <p className="indexText">I'm motivated, friendly, outgoing, and an energetic team player with a hard-working and driven nature.
                        </p>
                        </div>

                        <div className="col border-top aboutbox">
                            <p className="indexText">I'm excited to utilize the many skills I've learned including HTML5, CSS3, JavaScript, JQuery, JSON, AJAX, Express.js, React.js, MongoDB, and Mongoose.js as pieces of the MERN stack.
                        </p>
                        </div>
                    </div>

                </section>

                <br></br>

                <section className="row row-cols-2 align-items-center" id="indexTextSmall">
                    <div className="col">
                        <a href="https://www.linkedin.com/in/joshua-trevethan/" className="indexTextSmall">LinkedIn: Joshua Trevethan</a>
                    </div>
                    <div className="col">
                        <a href="https://github.com/JoshTrev" className="indexTextSmall">GitHub: JoshTrev</a>
                    </div>
                </section>
            </section>

            <br></br>
            <br></br>
        </>
    )
}

export default AboutMe;