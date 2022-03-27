import React from 'react'
import './sign_in.css'

import {  Link } from "react-router-dom";

const Sign_In = () => {
  return (
    <div className='sign_in'>
      <div className ='sign_in_form'>
        <h1>Welcome Back</h1>
        <h4>please sign in to continue!</h4>
        <input placeholder='Email' />
        <input type="password" placeholder='Password' />
      
      <p><a href="#">Forgot Password?</a></p>
      <button className='sign_in_button 'type='submit'>Login</button>
      <p>Dont have an Account?
        <Link to = '/sign_up'className="sign_in_form_sign_up" > sign up</Link>
      </p>
      </div>
      

    </div>
  )
}

export default Sign_In