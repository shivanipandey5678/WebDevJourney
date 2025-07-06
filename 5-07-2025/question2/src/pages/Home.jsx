import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [city,setCity] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        if (!city.trim()) {
          alert('⚠️ Please enter a city name!');
          return;
        }
        navigate(`/weather/${city}`);
      };
  return (
    <div style={{ padding: '2rem' }}>
       <h2>🌤️ Weather Dashboard</h2>
       <input
        type="text"
        value={city}
        placeholder="Enter city name"
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}

export default Home
