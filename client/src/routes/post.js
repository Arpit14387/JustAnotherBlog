import route from 'color-convert/route';
import {Link, BrowserRouter , Route, Switch  } from 'react-router-dom';
import { useLocation } from 'react-router';
import axios from 'axios';
import { useState, useEffect } from 'react';
import "./post.css";
import "./posts.js";



let name="";
export default function Post()
{
    const [name,setName]= useState("");
    const [post,setPost]= useState("");
    const [title,setTitle]= useState("");
    const [date,setDate]= useState("");
    const[image,setImage]= useState("")
    let id=(useLocation().pathname.split("/")[2]);
    // let [posts,setPosts]= useState([]); 

    useEffect(()=>{
     const a= async () =>{
  const res= await axios.get("https://gentle-wildwood-30194.herokuapp.com/posts/id/"+id);
  
setName(res.data.name);
setPost(res.data.post);
setTitle(res.data.topic);
setDate(res.data.createdAt);
setImage(res.data.image)
//   console.log(name);

      }
    a()
    },[])
    
    {
        return(
            <div className='body'>
               <Link className='button-52' to="/">HOME</Link> 
            <div>
            <img className='img2' src={image} alt="" />
            <p className='title2'>{title}</p>
            <p className='post3'>{post}</p> 
            </div>
          
            {/* <p className='post2'>{post}</p>   */}
            {/* <p className='postedby'>Posted by: {name}</p>
            <p className='postedby'> Posted on: {new Date(date).toDateString()}</p> */}
            </div>
        )
    }


}