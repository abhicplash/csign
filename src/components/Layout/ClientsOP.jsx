import React from "react";
import "./ClientsOP.css";
import { opinionList } from "../../utils/opinion";
import { PiQuotesDuotone } from "react-icons/pi";

const ClientsOP = () => {
  return (
    <div className="op-container">
      <h1 className="customer-head">customer reviews</h1>
      <h3>
        what our customer say about <br /> <b> Creative Signature </b> advertisement{" "}
      </h3>
      <div className="ClientsOP-container">
        {opinionList.map((list, index) =>
          <div key={index} className="opinionCard">
            <PiQuotesDuotone className="q-icon" />
            {/* <ImQuotesRight  className="q-icon" /> */}
            <span className="say">
              {list.opinion}
            </span>
            <span className="OPname">
              {list.name}
            </span>
            <span className="place">
              {list.where}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientsOP;
