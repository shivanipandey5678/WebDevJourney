import { useState } from 'react'

import './App.css'


function App() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])
  const [filterBy, setFilterBy] = useState('All')
  const [priority, setPriority] = useState('Medium')

  //add task 
  function addTask(){
    if(task.trim()){
      const newTask={
        task:task,
        priority:priority,
        complete:false
      }
      setTasks([...tasks,newTask])
    
      setTask('')
    }
  }

  const priorityTable={
    High:3,
    Medium:2,
    Low:1
  }

  //delete task
  function deleteTask(index){
    let updatedList=tasks.filter((_,i)=>i!=index);
    setTasks(updatedList)
  }

  //mark complete
  function toggleComplete(index){
     console.log(tasks,index)
     const updatedList=tasks.map((el,i)=>i==index?{...el , complete:!el.complete}:el)
     console.log(updatedList)
     setTasks(updatedList)
  }



  return (
    <>
      <div>
        <h1>Todo List </h1>
        <input type="text" value={task} placeholder='Enter task' onChange={(e) => setTask(e.target.value)} />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="High">🔥 High</option>
          <option value="Medium">⚡ Medium</option>
          <option value="Low">🧘 Low</option>

        </select>
        <button onClick={addTask}>Add task</button>

      </div>

      <hr />
      <div>

        <label htmlFor="filtering">Filter By:</label>
        <select value={filterBy} onChange={(e) => setFilterBy(e.target.value)} id='filtering'>
          <option value="All">📋 All</option>
          <option value="High">🔥 High</option>
          <option value="Medium">⚡ Medium</option>
          <option value="Low">🧘 Low</option>
        </select>
      </div>

    

    

      <ul>
          {[...tasks]
          .filter((el)=>filterBy=='All'?true:el.priority==filterBy)
          .sort((a,b)=>priorityTable[b.priority]-priorityTable[a.priority])
          .map((el, i) => (
          
              <div className={`eachTask ${el.priority.toLowerCase()}Priority` }key={i} style={{margin:'4px'}}>
  
                <input type="checkbox" onChange={()=>toggleComplete(i)} />
                <span className={el.complete ? 'completedTask' : ''} > {el.task} | <strong>{el.priority}</strong> </span>
                <span onClick={()=>deleteTask(i)} style={{cursor:'pointer'}}>🗑️</span>
              </div>
           
  
          ))}

      </ul>




    </>
  )

  
}

export default App
