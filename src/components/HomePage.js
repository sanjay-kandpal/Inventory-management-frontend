
import Logout from "./Logout";
import {useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getItems } from "../features/api/apiSlice";

import Items from "./Items";
function HomePage(){

  const {items,amount,isLoading,total} = useSelector((state) =>state.item);
  const [tem,setItem] = useState({})
  const [eventValue,setValue] = useState('')
  const [search,setS] = useState(false);
  const [modal,setModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(total);
  useEffect(()=>{
   const token = localStorage.getItem('token');
    if(!token)
    navigate('/');
    else{   
      dispatch(getItems(token));
    }
  },[])

  if(isLoading){
    return <h1>Loading...</h1>
  }
  
  function handleSearch(event){
    setS(true);
    setValue(event.target.value)
    const filterItems = items.filter((el) => el.name.toLowerCase().includes(event.target.value.toLowerCase()))
    //  console.log(filterItems);
    setItem(filterItems);
    
  }
  function handleS(){
    setS(false);
  }
 console.log(tem);
 return(  
       <div className="HomePage" id="homepage">
           <div className="HomePage-container">
             <Logout />
           </div> 
           <hr />
           <h1>InventoryStats</h1>
           <div id="stats">
             <div><span>Total Products</span></div>
             <div><span>Total Store Value</span></div>
             <div><span>Out of Stock</span></div>
             <div><span>All Product</span></div>
            </div>
            <h1>Inventory Items</h1> <input type="search" placeholder="Search By name" onChange={handleSearch} value={eventValue} onBlur={handleS}/>
             {search ? <Items items={tem} /> : <Items items={items} /> } 
          </div>
        
  )
}


export default HomePage;