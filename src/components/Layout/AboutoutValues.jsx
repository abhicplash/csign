import React from "react";
import aboutvalues from "../../assets/about/aboutvalues.jpg";
import "./AboutoutValues.css";

const AboutoutValues = () => {
  const valuesData = [
    {
      Number: "01",
      head: "Customer-Centric Approach",
      details:
        " At Creative Signature Advertisement, our clients come first. We work closely with you to understand your specific needs and provide personalized solutions that help enhance your brand identity in a competitive market."
    },
    {
      Number: "02",
      head: "Quality Assurance",
      details:
        "  We are dedicated to delivering the best quality prints and designs. We use only topquality materials and advanced printing techniques to ensure that our products are durable and visually appealing."
    },
    {
      Number: "03",
      head: "Timely Delivery",
      details:
        " We know your time is valuable. That’s why we ensure all projects are completed on schedule without sacrificing quality, allowing you to meet your important deadlines with confidence. "
    }
  ];
  return (
    <div className="AboutoutValues-container">
      <div className="AboutoutValues-imgwrapper">
        <h1>Our Values</h1>
        <img src={aboutvalues} alt="" className="aboutvaluesimg" />
      </div>
      <div className="AboutoutValues-detailswrapper">
        {valuesData.map(list =>
          <div className="about-values-card" key={list.Number}>
            {/* <span className="head">
              {list.Number}
            </span> */}
            {/* <div> */}
              <span className="carddatahead">
                {list.head}
              </span>
              <span className="carddatapara" >
                {list.details}
              </span >
            </div>
          // </div>
        )}
      </div>
    </div>
  );
};

export default AboutoutValues;
