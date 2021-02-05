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
                    <p className="aboutMeText bg-light border-top border-bottom item rounded">My name is Josh Trevethan. I'm 22 years old and have recently finished the Penn LPS Full-Time Coding Boot Camp. I live in King of Prussia, Pennsylvania.</p>
                    <p className="aboutMeText bg-light border-top border-bottom item rounded">I'm motivated, friendly, outgoing, and an energetic team player with a hard-working and driven nature.</p>
                    <p className="aboutMeText bg-light border-top border-bottom item rounded">I'm excited to utilize the many skills I've learned including HTML5, CSS3, JavaScript, JQuery, JSON, AJAX, Express.js, React.js, MongoDB, and Mongoose.js as pieces of the MERN stack.</p>
                </div>
            </section>




            {/* <section className="gridContainer">
                <div className="item rounded bg-light border">
                    <a href="https://www.linkedin.com/in/joshua-trevethan/" className="aboutMeTextSmall">LinkedIn: Joshua Trevethan</a>
                </div>
                <div className="item rounded bg-light border">
                    <a href="https://github.com/JoshTrev" className="aboutMeTextSmall">GitHub: JoshTrev</a>
                </div>
            </section> */}

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