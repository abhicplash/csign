import React from "react";
import Layout from "../Layout/Layout";
import Banner from "../Layout/Banner";
import HomeServices from "../Layout/HomeServices";
import HomeAbout from "../Layout/HomeAbout";
import ClientsOP from "../Layout/ClientsOP";

const Home = () => {
  return (
    <Layout>
      <Banner />
      <HomeServices />
      <HomeAbout/>
      <ClientsOP/>
    </Layout>
  );
};

export default Home;
