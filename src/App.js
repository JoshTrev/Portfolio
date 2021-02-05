import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./pages/AboutMe/AboutMe";
import Contact from "./pages/Contact/Contact";
import Resume from "./pages/Resume/Resume";
import Portfolio from "./pages/Portfolio/Portfolio";

import "./App.css"

import JoshPicImg from "./assets/img/JoshPic.JPG";
import EmployeeDirectoryImg from "./assets/img/EmployeeDirectory.png";
import TripWishlistImg from "./assets/img/Trip-Wishlist.png";
import BetterMeImg from "./assets/img/BetterMeImg.png";
import BurgerAppImg from "./assets/img/BurgerApp.png";
import WeatherDashboardImg from "./assets/img/WeatherDashboardImg.png";
import PasswordGeneratorImg from "./assets/img/PasswordGeneratorImg.png";
import CodingCoachImg from "./assets/img/CodingCoachImage.png";

import BootstrapImg from "./assets/SkillsImages/bootstrap.png";
import CSS3Img from "./assets/SkillsImages/css3.png";
import ExpressImg from "./assets/SkillsImages/Express.png";
import GitHubImg from "./assets/SkillsImages/github.jpg";
import HerokuImg from "./assets/SkillsImages/Heroku.png";
import HTML5Img from "./assets/SkillsImages/html5.png";
import jQueryImg from "./assets/SkillsImages/jQuery.png";
import JavaScriptImg from "./assets/SkillsImages/JS.png";
import MERNImg from "./assets/SkillsImages/mern.jpg";
import MongoDBImg from "./assets/SkillsImages/mongodb.png";
import MySQLImg from "./assets/SkillsImages/MySQL.jpg";
import NodeImg from "./assets/SkillsImages/nodeJS.png";
import ReactImg from "./assets/SkillsImages/React.png";

function App() {
  const [page, setPage] = useState({
    currentPage: "AboutMe"
  });
  const [dropDown, setDropDown] = useState({
    dropDownActive: "NotActive"
  });
  const [headerProp, setheaderProp] = useState({
    img: JoshPicImg
  });
  const [footerProp, setfooterProp] = useState({
    content: "Footer Test!"
  });
  const [aboutMeProp, setaboutMeProp] = useState({
    img1: HTML5Img,
    img2: CSS3Img,
    img3: JavaScriptImg,
    img4: MySQLImg,
    img5: MongoDBImg,
    img6: ExpressImg,
    img7: ReactImg,
    img8: NodeImg,
    img9: GitHubImg,
    img10: HerokuImg,
    img11: BootstrapImg,
    img12: jQueryImg,
    img13: MERNImg,
  });
  const [portfolioProp, setportfolioProp] = useState({
    img1: CodingCoachImg,
    img2: TripWishlistImg,
    img3: BetterMeImg,
    img4: EmployeeDirectoryImg,
    img5: WeatherDashboardImg,
    img6: PasswordGeneratorImg,
    img7: BurgerAppImg,
  });

  function handleButtonClick(event) {
    const buttonName = event.target.id;
    if (buttonName === "AboutMe" || buttonName === "AboutMe2") {
      setPage({ currentPage: "AboutMe" });
    }
    else if (buttonName === "Contact" || buttonName === "Contact2") {
      setPage({ currentPage: "Contact" });
    }
    else if (buttonName === "Resume" || buttonName === "Resume2") {
      setPage({ currentPage: "Resume" });
    }
    else if (buttonName === "Portfolio" || buttonName === "Portfolio2") {
      setPage({ currentPage: "Portfolio" });
    }
  }

  function handleButtonClickDropDown(event) {
    if (dropDown.dropDownActive === "NotActive"){
      setDropDown({ dropDownActive: "Active" });
      // console.log("Setting Active!");
    }
    else{
      setDropDown({ dropDownActive: "NotActive" });
      // console.log("Deactivating");
    }
  }

  function handleButtonClick2(event) {
    const buttonName = event.target.id;

    if (buttonName === "1") {
      window.open("http://codecoach0.herokuapp.com/", '_blank');
    }
    else if (buttonName === "2") {
      window.open("https://trip-wishlist.herokuapp.com/", '_blank');
    }
    else if (buttonName === "3") {
      window.open("https://joshtrev.github.io/BetterMe/", '_blank');
    }
    else if (buttonName === "4") {
      window.open("https://joshtrev.github.io/Employee-Directory/", '_blank');
    }
    else if (buttonName === "5") {
      window.open("https://joshtrev.github.io/Weather-Dashboard/", '_blank');
    }
    else if (buttonName === "6") {
      window.open("https://joshtrev.github.io/PasswordGeneratorHomework/", '_blank');
    }
    else if (buttonName === "7") {
      window.open("https://github.com/JoshTrev/Eat-Da-Burger-", '_blank');
    }
  }

  return (
    <div className="backgroundImg">
      <Header
        onClick={handleButtonClick}
        onClickDropDown={handleButtonClickDropDown}
        currentPage={page.currentPage}
        dropDownActive={dropDown.dropDownActive}
      />
      <main>
        <div className={dropDown.dropDownActive === "Active" ? "blockSmall" : "blockLarge"}></div>
        {page.currentPage === "AboutMe" &&
          <AboutMe aboutMeImg={headerProp.img}
          skillsImg1={aboutMeProp.img1}
          skillsImg2={aboutMeProp.img2}
          skillsImg3={aboutMeProp.img3}
          skillsImg4={aboutMeProp.img4}
          skillsImg5={aboutMeProp.img5}
          skillsImg6={aboutMeProp.img6}
          skillsImg7={aboutMeProp.img7}
          skillsImg8={aboutMeProp.img8}
          skillsImg9={aboutMeProp.img9}
          skillsImg10={aboutMeProp.img10}
          skillsImg11={aboutMeProp.img11}
          skillsImg12={aboutMeProp.img12}
          skillsImg13={aboutMeProp.img13}
          />
        }
        {page.currentPage === "Contact" &&
          <Contact />
        }
        {page.currentPage === "Resume" &&
          <Resume />
        }
        {page.currentPage === "Portfolio" &&
          <Portfolio
            portfolioImg1={portfolioProp.img1}
            portfolioImg2={portfolioProp.img2}
            portfolioImg3={portfolioProp.img3}
            portfolioImg4={portfolioProp.img4}
            portfolioImg5={portfolioProp.img5}
            portfolioImg6={portfolioProp.img6}
            portfolioImg7={portfolioProp.img7}
            onClick={handleButtonClick2}
          />
        }
      </main>

      <Footer content={footerProp.content} />
    </div>
  );
}

export default App;