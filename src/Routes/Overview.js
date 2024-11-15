import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Hero2img from '../Components/Hero2img'
import OverviewPage from '../Components/OverviewPage'

const Overview = () => {
  return (
    <div>
      <Navbar/>
      <Hero2img heading="OVERVIEW" text="Customer Satisfaction is Our Biggest Advertisement!"/>
      <OverviewPage/>
     
      <Footer/>
    </div>
  )
}

export default Overview