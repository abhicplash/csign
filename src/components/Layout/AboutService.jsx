import React from "react";
import "./AboutService.css";
import HomeServices from "./HomeServices";
import { Link } from "react-router-dom";

const AboutService = () => {
  return (
    <div className="AboutService-wrapper">
      <h4>Our services</h4>
      <HomeServices />
      <Link to={"/services"}>More Services</Link>
    </div>
  );
};

export default AboutService;
