import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Hero2img from '../Components/Hero2img'

const Overview = () => {
  return (
    <div>
      <Navbar/>
      <Hero2img heading="OVERVIEW" text="Customer Satisfaction is Our Biggest Advertisement!"/>
      <Footer/>
    </div>
  )
}

export default Overview