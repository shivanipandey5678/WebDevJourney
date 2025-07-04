import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count,setCount]=useState(0)
  function Reset(){
    setCount(0)
  }

  function Increment(){
    
    setCount(prev=>prev+1)
  }

  function Decrement(){
    if(count>0){

      setCount(prev=>prev-1)
    }
  }
  return (
    <>
       <p>{ count>=10?`Goal Reached!`:`count : ${count}`}</p>
       <button onClick={Increment}>Increment</button>
       <button  onClick={Decrement}>Decrement</button>
       <button  onClick={Reset}>Reset</button>
     
    </>
  )
}

export default App
