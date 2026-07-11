import React from "react";

function Footer() {
  return (
    <footer>
      <div className="section__container footer__container">
        <h4>Pavan kumar</h4>
        <ul className="footer__socials">
          <li><a href="#"><i className="ri-twitter-fill"></i></a></li>
          <li><a href="#"><i className="ri-linkedin-fill"></i></a></li>
          <li><a href="#"><i className="ri-behance-fill"></i></a></li>
          <li><a href="#"><i className="ri-dribbble-line"></i></a></li>
          <li><a href="#"><i className="ri-pinterest-line"></i></a></li>
        </ul>
      </div>
      <div className="footer__bar"></div>
    </footer>
  );
}

export default Footer;