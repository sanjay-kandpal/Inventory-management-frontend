import { useState } from "react";

function DeleteButt(){
  console.log('runng');
    const [show,setShow] = useState(true);
   
    function hideModal(){    
      console.log('running');
      
      
    }
    
    return(
      <div className="modal-container" >
        <h2>Do you want to delete Item ?</h2>
        <button onClick={()=> hideModal()}>Cancel</button>
        <button>Delete</button>
      </div>
    )
}

export default DeleteButt;