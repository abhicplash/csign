import React from "react";
import "./Topbar.css";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
// import { FaWhatsappSquare } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";
import { PiEnvelopeLight } from "react-icons/pi";
import UpTop from "./UpTop";

const Topbar = () => {
  return (
    <div>
      <div className="topbar-container">
        <div className="topnumber">
          <FaPhoneSquareAlt className="icontb" />
          <span className="numbr">+971-542411778</span>
        </div>
        <div className="top-wrarper">
          <FaWhatsapp className="icontb" />
          <FaInstagram className="icontb" />
          <button>Request an Enquiry</button>
        </div>
      </div>
      <div className="mobile-wrapper">
        <a href="tel:+971-542411778">
          <MdLocalPhone className="iconmb" />
        </a>
        <a href="mailto:info@creativesignatureadvertisement.com">
          <PiEnvelopeLight className="iconmb" />
        </a>
        <a href="https://wa.me/+918547606322?text=Let me know more about Creative Signature Advertisement">
          <FaWhatsapp className="iconmb" />
        </a>
        <UpTop />
      </div>
    </div>
  );
};

export default Topbar;
