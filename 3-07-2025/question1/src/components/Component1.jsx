import React from 'react'
import './Component1.css'
const Component1 = ({p,image,heading,Theme}) => {
  return (
    <div className='innerWrapper' >
      <h2>{heading}</h2>
      <img src={image} alt="" />
      <p>{p}</p>
    </div>
  )
}

export default Component1
