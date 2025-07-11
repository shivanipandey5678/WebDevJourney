import React, { useEffect, useState } from 'react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Blog from './Blog';
import CreateBlog from './CreateBlog';
import PrivateRoute from './PrivateRoute';
import EditBlog from './EditBlog';

export const Header = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));

  // Detect token changes on focus or logout
  useEffect(() => {
    const checkToken = () => setToken(localStorage.getItem("token"));
    window.addEventListener('focus', checkToken);
    return () => window.removeEventListener('focus', checkToken);
  }, []);

  function Logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    setToken(null);
    navigate("/login");
  }

  return (
    <>
      <nav className='flex bg-pink-300 p-4 text-xl justify-evenly sticky top-0 z-50'>
        <Link to="/">Home</Link>
        <Link to="/blogs">Blogs</Link>
        {token && <Link to="/create-blog">Create Blog</Link>}
        {!token && <Link to="/login">Login</Link>}
        {!token && <Link to="/signup">Signup</Link>}
        {token && <button onClick={Logout} className="text-red-700 font-semibold">Logout</button>}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit-blog" element={<EditBlog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/create-blog" element={
          <PrivateRoute>
            <CreateBlog />
          </PrivateRoute>
        } />
        <Route path="/edit-blog/id" element={
          <PrivateRoute>
            <EditBlog />
          </PrivateRoute>
        }/>
      </Routes>
    </>
  );
};
