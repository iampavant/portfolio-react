import React from "react";
import pic2 from "../assets/pic2.jpeg"; // Place your images inside src/assets/

function Header() {
  return (
    <header id="home">
      <div className="section__container header__container">
        <div className="header__content">
          <h2>Hi, I am</h2>
          <h1>PAVAN KUMAR</h1>
          <h3>Ui Ux designer</h3>
          <p>
            A problem solver by heart, building seamless web experiences that make life easier and more exciting for everyone.
          </p>
          <div className="header__btns">
            <button className="btn">Download CV</button>
            <button className="btn">Contact Me</button>
          </div>
        </div>
        <div className="header__image">
          <img src={pic2} alt="header" />
        </div>
      </div>
    </header>
  );
}

export default Header;