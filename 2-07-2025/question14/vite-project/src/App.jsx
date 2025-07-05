import React ,{useState,useEffect} from 'react';
import axios from 'axios';

const dummyTasks = [
  { name: "Buy groceries" },
  { name: "Finish homework" },
  { name: "Pay electricity bill" },
  { name: "Call the doctor" },
  { name: "Submit project report" },
  { name: "Read a book" },
  { name: "Workout for 30 mins" },
  { name: "Plan weekend trip" },
  { name: "Clean the house" },
  { name: "Email team update" }
];

const BaseURL = `${import.meta.env.VITE_FIREBASE_URL}`;

function App(){
   const [tasks,setTasks]=useState([]);
  const getTasks= async()=>{
    try {
       const res= await axios.get(`${BaseURL}.json`);
       const data=await res.data||{};
       const formatter=  Object.entries(data).map(([id,val])=>({
        id,...val
       }))
       setTasks(formatter);

    } catch (error) {
      console.error("Error in getting tasks:", error);
    }

  }

  const postTasks = async() => {
    try {
      await axios.delete(`${BaseURL}.json`);
      for(let task of dummyTasks){

        await axios.post(`${BaseURL}.json`,task);
      }
      alert("Dummy tasks posted to Firebase");
      getTasks();
      return 
    } catch (error) {
      console.error("Error posting tasks:", error);
    }

   }
  useEffect(()=>{
    postTasks()
  
  },[])
  return(
    <>
     <div>
      <h1>Tasks List</h1>
      <ul>
        {
          tasks.map((task)=>(
            <li key={task.id}>{task.name}</li>
          ))
        }
      </ul>
     </div>
    
    </>
  );
}

export default App;