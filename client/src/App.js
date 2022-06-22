
import './App.css';
import Posts from "./routes/posts.js";
import Post from "./routes/post.js";
import Add from "./routes/add.js";
import Update from "./routes/update.js"
import Check from "./routes/check.js";
import { useEffect, useState } from 'react';
import {Link, BrowserRouter , Route, Routes  } from 'react-router-dom';
import Search from "./routes/searchName.js"
import Search2 from "./routes/searchTitle.js";
const axios = require('axios').default;






function App() {

  return(<div>
  <BrowserRouter>
  <Routes>
    <Route exact path="/" element={<Posts />} />
    <Route exact path="/post/:id" element={<Post />} />
    <Route path="/posts" element={<Search />}>
    <Route path="name" element={<Search />}>
      <Route path=":name" element={<Search />} />
    </Route>
    </Route>
    <Route path="/posts" element={<Search2 />}>
    <Route path="title" element={<Search2 />}>
      <Route path=":title" element={<Search2 />} />
    </Route>
    </Route>
    {/* <Route exact path="/post/name?" element={<Search />} /> */}
    <Route exact path="/check/:id" element={<Check />} />
    <Route exact path="/new" element={<Add />} />
    <Route exact path="/update/:id" element={<Update />} />
  </Routes>
</BrowserRouter>

</div>
  );
 


}

export default App;
