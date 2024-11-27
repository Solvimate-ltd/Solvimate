import React from 'react'
import Navbar from "../Components/Navbar"
import Hero2img from '../Components/Hero2img'
import Footer from '../Components/Footer'
import SeoBasedLearningPage from '../Components/AllServicesPages/SeoBasedLearningPage'




const SeoBasedContent = () => {
    return (
        <div>
          <Navbar/>
          <Hero2img heading="SEO-Based Learning" text="Our team is a group of dedicated professionals committed to delivering outstanding results together" />
          <SeoBasedLearningPage/>
          <Footer/>
        </div>
      )
}

export default SeoBasedContent