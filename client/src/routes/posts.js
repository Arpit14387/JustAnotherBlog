
import axios from "axios";
import { useEffect, useState } from 'react';
import {Link, BrowserRouter , Route, Switch, useNavigate  } from 'react-router-dom';
import 'animate.css';


let pageno=1;

export default function Posts()
{
  const navigate= useNavigate();
     const [page,setPage]=useState(0);
    //  const [defaultpage,setDefaultPage]=useState(0);
    const [posts,setPosts]= useState([]); 
    const [isLoading, setLoading] = useState(true);
    const [searchitem,setSearch]= useState("");
    const [key,setKey] =useState("")
    const [pass,setPass]= useState("");
    const [_id,set_Id]=useState("");

    useEffect(() => {
        axios.get("https://gentle-wildwood-30194.herokuapp.com/posts").then(response => {
            // setPosts(response.data);
            setPosts(response.data);
          setLoading(false);
        });
      }, []);

      if (isLoading) {
        return <div className="App">Loading...</div>;
      }

      const Page=()=>{
          setPage(page+5)
          pageno++;
          
      }

      const pPage=()=>{
        setPage(page-5)
        pageno--;
        
    }

      const defaultPage=()=>{
        setPage(0)
        pageno=1;
        
    }

    function openNav() {
      document.getElementById("mySidebar").style.width = "250px";
     
    }
    
    /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
    function closeNav() {
      document.getElementById("mySidebar").style.width = "0";
      
    }

    function check()
    {

if(pass==key)
{
navigate(`/update/${_id}`)
}
else{
  window.alert("Wrong key")
}
    }
  return (
      <div className="App">
        <div >
          

  <div >
    <div>
    <button className="openbtn" onClick={openNav}>&#9776;</button>
    </div>
    <div id="mySidebar" className="sidebar">
  <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
    <div className="temp">
    <input type="text" className="searchTerm" placeholder="Search By Topic" onChange={e=>setSearch(e.target.value)} />
    <Link to={`/posts/title?title=${searchitem}`} type="submit" className="searchButton"></Link>
    </div>
    <div className="temp">
    <input type="text" className="searchTerm" placeholder="Search By Name" onChange={e=>setSearch(e.target.value)} />
    <Link to={`/posts/name?name=${searchitem}`} type="submit" className="searchButton"></Link>
    </div>
    
</div>
  <p className='title'>Just another blog site</p>
  <div >
      <div className="tempp">
      <Link to="/new" className="cloudname">New Post</Link>
      </div>
  </div>
</div>
        </div>
       
<div id="myModal" className="modal">
<div className="modal-content">
    <span onClick={()=>{document.getElementById("myModal").style.display="none"}} className="close">&times;</span>
    <input className="editbox" type="password" onChange={(e)=>{setKey(e.target.value)}} placeholder="Enter your key to proceed"></input>
    <br/>
    <button className="keycheck" type="submit" onClick={check}>Enter</button>
  </div>

</div>
      

      <div >
     <div className='Flex-container>'>
      {posts.filter((item, index) => (index>=page&&index<=page+4)).map((p,index)=>{
    return(

        
      
      <div key={index}>
           <div className="container">
          <div className="card">
    
  <img className="imgg" src={p.image} alt="Photo" />
  <h1 className="top" >{p.topic}</h1>
  <p  className="price">By: {p.name}</p>
  {/* <p>{new Date(p.createdAt).toDateString()}</p> */}
  <p className="post">{p.post}</p>
  <button> <Link className="link" to={`/post/${p._id}`} >Click to read more</Link></button>
  <p onClick={()=>{set_Id(p._id); setPass(posts[(page+index)].password);document.getElementById("myModal").style.display="block"}}  className="edit">Edit / Delete</p>
</div>
            </div> 
        
    </div>
    )
   
  })
}
  </div>
 <br/>
    <div className="page">
    <button   onClick={defaultPage}>First Page</button>
        <button  onClick={Page}>Next Page</button>
        <button  onClick={pPage}>Previous Page</button>
        {/* <button  onClick={Page}>Last Page</button> */}
    </div>
     
      </div>
    
  
        </div>
    
    );
}