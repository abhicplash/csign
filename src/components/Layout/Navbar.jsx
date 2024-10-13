import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo/logo.png";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [view, setView] = useState(false);
  return (
    <div className="navbar-container">
      <img src={logo} alt="creative" className="navlogo" />
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
    </div>
  );
};

export default Navbar;
