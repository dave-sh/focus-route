import React from 'react'
import './navbar.css'
import logo from '../../assets/Logo.PNG'
import {  Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fr_navbar">
      <div className="fr_navbar-links">
        <div className="fr_navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="fr_navbar-links_container">
          <p><Link to ="/">Home </Link></p>
          <p><Link to ="/day">Day </Link></p>  
          <p><Link to ="/planner">Planner</Link></p>  
          <p><Link to ="/timer">Timer</Link></p>  
          <p><Link to ="/setting">Setting</Link></p>    
        </div>  
      </div>
      <div className="fr_navbar-sign">
        <p><Link to ="/sign_in">Sign In</Link></p>
        <button type="#sign-up"><Link to ="/sign_up">Sign Up</Link></button>
      </div>
    </div>
  )
}

export default Navbar