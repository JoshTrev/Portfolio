import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

function App() {
  const [page, setPage] = useState({
    currentPage: "AboutMe"
  });
  const [headerProp, setheaderProp] = useState({
    content: "Header Test!"
  });
  const [footerProp, setfooterProp] = useState({
    content: "Footer Test!"
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

  return (
    <>
      <Header
        onClick={handleButtonClick}
        currentPage={page.currentPage}
      />
      <main>
        {page.currentPage === "AboutMe" &&
          <AboutMe />
        }
        {page.currentPage === "Contact" &&
          <Contact />
        }
        {page.currentPage === "Portfolio" &&
          <Portfolio />
        }
      </main>
      <Footer content={footerProp.content} />
    </>
  );
}

export default App;
