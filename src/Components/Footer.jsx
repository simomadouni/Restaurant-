import React from "react";
import Logo from "../Assets/logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <center>
      <div className="footer-wrapper">
        <div className="footer-section-one">
          <div className="footer-logo-container">
            <img src={Logo} alt="" />
          </div>
          <div className="footer-icons">
            <FaFacebookF size="30" />
            <BsTwitter size="30" />
            <SiLinkedin size="30" />
            <BsYoutube size="30" />
          </div>
        </div>
        <div className="footer-section-two">
          <div className="footer-section-columns">
            <span>Qualtiy</span>
            <span>Help</span>
            <span>Share</span>
            <span>Carrers</span>
            <span>Testimonials</span>
            <span>Work</span>
          </div>
          <div className="footer-section-columns">
            <span>+212-6424-53575</span>
            <span>hello@food.com</span>
            <span>press@food.com</span>
            <span>contact@food.com</span>
          </div>
          <div className="footer-section-columns">
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </center>
  );
};

export default Footer;
