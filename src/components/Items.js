import { Link } from "react-router-dom";
import {useState} from 'react';
import {FaEdit} from 'react-icons/fa';
import {RiDeleteBinLine} from 'react-icons/ri';
import {AiFillEye} from 'react-icons/ai';

import { useDispatch } from "react-redux";
import { deleteItem } from "../features/api/apiSlice";

function Items({items}){
    const dispatch = useDispatch();
    const [modal,setModal] = useState(false);
    const [id,setId] = useState('')
    console.log(items);
    function delItem(delId){
        console.log(delId);
        setId(delId);
        const homepage = document.getElementsByClassName('HomePage')[0];
        homepage.style.opacity = 0.6;
        console.log(modal);
        setModal(true);
       }
       function hideModal(){
          const homepage = document.getElementById('homepage');
          homepage.style.opacity = '1';
          setModal(false)
       }
       async  function modalItem(){
        
         const value =  dispatch(deleteItem(id));
         
         console.log(value);
          const homepage = document.getElementById('homepage');
          setModal(false);
           
        }
        const empty ={
         margin: "12px",
            
        }
        if(items.length == 0){
            return <h3 style={empty}>No items.. add item</h3>
        }
        else{
 
    return(
        <>
        <table>
                <tr>
                    <th>s/n</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>price</th>
                    <th>Quantity</th>
                    <th>Value</th>
                    <th>Action</th> 
                </tr>
             {items.map((item,index) =>
                <tr>
                 <td>{index+1}</td>
                 <td>{item.name}.</td>
                 <td>{item.Category}</td>
                 <td>{item.price}$</td>
                 <td>{item.Quantity}</td>
                 <td>${item.value}</td>
                  <td><RiDeleteBinLine id="deleteIcon" onClick={()=>delItem(item._id)}/>
                 <Link to={`/product-detail/${item._id}`}><AiFillEye id="viewIcon" /></Link>
                 <Link to={`/edit-product/${item._id}`}><FaEdit id="editIcon" /></Link></td>              
                </tr>)}
            </table>
            <div id="modal">{modal && (<div id="modal-container" >
        <h2>Do you want to delete Item ?</h2>
        <button onClick={()=> hideModal()}>Cancel</button>
        <button onClick={modalItem}>Delete</button>
      </div>)} </div></>

    );
    }
}

export default Items;