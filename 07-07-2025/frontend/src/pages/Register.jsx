import React ,{useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Register = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [error,setError]=useState(false);
  const navigate=useNavigate();
  const handleSubmit=()=>{
    if(email.trim()=="" || password.trim()==""){
        alert('please provide complete info first!!')
    }
    const userData={email,password};
    async function register(){
        const response = await axios.post('http://localhost:8099/api/auth/register',userData);
        if(response.status==201){
      
            setEmail(' ')
            setPassword(' ')
            alert("register successfullt please now login!")
            navigate('/login')
        }
        
        else{
            setError(true)
        }
      

    }
    register()
  }
  return (
    <div className='min-h-screen bg-gray-100 w-full flex justify-center items-center'>
        <div className='p-10 bg-white flex flex-col rounded-xl shadow-md gap-4 w-1/3'>


            <h2 className='font-bold text-center text-2xl'>Register</h2>
            {error && <p className='text-red-500 text-center'>{error}</p>}
            <input type="email" name="email" id="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} className='px-4 py-2 rounded border-2  border-gray-300 w-full' placeholder='Enter your email'/>
            <input type="password" name="password" id="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}  className='px-4 py-2 rounded border-2  border-gray-300 w-full'placeholder='Enter your password' />
            <button onClick={handleSubmit} className='px-4 py-2 rounded border-2  border-gray-300 w-full hover:bg-blue-600 hover:text-white text-semibold hover:border-white' >Submit</button>
        </div>
    </div>
  )
}

export default Register
