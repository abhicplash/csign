import React from "react";
import ServicePageCard from "./ServicePageCard";
import "./ServiceList.css";
import { fullServiceList } from "../../utils/serviceListFull";

const ServiceList = () => {
  return (
    <div className="SL-wrapper">
      <h3>services</h3>
      <h1 className="servicelist-head">
        explore services offered by <br /> <b> creative signature </b> <br />{" "}
        advertisement
      </h1>
      <div className="ServiceList-container">
        {fullServiceList.map((list, index) =>
          <ServicePageCard
            key={index}
            id={index}
            serviceName={list.service}
            image={list.image}
            desc={list.description}
          />
        )}
      </div>
    </div>
  );
};

export default ServiceList;
