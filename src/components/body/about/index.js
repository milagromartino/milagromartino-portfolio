import React from "react";
import "./about.css";
import SocialContact from "../../common/social-contact/index";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
        Hola, un gusto! Soy
         <br /> <span className="info-name">Milagro Martino</span>.
         <br /> Desarrolladora frontend con experiencia en tecnologías como Vue, Vuetify, React y Tailwind.
        </div>
        <div className="about-photo">
          <img 
            src={require("../../../assets/coding.png")}
            className="picture"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;