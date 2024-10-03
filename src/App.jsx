import React from "react";
import "./App.css";
import Navbar from "./composents/Navbar/Navbar.jsx";
import Hero from "./composents/Hero/Hero.jsx";
import Skills from "./composents/Skills/Skills.jsx";
import WorkExperience from "./composents/WorkExperience/WorkExperience.jsx";
import ContacteMoi from "./composents/ContacteMoi/ContacteMoi.jsx";
import Footer from "./composents/Footer/Footer.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        <Skills />
        <WorkExperience />
        <ContacteMoi />
      </div>
      <Footer />
    </>
  );
};

export default App;
