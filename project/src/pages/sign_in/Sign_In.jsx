import React from 'react'
import './sign_in.css'

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
        <a className="sign_in_form_sign_up" href="#"> sign up</a>
      </p>
      </div>
      

    </div>
  )
}

export default Sign_In