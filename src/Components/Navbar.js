import { Link } from "react-router-dom"
import "./NavbarStyles.css"
import logo from "../assets/aakaash-removebg.png"


import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {
    const [click,setClick] = useState(false);
    const handleClick =()=>{
        setClick(!click);

    } 

    const [color,setColor] = useState(false);
    const changecolor=()=>{
        if (window.scrollY >= 100){
            setColor(true)
        }else {
            setColor(false);
        }
    }
    window.addEventListener("scroll",changecolor);

  return (
    <div className={color ? "header header-bg":"header"}>
        <Link to="/"><img src={logo} alt="Portfolio Logo" style={{ height: '80px' }} /></Link>
        <ul className={click ? "nav-menu active":"nav-menu" }  >
            <li> <Link to ="/">Home</Link> </li>
            <li> <Link to ="/Overview">Overview</Link> </li>
            <li> <Link to ="/Services">Services</Link> </li>
            <li> <Link to ="/OurTeam">Our Team</Link> </li>
            <li> <Link to ="/Career">Career</Link> </li>
            <li> <Link to ="/Contact">Contact</Link> </li>



        </ul>
        <div className="hamburger" onClick={handleClick}>

            {click?(<FaTimes size={20} style={{color:"rgb(76, 86, 99)", cursor:"pointer"}}/>):
                        (<FaBars size={20} style={{color:"rgb(76, 86, 99)" , cursor:"pointer"}}/>
                        )}
        </div>
        </div>
        
  )
}

export default Navbar