import React from 'react'
import Navbar from "../Components/Navbar"
import Hero2img from '../Components/Hero2img'
import Footer from '../Components/Footer'
import K12pageprovider from '../Components/AllServicesPages/K12pageprovider'


const K12page = () => {
  return (
    <div>
      <Navbar/>
      <Hero2img heading="K12 Service Provider" text="Our team is a group of dedicated professionals committed to delivering outstanding results together" />
      <K12pageprovider/>

      <Footer/>
    </div>
  )
}

export default K12page