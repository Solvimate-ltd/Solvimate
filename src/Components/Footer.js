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
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
        <h4 style={{ color: "#fff"}}>Contact Information.</h4>
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight:"2rem" }} />
              <p style={{ color: "#fff"}}>Himachal pardesh.</p>
              <p style={{ color: "#fff"}}> INDIA</p>
              </div>
          <div className="phone">
            <h4 style={{ color: "#fff"}}>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +91 60062 34054
            </h4>
          </div>
          <div className="email">
            <h4 style={{ color: "#fff"}}>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              solvimate.hr@gmail.com
            </h4>
          </div>
        </div>
        <div className="left" >
        <h4 style={{ color: "#fff"}}>Main Links</h4>
          
              <p style={{marginBottom:"10px"}}><Link style={{color:"#fff"}} to="/">Home</Link></p>
              <p style={{marginBottom:"10px"}}><Link style={{color:"#fff"}}  to="/overview">Overview</Link></p>

              <p style={{marginBottom:"10px"}}><Link style={{color:"#fff"}}  to="/services">Services</Link></p>

              <p style={{marginBottom:"10px"}}><Link style={{color:"#fff"}}  to="/carrer">carrer</Link></p>
              <p style={{marginBottom:"10px"}}><Link style={{color:"#fff"}}  to="/contact">Contact</Link></p>


              
        
         
        </div> 


        <div className="right">
          <h4 style={{ color: "#fff"}}>About the company</h4>
          <p style={{ color: "#fff"}}>
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
