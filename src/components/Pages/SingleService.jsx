import React from "react";
import "./SingleService.css";
import Layout from "../Layout/Layout";
import { fullServiceListDetailed } from "../../utils/DetailedserviceList";
import { useParams } from "react-router-dom";

const SingleService = () => {
  const { id } = useParams();
  return (
    <Layout>
      {fullServiceListDetailed
        .filter(item => item.id == id)
        .map((list, index) =>
          <div className="singleserv-wrp" key={index}>
            <div className="page-top">
              <h2>
                {list.service}
              </h2>
            </div>
            <div className="singleservice-container">
              <img className="singlserv-img" src={list.image} alt="" />
              <div className="singleservice-details">
                <span className="single-service-head">
                  {list.head}
                </span>
                <span className="single-para-details">
                  {list.description}
                </span>
                <div className="ab-btnwrapper">
                  <button className="ab-btn">Get started</button>
                  <button className="ab-btn">Request an Enquiry</button>
                </div>
              </div>
            </div>
          </div>
        )}
    </Layout>
  );
};

export default SingleService;
