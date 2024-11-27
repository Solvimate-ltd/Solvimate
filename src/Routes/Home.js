import React from 'react'
import Navbar from '../Components/Navbar'
import HeroImg from '../Components/HeroImg'
import Footer from '../Components/Footer'
import HomeExpertise from '../Components/HomeExpertise'
import ServiceCard from '../Components/ServiceCard'



const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg/>
      <ServiceCard/>
      <HomeExpertise/>
      {/* <h1 style={{ textAlign: 'center' }}>Testimonial</h1> */}
      <Footer/>
    </div>
  )
}

export default Home