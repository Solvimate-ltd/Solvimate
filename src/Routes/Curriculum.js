import React from 'react'
import Navbar from "../Components/Navbar"
import Hero2img from '../Components/Hero2img'
import Footer from '../Components/Footer'
import CurriculumDevelopment from '../Components/AllServicesPages/CurriculumDevelopment'

const Curriculum = () => {
  return (
    <div>
      <Navbar/>
      <Hero2img heading="Curriculum Development " text="Our team is a group of dedicated professionals committed to delivering outstanding results together" />
      <CurriculumDevelopment/>
      <Footer/>
    </div>
  )
}

export default Curriculum