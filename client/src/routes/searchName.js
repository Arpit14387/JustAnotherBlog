import route from 'color-convert/route';
import {Link, BrowserRouter , Route, Switch  } from 'react-router-dom';
import { useLocation } from 'react-router';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import "./searchName.css";



export default function Search(){

const [posts,setPosts] =useState([]);
const [searchParams, setSearchParams] = useSearchParams();
const x=searchParams.get("name")

    // const fetchUsers = async () => {
    //     const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    //     return res.json();
    //   };

    useEffect(()=>{
        const a= async () =>{
     const res= await axios.get("https://gentle-wildwood-30194.herokuapp.com/posts/name?name="+x);
     setPosts(res.data); 
       console.log(res.data);
   
         }
       a()
       },[])
    
    return(
        <div>
        <Link className='button-52' to="/">HOME</Link> 
       <div className='single'>

          {
              posts.map((p,index)=>{
                  return(
                      <div key={index}>
                          <div className="card-container"> 
  <div className="card"><a href={`/post/${p._id}`}>
      <div className="card--display"><i className="material-icons">Post by: {p.name}</i>
        <h1 className='p'>{p.topic}</h1>
      </div>
      <div className="card--hover">
        <p className='p2'>{p.topic}</p>
        <p className='p3'>{p.post}</p>
        <p className='link'>Click to see the post</p>
      </div></a>
    <div className="card--border"></div>
  </div>

</div>
                      </div>
                  )
              })
              
          } 

      
</div> 
</div>


        
    )
    

}