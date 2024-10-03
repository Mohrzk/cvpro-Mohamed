import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>Développeur Web et Web Mobile Junior</h2>
        <p>
          Passionné par la réalisation de projets et la réalisation de
          l'identité visuelle d'un site Internet, c'est plus précisément dans la
          production de code que je m'épanouIs. Je suis extrêmement motivé pour
          développer constamment mes compétences et évoluer professionnellement.
        </p>
      </div>

      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img src="./assets/images/reaact.png" alt="" />
          </div>
          <img src="./assets/images/profil.png" alt="" />
        </div>

        <div>
          <div className="tech-icon">
            <img src="./assets/images/html.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/css.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/js.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
