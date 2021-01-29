import React from "react";
import "./AboutMe.css";

function AboutMe(props) {
    return (
        <>
            <main className="container bg-light border rounded" id="indexContainer">

                <div id="Header">
                    <h1>About Me</h1>
                </div>

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
                        <p className="indexTextSmall">Email: joshj438t@gmail.com</p>
                    </div>
                    <div className="col">
                        <p className="indexTextSmall">GitHub: https://github.com/JoshTrev</p>
                    </div>
                </section>
            </main>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </>
    )
}

export default AboutMe;