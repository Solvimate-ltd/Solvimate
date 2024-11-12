import React from 'react'
import Navbar from '../Components/Navbar'
import HeroImg from '../Components/HeroImg'
import Footer from '../Components/Footer'
import HomeExpertise from '../Components/HomeExpertise'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg/>
      <HomeExpertise/>
      <Footer/>
    </div>
  )
}

export default Home