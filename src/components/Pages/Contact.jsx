import React from "react";
import Layout from "../Layout/Layout";
import "./Contact.css";
// import { FaPhoneAlt } from "react-icons/fa";
// import { GiEnvelope } from "react-icons/gi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <Layout>
      <div className="contact-container">
        <div className="Page-top">
          <h1>Contact Us</h1>
        </div>
        <div className="contact-details">
          <h4>Get in Touch with Creative Signature Advertisement</h4>
          <p>
            At <b>Creative Signature </b>
            Advertisement, we are committed to providing exceptional printing
            and design services tailored to your unique needs. Whether you have
            questions about our services, need a quote, or want to discuss your
            project ideas, we are here to help! Our dedicated team of
            professionals is ready to assist you in achieving your branding and
            marketing goals.
          </p>
          {/* Mail-{" "} */}
          {/* <a href="mailto:info@creativesignatureadvertisement.com">
            info@creativesignatureadvertisement.com
          </a> */}
        </div>
        <div className="contact-information">
          <div className="contactpage-new-wrapper">
            <div className="cn-details">
              <span className="cnhead">Address</span>
              <span className="cn-details-info">Muweilah Sharjah</span>
              <span className="cn-details-info">UAE</span>
            </div>{" "}
            <div className="cn-details">
              <span className="cnhead">Contact</span>
              <span className="cn-details-info">+971 542411778</span>
              <span className="cn-details-info">+971 504339252</span>
              <span className="cn-details-info">+971 509460604</span>
              <span className="cn-details-info">+971 581944089</span>
            </div>{" "}
            <div className="cn-details">
              <span className="cnhead">Opening Time</span>
              <span className="cn-details-info">
                Monday-Friday :9 AM - 6 PM
              </span>
              <span className="cn-details-info">
                Saturday-Sunday :9 AM - 5 PM
              </span>
            </div>
            <div className="cn-details">
              <span className="cnhead">Stay Connected</span>
              <div className="cn-icons">
                <FaFacebook  className="cn-s-icon"/>
                <FaInstagram className="cn-s-icon"/>
                <FaXTwitter className="cn-s-icon"/>
                <FaLinkedin className="cn-s-icon"/>
              </div>
            </div>
          </div>
          {/* <div className="contact-icons">

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
          </div> */}
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
