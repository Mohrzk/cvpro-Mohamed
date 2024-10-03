import React, { useState } from "react";
import "./Navbar.css";
import MobileNav from "./MobileNav/MobileNav.jsx";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}></MobileNav>

      <nav className="nav-container">
        <div className="nav-contenue">
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
              <a className="contact-btn">Contactez-moi</a>
            </li>
          </ul>
          <button class="menu-btn" onClick={toggleMenu}>
            <span
              class={"material-symbols-outlined"}
              style={{ fontSize: "1.8rem" }}
            >
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
