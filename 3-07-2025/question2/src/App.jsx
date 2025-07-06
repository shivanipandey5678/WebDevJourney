import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [quote, setQuote] = useState({});
  const [typing,setTyping] = useState("");
  async function fetchQuote() {
    setQuote({});
    setTyping(""); 
    fetch("https://api.api-ninjas.com/v1/quotes", {
      headers: {
        "X-Api-Key": "Qk1I5t3v5CTRBQnSRgDMdw==NOyQOrgM4f7OP9VF"
      }
    })
      .then((response) => response.json())
      .then((data) => setQuote(data[0]))
      .catch((error) => alert(error))
  }

  useEffect(()=>{
     if(!quote.quote) return ;
     setTyping("")
     let i=0;

     const Interval=setInterval(()=>{
        setTyping(prev=>prev+quote.quote[i]);
        i++
        if(i>=quote.quote.length){
         clearInterval(Interval)
        }
     },30)
     return () => clearInterval(Interval);
   },[quote.quote])
    
   useEffect(() => {
    const interval=setInterval(()=>{

      fetchQuote()
    },30000)
    return ()=>clearInterval(interval);
   }, [])



  return (
    <>

      <h2 className='text-2xl font-bold mb-4' style={{ fontFamily: 'Great Vibes, cursive' }}>QuoteNest</h2>
      <hr className="mb-4" />
      <div className="bg-pink-300 p-10 rounded-xl shadow-md w-80 " >
        <div>
          <h2 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Great Vibes, cursive' }}>Quote</h2>
          <p className="text-gray-700">{typing || "Loading..."}</p>
        </div>
        <div className="mt-4">

          <p className="text-sm text-right italic">-{quote.author}</p>

          <button onClick={fetchQuote} className=' p-2 border-1 rounded-md text-sm'>Next Quote</button>
        </div>

      </div>



    </>
  )
}

export default App
