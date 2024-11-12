import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Hero2img from '../Components/Hero2img'

import Work from '../Components/Work'


const OurTeam = () => {
  return (
    <div>
        <Navbar/>
        <Hero2img heading="OUR TEAM" text="Our team is a group of dedicated professionals committed to delivering outstanding results together" />
       
       <Work/>
        <Footer/>
        
    </div>
  )
}

export default OurTeam