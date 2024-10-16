import React from "react";
import "./ServiceMain.css";
import servicemain from "../../assets/services/main.jpg";

const ServiceMain = () => {
  return (
    <div className="ServiceMain-container">
      <img src={servicemain} alt="" className="imgabmain" />
      <div className="abDetails-wrapper">
        <span className="headingabmain">
          <b>Creative Signature</b> <br />
          Advertisement Services
        </span>
        <p className="paraabmain">
          At
          <b> Creative Signature</b>
          Advertisement, we specialize in a wide range of professional printing
          and design services that cater to all your promotional needs. Whether
          you are a business looking to enhance your brand visibility or an
          individual seeking personalized products, we have the perfect
          solutions for you. Here’s a look at our key services:
        </p>
        <div className="ab-btnwrapper">
          <button className="ab-btn">Get started</button>
          <button className="ab-btn">Request an Enquiry</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceMain;
