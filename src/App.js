import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [page, setPage] = useState();
  const [headerProp, setheaderProp] = useState({
    content: "Header Test!"
  });
  const [footerProp, setfooterProp] = useState({
    content: "Footer Test!"
  });

  return (
    <>
    <Header content={headerProp.content}/>
    <main></main>
    <Footer content={footerProp.content}/>
    </>
  );
}

export default App;
