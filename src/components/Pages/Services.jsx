import React from "react";
import Layout from "../Layout/Layout";
import "../../App.css";
import ServiceMain from "../Layout/ServiceMain";
import ServiceList from "../Layout/ServiceList";

const Services = () => {
  return (
    <Layout>
      <div className="servicepage-top">
        <h1>Services</h1>
      </div>
      <ServiceMain/>
      <ServiceList/>
    </Layout>
  );
};

export default Services;
