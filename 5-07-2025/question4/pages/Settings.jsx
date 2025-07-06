import React from 'react'
import { UserContext } from '../context/UserContext';
import { useState ,useContext} from 'react';

const Settings = () => {
    const { user, setUser } = useContext(UserContext);
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);

    const handleUpdate=()=>{
        setUser({name,email});
        alert('profile updated!')
    }
  return (
    <div>
       <h2>Setting</h2>
       <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
       <br />
       <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
       <br />
       <button onClick={handleUpdate}>Update</button>
    </div>
  )
}

export default Settings
