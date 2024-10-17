import React from "react";
import "./Topbar.css";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";

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
          <FaWhatsapp className="iconmb" />
        </a>
        <FaInstagram className="iconmb" />
        <MdLocalPhone className="iconmb" />
      </div>
    </div>
  );
};

export default Topbar;
