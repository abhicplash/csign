import React from "react";
import "./AboutMain.css";
import abmainimg from "../../assets/about/abutmainimg.jpg";

const AboutMain = () => {
  return (
    <div className="AboutMain-container">
      <img src={abmainimg} alt="" className="imgabmain" />
      <div className="abDetails-wrapper">
        <span className="headingabmain">
          Welcome to <b> Creative Signature </b>
          Advertisement
        </span>
        <p className="paraabmain">
          At <b>Creative Signature </b>
          Advertisement, we believe in turning your ideas into reality through
          our wide range of printing and design services. Our company was
          founded on the principles of creativity, quality, and customer
          satisfaction. We take pride in being one of the leading providers of
          customized solutions that meet the needs of both businesses and
          individuals
        </p>
        <div className="ab-btnwrapper">
          <button className="ab-btn">Get started</button>
          <button className="ab-btn">Request a Demo</button>
        </div>
      </div>
    </div>
  );
};

export default AboutMain;
