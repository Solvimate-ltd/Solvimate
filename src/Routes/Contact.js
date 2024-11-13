import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Hero2img from '../Components/Hero2img'
import ContactForm from '../Components/ContactForm'
import ContactCard from '../Components/ContactCard'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Hero2img heading="CONTACT US!" text="Get in touch with us today! let's have a chat"/>
      <ContactForm/>
      <ContactCard/>
      <Footer/>
    </div>
  )
}

export default Contact
 