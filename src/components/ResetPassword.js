import axios from "axios";
import { useState } from "react";
import { MdPassword } from "react-icons/md";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function ResetPassword(){

    const {id} = useParams();
    const [password,setPass] = useState(null);
    const [confirmpass,setConfirm] = useState(null);
    async function newPassword(event){
        event.preventDefault();
        if(password !== confirmpass){
          alert('confirm password and password should be same')
        }else{
            const data = event.target;
            const formData = new FormData(data);
          const response = await axios({
            method: 'put',
            url: `http://localhost:8000/resetPassword/${id}`,
            headers:{
                'Content-Type': 'application/json'
            },
            data: formData,
          })
          console.log(response);
        }  
    }
    const RegStyle = {
        fontWeight: '500', textDecoration: 'none',cursor: 'pointer',color: 'black'
    }
    return(
        <div className='login-container'>
         <h1><MdPassword /></h1>
         <h1 id="login-heading">Reset Password</h1>
         <form onSubmit={newPassword}  id="login">
          <label htmlFor='password'>
            <input type="password" name="password"  autoComplete="of"  onChange={e => setPass(e.target.value)} required={true} placeholder="New Password" />
          </label>
          <label htmlFor='cPassword'>
            <input type="password" name="cPassword"  autoComplete="of" onChange={e => setConfirm(e.target.value)} required={true} placeholder="Confirm Password"  />
          </label>   
          <button type="submit" id="login-btn">Reset Password </button> 
         </form>
         <p>Home  <Link to='/register' style={RegStyle}>Login</Link></p>
        </div>
    )
}

export default ResetPassword;