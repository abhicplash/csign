import React from "react";
import "./AboutConnect.css";
import { Link } from "react-router-dom";

const AboutConnect = () => {
  return (
    <div className="about-connect-container">
      <div className="about-connect-wrapper">
        <h1>Connect with Us</h1>
        <p>
          Are you ready to take your branding and marketing efforts to the next
          level? We invite you to contact us today to discuss your ideas and see
          how our printing and design services can help you achieve your goals.
          Experience the difference with <b> Creative Signature </b>{" "}
          Advertisement—where your vision is our mission, and your success is
          what we strive for!
        </p>
        <Link to={"/contact"}>
          <button>Contact Us</button>
        </Link>
      </div>
    </div>
  );
};

export default AboutConnect;
