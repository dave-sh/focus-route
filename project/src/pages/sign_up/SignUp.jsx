import React, {useState} from 'react'
import './signUp.css'
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from '../../context/UserAuthContext';
import { Alert} from "react-bootstrap";


const SignUp = () => {
   const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {signUp} = useUserAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await signUp(email, password);
        navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div className='sign_up'>
      <div className ='sign_up_form'>
        <h1>Create Account</h1>
        <h4>please sign up to continue!</h4>
        {error && <Alert variant="danger">{error}</Alert>}
        <form onSubmit={handleSubmit}>

        <input 
        placeholder='Email'
        type="email"
        onChange={ (e) => setEmail(e.target.value)}
         />
        <input 
        type="password"
        placeholder='Password'
        onChange={ (e) => setPassword(e.target.value)}
        />
      
      <button className='sign_up_button 'type='submit'>Signup</button>
        </form>
      <p>Already have an account?
        <Link to ="/" className="sign_up_form_sign_in"> sign in</Link>
      </p>
      </div>
      

    </div>
  )
}

export default SignUp