
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider.jsx';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
    const { setUserData, setIsAuth, isAuth, userData } = useContext(AuthContext)

    const logout = async (req, res) => {
        const response = await axios.patch("http://localhost:8099/api/auth/logout", {}, { withCredentials: true });
        if (response.status == 200) {
            setIsAuth(false);
            setUserData(null)
        }
    }
    return (
        <div className='bg-gray-300 flex justify-around p-5 items-center'>
            <Link to="/home"><p className='font-semibold cursor-pointer border-2 px-2 py-1 border-red-500 text-red-500 rounded'>My Library</p></Link>
            <Link to="/home" className='cursor-pointer hover:underline '>Home</Link>
            {!isAuth && <Link to="/login" className='cursor-pointer  hover:underline'>Login</Link>}
            {!isAuth && <Link to="/register" className='cursor-pointer  hover:underline'>Register</Link>}
            {isAuth && <Link to="/my-books" className='cursor-pointer  hover:underline'>My Books</Link>}
            {isAuth && <button className='border-none text-red-500 font-bold cursor-pointer hover:border-2 hover:bg-reg-500 ' onClick={logout}>Logout</button>}
            {userData && <p>{userData.email}</p>}


        </div>
    )
}

export default Navbar
