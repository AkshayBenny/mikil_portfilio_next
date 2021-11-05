import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer-cont">
      <div className="footer-sheading">
        <p>Contact Me</p>
      </div>
      <div className="footer-heading">
        <h1>Got a project ? Let's talk </h1>
      </div>
      <div className="contact-boxes-cont">
        <div className="email"></div>
        <div className="phone"></div>
        <div className="location"></div>
      </div>
    </div>
  );
}

export default Footer;
