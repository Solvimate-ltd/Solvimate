import React from 'react'
import "./ServicesPagesStyles.css";
import image from "../../assets/ServicesPages/K12-service-provider.jpg";
import { Link } from "react-router-dom";

const SeoBasedLearningPage = () => {
  return (
    <div className="body-container">
      <div className="row">
        <div className="contentWrapper">
          <div className="content">
            <span className="textWrapper">
              {/* <span>-K12 Service Provider-</span> */}
              <h2>-SEO Based Content-</h2>
              <h2>Solvimate: Your Trusted Partner for SEO-Based Corporate Content Creation</h2>
              <p>
              At Solvimate, we specialize in creating SEO-optimized corporate learning content designed to elevate your brand’s online presence and drive meaningful engagement. Our dedicated team of 50+ Subject Matter Experts (SMEs) brings unmatched expertise in developing content that not only informs but also ranks high on search engines.<br/><br/>
              Our services include SEO-rich product descriptions, website content, brand stories, email campaigns, social media content, and article writing. Each piece of content is crafted to seamlessly blend engaging narratives with strategic keywords, ensuring maximum visibility and audience reach.<br/><br/>
              Partner with Solvimate to deliver high-quality, search-engine-optimized content that aligns with your business goals, enhances your brand authority, and attracts the right audience. Let’s help your organization shine in the digital landscape.



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

export default SeoBasedLearningPage