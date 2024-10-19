import React from "react";
import "./AboutMain.css";
import abmainimg from "../../assets/about/abutmainimg.jpg";
import missionimg from "../../assets/about/missionimg.jpg";

const AboutMain = () => {
  return (
    <div className="am-wrapper">
      <div className="AboutMain-container">
        <img src={abmainimg} alt="" className="imgabmain" />
        <div className="abDetails-wrapper">
          <span className="headingabmain">
            Welcome to{" "}
            <b>
              {" "}<br /> Creative Signature{" "}
            </b>
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
          {/* <div className="ab-btnwrapper">
            <button className="ab-btn">Get started</button>
            <button className="ab-btn">Request an Enquiry</button>
          </div> */}
        </div>
      </div>
      <div className="AboutMain-container2">
        <img src={missionimg} alt="" className="imgabmain" />
        <div className="abDetails-wrapper">
          <span className="headingabmain">Our Mission</span>
          <p className="paraabmain">
            Our mission is simple: we want to help brands grow and stand out by
            offering high-quality printing solutions. We are dedicated to
            exceeding your expectations by delivering products that reflect your
            vision and help you reach your marketing goals. We understand that
            good communication is essential for successful branding, and our
            services are designed to support that goal.
          </p>
          {/* <div className="ab-btnwrapper"> */}
          {/* <button className="ab-btn">Get started</button> */}
          <button className="ab-btn">Request an Enquiry</button>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutMain;
