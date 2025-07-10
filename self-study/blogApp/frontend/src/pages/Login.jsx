import React, { useState } from 'react'

const Login = () => {
  const [userData,setUserData]=useState({
       username:'',
       password:'',
       role:''
  });

  const handleChange=(e)=>{
    const {name,value}=e.target;
    console.log(e)
    console.log(e.target)
    setUserData({...userData,[name]:value})
  }

  return (
    <div className='container mx-auto  h-screen flex justify-center items-center flex-col '>
      <h1 className='text-2xl mb-14 font-semibold underline '>Login Page</h1>
      <form  method="post" className='bg-blue-200 p-22 rounded-2xl'>
  
        

        <div>

        <label htmlFor="username">Username : </label>
        <input type="text" name="username" id="username" value={userData.username} onChange={handleChange} className='border-1 px-9 py-2 rounded text-sm '/>
        </div>
        <br />
        <div>
          <label htmlFor="password">Password : </label>
          <input type="password" name="password" id="password" value={userData.password} onChange={handleChange} className='border-1 px-9 py-2 rounded'/>
        </div>
              
        <br />
        <div>
          <label htmlFor="role">Select your Role : </label>
          <select value={userData.role} name="role" onChange={handleChange}  className='border-1 px-6 py-2 rounded-xl pr-6' id='role'>
            <option value="" disabled onChange={handleChange}>Select Role</option>
            <option value="Admin">Admin</option>
            <option value="Author">Author</option>
            <option value="Reader">Reader</option>
          </select>

        </div>
       
      </form>
      
    </div>
  )
}

export default Login
