import "./CareerPageStyles.css"
import { IoIosArrowRoundForward } from "react-icons/io";


import React from 'react'

const CareerPage = () => {
  return (


<div className='form'>
        <div className='contact-information '>
            <p className='heading-contactinfo'>Join Us on Our Mission to Innovate and Inspire!</p>

            <p>We’re on the lookout for dynamic, talented individuals who thrive on innovation, embrace challenges, and are eager to make a meaningful impact! Join our vibrant, <br/>fast-paced team of professionals dedicated to shaping a brighter tomorrow, and take your career to new heights with us.</p>
            <p style={{fontWeight:"bolder"}} >At Solvimate you will</p>
            <p><IoIosArrowRoundForward />Unleash your talent, drive, and creativity with us!</p>
            <p><IoIosArrowRoundForward/>Prepare to embrace fresh opportunities and exciting challenges every day!</p>
            <p><IoIosArrowRoundForward/>Work with cutting-edge technologies and drive innovation forward!</p>
            <p><IoIosArrowRoundForward/>Accelerate your career and unlock new growth opportunities with us!</p>
            <p style={{fontWeight:"bolder"}}>Have what it takes? Join our team of experts and make a real impact!</p>

        </div>
        <form>
            <lable>Your Name</lable>
            <input type='text'></input>
            <lable>Email</lable>
            <input type='email'></input>
            <lable>Contact No.</lable>
            <input type='Number'></input>
            <lable>location</lable>
            <input type='text'></input>
            <lable>Position</lable>
            <input type='text'></input>
            <lable>Total Relevant work Experience*</lable>
            <input type='text'></input>
            <lable>Upload Your Resume  (PDF only.)</lable>
            <input type="file" name="uploadFile" accept=".pdf" />

            <label>Message</label>
            <textarea rows="6" placeholder='Type Your message here'></textarea>
            <button className='btn'> Submit here
            </button>
        </form>
    </div>


    
  )
}

export default CareerPage