import React from "react";
import Project from "../../components/Project";
import "./Portfolio.css";

function Portfolio(props) {
    return (
        <>
            <section className="gridContainer" id="headerItem">
                <div className="item rounded bg-light border" >
                    <h1>Projects Portfolio</h1>
                </div>
            </section>

            <div className="Project bg-light border rounded">
                <h3>
                    Code Coach
                </h3>
                <hr></hr>
                <Project
                    portfolioImg={props.portfolioImg1}
                    onClick={props.onClick}
                    imgID="1"
                />
                <hr></hr>
                <p>
                    Learning application where users with the "learner" role can complete and submit coding assignments to be graded. Users with the "teacher" role can grade these submissions and leave commented feedback.
                </p>

                <div className="row">
                    <div className="col">
                        <p>Project Link: <a href="http://codecoach0.herokuapp.com/"> http://codecoach0.herokuapp.com </a> </p>
                    </div>
                    <div className="col">
                        <p>GetHub Link: <a href="https://github.com/JoshTrev/CodeCoach"> https://github.com/JoshTrev/CodeCoach </a> </p>
                    </div>
                </div>
            </div>

            <div className="Project bg-light border rounded">
                <h3>
                    Trip Wishlist
                </h3>
                <hr></hr>
                <Project
                    portfolioImg={props.portfolioImg2}
                    onClick={props.onClick}
                    imgID="2"
                />
                <hr></hr>
                <p>
                    Trip Planning Application providing the user with hotel, restaurant, and museum suggestions located nearby the location they searched.
                </p>

                <div className="row">
                    <div className="col">
                        <p>Project Link: <a href="https://trip-wishlist.herokuapp.com/"> https://trip-wishlist.herokuapp.com </a> </p>
                    </div>
                    <div className="col">
                        <p>GetHub Link: <a href="https://github.com/JoshTrev/Trip-Wishlist"> https://github.com/JoshTrev/Trip-Wishlist </a> </p>
                    </div>
                </div>
            </div>

            <div className="Project bg-light border rounded">
                <h3>
                    Better Me
                </h3>
                <hr></hr>
                <Project
                    portfolioImg={props.portfolioImg3}
                    onClick={props.onClick}
                    imgID="3"
                />
                <hr></hr>
                <p>
                    Recipe and fitness application allowing users to search and filter recipes. Users are provided with an accompanying workout based on selected fitness intensity level.
                </p>

                <div className="row">
                    <div className="col">
                        <p>Project Link: <a href="https://joshtrev.github.io/BetterMe/"> https://joshtrev.github.io/BetterMe </a> </p>
                    </div>
                    <div className="col">
                        <p>GetHub Link: <a href="https://github.com/JoshTrev/BetterMe"> https://github.com/JoshTrev/BetterMe </a> </p>
                    </div>
                </div>
            </div>

            <div className="Project bg-light border rounded">
                <h3>
                    Employee Directory
                </h3>
                <hr></hr>
                <Project
                    portfolioImg={props.portfolioImg4}
                    onClick={props.onClick}
                    imgID="4"
                />
                <hr></hr>
                <p>
                    Application allowing the user to dynamically search for an employee from an employee list. Search results list image, name, phone number, email, and date of birth.
                </p>

                <div className="row">
                    <div className="col">
                        <p>Project Link: <a href="https://joshtrev.github.io/Employee-Directory/"> https://joshtrev.github.io/Employee-Directory </a> </p>
                    </div>
                    <div className="col">
                        <p>GetHub Link: <a href="https://github.com/JoshTrev/Employee-Directory"> https://github.com/JoshTrev/Employee-Directory </a> </p>
                    </div>
                </div>
            </div>

            <div className="Project bg-light border rounded">
                <h3>
                    Weather Dashboard
                </h3>
                <hr></hr>
                <Project
                    portfolioImg={props.portfolioImg5}
                    onClick={props.onClick}
                    imgID="5"
                />
                <hr></hr>
                <p>
                    Application allows the user to search for any location and will display the 5 day forecast using the OpenWeatherMap weather API.
                </p>

                <div className="row">
                    <div className="col">
                        <p>Project Link: <a href="https://joshtrev.github.io/Weather-Dashboard/"> https://joshtrev.github.io/Weather-Dashboard </a> </p>
                    </div>
                    <div className="col">
                        <p>GetHub Link: <a href="https://github.com/JoshTrev/Weather-Dashboard"> https://github.com/JoshTrev/Weather-Dashboard </a> </p>
                    </div>
                </div>
            </div>

            <div className="Project bg-light border rounded">
                <h3>
                    Password Generator
                </h3>
                <hr></hr>
                <Project
                    portfolioImg={props.portfolioImg6}
                    onClick={props.onClick}
                    imgID="6"
                />
                <hr></hr>
                <p>
                    Simple application allowing the user to create an automatically generated random password. Allows the user to specify the length of the password and if the password should include lowercase letters, capital letters, numbers, and/or special characters.
                </p>

                <div className="row">
                    <div className="col">
                        <p>Project Link: <a href="https://joshtrev.github.io/PasswordGeneratorHomework/"> https://joshtrev.github.io/PasswordGeneratorHomework </a> </p>
                    </div>
                    <div className="col">
                        <p>GetHub Link: <a href="https://github.com/JoshTrev/PasswordGeneratorHomework"> https://github.com/JoshTrev/PasswordGeneratorHomework </a> </p>
                    </div>
                </div>
            </div>

            <div className="Project bg-light border rounded">
                <h3>
                    Eat-Da-Burger
                </h3>
                <hr></hr>
                <Project
                    portfolioImg={props.portfolioImg7}
                    onClick={props.onClick}
                    imgID="7"
                />
                <hr></hr>
                <p>
                    Very simple application allowing the user to type in the name of a burger. Clicked "devour" will move the name of the burger to the right side of the screen.
                </p>

                <div className="row">
                    <div className="col">
                        <p>GetHub Link: <a href="https://github.com/JoshTrev/Eat-Da-Burger-"> https://github.com/JoshTrev/Eat-Da-Burger- </a> </p>
                    </div>
                </div>
            </div>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </>
    )
}

export default Portfolio;