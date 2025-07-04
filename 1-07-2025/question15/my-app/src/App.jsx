import { useState } from 'react'

import './App.css'

function App() {
  const studentsList = [
    { id: 1, name: "Alice", present: true },
    { id: 2, name: "Bob", present: false },
    { id: 3, name: "Charlie", present: true },
    { id: 4, name: "David", present: false },
    { id: 5, name: "Eva", present: true }
  ];
  const [students, setStudents] = useState(studentsList);
  const [presentStudents, setPresesntStudents] = useState(0);
  const [filterStudent, setFilterStudent] = useState('All');


  function toggleAttendance(index){
   const updatedList= students.map((el,i)=>(index==i)?{...el,present:!el.present}:el);
   setStudents(updatedList)
  
  }

  function countPresentStudent(){
    const presentStudents=students.filter((el,i)=>el.present==true);
    setPresesntStudents(presentStudents.length)
    console.log(presentStudents)
  }

 
  return (
    <>
      <h2>Students 's Info</h2>
      <ul>
        {students
        .filter((el)=>{ 
          if(filterStudent === 'All') return true;
          if (filterStudent === 'Present') return el.present === true;
          if (filterStudent === 'Absent') return el.present === false;
      
        })
        .map((el,i)=>(
          <div key={i} id='eachDiv'>
            <label htmlFor="AttendanceToggle">Toggle Attendance : </label>
            <input type="checkbox" id='AttendanceToggle' onChange={()=>toggleAttendance(i)}/>
            <p>Name:{el.name}</p>
            {el.present==true?(<p style={{color:"green"}}>Present</p>):(<p style={{color:"red"}}>Absent</p>)}
            
          </div>
           
        ))}
      </ul>

      <button onClick={countPresentStudent}>Click to know Presesnt Students Count:{presentStudents}</button>
       <select value={filterStudent} onChange={(e)=>setFilterStudent(e.target.value)}>
        <option value="All">All</option>
        <option value="Present">present 🟢</option>
        <option value="Absent">Absent 🔴</option>
       </select>
     
    </>
  )
}

export default App
