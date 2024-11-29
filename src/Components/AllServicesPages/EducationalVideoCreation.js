import React from 'react'
import "./ServicesPagesStyles.css";
import image from "../../assets/ServicesPages/Educational_Video_creation.webp";
import { Link } from "react-router-dom";

const EducationalVideoCreation = () => {
  return (
    <div className="body-container">
      <div className="row">
        <div className="contentWrapper">
          <div className="content">
            <span className="textWrapper">
              {/* <span></span> */}
              <h2>-Educational Video Creation-</h2>
              <h2>Solvimate: Transforming Learning with Engaging Educational Videos</h2>
              <p>
              At Solvimate, we bring learning to life through high-quality educational video creation. Understanding the power of visual storytelling in education, we craft videos that are not only informative but also engaging and memorable.<br/><br/>
              Our team of experts combines innovative instructional design with captivating visuals to create content that simplifies complex topics and keeps learners motivated. From animated explainers and lecture recordings to interactive video tutorials, we ensure every production is tailored to meet the unique needs of students and educators.<br/><br/>
              By integrating cutting-edge technology and creative approaches, Solvimate’s educational videos bridge the gap between traditional and modern learning methods, providing students with an immersive learning experience that inspires curiosity and drives success.
              </p>
              <Link to="/contact" className="btn">
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

export default EducationalVideoCreation