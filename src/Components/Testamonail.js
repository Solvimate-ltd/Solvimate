import "./TestamonialStyles.css"
import React, { useState, useEffect } from "react";

const testimonials = [
  {
    name: "John Doe",
    title: "Software Engineer",
    text: "This platform has transformed the way I work. Highly recommended!",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Jane Smith",
    title: "Graphic Designer",
    text: "Amazing experience! The features are intuitive and easy to use.",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Michael Brown",
    title: "Entrepreneur",
    text: "The customer service is outstanding! I've never felt so valued.",
    image: "https://via.placeholder.com/100",
  },
];


const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

 
  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="testimonial-slider">
      <button className="slider-button left" onClick={goToPrevious}>
        &#8592;
      </button>

      <div className="testimonial-content">
        <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="testimonial-image" />
        <p className="testimonial-text">"{testimonials[currentIndex].text}"</p>
        <h3 className="testimonial-name">{testimonials[currentIndex].name}</h3>
        <p className="testimonial-title">{testimonials[currentIndex].title}</p>
      </div>

      <button className="slider-button right" onClick={goToNext}>
        &#8594;
      </button>
    </div>
  );
};


export default TestimonialSlider;
