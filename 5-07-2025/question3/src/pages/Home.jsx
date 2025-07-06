import React from 'react'
import { useState,useEffect } from 'react'

const Home = () => {
    const [products,setProducts]=useState([]);
    const [filtered,setFiltered]=useState([]);
    const [categories,setCategories]=useState([]);

    useEffect(()=>{
       fetch("https://dummyjson.com/products")
       .then((res)=>res.json())
       .then(data=>{
        setProducts(data.products);
        setFiltered(data.products);
        const AllCategory=[...new Set(data.products.map(p=>p.category))];
        setCategories(AllCategory)
     } );
    },[])

    const filterCategory =(cat)=>{
        if(cat=="all") return setFiltered(products);
        setFiltered(products.filter(p=>p.category===cat))
    };

    const sortByPrice=(order)=>{
        const sorted = [...filtered].sort((a,b)=>order="low"?a.price-b.price:b.price-a.price);
        setFiltered(sorted);
    }
  return (
    <div>
        <div>
            <strong>Filter:</strong>
            <button onClick={() => filterCategory("all")}>All</button>
            {categories.map(cat=>(
                <button onClick={() => filterCategory(cat)} key={cat}>{cat}</button>
            ))}
        </div>

        <div>
        <strong>Sort:</strong>
        <button onClick={() => sortByPrice("low")}>Low to High</button>
        <button onClick={() => sortByPrice("high")}>High to Low</button>
      </div>

       <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
       {filtered.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
       </div>
      
    </div>
  )
}

export default Home
