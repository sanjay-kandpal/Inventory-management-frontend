import { Editor } from 'react-draft-wysiwyg';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useState } from 'react';
import Logout from './Logout';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import axios from 'axios';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
function Product(){
  
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [img,setImg] = useState(null);

   function fileUpload(event){
      console.log(event.target.files[0]);
      const imgUrl = URL.createObjectURL(event.target.files[0]);
      setImg(imgUrl);
   }

   async function handleSubmit(event){
    event.preventDefault();
    const contentState = editorState.getCurrentContent();
    const plainText = contentState.getPlainText();
    console.log(plainText);
    const token = localStorage.getItem('token');
    // Read the form data
    const form = event.target;
    const formData = new FormData(form);
    formData.append('Description',plainText);
    try {
        const response = await axios({
            method: 'POST',
            url: "http://localhost:8000/items",
            data: formData,
            headers: { "Content-Type": "multipart/form-data",
            Authorization: `${token}`}
        });
        console.log(response);
        if(response.statusText == 'OK'){
            event.target.reset();
            setImg(null);
            setEditorState('')
        }          
    } catch (error) {
        console.log(error.message);
    }
   }
   
    return( 
      
        <div className="HomePage">
         <div className="HomePage-container">
          <Logout />
         </div> 
         <hr />
         <h1>Add New Product</h1>
         <div className='add-product'>
            <form enctype="multipart/form-data" onSubmit={handleSubmit} POST>
              <div className='file-upload' onChange={fileUpload}>
                <label htmlFor='image'>Product Image:
                 <input type="file" id="myfile" accept="image/jpeg" name='image' required/>
                </label>
                {img ? <img src={img} alt='product image' id='preview' /> : <span>No file Chosen</span>}
               </div>
               <label htmlFor='SKU'> 
                    SKU
                    <input type="number"  placeholder='Product Name' name="SKU" required/>
                </label>
                <label htmlFor='name'> 
                    Product Name:
                    <input type="name"  placeholder='Product Name' name="name" required/>
                </label>
                <label htmlFor='Category'>
                    Product Category:
                    <input type="name" placeholder='Product Category' name="Category" required/>
                </label>
                <label htmlFor='price'>
                    Product Price:
                    <input type="name" placeholder='Product Price' name="price" required/>
                </label>
                <label htmlFor='Quantity'>
                    Product Quantity:
                    <input type="name" placeholder='Product Quantity' name="Quantity" required/>
                </label>
                <label htmlFor='Quantity'>
                    Product Value:
                    <input type="name" placeholder='Product Quantity' name="value" required/>
                </label>
                <div className='prod-desc'>
                    Product Desc:
                    <Editor
                     editorState={editorState}
                     onEditorStateChange={setEditorState}
                     toolbar={{
                      options: ['inline', 'blockType', 'list', 'textAlign', 'colorPicker', 'link', 'emoji', 'image', 'remove', 'history'],
                      inline: {
                       options: ['bold', 'italic', 'underline', 'strikethrough'],
                       bold: { className: 'toolbar-btn' },
                       italic: { className: 'toolbar-btn' },
                       underline: { className: 'toolbar-btn' },
                       strikethrough: { className: 'toolbar-btn' }
                       },
                      blockType: { className: 'toolbar-btn' },
                      list: {
                       options: ['unordered', 'ordered'],
                       unordered: { className: 'toolbar-btn' },
                       ordered: { className: 'toolbar-btn' }
                        },
                      textAlign: { className: 'toolbar-btn' },
                       colorPicker: { className: 'toolbar-btn' },
                       link: { className: 'toolbar-btn' },
                       emoji: { className: 'toolbar-btn' },
                       image: { className: 'toolbar-btn' },
                       remove: { className: 'toolbar-btn' },
                       history: { className: 'toolbar-btn' }
                       }}
                   />
                </div>
                
                <button type='submit'>Save Product</button>
            </form>
         </div>
        </div>
    )
}

export default Product;