import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetails';


function App() {
  

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/movie/:id" element={<MovieDetail />}/>
      </Routes>
    </Router>
  )
}

export default App
