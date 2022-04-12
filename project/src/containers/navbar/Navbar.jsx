import React from 'react'
import './navbar.css'
import logo from '../../assets/Logo.PNG'
import {  Link } from "react-router-dom";
import { useUserAuth } from '../../context/UserAuthContext';

const Navbar = () => {

  const {user, logOut} = useUserAuth();

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err.message);
      
    }
  }
  return (
    <div className="fr_navbar">
      <div className="fr_navbar-links">
        <div className="fr_navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="fr_navbar-links_container">
          <p><Link to ="/dashboard">Home </Link></p>
          <p><Link to ="/day">Day </Link></p>  
          <p><Link to ="/planner">Planner</Link></p>  
          <p><Link to ="/timer">Timer</Link></p>  
          <p><Link to ="/setting">Setting</Link></p>    
        </div>  
      </div>
      <div className="fr_navbar-sign">
        <button type="#sign-up" onClick={handleLogOut}><Link to = '/'className="logOut" > Log Out</Link></button>
      </div>
    </div>
  )
}

export default Navbar