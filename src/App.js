import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./pages/AboutMe/AboutMe";
import Contact from "./pages/Contact/Contact";
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
          <AboutMe aboutMeImg={headerProp.img} />
        }
        {page.currentPage === "Contact" &&
          <Contact />
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