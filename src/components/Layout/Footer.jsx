import React from "react";
import "./Footer.css";
import footerlogo from "../../assets/logo/footer.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-logo-main">
        <img src={footerlogo} alt="" />
      </div>
      <div className="footer-logo">
        <span className="foot-head">Company Links</span>
        <span className="foot-list">
          <Link to={"/"}>
            <span>home</span>
          </Link>
          <Link to={"/about"}>
            <span>About us</span>
          </Link>{" "}
          <Link to={"/services"}>
            <span>services</span>
          </Link>{" "}
          <Link to={"/contact"}>
            <span>contact us</span>
          </Link>
        </span>
      </div>
      <div className="footer-logo">
        <span className="foot-head">Contact us</span>
        <a href="">+971 547488941</a>
        <div className="socialLinks">
            <FaFacebookSquare  className="footer-socio-Link"/>
            <FaInstagram  className="footer-socio-Link"/>
            <FaLinkedin  className="footer-socio-Link"/>
            <FaXTwitter  className="footer-socio-Link"/>
        </div>
      </div>
      {/* <div className="footer-logo">
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
      </div> */}
    </div>
  );
};

export default Footer;
