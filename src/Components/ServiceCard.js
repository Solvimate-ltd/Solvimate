import { Link } from "react-router-dom";
import "./ServiceCardStyles.css";
import React from "react";
import {
  FcParallelTasks,
  FcWorkflow,
  FcTodoList,
  FcReading,
  FcCollaboration,
} from "react-icons/fc";
import { ImBook } from "react-icons/im";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdEngineering, MdOutlineVideoChat } from "react-icons/md";
import { SiGithubactions } from "react-icons/si";

const ServiceCard = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <div className="left">
            <h4 className="servics-icon">
              {" "}
              <FcWorkflow
                size={60}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </h4>
          </div>
          <div className="right">
            <p className="btc">K12 Service Provider</p>

            <p>
              We are dedicated to providing comprehensive services to meet the needs of K12 schools, Edtech companies and publication houses.
            </p>

            <Link to="/K12page" className="btn">
              Get this service!
            </Link>
          </div>
        </div>

        <div className="card">
          <div className="left">
            <h4 className="servics-icon">
              {" "}
              <FcParallelTasks
                size={60}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </h4>
          </div>
          <div className="right">
            <p className="btc">Corporate Learning</p>

            <p>
             Solvimate, a trusted partner for the corporate learning content creation. We have a dedicated team for content creation of corporate learning content.
            </p>

            <Link to="/CorporateLearning" className="btn">
              Get this service!
            </Link>
          </div>
        </div>

        <div className="card">
          <div className="left">
            <h4 className="servics-icon">
              {" "}
              <FcTodoList
                size={60}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </h4>
          </div>
          <div className="right">
            <p className="btc">SEO Based Content</p>

            <p>
              Providing CEO-focused content that empowers leaders with insights,
              strategies, and tools to drive impactful decision-making and
              sustainable growth.
            </p>

            <Link to="/SeoBasedContent" className="btn">
              Get this service!
            </Link>
          </div>
        </div>

        <div className="card">
          <div className="left">
            <h4 className="servics-icon">
              {" "}
              <ImBook
                size={60}
                style={{ color: "skyblue", marginRight: "2rem" }}
              />
            </h4>
          </div>
          <div className="right">
            <p className="btc">Books Writing</p>

            <p>
              Crafting engaging and impactful books tailored to your vision,
              with expert support at every stage of the writing process.
            </p>

            <Link to="/BookWriting" className="btn">
              Get this service!
            </Link>
          </div>
        </div>

        <div className="card">
          <div className="left">
            <h4 className="servics-icon">
              {" "}
              <FaPeopleGroup
                size={60}
                style={{ color: "skyblue", marginRight: "2rem" }}
              />
            </h4>
          </div>
          <div className="right">
            <p className="btc">Translation</p>

            <p>
              Providing precise and culturally adapted translation services to
              help your message resonate with global audiences.
            </p>

            <Link to="/Translation" className="btn">
              Get this service!
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="left">
            <h4 className="servics-icon">
              {" "}
              <FcReading
                size={60}
                style={{ color: "skyblue", marginRight: "2rem" }}
              />
            </h4>
          </div>
          <div className="right">
            <p className="btc">Higher Level Education</p>

            <p>
              Supporting higher education with tailored resources and solutions
              to empower learners and advance academic excellence.
            </p>

            <Link to="/HigherLevelEducation" className="btn">
              Get this service!
            </Link>
          </div>
        </div>

        <div className="card">
          <div className="left">
            <h4 className="servics-icon">
              {" "}
              <FcCollaboration
                size={60}
                style={{ color: "skyblue", marginRight: "2rem" }}
              />
            </h4>
          </div>
          <div className="right">
            <p className="btc">Live Tutoring & Doubt Solving</p>

            <p>
              Offering live tutoring and instant doubt-solving to provide
              personalized, real-time support for effective learning.
            </p>

            <Link to="/LiveTutoring" className="btn">
              Get this service!
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="left">
            <h4 className="servics-icon">
              {" "}
              <SiGithubactions
                size={60}
                style={{ color: "skyblue", marginRight: "2rem" }}
              />
            </h4>
          </div>
          <div className="right">
            <p className="btc">Curriculum Development</p>

            <p>
              Designing comprehensive curriculum development solutions to
              enhance learning outcomes and align with educational standards and
              goals.
            </p>

            <Link to="/Curriculum" className="btn">
              Get this service!
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="left">
            <h4 className="servics-icon">
              {" "}
              <MdOutlineVideoChat
                size={60}
                style={{ color: "skyblue", marginRight: "2rem" }}
              />
            </h4>
          </div>
          <div className="right">
            <p className="btc">Educational Video Creation</p>

            <p>
              Creating engaging educational videos that simplify complex
              concepts and enhance learning through visual storytelling and
              interactive content.
            </p>

            <Link to="/Educational" className="btn">
              Get this service!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
