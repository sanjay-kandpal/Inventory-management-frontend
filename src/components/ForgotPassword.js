import axios from "axios";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";
function ForgotPassword(){
    async function sendPass(event){
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const response = await axios({
            method: 'post',
            url: "http://localhost:8000/forgot",
            headers: {
                'Content-Type': 'application/json'
              },
            data: formData
        })
        console.log(response);
    }
    const RegStyle = {
        fontWeight: '500', textDecoration: 'none',cursor: 'pointer',color: 'black'
      }
    return(
        <div className='login-container'>
         <h1><AiOutlineMail /></h1>
         <h1 id="login-heading">Forgot Password</h1>
         <form  onSubmit={sendPass} id="login">
          <label htmlFor='email'>
            <input type="email" name="email"  autoComplete="of"  required={true} placeholder="Enter your Email"  />
          </label>   
          <button type="submit" id="login-btn">Get Reset Email</button> 
         </form>
         <p>Home  <Link to='/register' style={RegStyle}>Login</Link></p>
        </div>
    )
}

export default ForgotPassword;