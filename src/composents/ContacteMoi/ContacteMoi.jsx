import React from "react";
import "./ContacteMoi.css";
import ContacteMoiCard from "./ContacteMoiCard/ContacteMoiCard.jsx";
import ContacteForm from "./ContacteForm/ContacteForm.jsx";

const ContacteMoi = () => {
  return (
    <section className="contact-container">
      <h5>Contactez-moi</h5>
      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContacteMoiCard
            iconUrl="./assets/images/emaiil.png"
            text="Razzouki.mohamed12@gmail.com"
          />
          <ContacteMoiCard
            iconUrl="./assets/images/githubb.png"
            text="https://github.com/Mohrzk"
          />
        </div>
        <div style={{ flex: 1 }}>
          <ContacteForm />
        </div>
      </div>
    </section>
  );
};

export default ContacteMoi;
