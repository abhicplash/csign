import React from "react";
import "./Topbar.css";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="topbar-container">
      <div className="top-wrarper">
        <FaWhatsapp className="icontb" />
        <FaInstagram className="icontb" />
        <FaPhoneSquareAlt className="icontb" />
      </div>
      <div className="mobile-wrapper" />
    </div>
  );
};

export default Topbar;
