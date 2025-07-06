import { useState } from 'react'

import './App.css'
import GroupComponent from './components/GroupComponent.jsx'
function App() {
  const [theme, setTheme] = useState("dark")

  return (
    <>
    <div id='parent'>

     <GroupComponent/>
    </div>
     
    </>
  )
}

export default App
