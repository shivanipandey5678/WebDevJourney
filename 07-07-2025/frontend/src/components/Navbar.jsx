
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import {AuthContext} from '../context/AuthProvider.jsx';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
    const { setUserData ,setIsAuth,isAuth,userData} = useContext(AuthContext)

    const logout=async(req,res)=>{
        const response= await axios.patch("http://localhost:8099/api/auth/logout",{},{withCredentials:true});
        if(response.status==200){
            setIsAuth(false);
            setUserData(null)
        }
    }
    return (
        <div className='bg-gray-300 flex justify-around p-5 '>
            <Link to="/home"><p className='font-semibold cursor-pointer border-2 px-2 py-1'>My Library</p></Link>
            <Link to="/home" className='cursor-pointer'>Home</Link>
            {!isAuth && <Link to="/login" className='cursor-pointer'>Login</Link>}
            {!isAuth && <Link to="/register" className='cursor-pointer'>Register</Link>}
            <Link to="/my-books" className='cursor-pointer'>My Books</Link>
            {isAuth && <button className='border-none text-red-500 font-bold cursor-pointer hover:border-2 hover:text-gray-400' onClick={logout}>Logout</button>}
            {userData && <p>{userData.email}</p>}

          
        </div>
    )
}

export default Navbar
