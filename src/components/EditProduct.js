import axios from "axios";
import { Editor } from 'react-draft-wysiwyg';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Logout from "./Logout";
import { EditorState,convertFromRaw   } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
function EditProduct(){
    const {id} = useParams();
    const [item,setItem] = useState([]);
    const initialContent = {
        "entityMap": {},
        "blocks": [
          {
            "key": "637gr",
            "text": "face",
            "type": '',
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": []
          },
        ]
    };
    const [editorState, setEditorState] = useState({editorState: EditorState.createWithContent('runinig')});
    const [img,setImg] = useState(item.image);
  useEffect(() =>{
    async function EditItem(){
        
        const token = localStorage.getItem('token');
        const response = await axios({
         method: 'get',
         url: `http://localhost:8000/getItem/${id}`,
         headers: { Authorization: `${token}`}
       });
       console.log(response.data);
 
       
    }
    EditItem();
  },[]);
  
  function handleSubmit(){
    console.log('running');
  }

  function fileUpload(event){
    console.log(event.target.files[0]);
    const imgUrl = URL.createObjectURL(event.target.files[0]);
    
    setImg(imgUrl);
  }

    return(
        <div className="HomePage" id="homepage">
         <div className="HomePage-container">
          <Logout />
         </div>
         <hr />
         <h1>Edit Product</h1>
         <div className='add-product'>
            <form enctype="multipart/form-data" onSubmit={handleSubmit} POST>
              <div className='file-upload' onChange={fileUpload}>
                <label htmlFor='image'>Product Image:
                 <input type="file" id="myfile" accept="image/jpeg" name='image' required />
                </label>
                {img ? <img src={img} alt='product image' id='preview' /> : <img src={item.image} alt='product image' id='preview' /> }
               </div>
               <label htmlFor='SKU'> 
                    SKU
                    <input type="number"  placeholder='Product Name' name="SKU" value={item.SKU} required/>
                </label>
                <label htmlFor='name'> 
                    Product Name:
                    <input type="name"  placeholder='Product Name' name="name" value={item.name} required/>
                </label>
                <label htmlFor='Category'>
                    Product Category:
                    <input type="name" placeholder='Product Category' name="Category" value={item.Category} required/>
                </label>
                <label htmlFor='price'>
                    Product Price:
                    <input type="name" placeholder='Product Price' name="price" value={item.price} required/>
                </label>
                <label htmlFor='Quantity'>
                    Product Quantity:
                    <input type="name" placeholder='Product Quantity' name="Quantity" value={item.Quantity} required/>
                </label>
                <label htmlFor='Quantity'>
                    Product Value:
                    <input type="name" placeholder='Product Quantity' name="value" required value={item.value} />
                </label>
                <div className='prod-desc'> 
                    Product Desc:
                    <Editor
                     editorState={editorState}
                     toolbarClassName="toolbarClassName"
                     wrapperClassName="wrapperClassName"
                     editorClassName="editorClassName"
                     onEditorStateChange={setEditorState}
                    />
                </div>               
                <button type='submit'>Edit Changes</button>
            </form>
            </div>
        </div>
    );
}
export default EditProduct;