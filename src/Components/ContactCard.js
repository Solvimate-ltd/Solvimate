import "./ContactCardStyles.css"
import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { IoIosMail } from "react-icons/io";


import React from 'react'


const ContactCard = () => {
  return (
    <div class="wrapper">
    <div class="container">
        <div className="info-text">
        <div class="box">
            <div class="logo">
            <FaMapLocationDot size={40} style={{color:"rgb(76, 86, 99)"}} />
            </div>
            <h3>Location Address<br/><span style={{fontSize:"15px", color:"grey"}}>UttarPardesh(INDIA)</span></h3>
        </div>
       
        </div>

        <div class="box">
            <div class="logo">
            <MdOutlinePhoneInTalk size={40} style={{color:"rgb(76, 86, 99)"}} />
            </div>
            <h3>Phone Number<br/><span style={{fontSize:"15px", color:"grey"}}>Number</span></h3>
        </div>
        <div class="box">
            <div class="logo">
            <IoIosMail size={40} style={{color:"rgb(76, 86, 99)"}} />
            </div>
            <h3>Email Addresss<br/><span style={{fontSize:"15px", color:"grey"}}>operationssolvimate@gmail.com</span></h3>
        </div>
    </div>
</div>


  )
}

export default ContactCard