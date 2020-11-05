import React from "react";
import "./AboutMe.css";

function AboutMe(props) {
    return (
        <>
            <main className="container bg-light border rounded" id="indexContainer">
                <h1>About Me</h1>
                <section className="row row-cols-2 align-items-center">
                    <div className="col">
                        <img className="border rounded" id="JoshPic" src={props.aboutMeImg} width="100%" />
                    </div>
                    <div className="col border-top border-bottom">
                        <p className="indexText">My name is Josh Trevethan. I'm 22 years old and currently learning coding and web development. I live in King of Prussia, Pennsylvania. I've always been interested in coding and finally decided to jump into it and get started a few months back. I'm currently in the process of completing the Penn LPS Coding Boot Camp. Every day I'm excited to keep learning and improving. </p>
                    </div>
                </section>

                <br></br>

                <section className="row row-cols-2 align-items-center">
                    <div className="col">
                        <p className="indexTextSmall">Email: joshj438t@gmail.com</p>
                    </div>
                    <div className="col">
                        <p className="indexTextSmall">GitHub: https://github.com/JoshTrev</p>
                    </div>
                </section>
            </main>
        </>
    )
}

export default AboutMe;