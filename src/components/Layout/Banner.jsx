import React from "react";
import "./Banner.css";
import banner from "../../assets/Banner/banner.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="img-wrapper">
        <img src={banner} alt="" className="banner-img" />
      </div>
      <div className="banner-details">
        <span className="heading">
          Welcome to <br /> <b>Creative Signature</b> <br />
          Advertisement
        </span>
        <span className="para">
          At <b>Creative Signature </b>
          Advertisement, we specialize in turning your ideas into stunning
          visual realities through our comprehensive range of printing services
          and design solutions. Whether you’re a business looking to enhance
          your brand identity or an individual seeking custom products, we are
          here to help you every step of the way.
        </span>
        <div className="btnwrapper">
          <Link to={"/services"}>
            <button className="banner-btn">Get started</button>
          </Link>
          <Link to={"/contact"}>
            <button className="banner-btn">Request a Demo</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
