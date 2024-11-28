import React from 'react'
import Navbar from "../Components/Navbar"
import Hero2img from '../Components/Hero2img'
import Footer from '../Components/Footer'
import BookwritingPage from '../Components/AllServicesPages/BookwritingPage'

const BookWriting = () => {
  return (
    <div>
     <Navbar/>
    <Hero2img heading="Book Wrting" text="Our team is a group of dedicated professionals committed to delivering outstanding results together" />
   <BookwritingPage/>
    <Footer/>
    </div>
  )
}

export default BookWriting