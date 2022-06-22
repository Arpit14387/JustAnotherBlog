// import route from 'color-convert/route';
import {Link, BrowserRouter , Route, Switch  } from 'react-router-dom';
// import { useLocation } from 'react-router';
import axios from 'axios';
import { useLocation } from 'react-router';
import { useState, useEffect } from 'react';
import "./post.css";
import "./posts.js";

import "./add.css";
import "../App.css";
import { getSpaceUntilMaxLength } from '@testing-library/user-event/dist/utils';

let temp=[];
let check=0;

export default function Update()
{
    const [name,setName]= useState();
    const [post,setPost]= useState();
    const [title,setTitle]= useState();
    const [password,setPassword]= useState();
    const [image,setImage]= useState("")
    // const [date,setDate]= useState();

    let id=(useLocation().pathname.split("/")[2]);

    useEffect(()=>{
        const a= async () =>{
     const res= await axios.get("https://gentle-wildwood-30194.herokuapp.com/posts/id/"+id);
     
   setName(res.data.name);
   setPost(res.data.post);
   setTitle(res.data.topic);
   setPassword(res.data.password);
   setImage(res.data.image)
//    setDate(res.data.createdAt);
   //   console.log(name);
   
         }
       a()
       },[])
      
    const Save=()=>{
        // const d= new Date();
        // setDate= d.getDate+ d.getMonth+ d.getFullYear()
       temp=[name,title,post,password];
       postNew();
      
    }
    
    const postNew=() =>{
       
 
        let newpost={name:temp[0],topic:temp[1],post:temp[2],password:temp[3],image:image};
        // if(newpost)
        axios.patch("https://gentle-wildwood-30194.herokuapp.com/posts/"+id,newpost);
    }

    const Delete=()=>{
      {
      if (window.confirm("Delete the post?")) {
          const c= async () =>{
              const res= await axios.delete("https://gentle-wildwood-30194.herokuapp.com/posts/"+id);
          }
          c();
          alert("deleted")

        }}
     }
    

    return(
        <div className='write-body'>
    <Link className='button-52' to="/">HOME</Link>
  
   <div className='fl'>
    <div className='write'>
    <input 
            type="text"
            placeholder="Name"
            value={name}
            className="writeInput"
            required={true}
            autoFocus={true}
            onChange={e=>setName(e.target.value)}
          />

</div>
    
    <div className='write'>
    <input 
            type="text"
            placeholder="Title"
            value={title}
            className="writeInput"
            
            required={true}
            onChange={e=>setTitle(e.target.value)}
          />

</div>
<div className='write'>
    <input 
            type="text"
            placeholder="Security key"
            value={password}
            className="writeInput"
           
            required={true}
            onChange={e=>setPassword(e.target.value)}
          />

</div>
<div className="contain">
    <div className="body2">
        <div className="hand1"></div>
        <div className="hand2"></div>
    </div>
    <div className="hair"></div>
    <div className="head"></div>
    <div className="computer"></div>
</div>
</div>


   
    <div className="writeFormGroup">
          <textarea rows={15} cols={80}
            placeholder="Tell your story..."
            type="text"
            value={post}
            required={true}
            className="writeInput writeText"
            onChange={e=>setPost(e.target.value)}
          ></textarea>
        </div>
        <div style={{"marginLeft": "25vw"}}>
        <button className='delete' type='submit' onClick={Delete}>Delete</button>
        <button className='publish' type='submit' onClick={Save}>Update</button>
        </div>
        </div>
    )
}