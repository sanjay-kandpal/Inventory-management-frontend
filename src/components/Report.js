import axios from "axios";
import { useState } from "react";
import Logout from "./Logout";
function Report(){
  const url = "http://localhost:8000/report";
  const [subject,setSubject] = useState('');
  const token = localStorage.getItem('token');
  
  const [message,setMessage] = useState('');
  function handleChange(event){
     console.log(event.target.id);
     
     if(event.target.id === 'subject')
      setSubject(event.target.value);
      else
      setMessage(event.target.value);      
  }
  async function handleSubmit(event){
    event.preventDefault();
    console.log(event);
    console.log(token); 
  
    const response= await axios({
      method: 'post',
      url: url,
      subject: subject,
      message: message,
      headers: { "Content-Type": "application/json",
        Authorization: `${token}`},
  });
    if(response.data.success){
      setMessage('');
      setSubject('');
    }else{
      console.log(response.data.error);
    }
  }
    return (
     <div className='HomePage'>
      <div className="HomePage-container">
       <Logout />
      </div>
      <hr></hr>
      <div>
         <h1>Contact US</h1>
         <form onSubmit={handleSubmit} POST>
          <label>Subject
            <input type="text" id="subject" placeholder="Subject" name="subject" onChange={handleChange} value={subject} required/>
          </label>
          <label >Message
            <input type="text" name="message" onChange={handleChange} placeholder="message" id="text" value={message} required/>
          </label>
          <button type="submit">Send Message</button>
         </form>
         <div>
          <h1>Our Contact Information</h1>
          <p>Fill the form or cotact us via other channels listed below</p>
          <h5>+234 705 141 6545</h5>
          <h5>Support@invent.com</h5>
          <h5>Ahuja,Nigeria</h5>
          <h5>Ahuja,Nigeria</h5>
          <h5>Name</h5>
         </div>
      </div>
        
      </div>
    )
}

export default Report;