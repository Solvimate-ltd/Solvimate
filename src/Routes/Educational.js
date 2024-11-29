import React from 'react'
import Navbar from "../Components/Navbar"
import Hero2img from '../Components/Hero2img'
import Footer from '../Components/Footer'
import EducationalVideoCreation from '../Components/AllServicesPages/EducationalVideoCreation'
const Educational = () => {
  return (
    <div>
      <Navbar/>
      <Hero2img heading="Educational Video Creation" text="Our team is a group of dedicated professionals committed to delivering outstanding results together" />
      <EducationalVideoCreation/>
      <Footer/>
    </div>
  )
}

export default Educational