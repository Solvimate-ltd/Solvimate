import React from 'react'
import { Link } from "react-router-dom";
import "./ServicesPagesStyles.css";
import image from "../../assets/ServicesPages/corporate_learning.jpg";


const CorporateLearningPage = () => {
  return (
    <div className="body-container">
      <div className="row">
        <div className="contentWrapper">
          <div className="content">
            <span className="textWrapper">
              {/* <span>-Corporate Learning-</span> */}
              <h2>-Corporate Learning-</h2>
              <h2>Solvimate: Your Trusted Partner in Corporate Learning Content Creation</h2>
              <p>
              At Solvimate, we specialize in delivering exceptional corporate learning content tailored to meet organizational needs. Our dedicated team focuses exclusively on creating impactful and engaging corporate content.<br/><br/>
              With a team of 20+ Subject Matter Experts (SMEs), we bring expertise and creativity to every project. Our corporate content offerings include compelling stories related to products, brands, and companies, as well as product descriptions, website content, email campaigns, social media content, and article writing.<br/><br/>
              We ensure every piece of content aligns with your business objectives, reflecting your brand’s voice and values. Solvimate is committed to driving success through high-quality content that informs, engages, and inspires.
              </p>
              <Link to="/Contact" className="btn">
                Talk To Experts!
              </Link>
            </span>
          </div>
        </div>
        <div className="imgWrapper">
          <img src={image} alt="k12-service provider" />
        </div>
      </div>
    </div>
  )
}

export default CorporateLearningPage  