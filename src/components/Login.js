import {useState,useCallback} from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import {BiExit} from 'react-icons/bi';

function Login(){

  const [Authenticate,setAutheticate] = useState(localStorage.getItem('token') || false);
  const navigate = useNavigate();
  const [email, setEmail] = useState(""); 
  const [password,setPass] = useState("");

 async function getUser(event){
    event.preventDefault();
    try {
      const response =await axios.post(
        'http://localhost:8000/login',{
        email: email,
        password: password
        }
      );
  
      if (response.data.success === 'success')
      localStorage.setItem('token',response.data.token)
       navigate('/dashboard');    
    } catch (error) {
       console.log(error.message);
    }  
  }
  const LinkStyle ={
    margin: 'auto',display: 'block',width: '90%',padding: '0.2rem',cursor: 'pointer',textAlign: 'left',marginBottom: '12px',color: 'grey',textDecoration: 'none'
  }
  const RegStyle = {
    fontWeight: '500', textDecoration: 'none',cursor: 'pointer',color: 'black'
  }
  return(
     <div className='login-container'>
        <h1><BiExit /></h1>
        <h1 id="login-heading">Login</h1>
        <form onSubmit={getUser} method="post" id="login">
         <label htmlFor='email'>
           <input type="email" name="email"  autoComplete="of" onChange={e => setEmail(e.target.value)}  value={email} required={true} placeholder="Enter your Email"  />
          </label>
          <label htmlFor='password'>
           <input type="password" name="password"  onChange={e => setPass(e.target.value)} value={password} required={true} placeholder="Enter your Password" />
          </label>
          <button type="submit" id="login-btn">Login</button>       
          <Link to='/forgot-password' style={LinkStyle}>Forgot Password?</Link>
        </form>
        <p>Home Don't have an account? <Link to='/register' style={RegStyle}>Register</Link></p>
      </div>
 
   
    );
}
 

export default Login;