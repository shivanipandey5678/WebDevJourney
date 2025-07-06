import { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [goalTime, setGoalTime] = useState(10);
  const [isRunning, setIsRunning] = useState(false);
  const [second, setSecond] = useState(0);

 
  useEffect(()=>{
    

      if (second >= goalTime) {
        console.log("Goal Reached!!")
        setIsRunning(false)
      } 
      if(isRunning &&second < goalTime ) {
        
        const interval = setInterval(() => {
          setSecond(prev => prev + 1);
        }, 1000)
        return () => clearInterval(interval)
      }
    

  },[second,isRunning,goalTime])
   
   function startTimer(){
    if(second>=goalTime){
      alert("⏰ Please reset or increase your goal time.");
      return;
    }
    setIsRunning(true);
   }


  function Reset() {
    setSecond(0)
    setIsRunning(false)
  }

  function stopTimer() {
    setIsRunning(false)
  }


  return (
    <>
      <div>
        <p>🕛:{second}second</p>
        <input type="number" value={goalTime} onChange={(e) => setGoalTime(e.target.value)} />
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={Reset}>Reset</button>
      </div>
    </>
  )
}

export default App;