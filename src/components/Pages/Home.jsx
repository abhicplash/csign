import React from "react";
import Layout from "../Layout/Layout";
import Banner from "../Layout/Banner";
import HomeServices from "../Layout/HomeServices";
import Peodu from "./Peodu";

const Home = () => {
  return (
    <Layout>
      <Banner />
      <HomeServices />
    </Layout>
  );
};

export default Home;
