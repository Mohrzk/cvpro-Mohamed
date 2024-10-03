import React from "react";
import "./ContacteMoiCard.css";

const ContacteMoiCard = ({ iconUrl, text }) => {
  return (
    <div className="contact-details-card">
      <div className="icon">
        <img src={iconUrl} alt={text} />
      </div>
      <p>{text}</p>
    </div>
  );
};

export default ContacteMoiCard;
