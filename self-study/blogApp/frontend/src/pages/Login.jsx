
import React ,{useState,useEffect} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [userData, setUserData] = useState({
    username: '',
    password: '',

  });
  const [error, setError] = useState('');
  const navigate=useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value })

  }

  const submitHandler =async(e)=>{
    e.preventDefault();
    try {
       const response=await axios.post('http://localhost:1234/users/login',userData);
       if(response.status==200){
        const token=localStorage.setItem('token',response.data.accessToken);
        const userId=localStorage.setItem('userId',response.data.id);
        alert('Login successfully ');
      
        navigate("/blogs")
       }
    } catch (error) {
      setError('Something went wrong. Try again.');
      console.error(error);
    }
  
  }

 


  return (
    <>
     
      <div className='min-h-screen bg-gray-100 flex flex-col  items-center justify-center'>
        <h2 className='text-2xl text-center text-block font-bold mb-4'>Login</h2>

        <form  className='flex flex-col bg-white max-w-sm w-full rounded shadow-md p-10 '>
        {error && <p className='text-red-500 text-center mb-2'>Something went wrong!!</p>}
          <input type="text" name="username" id="username" value={userData.username} onChange={handleChange} className='w-full px-4 py-2 focus:outline:none border border-gray-300 mb-4 rounded' placeholder='Enter username' />
          <input type="password" name="password" id="password" value={userData.password} onChange={handleChange} className='w-full px-4 py-2 focus:outline:none border border-gray-300 mb-4 rounded' placeholder='Enter password' />
         
          <button className='w-full text-black font-semibold  px-4 py-2 rounded  bg-red-500 hover:bg-red-600' onClick={submitHandler}>Login</button>
        </form>
      </div>

    </>
  )
}

export default Login
