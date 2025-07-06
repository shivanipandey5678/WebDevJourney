import React from 'react';
import './Card.css';

function Card({name,address,email}){
    return(
       
         <div key={email} id='Card'>
            <p><strong>  Name : {name}</strong></p>
            <p>  City : {address.city}</p>
            <p> Email : {email}</p>
         </div>
        
     
    )
}

export default Card;