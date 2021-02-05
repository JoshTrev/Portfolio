import React from "react";
import "./Resume.css";

function Resume(props) {
    return (
        <>
            <section className="ResumeGridContainer" id="headerItem">
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

            <section className="ResumeGridContainer" id="headerItem">
                <div className="item rounded bg-light border" >
                    <h1>Resume</h1>
                </div>
            </section>

            <section className="ResumeGridContainerResume">
                <div className="item rounded imageEffect" >
                    <img src={props.resumeImg1} alt="Resume Part 1" className="ResumeImg" />
                </div>
                <div className="item rounded imageEffect" >
                    <img src={props.resumeImg2} alt="Resume Part 2" className="ResumeImg" />
                </div>
            </section>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </>
    )
}

export default Resume;