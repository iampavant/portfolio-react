import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Journey from "./components/Journey";


import Footer from "./components/Footer";
import "./index.css"; // Your provided CSS file
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Intro />
      <Skills />
      <Journey />
     <Portfolio />
      <Footer />
    </>
  );
}

export default App;