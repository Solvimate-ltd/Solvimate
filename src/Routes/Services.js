import React from 'react'
import Navbar from '../Components/Navbar'
import Hero2img from '../Components/Hero2img'
import Footer from '../Components/Footer'
import ServiceCard from '../Components/ServiceCard'

const Services = () => {
  return (
    <div>
      <Navbar/>
      <Hero2img image="../assets/photo10.jpg" heading="Services" text="Services Offered by the Solvimate-LTD"  />
      <ServiceCard/>
      <Footer/>


    </div>
  )
}

export default Services