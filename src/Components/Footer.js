import {
  FaFacebook,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import "./FooterStyles.css";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">


          <div className="location">


            <FaHome size={20} style={{ color: "#fff", marginRight:"2rem" }} />
              <p style={{ color: "#fff"}}> 123 Housing society.</p>
              <p>Bangladesh.</p></div>
            

         


          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              1-2-3-4-5-6-7-8-9
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              solvimate email
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About the company</h4>
          <p>
            Solvimate-LTD Grow Together, a trailblazer in the content industry, cultivates
            knowledge through innovative solutions, fostering learning
            excellence for a brighter future.
          </p>
          <div className="social">
            <FaFacebook
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaTwitter
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
