
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getprofile } from "../features/api/profileSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Logout from "./Logout";

function Profile(){
  const dispatch = useDispatch();
  const {profile,isLoading} = useSelector((state) =>state.profile);

  useEffect(()=>{
    const token = localStorage.getItem('token');
    dispatch(getprofile(token))
    
  },[])
 
  return( 
      <div className="HomePage">
      <div className="HomePage-container">
        <Logout />
      </div>
      {isLoading ? <h1>Loading....</h1> :(        
      <div className="profile-container">
        <div className="profile-photo">
          <img src={profile.image} id="image"></img>
        </div>
        <div id="details">
          <hr></hr>
          <b>Name:</b>{profile.name}
          <hr></hr>
          <b>Email:</b>{profile.email}
          <hr></hr>
          <b>Bio:</b>{profile.Bio}
          <hr></hr>
          <b>Phone:</b>{profile.phone}
          <hr></hr>
          <Link to="/profile-update" >Edit Profile</Link>
        </div>
      </div>)}   
   </div>
    )
}

export default Profile;