import { useEffect } from "react";
import Logout from "./Logout";
import { useState,useRef } from "react";
import { getprofile } from "../features/api/profileSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import axios from "axios";
function Editprofile(){

    const fileInputRef = useRef(null);
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useDispatch();
    const {profile,isLoading} = useSelector((state) =>state.profile);
    const [state,setState] = useState({name: null,
      Bio: null,
      phone: null,
      file: null
    })

    useEffect(()=>{
      const token = localStorage.getItem('token');
      dispatch(getprofile(token));   
    },[state]);
    

    const handleFileChange = (event) => {
        state.file = event.target.files[0];
        console.log(state.file);
    }; 
   

   async function handleSubmit(event){
        event.preventDefault();
        const token = localStorage.getItem('token');
        //Read the form data
        const form = event.target;
        const formData = new FormData(form);
      
        const response = await axios({
            method: 'POST',
            url: "http://localhost:8000/editProfile/",
            data: formData,
            headers: { "Content-Type": "multipart/form-data",
            Authorization: `${token}`}
        });
        setState({...state})
        fileInputRef.current.value = '';
    }
    function handleChange(event){
      let {name,value} = event.target;
      console.log('runinn');
      setState(prevState => ({...prevState,[name]:value}));
    }
    
    return(
        
        <div className="HomePage">
         <div className="HomePage-container">
          <Logout />
         </div> 
         <div>
          <form onSubmit={handleSubmit} enctype="multipart/form-data" POST>  
            <label htmlFor="name">Name:
             <input type="text" defaultValue={state.name == null ? profile.name : state.name}  onChange={handleChange} name="name" required/>
           </label>
           <label htmlFor="email">Email:
            <input type="email"  defaultValue={profile.email} name="email" disabled/>
           </label>
           <p>Email cannot be changed</p>
           <label htmlFor="phone">Phone:
            <input type="tel" name="phone" onChange={handleChange} value={state.phone == null ? profile.phone : state.phone} />
           </label>
           <label htmlFor="Bio">Bio:
            <input type="textarea" name="Bio" onChange={handleChange} defaultValue={state.Bio == null ? profile.Bio : state.Bio} />
           </label>
           <label htmlFor="avatar">Photo:
            <input type="file"  name="avatar" id="myfile" accept="image/jpeg" onChange={handleFileChange} ref={fileInputRef}/>
           </label>
            <button type="submit">Save Changes</button>
          </form>
         </div>
        </div>
    );
}
export default Editprofile;