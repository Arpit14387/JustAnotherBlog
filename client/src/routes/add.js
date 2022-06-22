// import route from 'color-convert/route';
import {Link, BrowserRouter , Route, Switch  } from 'react-router-dom';
// import { useLocation } from 'react-router';
import React from 'react';
import ImageUploading from 'react-images-uploading';
import axios from 'axios';
import { useState, useEffect } from 'react';
import "./post.css";
import "./posts.js";

import "./add.css";
import "../App.css";

let temp=[];
let check=0;

export default function Add()
{
    const [name,setName]= useState();
    const [post,setPost]= useState();
    const [title,setTitle]= useState();
    const [password,setPassword]= useState();
    const Save=()=>{
       temp=[name,title,post,password];
       postNew();
      
    }
    const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
    
    const postNew=() =>{
       
 console.log(temp[0]);
        let newpost={name:temp[0],topic:temp[1],post:temp[2],password:temp[3],image:images[0].data_url};
        // if(newpost)
        axios.post("https://gentle-wildwood-30194.herokuapp.com/posts",newpost);
    }
    

    return(
        <div className='write-body'>
    <Link className='button-52' to="/">HOME</Link>
  
   


   <div className='fl'>
    <div className='write'>
    <input 
            type="text"
            placeholder="Name"
            className="writeInput"
            required={true}
            style={{"backgroundColor": "rgb(199, 225, 247)", "borderRadius": "10px"}}
            onChange={e=>setName(e.target.value)}
          />

</div>
    
    <div className='write'>
    <input 
            type="text"
            placeholder="Title"
            className="writeInput"
            style={{"backgroundColor": "rgb(199, 225, 247)", "borderRadius": "10px"}}
            required={true}
            onChange={e=>setTitle(e.target.value)}
          />

</div>
<div className='write'>
    <input 
            type="password"
            placeholder="Security key"
            className="writeInput"
            style={{"backgroundColor": "rgb(199, 225, 247)", "borderRadius": "10px"}}
            required={true}
            onChange={e=>setPassword(e.target.value)}
          />

</div>

</div>


   
    <div className="writeFormGroup">
          <textarea rows={15} cols={80}
            placeholder="Tell your story..."
            type="text"
            required={true}
            className=" writeText"
            onChange={e=>setPost(e.target.value)}
          ></textarea>
        </div>
       <div  style={{"marginLeft": "18vw"}}>
       <div>
       <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button className='addimage'
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Add image
            </button>
            &nbsp;
            {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image['data_url']} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
       <button className='publish' type='submit' onClick={Save}>Publish</button>
       </div>
        
        
        </div>
    )
}