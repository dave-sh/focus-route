import React from 'react'
import './signUp.css'

import {  Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className='sign_up'>
      <div className ='sign_up_form'>
        <h1>Create Account</h1>
        <h4>please sign up to continue!</h4>
        <input placeholder='First Name' />
        <input placeholder='Last Name' />
        <input placeholder='Email' />
        <input type="password" placeholder='Password' />
      
      <button className='sign_up_button 'type='submit'>Signup</button>
      <p>Already have an account?
        <Link to ="/sign_in" className="sign_up_form_sign_in"> sign in</Link>
      </p>
      </div>
      

    </div>
  )
}

export default SignUp