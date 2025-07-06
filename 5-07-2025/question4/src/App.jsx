import {Link,Routes,Route} from 'react-router-dom';
import Home from '../pages/Home';
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import './App.css'

function App() {
  

  return (
    <>
    <div>
      <nav>
      <Link to="/">Home</Link>
      <Link to="/Profile">Profile</Link>
      <Link to="/Settings">Settings</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
      
      
    </>
  )
}

export default App
