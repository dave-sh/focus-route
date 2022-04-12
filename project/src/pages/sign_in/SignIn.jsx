import React, {useState} from 'react'
import './signIn.css'
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from '../../context/UserAuthContext';
import { Alert} from "react-bootstrap";


const SignIn = () => {
const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {logIn} = useUserAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await logIn(email, password);
        navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };



  return (
    <div className='sign_in'>
      <div className ='sign_in_form'>
        <h1>Welcome Back</h1>
        <h4>please sign in to continue!</h4>
        {error && <Alert variant="danger">{error}</Alert>}
        <form onSubmit={handleSubmit}>

        <input 
        placeholder='Email'
        type="email"
        onChange={(e) => setEmail(e.target.value)}
         />
        <input 
        type="password" 
        placeholder='Password'
        onChange={(e) => setPassword(e.target.value)}
         />
      
      <p><a href="#">Forgot Password?</a></p>
      <button className='sign_in_button 'type='submit' >Login</button>
        </form>
      <p>Dont have an Account?
        <Link to = '/sign_up'className="sign_in_form_sign_up" > sign up</Link>
      </p>
      </div>
      

    </div>
  )
}

export default SignIn