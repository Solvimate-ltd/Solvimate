import React from 'react'
import { Link } from "react-router-dom";
import "./ServicesPagesStyles.css";
import image from "../../assets/ServicesPages/book_writing.jpg";
const BookwritingPage = () => {
  return (
<div className="body-container">
      <div className="row">
        <div className="contentWrapper">
          <div className="content">
            <span className="textWrapper">
              {/* <span>-Corporate Learning-</span> */}
              <h2>-Book Writing-</h2>
              <h2>Solvimate: Your Trusted Partner for Book Writing Services</h2>
              <p>
              At Solvimate, we excel in crafting captivating and well-structured books tailored to your vision. Whether it’s a corporate handbook, an educational guide, or a compelling narrative, our team of 50+ expert writers and editors ensures your ideas are transformed into polished manuscripts.<br/><br/>
              Our services include conceptualizing, researching, writing, and editing books across various genres. We specialize in creating engaging content that aligns with your goals, whether you’re looking to inform, educate, or inspire your readers.<br/><br/>
              With a commitment to quality and creativity, Solvimate delivers books that resonate with your audience and reflect your unique voice. Let us bring your story to life with professionalism and excellence.
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

export default BookwritingPage