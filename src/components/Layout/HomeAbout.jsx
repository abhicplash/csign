import React from "react";
import "./HomeAbout.css";
import lap from "../../assets/habout/lap.jpg";
import { RiNumber1 } from "react-icons/ri";
import { RiNumber3 } from "react-icons/ri";
import { RiNumber2 } from "react-icons/ri";
import { Link } from "react-router-dom";

const HomeAbout = () => {
  return (
    <div className="Habout-container">
      <div className="HAimg-wrapper">
        <img src={lap} alt="lap" className="laphaboutimg" />
      </div>
      <div className="HA-details-wrapper">
        <span className="heading">simple solutions!</span>
        <p>
          At Creative Signature Advertisement, we are committed to providing you
          with a customer-centric approach that focuses on understanding your
          specific needs and delivering personalized solutions. Our goal is to
          help you achieve your branding objectives through high-quality prints
          that stand out.
        </p>
        <div className="HA-pattern">
          <div className="steps">
            <RiNumber1 className="number" /> contact us
          </div>{" "}
          <div className="steps">
            <RiNumber2 className="number" /> consult
          </div>{" "}
          <div className="steps">
            <RiNumber3 className="number" /> complete
          </div>
        </div>
        <div className="ha-btnwrapper">
          <Link to={"/contact"}>
            <button className="ha-btn">Request a Demo</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
