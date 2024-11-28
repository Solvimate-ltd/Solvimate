import React from 'react'
import Navbar from "../Components/Navbar"
import Hero2img from '../Components/Hero2img'
import Footer from '../Components/Footer'
import TranslationPage from '../Components/AllServicesPages/TranslationPage'

const Translation = () => {
  return (
    <div>

    <Navbar/>
    <Hero2img heading="Translation" text="Our team is a group of dedicated professionals committed to delivering outstanding results together" />
    
    <TranslationPage/>
    <Footer/>

  </div>
  )
}

export default Translation