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
      name: "Flyers",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, sint"
    },
    {
      icon: <FaCarRear />,

      name: "Vehicle Sticker",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, sint"
    },
    {
      icon: <IoShirtSharp />,

      name: "T Shirt Printing",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, sint"
    },
    {
      icon: <FaBeerMugEmpty />,

      name: "Mug Printing",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, sint"
    }
  ];

  return (
    <div className="HSWrapper">
      <span className="hshead">
        we Provide the <b>best services </b>
      </span>

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
      <Link to={"/services"}>More Services</Link>
    </div>
  );
};

export default HomeServices;
