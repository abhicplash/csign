import React from "react";
import Layout from "../Layout/Layout";
import Banner from "../Layout/Banner";
import HomeServices from "../Layout/HomeServices";
import Peodu from "./Peodu";
import HomeAbout from "../Layout/HomeAbout";

const Home = () => {
  return (
    <Layout>
      <Banner />
      <HomeServices />
      <HomeAbout/>
    </Layout>
  );
};

export default Home;
