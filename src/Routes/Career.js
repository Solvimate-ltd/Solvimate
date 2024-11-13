import React from 'react'
import Navbar from "../Components/Navbar"
import Footer from '../Components/Footer'
import Hero2img from '../Components/Hero2img'
import CareerPage from '../Components/CareerPage'

const Carrer = () => {
  return (
    <div>
      <Navbar/>
      <Hero2img heading="CAREER" text="Your trusted carriers for fast, secure delivery." />
      <CareerPage/>
      <Footer/>
      
    </div>
  )
}

export default Carrer