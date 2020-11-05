import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./pages/AboutMe/AboutMe";
import Contact from "./pages/Contact/Contact";
import Portfolio from "./pages/Portfolio/Portfolio";

function App() {
  const [page, setPage] = useState({
    currentPage: "AboutMe"
  });
  const [headerProp, setheaderProp] = useState({
    img: "./assets/img/JoshPic.JPG"
  });
  const [footerProp, setfooterProp] = useState({
    content: "Footer Test!"
  });
  const [portfolioProp, setportfolioProp] = useState({
    img1: "./assets/img/EmployeeDirectory.png",
    img2: "./assets/img/Trip-Wishlist.png",
    img3: "./assets/img/BetterMeImg.png",
    img4: "./assets/img/BurgerApp.png",
    img5: "./assets/img/WeatherDashboardImg.png",
    img6: "./assets/img/PasswordGeneratorImg.png",
  });

  function handleButtonClick(event) {
    const buttonName = event.target.id;
    if (buttonName === "AboutMe") {
      setPage({ currentPage: buttonName });
    }
    else if (buttonName === "Contact") {
      setPage({ currentPage: buttonName });
    }
    else if (buttonName === "Portfolio") {
      setPage({ currentPage: buttonName });
    }
  }

  function handleButtonClick2(event) {
    const buttonName = event.target.id;

    if (buttonName === "1") {
      window.open("https://joshtrev.github.io/Employee-Directory/", '_blank');
    }
    else if (buttonName === "2") {
      window.open("https://trip-wishlist.herokuapp.com/", '_blank');
    }
    else if (buttonName === "3") {
      window.open("https://joshtrev.github.io/BetterMe/", '_blank');
    }
    else if (buttonName === "4") {
      window.open("https://github.com/JoshTrev/Eat-Da-Burger-", '_blank');
    }
    else if (buttonName === "5") {
      window.open("https://joshtrev.github.io/Weather-Dashboard/", '_blank');
    }
    else if (buttonName === "6") {
      window.open("https://joshtrev.github.io/PasswordGeneratorHomework/", '_blank');
    }
  }

  return (
    <>
      <Header
        onClick={handleButtonClick}
        currentPage={page.currentPage}
      />
      <main>
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
            onClick={handleButtonClick2}
          />
        }
      </main>

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Footer content={footerProp.content} />
    </>
  );
}

export default App;
