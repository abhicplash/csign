import React from "react";
import "./ServicePageCard.css";
import { Link } from "react-router-dom";
import { CgArrowTopRightO } from "react-icons/cg";

const ServicePageCard = ({ serviceName, image, desc, id }) => {
  return (
    <div className="card-wrapper">
      <span className="servicemain-card-head">
        {serviceName}
      </span>
      <img className="servicemain-card-img" src={image} alt="" />
      <span className="servicemain-card-para">
        {desc}
      </span>
      <div className="forward">
        <Link to={"/single/" + id}>
          <CgArrowTopRightO />
        </Link>
      </div>
    </div>
  );
};

export default ServicePageCard;