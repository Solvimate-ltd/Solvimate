import React from 'react'
import Navbar from "../Components/Navbar"
import Hero2img from '../Components/Hero2img'
import Footer from '../Components/Footer'
import HigherLevelEducationPage from '../Components/AllServicesPages/HigherLevelEducationPage'

const HigherLevelEducation = () => {
  return (
    <div>
    <Navbar/>
    <Hero2img heading="Higher Level Education" text="Our team is a group of dedicated professionals committed to delivering outstanding results together" />
    <HigherLevelEducationPage/>
    <Footer/>
  </div>
  )
}

export default HigherLevelEducation