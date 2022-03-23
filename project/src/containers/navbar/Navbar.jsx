import React from 'react'
import './navbar.css'
import logo from '../../assets/Logo.PNG'

const Navbar = () => {
  return (
    <div className="fr_navbar">
      <div className="fr_navbar-links">
        <div className="fr_navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="fr_navbar-links_container">
          <p><a href='#home'>Home</a></p>
          <p><a href='#home'>Planner</a></p>  
          <p><a href='#home'>Day</a></p>  
          <p><a href='#home'>Timer</a></p>  
          <p><a href='#home'>Setting</a></p>    
        </div>  
      </div>
      <div className="fr_navbar-sign">
        <p><a href='#sign-in'>Sign in</a></p>
        <button type="#sign-up"><a href='#sign-in'>Sign up</a></button>
      </div>
    </div>
  )
}

export default Navbar