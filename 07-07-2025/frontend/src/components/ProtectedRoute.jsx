import React,{useContext} from 'react';
import {AuthContext} from '../context/AuthProvider.jsx';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
  const {isAuth} =useContext(AuthContext)
  if(isAuth==null) return <p>Loading.........</p>;
  if(isAuth == false) return <Navigate to="login"/>
  return children;
}

export default ProtectedRoute
