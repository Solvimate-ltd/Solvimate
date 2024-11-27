import React from "react";
import "./ServicesPagesStyles.css";
import image from "../../assets/ServicesPages/K12-service-provider.jpg";
import { Link } from "react-router-dom";

const K12pageprovider = () => {
  return (
    <div className="body-container">
      <div className="row">
        <div className="contentWrapper">
          <div className="content">
            <span className="textWrapper">
              <span>-K12 Service Provider-</span>
              <h2>E-LEARNING & CONTENT DEVELOPMENT</h2>
              <p>
                Based on the unique needs of an organization, Solvimate offers
                comprehensive support across every stage of content development
                or delivers tailored end-to-end solutions. Our team of skilled
                experts specializes in enabling employees to develop key
                behavioral changes and acquire essential knowledge through
                custom e-learning content. Solvimate's custom e-learning
                services focus on high engagement by incorporating real-life
                scenarios that are directly applicable to the job. We design
                content that aligns seamlessly with an organization’s values,
                business objectives, and branding, ensuring a personalized
                learning experience. Our solutions provide learners with easy,
                on-demand access to content anytime, anywhere, empowering them
                to achieve their goals efficiently. With our experienced
                instructional designers and developers, we craft custom
                e-learning modules that are flexible and easy to update,
                minimizing the effort needed for future changes. Additionally,
                we create targeted assessments that deliver value to both
                learners and organizations, supporting meaningful skill
                development and measurable outcomes. Solvimate is your partner
                in transforming learning experiences into tangible results.
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
  );
};

export default K12pageprovider;
