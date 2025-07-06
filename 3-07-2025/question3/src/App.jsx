import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/Card';

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  async function fetchData() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => alert(error))
  }


  useEffect(() => {
    fetchData()
  }, [])



  return (
    <>

      <div id='inputWrapper'>

        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='search by name' />
      </div>
      <div id='cardWrapper'>

        {data
          .filter((el, i) => search == "" ? true : el.name.toLowerCase().includes(search.toLowerCase()))
          .map((el, i) => (
            <Card {...el} key={i} />
          ))}

      </div>
    </>
  )
}

export default App
