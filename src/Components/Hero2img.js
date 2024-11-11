import "./Hero2imgStyles.css";
import React, { Component } from 'react'

class Hero2img extends Component{
    render(){ return  (
        <div className="hero-img">
            <div className="heading">
                <h1 style={{"color":"rgb(194, 227, 129)"}}>{this.props.heading}</h1>
                <p style={{"color":"#fff", "margin-top":"2rem"}}>{this.props.text}</p>
    
    
            </div>
    
        </div>
      )}
 
}

export default Hero2img