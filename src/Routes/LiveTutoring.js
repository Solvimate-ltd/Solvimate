import React from 'react'
import Navbar from "../Components/Navbar"
import Hero2img from '../Components/Hero2img'
import Footer from '../Components/Footer'
import LiveTutoringPage from '../Components/AllServicesPages/LiveTutoringPage'

const LiveTutoring = () => {
  return (
    <div>
          <Navbar/>
      <Hero2img heading="Live Tutoring & Doubt Solving" text="Our team is a group of dedicated professionals committed to delivering outstanding results together" />
      <LiveTutoringPage/>

      <Footer/>
    </div>
  )
}

export default LiveTutoring