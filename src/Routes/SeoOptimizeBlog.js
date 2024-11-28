import React from 'react'
import Navbar from "../Components/Navbar"
import Hero2img from '../Components/Hero2img'
import Footer from '../Components/Footer'
import SeoOptimizedPage from '../Components/AllServicesPages/SeoOptimizedPage'

const SeoOptimizeBlog = () => {
  return (
    <div>

    <Navbar/>
    <Hero2img heading="SEO-Optimize Blogs" text="Our team is a group of dedicated professionals committed to delivering outstanding results together" />
    <SeoOptimizedPage/>
    <Footer/>

  </div>
  )
}

export default SeoOptimizeBlog