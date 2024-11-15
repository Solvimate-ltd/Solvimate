import React from "react";
import "./TestamonialStyles.css";

const testimonials = [
  {
    name: "John Doe",
    title: "CEO, Example Corp",
    image: "https://via.placeholder.com/100",
    text: "This company provided exceptional service. Highly recommend!",
  },
  {
    name: "Jane Smith",
    title: "CTO, Tech Solutions",
    image: "https://via.placeholder.com/100",
    text: "Their expertise in content development is unparalleled.",
  },
  {
    name: "Michael Johnson",
    title: "Product Manager, Innovate Inc",
    image: "https://via.placeholder.com/100",
    text: "Outstanding quality and great attention to detail!",
  },
];

const Testimonial = () => {
  return (
    <div className="testimonial-container">
       
      {testimonials.map((testimonial, index) => (
        <div key={index} className="testimonial-card">
          <img src={testimonial.image} alt={testimonial.name} />
          <h3>{testimonial.name}</h3>
          <p className="title">{testimonial.title}</p>
          <p className="text">"{testimonial.text}"</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonial;
