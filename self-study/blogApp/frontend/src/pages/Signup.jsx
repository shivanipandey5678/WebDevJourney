import React,{useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

 function Signup(){
  const [userData,setUserData]=useState({
    username:'',
    password:'',
    role:''
  });
  const [error,setError]=useState('');
  const navigate =useNavigate();
  const handleChange=(e)=>{
      const {name,value}=e.target;
      setUserData({...userData,[name]:value})
     
  }

  const onSubmit=async(e)=>{
    e.preventDefault();
    try {

      const response=await axios.post('http://localhost:1234/users/register',userData);
      if(response.status==201){
       
        alert('Registered successfully , please login');
      
        navigate("/login")
      }else{
        setError('Registration failed. Try again.');
      }
    } catch (err) {
      setError('Something went wrong. Try again.');
      console.error(err);
    }
    

  }

  useEffect(() => {
    console.log("Updated userData:", userData);
  }, [userData]);
  return(
    <> 
    <div className='min-h-screen bg-gray-100 flex flex-col  items-center justify-center'>
         <h2 className='text-2xl text-center text-block font-bold mb-4'>Please Register</h2>
         {error && <p className='text-red-500 text-center mb-2'>Something went wrong!!</p>}
        <form  className='flex flex-col bg-white max-w-sm w-full rounded shadow-md p-10 '>

        <input type="text"  name="username" id="username" value={userData.username} onChange={handleChange} className='w-full px-4 py-2 focus:outline-none border border-gray-300 mb-4 rounded' placeholder='Enter username'/>
        <input type="password" name="password" id="password" value={userData.password} onChange={handleChange} className='w-full px-4 py-2 focus:outline-none border border-gray-300 mb-4 rounded' placeholder='Enter password'/>
        <select name="role" id="role"   value={userData.role} onChange={handleChange} className='w-full px-4 py-2 focus:outline:none border border-gray-300 mb-4 rounded' >
              <option value="" disabled> select role</option>
              <option value="admin">Admin</option>
              <option value="author">Author</option>
              <option value="reader">Reader</option>
        </select>
        <button className='w-full text-black font-semibold px-4 py-2 rounded bg-red-500 hover:bg-red-600 ' onClick={onSubmit}>Signup</button>
        {error && <p className='text-red-600 mt-3 text-center'>{error}</p>}
        </form>
    </div>
    </>
  )
}


export default Signup;