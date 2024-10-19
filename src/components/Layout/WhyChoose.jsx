import React from "react";
import "./WhyChoose.css";
import whyimg from "../../assets/why/why.jpg";
import { Link } from "react-router-dom";

const WhyChoose = () => {
  return (
    <div className="WhyChoose-container">
      <img src={whyimg} alt="" className="whyimg" />
      <div className="whydetails">
        <h1>
          Why Choose <br />
          <b>
            {" "}Creative Signature <br />{" "}
          </b>{" "}
          Advertisement?
        </h1>
        <p>
          With a commitment to quality and customer satisfaction, we ensure that
          every product we create meets the highest standards. Our expert team
          is dedicated to delivering exceptional results that help you achieve
          your marketing goals. Contact us today to discuss how we can bring
          your vision to life!
        </p>
        <Link to={"/contact"}>
          <button className="banner-btn">Request an Enquiry</button>
        </Link>
      </div>
    </div>
  );
};

export default WhyChoose;
