import React from 'react'
import {useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';

const ProductDetail = () => {
    const {id}=useParams();
    const [product,setProduct]=useState(null);
   

   


 useEffect(()=>{
    fetch(`https://dummyjson.com/products/${id}`)
    .then(res=>res.json())
    .then(data=>setProduct(data))
 },[id])

 if (!product) return <p>Loading...</p>;
   
  return (
    <div style={{ padding: '20px' }}>
         <h2>{product.title}</h2>
         <img src={product.thumbnail} alt='' />
         <p><strong>Price:</strong> ₹{product.price}</p>
        <p><strong>Category:</strong> {product.category}</p>
        <p>{product.description}</p>
    </div>
  )
}

export default ProductDetails

