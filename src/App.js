import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import Contact from "./components/Pages/Contact";
import About from "./components/Pages/About";
import Services from "./components/Pages/Services";
import SingleService from "./components/Pages/SingleService";
// import UpTop from "./components/Layout/UpTop";
import Reload from "./components/Layout/Reload";

function App() {
  return (
    <>
      <BrowserRouter>
        <Reload  />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/single/:id" element={<SingleService />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
