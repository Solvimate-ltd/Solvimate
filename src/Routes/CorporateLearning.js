import React from 'react'
import Navbar from "../Components/Navbar"
import Hero2img from '../Components/Hero2img'
import Footer from '../Components/Footer'

import CorporateLearningPage from '../Components/AllServicesPages/CorporateLearningPage'


const CorporateLearning = () => {
  return (
    <div>

    <Navbar/>
    <Hero2img heading="Corporate Learning" text="Our team is a group of dedicated professionals committed to delivering outstanding results together" />
    <CorporateLearningPage/>
    <Footer/>

  </div>
  )
}

export default CorporateLearning