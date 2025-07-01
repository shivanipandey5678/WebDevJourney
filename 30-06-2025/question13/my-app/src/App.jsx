import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [title, setTitle] = useState("")
  const [count, setCount] = useState(0)
  let titleChange=()=>{
    const newCount = count + 1;
    setCount(newCount)
    setTitle(`myapp ${count}`)
  }

  useEffect(()=>{
    document.title = title;
  },[title])

  return (
    <>
      <p>React title updates: {count}</p>
      <button onClick={titleChange}>Change Title</button>
     
    </>
  )
}

export default App
