import "./WorkCardStyles.css"
import React from 'react'
import { NavLink } from "react-router-dom"

const WorkCard = (props) => {
  return (
    <div className="project-card">
                <img src= {props.imgsrc} alt="project-img"/>
                <h3  className="project-title">
                    {props.name}

                </h3>
               
                <h3  className="project-title">
                    {props.title}

                </h3>
                
                <div className="pro-details">
                    <p >{props.text}</p>
                    <div className="pro-btns">

                        <NavLink  to="" className="btn">Read More</NavLink>

                    </div>
                </div>

            </div>
  )
}

export default WorkCard