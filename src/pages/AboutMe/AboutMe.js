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

            <section className="AboutMeGridContainer" id="headerItem">
                <div className="item rounded bg-light border" >
                    <h1>Technical Skills</h1>
                </div>
            </section>

            <section className="gridContainerSkills">
                <div className="item rounded skill imageEffect">
                    <img src={props.skillsImg1} alt="HTML5" className="SkillImage" />
                </div>
                <div className="item rounded skill imageEffect">
                    <img src={props.skillsImg2} alt="CSS3" className="SkillImage" />
                </div>
                <div className="item rounded skill imageEffect">
                    <img src={props.skillsImg3} alt="JavaScript" className="SkillImage" />
                </div>
                <div className="item rounded skill imageEffect">
                    <img src={props.skillsImg4} alt="MySQL" className="SkillImage" />
                </div>
                <div className="item rounded skill imageEffect">
                    <img src={props.skillsImg5} alt="MongoDB" className="SkillImage" />
                </div>
                <div className="item rounded skill imageEffect">
                    <img src={props.skillsImg6} alt="Express" className="SkillImage" />
                </div>
                <div className="item rounded skill imageEffect">
                    <img src={props.skillsImg7} alt="React" className="SkillImage" />
                </div>
                <div className="item rounded skill imageEffect">
                    <img src={props.skillsImg8} alt="Node" className="SkillImage" />
                </div>
                <div className="item rounded skill imageEffect">
                    <img src={props.skillsImg9} alt="GitHub" className="SkillImage" />
                </div>
                <div className="item rounded skill imageEffect">
                    <img src={props.skillsImg10} alt="Heroku" className="SkillImage" />
                </div>
                <div className="item rounded skill imageEffect">
                    <img src={props.skillsImg11} alt="Bootstrap" className="SkillImage" />
                </div>
                <div className="item rounded skill imageEffect">
                    <img src={props.skillsImg12} alt="jQuery" className="SkillImage" />
                </div>
                <div className="item rounded skill imageEffect">
                    <img src={props.skillsImg13} alt="MERN" className="SkillImage" />
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