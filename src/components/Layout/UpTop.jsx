import React from "react";
import { WiDirectionUp } from "react-icons/wi";
import "./UpTop.css";

const UpTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return <WiDirectionUp className="iconmb" onClick={handleScrollToTop} />;
};

export default UpTop;
