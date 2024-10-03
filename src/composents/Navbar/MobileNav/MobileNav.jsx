import React from "react";
import "./MobileNav.css";

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <h3 className="logo">Razzouki Mohamed</h3>

          <ul>
            <li>
              <a className="menu-item">Accueil</a>
            </li>

            <li>
              <a className="menu-item">Compétences</a>
            </li>

            <li>
              <a className="menu-item">Expérience professionnelle</a>
            </li>

            <li>
              <a className="menu-item">Contactez-moi</a>
            </li>
            <button className="contact-btn" onClick={() => {}}>
              Here me
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
