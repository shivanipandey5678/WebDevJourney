import React from 'react';
import {Link,Routes,Route} from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Blog from './Blog';
import CreateBlog from './CreateBlog';
export const Header=()=>{
   return (
    <>
    
    <nav className='flex bg-zinc-300 p-4  text-xl justify-evenly '>
        <Link to="/">Home</Link>
        <Link to="/login">login</Link>
        <Link to="/signup">signup</Link>
        <Link to="/signup">Blogs</Link>
       
      </nav>

      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>}  />
        <Route path="/blogs" element={<Blog/>}  />
        <Route path="/create-blog" element={<CreateBlog/>}  />
      </Routes>

     
    </>
   )
}



