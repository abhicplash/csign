import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo/logo.png";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";
// import Topbar from "./Topbar";
import { MdLocalPhone  } from "react-icons/md";
import { PiEnvelopeLight } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa";
import UpTop from "./UpTop";


const Navbar = () => {
  const [view, setView] = useState(false);
  return (
    <div className="navbar-container">
      <Link to={"/"}>
        <img src={logo} alt="creative" className="navlogo" />
      </Link>
      <HiBars3BottomLeft
        className="nav-icon"
        onClick={() => {
          setView(!view);
        }}
      />
      {view
        ? <ul className="list-mob">
            <Link to={"/"}>
              <li className="list-item">home</li>
            </Link>{" "}
            <Link to={"/about"}>
              <li className="list-item">about us</li>
            </Link>{" "}
            <Link to={"/services"}>
              <li className="list-item">services</li>
            </Link>{" "}
            <Link to={"/contact"}>
              <li className="list-item">contact us</li>
            </Link>{" "}
          </ul>
        : null}
      <ul className="list-large">
        <li>
          <Link to={"/"}>home</Link>{" "}
        </li>
        <li>
          <Link to={"/about"}>about us</Link>{" "}
        </li>
        <li>
          <Link to={"/services"}>services</Link>{" "}
        </li>
        <li>
          <Link to={"/contact"}>contact us</Link>{" "}
        </li>
      </ul>
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
    // </div>
  );
};

export default Navbar;
