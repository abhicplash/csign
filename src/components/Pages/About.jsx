import React from "react";
import Layout from "../Layout/Layout";
import AboutBanner from "../Layout/AboutBanner";
import AboutMain from "../Layout/AboutMain";
import AboutService from "../Layout/AboutService";
import ClientsOP from "../Layout/ClientsOP";
import AboutWhy from "../Layout/AboutWhy";

const About = () => {
  return (
    <Layout>
      <AboutBanner />
      <AboutMain />
      <AboutService />
      {/* <ClientsOP /> */}
      <AboutWhy/>
    </Layout>
  );
};

export default About;
