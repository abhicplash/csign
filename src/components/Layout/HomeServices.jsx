import React from "react";
import "./HomeServices.css";
import { IoLogoBuffer } from "react-icons/io";
import { FaCarRear } from "react-icons/fa6";
import { IoShirtSharp } from "react-icons/io5";
import { FaBeerMugEmpty } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HomeServices = () => {
  const homeserviceList = [
    {
      icon: <IoLogoBuffer />,
      name: "Flyers and Brochures",
      details:
        "Create eye-catching flyers and informative brochures that effectively communicate your message and capture your audience’s attention"
    },
    {
      icon: <FaCarRear />,

      name: "Signage Solutions",
      details:
        "Increase your visibility with our custom sign boards and vehicle stickers, designed to attract attention and promote your business effectively."
    },
    {
      icon: <IoShirtSharp />,

      name: "Custom T-Shirt Printing",
      details:
        "Promote your brand with our stylish T-shirt printing services, perfect for events, promotions, or personal use."
    },
    {
      icon: <FaBeerMugEmpty />,

      name: "Mug Printing and More",
      details:
        "Explore our additional offerings, including mug printing, lamination services, certificate printing, and unique memento works that add a personal touch to your special occasions"
    }
  ];

  return (
    <div className="HSWrapper">
      <span className="hshead">Why Choose Us?</span>
      <p className="para-why">
        Our mission is to provide high-quality custom printing that stands out
        in today’s competitive market. With years of experience in the industry,
        we have built a reputation for delivering exceptional results that
        exceed our clients’ expectations. Our dedicated team of experts utilizes
        the latest technology and top-notch materials to ensure that your
        projects not only look great but also reflect your unique vision.
      </p>
      <div className="HomeServices-container">
        {homeserviceList.map((list, index) =>
          <div className="serviceCard" key={index}>
            <span className="icon-service">
              {list.icon}
            </span>
            <span className="servicename">
              {list.name}
            </span>
            <span className="servicedetails">
              {list.details}
            </span>
          </div>
        )}
      </div>
      <Link to={"/services"}>
        <button className="service-enquiry-btn">Explore More</button>
      </Link>
    </div>
  );
};

export default HomeServices;
