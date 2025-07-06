import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import WeatherPage from './pages/WeatherPage';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather/:city" element={<WeatherPage />} />
      </Routes>

    </>
  )
}

export default App
