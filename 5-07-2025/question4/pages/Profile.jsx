import { useContext } from "react";
import { UserContext } from "../context/UserContext";

import React from 'react'

const Profile = () => {
    const {user}=useContext(UserContext)
  return (
    <div>
        <h2>Profile</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
    </div>
  )
}

export default Profile
