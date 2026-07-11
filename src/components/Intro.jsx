import React from "react";
import pic1 from "../assets/pic1.jpeg";

function Intro() {
  return (
    <section className="section__container intro__container" id="intro">
      <div className="intro__image">
        <img src={pic1} alt="intro" />
      </div>
      <div className="intro__content">
        <p class="section__subheader">My Intro</p>
        <h2 class="section__header">About Me</h2>
        <div className="intro__description">
          <p>
            I’m a passionate UI/UX designer focused on creating intuitive and user-friendly interfaces. 
            I blend creativity with usability to deliver exceptional digital experiences. My expertise 
            lies in wireframing, prototyping, and crafting pixel-perfect designs.
          </p>
          <p>
            When I’m not designing, you can find me exploring design trends, sketching ideas, or 
            collaborating on creative projects.
          </p>
        </div>
        <div className="intro__grid">
          <h5><span><i className="ri-user-line"></i></span> Name</h5>
          <span>:</span>
          <p>Pavan kumar</p>
          <h5><span><i className="ri-phone-line"></i></span> Phone</h5>
          <span>:</span>
          <p>76 720 958 77</p>
          <h5><span><i className="ri-mail-line"></i></span> Email</h5>
          <span>:</span>
          <p>pavankumar19035@gmail.com</p>
        </div>
        <h4>My Interests</h4>
        <div className="intro__flex">
          <div><span><i className="ri-headphone-line"></i></span> Music</div>
          <div><span><i className="ri-briefcase-3-line"></i></span> Travel</div>
        </div>
      </div>
    </section>
  );
}

export default Intro;