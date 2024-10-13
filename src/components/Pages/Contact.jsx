import React from "react";
import Layout from "../Layout/Layout";
import "./Contact.css";
import { FaPhoneAlt } from "react-icons/fa";
// import { GiEnvelope } from "react-icons/gi";

const Contact = () => {
  return (
    <Layout>
      <div className="contact-container">
        <div className="Page-top">
          <h1>Contact Us</h1>
        </div>
        <div className="contact-details">
          <h4>Contact us</h4>
          <h2>GEt in touch with us</h2>
          Mail-{" "}
          <a href="mailto:info@creativesignatureadvertisement.com">
            info@creativesignatureadvertisement.com
          </a>
        </div>
        <div className="contact-information">
          <div className="contact-icons">
            {/* <h4>information</h4> */}

            <div className="contact-info">
              <FaPhoneAlt className="icon" />
              +971-542411778
            </div>
            <div className="contact-info">
              <FaPhoneAlt className="icon" />
              +971-504339252
            </div>
            <div className="contact-info">
              <FaPhoneAlt className="icon" />
              +971-509460604
            </div>
            <div className="contact-info">
              <FaPhoneAlt className="icon" />
              +971-581944089
            </div>
          </div>
          <div className="contact-form">
            <input type="text" placeholder=" Enter Your Name " />
            <input type="text" placeholder=" Enter Your Number" />
            <textarea name="" id="" placeholder="Enter Your Message" />
            <button>send Message</button>
          </div>
        </div>
        <div className="contact-map-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.4807692631907!2d55.45146337538489!3d25.28804647765264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f412cb0e429%3A0xed35b9274ab0422d!2sCreative%20Signature%20Advertisement!5e0!3m2!1sen!2sin!4v1728496944270!5m2!1sen!2sin"
            title="map"
            className="contact-map"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
