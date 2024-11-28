import React from 'react'
import { Link } from "react-router-dom";
import "./ServicesPagesStyles.css";
import image from "../../assets/ServicesPages/Translation.jpg";

const TranslationPage = () => {
  return (
    <div className="body-container">
    <div className="row">
      <div className="contentWrapper">
        <div className="content">
          <span className="textWrapper">
            {/* <span>-Corporate Learning-</span> */}
            <h2>-Translation-</h2>
            <h2>Solvimate: Your Trusted Partner for Professional Translation Services</h2>
            <p>
            At Solvimate, we specialize in delivering accurate and culturally nuanced translation services to meet the diverse needs of our clients. Whether you’re looking to expand your business globally, localize your content, or connect with a multilingual audience, our team of language experts ensures your message is effectively communicated.<br/><br/>
            We provide professional translation for documents, websites, marketing materials, books, and more, covering a wide range of industries. Our translators are not only fluent in multiple languages but also deeply understand regional cultural contexts to maintain the authenticity of your content.<br/><br/>
            With a focus on precision, timely delivery, and quality, Solvimate ensures your translations resonate with your audience and align with your goals. Partner with us to bridge language barriers and enhance global communication.
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

export default TranslationPage