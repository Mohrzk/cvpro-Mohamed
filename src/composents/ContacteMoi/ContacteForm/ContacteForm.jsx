import React from "react";
import "./ContacteForm.css";

const ContacteForm = () => {
  return (
    <div className="contact-form-content">
      <form>
        <div className="name-container">
          <input type="text" name="firstname" placeholder="Prénom" />
          <input type="text" name="lastname" placeholder="Nom" />
        </div>
        <input type="text" name="email" placeholder="Email" />
        <textarea
          type="text"
          name="message"
          placeholder="Message"
          rows={3}
        ></textarea>
        <button>Envoyer</button>
      </form>
    </div>
  );
};

export default ContacteForm;
