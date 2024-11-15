
import "./OverviewStyles.css"
import React from 'react'
import photo from "../assets/overview.jpg"

const OverviewPage = () => {
  return (
    <div className='form'>
    <div className='contact-information overview-info'>
        <p className='heading-contactinfo'>Overview Solvimate</p>

        <p>We’re on the lookout for dynamic, talented individuals who thrive on innovation, embrace challenges, and are eager to make a meaningful impact! Join our vibrant, <br/>fast-paced team of professionals dedicated to shaping a brighter tomorrow, and take your career to new heights with us.</p>
        <p style={{fontWeight:"bolder"}} >At Solvimate you will</p>
        <p>K12 Service Provider , Corporate Learning</p>
        
        <p>SEO Based Content , Books Writing</p>
        <p>Translation , SEO Optimized Blogs</p>
        
        <p>Higher Level Education , Live Tutoring & Doubt Solving</p>
       
        <p>Curriculum Development , Educational Video Creation</p>
       
        <p style={{fontWeight:"bolder"}}>Our primary focus is to provide top-notch content development services at a budget-friendly cost. This achievement is made possible by our talented and dedicated teams, which include skilled subject matter experts (SMEs), creative content developers, meticulous copy editors, thorough proofreaders, engaging online tutors, innovative instructional designers, localization experts, and professionals in assessment development.</p>

    </div>
    <div className="overview-img">
        <img src={photo}  alt="overview-solvimate"/>
    </div>
</div>

  )
}

export default OverviewPage