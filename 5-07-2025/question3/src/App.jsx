import { useState } from 'react'
import ProductDetail from './pages/ProductDetail'
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home'

import './App.css'

function App() {
 

  return (
    <>
    <nav>
       <Link to="/">All Product</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/product/:id" element={<ProductDetail />} />
    </Routes>
       
    </>
  )
}

export default App
