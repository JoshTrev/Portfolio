import React from "react";
import Project from "../../components/Project";
import "./Portfolio.css";

function Portfolio(props) {
    return (
        <>
            <section className="PortfolioGridContainerHeader" id="headerItem">
                <div className="item rounded bg-light border">
                    <h1>Projects Portfolio</h1>
                </div>
            </section>

            <section className="PortfolioGridContainer">
                <div>
                    <div className="imageEffect item rounded">
                        <Project
                            portfolioImg={props.portfolioImg1}
                            onClick={props.onClick}
                            imgID="1"
                        />
                    </div>
                </div>
                <div>
                    <div className="item rounded bg-light border">
                        <h2 className="ProjectHeader">
                            Code Coach
                        </h2>
                        <hr className="projectHr"></hr>
                        <p className="ProjectDescription">
                            Learning application where users with the "learner" role can complete and submit coding assignments to be graded. Users with the "teacher" role can grade these submissions and leave commented feedback.
                        </p>
                    </div>

                    <a href="http://codecoach0.herokuapp.com/" className="LinkButton item border">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Deploy
                    </a>
                    <a href="https://github.com/JoshTrev/CodeCoach" className="LinkButton item border">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        GitHub
                    </a>
                </div>
            </section>

            <section className="PortfolioGridContainer">
                <div>
                    <div className="imageEffect item rounded">
                        <Project
                            portfolioImg={props.portfolioImg2}
                            onClick={props.onClick}
                            imgID="2"
                        />
                    </div>
                </div>
                <div>
                    <div className="item rounded bg-light border">
                        <h2 className="ProjectHeader">
                            Trip Wishlist
                        </h2>
                        <hr className="projectHr"></hr>
                        <p className="ProjectDescription">
                            Trip Planning Application providing the user with hotel, restaurant, and museum suggestions located nearby the location they searched.
                        </p>
                    </div>

                    <a href="https://trip-wishlist.herokuapp.com/" className="LinkButton item border">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Deploy
                    </a>
                    <a href="https://github.com/JoshTrev/Trip-Wishlist" className="LinkButton item border">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        GitHub
                    </a>
                </div>
            </section>

            <section className="PortfolioGridContainer">
                <div>
                    <div className="imageEffect item rounded">
                        <Project
                            portfolioImg={props.portfolioImg3}
                            onClick={props.onClick}
                            imgID="3"
                        />
                    </div>
                </div>
                <div>
                    <div className="item rounded bg-light border">
                        <h2 className="ProjectHeader">
                            Better Me
                        </h2>
                        <hr className="projectHr"></hr>
                        <p className="ProjectDescription">
                            Recipe and fitness application allowing users to search and filter recipes. Users are provided with an accompanying workout based on selected fitness intensity level.
                        </p>
                    </div>

                    <a href="https://joshtrev.github.io/BetterMe/" className="LinkButton item border">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Deploy
                    </a>
                    <a href="https://github.com/JoshTrev/BetterMe" className="LinkButton item border">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        GitHub
                    </a>
                </div>
            </section>

            <section className="PortfolioGridContainer">
                <div>
                    <div className="imageEffect item rounded">
                        <Project
                            portfolioImg={props.portfolioImg4}
                            onClick={props.onClick}
                            imgID="4"
                        />
                    </div>
                </div>
                <div>
                    <div className="item rounded bg-light border">
                        <h2 className="ProjectHeader">
                            Employee Directory
                        </h2>
                        <hr className="projectHr"></hr>
                        <p className="ProjectDescription">
                            Application allowing the user to dynamically search for an employee from an employee list. Search results list image, name, phone number, email, and date of birth.
                        </p>
                    </div>

                    <a href="https://joshtrev.github.io/Employee-Directory/" className="LinkButton item border">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Deploy
                    </a>
                    <a href="https://github.com/JoshTrev/Employee-Directory" className="LinkButton item border">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        GitHub
                    </a>
                </div>
            </section>

            <section className="PortfolioGridContainer">
                <div>
                    <div className="imageEffect item rounded">
                        <Project
                            portfolioImg={props.portfolioImg5}
                            onClick={props.onClick}
                            imgID="5"
                        />
                    </div>
                </div>
                <div>
                    <div className="item rounded bg-light border">
                        <h2 className="ProjectHeader">
                            Weather Dashboard
                        </h2>
                        <hr className="projectHr"></hr>
                        <p className="ProjectDescription">
                            Application allows the user to search for any location and will display the 5 day forecast using the OpenWeatherMap weather API.
                        </p>
                    </div>

                    <a href="https://joshtrev.github.io/Weather-Dashboard/" className="LinkButton item border">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Deploy
                    </a>
                    <a href="https://github.com/JoshTrev/Weather-Dashboard" className="LinkButton item border">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        GitHub
                    </a>
                </div>
            </section>

            <section className="PortfolioGridContainer">
                <div>
                    <div className="imageEffect item rounded">
                        <Project
                            portfolioImg={props.portfolioImg6}
                            onClick={props.onClick}
                            imgID="6"
                        />
                    </div>
                </div>
                <div>
                    <div className="item rounded bg-light border">
                        <h2 className="ProjectHeader">
                            Password Generator
                        </h2>
                        <hr className="projectHr"></hr>
                        <p className="ProjectDescription">
                            Simple application allowing the user to create an automatically generated random password. Allows the user to specify the length of the password and if the password should include lowercase letters, capital letters, numbers, and/or special characters.
                        </p>
                    </div>

                    <a href="https://joshtrev.github.io/PasswordGeneratorHomework/" className="LinkButton item border">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Deploy
                    </a>
                    <a href="https://github.com/JoshTrev/PasswordGeneratorHomework" className="LinkButton item border">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        GitHub
                    </a>
                </div>
            </section>

            <section className="PortfolioGridContainer">
                <div>
                    <div className="imageEffect item rounded">
                        <Project
                            portfolioImg={props.portfolioImg7}
                            onClick={props.onClick}
                            imgID="7"
                        />
                    </div>
                </div>
                <div>
                    <div className="item rounded bg-light border">
                        <h2 className="ProjectHeader">
                            Eat-Da-Burger
                        </h2>
                        <hr className="projectHr"></hr>
                        <p className="ProjectDescription">
                            Very simple application allowing the user to type in the name of a burger. Clicking "devour" will move the name of the burger to the right side of the screen.
                        </p>
                    </div>

                    <a href="https://github.com/JoshTrev/Eat-Da-Burger-" className="LinkButton item border">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        GitHub
                    </a>
                </div>
            </section>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </>
    )
}

export default Portfolio;