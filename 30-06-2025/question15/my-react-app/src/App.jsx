import React from 'react';
import Contact from './pages/Contact';
import About from './pages/About';
import Home from './pages/Home';
import './App.css'
import { useState } from 'react';


const App=()=>{
  const [currentPage,setCurrentPage] =useState("Home")
  
  return(
    <>
    
    <nav>
      <p onClick={()=>setCurrentPage("Home")} className={currentPage=="Home"?"active":""}>Home</p>
      <p onClick={()=>setCurrentPage("About")} className={currentPage=="About"?"active":""}>About</p>
      <p onClick={()=>setCurrentPage("Contact")} className={currentPage=="Contact"?"active":""}>Contact</p>
 
    </nav>
    {(currentPage=="Home"&&<Home/>)}
    {(currentPage=="About"&&<About/>)}
    {(currentPage=="Contact"&&<Contact/>)}
    </>

    
  )
}

export default App