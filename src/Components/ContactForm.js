import './ContactFormStyles.css'
import React from 'react'

const ContactForm = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "affabd8d-84cb-4625-914b-8f26925aa2e2");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert("Message Sent Successfully!");
      // form.reset();
    }
  };








  return (
    <div className='form'>
        <div className='contact-information'>
            <p className='heading-contactinfo'>Contact & Reach Us For More Information</p>

            <p>Our team is available for 24 hours a day and 6 hours a day. We do work in two different time zones, one is as per Indian time and second is for our foreign clients.</p>
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3636592.3789535128!2d78.21790495666548!3d27.113476843040225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39994e9f7b4a09d3%3A0xf6a5476d3617249d!2sUttar%20Pradesh!5e0!3m2!1sen!2sin!4v1731492916089!5m2!1sen!2sin" 
            width="100%" 
            height="200" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            title="Our Location on Google Maps" 
        ></iframe>
        </div>
        <form onSubmit={onSubmit}>
            <lable>Your Name</lable>
            <input type='text'  placeholder='Enter your name' name='name' required></input>
            <lable>Email</lable>
            <input type='email'  placeholder='Enter your email' name='email' required></input>
            <lable>subject</lable>
            <input type='text'  placeholder='Enter your Subject'  name='Subject'required></input>
            <label>Message</label>
            <textarea name='message'   rows="6" placeholder='Type Your message here' required></textarea>
            <button className='btn'> Submit here
            </button>
        </form>
    </div>
  )
}

export default ContactForm



