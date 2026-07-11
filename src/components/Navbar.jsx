import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav>
      <div className="nav__header">
        <div className="nav__logo">
          <a href="#">PAVAN<span>.</span></a>
        </div>
        <div className="nav__menu__btn" id="menu-btn" onClick={toggleMenu}>
          <i className={isOpen ? "ri-close-line" : "ri-menu-line"}></i>
        </div>
      </div>
      <ul className={`nav__links ${isOpen ? "open" : ""}`} id="nav-links">
        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#intro" onClick={closeMenu}>Intro</a></li>
        <li><a href="#Skills" onClick={closeMenu}>Skills</a></li>
        <li><a href="#portfolio" onClick={closeMenu}>Projects</a></li>
      </ul>
      <div className="nav__btns">
        <button className="btn"><a href="#portfolio">Portfolio</a></button>
      </div>
    </nav>
  );
}

export default Navbar;