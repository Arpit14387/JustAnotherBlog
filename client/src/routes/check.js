import route from 'color-convert/route';
import {Link, BrowserRouter , Route, Switch  } from 'react-router-dom';
import { useLocation } from 'react-router';
import axios from 'axios';
import { useState, useEffect } from 'react';
import "./post.css";
import "./posts.js";
import "./check.css"



let temp="";
let id="";

export default function Check()
{
    
    const [password,setPassword]= useState("");
    const [value,setValue] =useState("");
    const [link,setLink]= useState("");
    id=(useLocation().pathname.split("/")[2]);
     

    useEffect(()=>{
     const a= async () =>{
  const res= await axios.get("https://gentle-wildwood-30194.herokuapp.com/posts/id/"+id);
  setPassword(res.data.password);

      }
    a()
    },[])

    const Save=()=>{
        temp=value;
        See();
       }

       const See=()=>{
           if(temp==password)
           { 
               alert("Correct...click on either update or delete")
               setLink(`/update/${id}`);
               console.log(link);
            }
           else{
               alert("Enter correct key please")
               window.location.reload(false)
        }
       }

       const Delete=()=>{
        if(temp==password){
        if (window.confirm("Delete the item?")) {
            const c= async () =>{
                const res= await axios.delete("https://gentle-wildwood-30194.herokuapp.com/posts/"+id);
            }
            c();
            alert("deleted")

          }}
       }
    
    return(
        <div>
        <Link className='button-52' to="/">HOME</Link>
        <div className='blah'>
            <div >
    <input 
            type="text"
            placeholder="Enter Key please"
            className='check1'
            required={true}
            autoFocus={true}
            onChange={e=>setValue(e.target.value)}
          />

</div>
<button  type='submit' className='check2' onClick={Save}>Check</button>

<div>
<Link className='update' to={link}>Update</Link>

<button className='delete' onClick={Delete} >Delete</button>
</div>

        </div>
        </div>
    )
}