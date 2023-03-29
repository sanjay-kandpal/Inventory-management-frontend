import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Logout from './Logout';
function Productdetail(){
    const {id} = useParams();
    const [item,setItem] = useState([]);
    useEffect(()=>{
        async function getItemByID(){
            console.log(id);
            const token = localStorage.getItem('token')
            const response = await axios({
                method: 'get',
                url: `http://localhost:8000/getItem/${id}`,
                headers: {Authorization: `${token}`}
            });
            console.log(response.data);
            setItem(response.data);
        }
        getItemByID();
    },[])
    return(
        <div className="HomePage" id="homepage">
           <div className="HomePage-container">
             <Logout />
           </div>
           <hr />
           <h1>Product detail</h1>
           <div id="product-container">
             <div id="product-img"><img src={item.image} width="100%" /></div>
             <h2>Product Availability: </h2>
             <hr />
             <div id="item-detail">
             <h2 id="item-name">Name:{item.name}</h2>
             <h4>-<b>SKU:</b>{item.SKU}</h4>
             <h4>-<b>Category:</b>{item.Category}</h4>
             <h4>-<b>Price:</b>{item.price}</h4>
             <h4>-<b>Quantity in stock:</b>{item.Quantity}</h4>
             <h4>-<b>Total Value in stock:</b>{item.value}</h4>
             <h4>-<b>Description:</b>{item.Description}</h4>
             </div>
             
           </div>

        </div>
        
        
    );
}

export default Productdetail;