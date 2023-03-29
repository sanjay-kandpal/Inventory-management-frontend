
import { useState } from "react";
import { NavLink, Outlet} from "react-router-dom";

function NavBar(){

  const [hide,setHide] = useState(true);

  const inlinStyling ={
    fontFamily: 'Roboto',
    margin: "24px",
  };
  const styleCompo = {
    fontFamily: 'Roboto',
    padding: '13px',
    textDecoration: 'none',
    color: 'blueviolet',
    display: 'block',
    fontSize: '16px',
    width: '100%',
    cursor: 'pointer',
    textAlign: 'center',
    borderBottom: '1px solid'
  }
  const hiddeStyle={
    fontFamily: 'Roboto',
    padding: '13px',
    textDecoration: 'none',
    color: 'blueviolet',
    display: 'block',
    fontSize: '16px',
    width: '100%',
    cursor: 'pointer',
    textAlign: 'center',
    border: '1px solid grey',
  }

 function addPanel(event){
  event.preventDefault();
  const acc = document.getElementsByClassName('accordian')[0].nextElementSibling;
  console.log(acc);
  if(hide){
    acc.style.display = "block";
    setHide(false);
  }else{
    acc.style.display = "none";
    setHide(true);
  }
 }

  return(
   <div className='flex-container'>    
     <div className="NavBar">
        <NavLink to="/dashboard"  id='NavLink' style={styleCompo}>Dashboard</NavLink>
        <NavLink to="/add-product"   style={styleCompo}>Add Product</NavLink>
        <button className="accordian" onClick={addPanel}>Account</button>
        <div className="panel" >
         <NavLink to="/profile" style={styleCompo} >Profile</NavLink>
         <NavLink to="/profile-update" style={styleCompo} >Edit Profile</NavLink>
        </div>
        <NavLink to="/contact-us" style={styleCompo} >Report Bug</NavLink>
      </div>
     <Outlet />
   </div>
  );
}
export default NavBar;