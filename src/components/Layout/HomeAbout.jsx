import React from "react";
import "./HomeAbout.css";
import lap from "../../assets/habout/lap.jpg";
import { RiNumber1 } from "react-icons/ri";
import { RiNumber3 } from "react-icons/ri";
import { RiNumber2 } from "react-icons/ri";

const HomeAbout = () => {
  return (
    <div className="Habout-container">
      <div className="HAimg-wrapper">
        <img src={lap} alt="lap" className="laphaboutimg" />
      </div>
      <div className="HA-details-wrapper">
        <span className="heading">simple solutions!</span>
        <p>
          At creative signature, we craft compelling stories that drive results.
          Our expert team leverages data-driven insights and creative flair.
          Transforming brands through bold & effective advertising.
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
          <button className="ha-btn">Get started</button>
          <button className="ha-btn">Request a Demo</button>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
