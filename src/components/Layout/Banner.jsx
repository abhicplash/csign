import React from "react";
import "./Banner.css";
import banner from "../../assets/Banner/banner.jpg";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="img-wrapper">
        <img src={banner} alt="" className="banner-img" />
      </div>
      <div className="banner-details">
        <span className="heading">
          we create <br /> solutions{" "}
          <b>
            for <br /> your business
          </b>
        </span>
        <span className="para">
          Unlock Your Brand's Potential with Creative Signature Advertisement,
          Sharjah & Dubai's Leading Advertising Agency
        </span>
        <div className="btnwrapper">
          <button className="banner-btn">Get started</button>
          <button className="banner-btn">Request a Demo</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
