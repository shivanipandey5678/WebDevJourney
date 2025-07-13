import React from 'react'
import Home from '../pages/Home'
import Login from '../pages/Login'
import MyBooks from '../pages/MyBooks'
import Register from '../pages/Register'
import {Route,Routes} from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute'
const AllRoutes = () => {
  return (
    <div>
      
       <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/my-books" element={<MyBooks/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>

    </div>
  )
}

export default AllRoutes;
