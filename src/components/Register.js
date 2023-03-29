import { Link, useNavigate } from 'react-router-dom';
import {BiUserPlus} from 'react-icons/bi';
import axios from 'axios';
function Register(){
  const RegStyle = {
    fontWeight: '500', textDecoration: 'none',cursor: 'pointer',color: 'black'
  }
  async function setNewUser(event){
    event.preventDefault();
    const form = event.target;
    console.log(form);
    const formData = new FormData(form);
    const response = await axios({
      method: 'POST',
      url: "http://localhost:8000/newUser",
      headers: {
        'Content-Type': 'application/json'
      },
      data: formData,
   });

    console.log(response);
  }
    return(
      <div className='login-container'>
        <h1><BiUserPlus /></h1>
        <h1 id="login-heading">Register</h1>
        <form onSubmit={setNewUser} id="login" encType="multipart/form-data" >
          <label htmlFor='name'>
           <input type="text" name="name"  autoComplete="of" required={true} placeholder="Name"  />
          </label>
         <label htmlFor='email'>
           <input type="email" name="email"  autoComplete="of"  required={true} placeholder="Enter your Email"  />
          </label>
          <label htmlFor='password'>
           <input type="password" name="password"  required={true} placeholder="Enter your Password" />
          </label>
          <label htmlFor='cPassword'>
           <input type="password" name="cPassword"  required={true} placeholder="Confirm Password" />
          </label>
          <button type="submit" id="login-btn">Register</button>       
        </form>
        <p style={{padding: '0.6rem'}}>Home Already have an account? <Link to='/login' style={RegStyle}>Login</Link></p>
      </div>
    )
}

export default Register;