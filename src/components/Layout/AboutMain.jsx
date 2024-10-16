import React from "react";
import "./AboutMain.css";
import abmainimg from "../../assets/about/abutmainimg.jpg";

const AboutMain = () => {
  return (
    <div className="AboutMain-container">
      <img src={abmainimg} alt="" className="imgabmain" />
      <div className="abDetails-wrapper">
        <span className="headingabmain">
          your end-to-end <br /> <b>business partner</b>
        </span>
        <p className="paraabmain">
          At <b>Creative Signature Advertisement</b>
          , we're passionate about crafting innovative advertising solutions
          that propel businesses forward. As a full-service advertising agency,
          we specialize in creating compelling campaigns that capture attention,
          spark engagement, and drive conversions.
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
