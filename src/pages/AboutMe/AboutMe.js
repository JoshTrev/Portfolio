import React from "react";
import "./AboutMe.css";

function AboutMe(props) {
    return (
        <>
            <section className="AboutMeGridContainer" id="headerItem">
                <div className="item rounded bg-light border" >
                    <h1>About Me</h1>
                </div>
            </section>

            <section className="AboutMeGridContainer">
                <div>
                    <div className="item rounded imageEffect">
                        <img src={props.aboutMeImg} alt="Picture of Josh" className="JoshImage" />
                    </div>
                </div>

                <div>
                    <p className="aboutMeText bg-light border-top border-bottom item rounded">Hi! My name is Josh Trevethan. I'm a Full Stack Web Developer living in King of Prussia, Pennsylvania.</p>
                    <p className="aboutMeText bg-light border-top border-bottom item rounded">I learn quickly and dedicate myself to my work. My motivation is exemplefied through my completion of the Penn LPS Coding Boot Camp program and by graduating highschool an entire year early.</p>
                    <p className="aboutMeText bg-light border-top border-bottom item rounded">I'm excited to professionally utilize the many skills I've learned throughout my time in the program and have continued to learn and hone after graduating.</p>
                    <p className="aboutMeText bg-light border-top border-bottom item rounded">Feel free to explore the rest of my portfolio to see my resume and some of the projects I have completed!</p>
                </div>
            </section>

            <section className="AboutMeGridContainer">
                <div>
                    <a href="https://www.linkedin.com/in/joshua-trevethan/" className="LinkButton LinkButtonAboutMe item border">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    LinkedIn Profile
                    </a>
                </div>
                <div>
                    <a href="https://github.com/JoshTrev" className="LinkButton LinkButtonAboutMe item border">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    GitHub Profile
                    </a>
                </div>
            </section>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </>
    )
}

export default AboutMe;