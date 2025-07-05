import React from 'react';
import axios from 'axios'; 

import {useState,useEffect} from 'react';

const BaseURL=`${import.meta.env.VITE_FIREBASE_URL}` ;

function App(){
  const[form,setForm]=useState({name:'',email:''});
  const [users,setUsers]=useState([]);
  const [editId,setEditId]=useState(null);

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const fetchUsers=async()=>{
     try {
      const res=await axios.get(`${BaseURL}.json`);
      const data=res.data || {};
      const formatted=Object.entries(data).map(([id,val])=>(
        {id,...val}
      ));
      setUsers(formatted);

     } catch (error) {
       alert(`${error} in fetchUsers`)
     }
  };

  useEffect(()=>{
    fetchUsers();
  },[])

  //add or edit
  const handleSubmit =async(e)=>{
    e.preventDefault();
    const {name,email}=form;
    if(!name || ! email || !isValidEmail(email)){
      alert("Valid name & email required!");
      return;
    }
    try {
      if(editId){
        await axios.patch(`${BaseURL}/${editId}.json`,form)
        setEditId(null)
      }else{
        await axios.post(`${BaseURL}.json`,form);

      }
      setForm({name:'',email:''});
      fetchUsers();
      
    } catch (error) {
      alert(`${error} in handleSubmit`)
    }
  }

    //delete
    const deleteUser =async(id) =>{
      try {
        await axios.delete(`${BaseURL}/${id}.json`);
        fetchUsers();
      } catch (error) {
        alert(`${error} in deleteUser`)
      }
    };

    //edit
    const handleEditUser=async(user)=>{
      try {
         setForm({name:user.name,email:user.email})
         setEditId(user.id)
      } catch (error) {
        alert(`${error} in deleteUser`)
      }
    }

  return (
    <>
      <div>
        <h2>User manager</h2>
        <form onSubmit={handleSubmit}>


          <input type="text" value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})}/>
          <input type="text" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})}/>
          <button type="submit">{editId?'update':'Add'}</button>
        </form>

        <h3>All Users</h3>
        <ul>
          {users.map((el,i)=>(
            <li key={el.id}>
              {el.name} - {el.email}
              <button onClick={()=>handleEditUser(el)}>✏️</button>
              <button onClick={() => deleteUser(el.id)}>🗑️</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}


export default App;