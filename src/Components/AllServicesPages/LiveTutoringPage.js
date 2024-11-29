import React from 'react'
import "./ServicesPagesStyles.css";
import image from "../../assets/ServicesPages/live-tutoring.jpg";
import { Link } from "react-router-dom";

const LiveTutoringPage = () => {
  return (
    <div className="body-container">
      <div className="row">
        <div className="contentWrapper">
          <div className="content">
            <span className="textWrapper">
              {/* <span></span> */}
              <h2>Live Tutoring & Doubt Solving</h2>
              <h2>Solvimate: Revolutionizing Learning with Live Tutoring and Doubt-Solving</h2>
              <p>
              At Solvimate, we believe that personalized attention is key to effective learning. Our live tutoring and doubt-solving services are designed to provide students with real-time guidance, ensuring that every learner receives the support they need to excel. Whether it's tackling complex concepts, preparing for exams, or gaining clarity on challenging topics, our experienced educators are here to help.<br/><br/>
              Our live tutoring sessions offer an interactive platform where students can engage directly with subject matter experts. These sessions are tailored to individual learning paces and styles, making them highly effective for building confidence and understanding. Additionally, our doubt-solving services are available on demand, allowing students to seek immediate help without delay.<br/><br/>
              With Solvimate’s commitment to quality education, we aim to bridge learning gaps and empower students with the tools they need to succeed academically. Our approach ensures not only concept mastery but also fosters a love for learning that lasts a lifetime.
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

export default LiveTutoringPage