import "./HeroImgStyles.css";
import React from 'react';
import { Link } from "react-router-dom";
import photo11 from "../assets/photo11.jpg"

const HeroImg = () => {
  return (
    <div  className="hero" >
        <div className="mask">
            <img className="into-img" src={photo11} alt="IntroImg"/>

        </div>
        <div className="content">
            <h1>Redefining Learning in the Digital Era</h1>
            <p>"Get affordable and high-quality Content Services and Solutions"</p>
            <div>
                <Link to="/services" className="btn">Learn More</Link>
                <Link to="/Contact" className="btn btn-light">Contact us!</Link>
            </div>
              

        </div>

    </div>
  )
}

export default HeroImg