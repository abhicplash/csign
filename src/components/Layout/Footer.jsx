import React from "react";
import "./Footer.css";
import footerlogo from "../../assets/logo/footer.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-logo-main">
        <img src={footerlogo} alt="" />
        <div className="footer-smedia">
          <FaFacebookSquare className="icon" />
          <FaInstagram className="icon" />
          <FaPinterest className="icon" />
        </div>
      </div>
      <div className="footer-logo">
        <span className="foot-head">contact us</span>
        <span className="foot-list">
          <span>+971-542411778</span>
          <span>+971-504339252</span>
          <span>+971-509460604</span>
          <span>+971-581944089</span>
        </span>
      </div>
      <div className="footer-logo">
        <span className="foot-head">Services</span>
        <span className="foot-list">
          <span>T shirt-Printing</span>
          <span>Mug-Printing</span>
          <span>Vehicle-Printing</span>
          <span>Stamp</span>
        </span>
      </div>
      <div className="footer-logo">
        <span className="foot-head">contact us</span>
        <span className="foot-list">
          <span>+971-542411778</span>
          <span>+971-504339252</span>
          <span>+971-509460604</span>
          <span>+971-581944089</span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
