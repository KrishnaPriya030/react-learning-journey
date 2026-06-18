// ============================================
// DAY 6: Forms & Controlled Components
// React Learning Journey
// ============================================
// ============================================
// CONCEPT 1: Controlled Form
// Every input is tied to state
// React controls the form, not the browser
// ============================================

// CONCEPT 2: e.preventDefault()
// Stops browser from refreshing page on submit
// Always first line inside handleSubmit

// CONCEPT 3: Child to Parent communication
// Parent passes a function as prop (onAdd)
// Child calls it with new data (onAdd(newStudent))

// CONCEPT 4: Date.now()
// Gives current timestamp as unique id
// Always unique — perfect for list keys


// ============================================
// FILE 1: StudentForm.jsx
// ============================================

import { useState } from "react";

function StudentForm ({onAdd}){


    const [name,setName]=useState("")
    const [course,setCourse]=useState("")
    const [marks,setMarks]=useState("")

    const handleSubmit= (e) => {
         e.preventDefault()
    alert("Successfully submitted!")
         if(!name || !course || !marks){

            alert("Please fill out all fields to submit!")

            return
         }
    

    const newStudent={

        id:Date.now(),
        name:name,
        course:course,
        marks:Number(marks)

    }
    
onAdd(newStudent)

setName("")
setCourse("")
setMarks("")
    }

    return (
  <form onSubmit={handleSubmit} style={{
    textAlign: "center",
    padding: "20px",
    maxWidth: "400px",
    margin: "0 auto"
  }}>

    <h2>Add New Student</h2>

    <table style={{ margin: "0 auto", borderSpacing: "10px" }}>
      <tbody>
        <tr>
          <td><label style={{ fontWeight: "bold" }}>Name</label></td>
          <td>
            <input
              type="text"
              placeholder="Enter the name"
              value={name}
              onChange={e => setName(e.target.value)}
              style={{ border: "1px solid blue", borderRadius: "12px", padding: "10px", width: "200px" }}
            />
          </td>
        </tr>

        <tr>
          <td><label style={{ fontWeight: "bold" }}>Course</label></td>
          <td>
            <input
              type="text"
              placeholder="Enter the course"
              value={course}
              onChange={e => setCourse(e.target.value)}
              style={{ border: "1px solid blue", borderRadius: "12px", padding: "10px", width: "200px" }}
            />
          </td>
        </tr>

        <tr>
          <td><label style={{ fontWeight: "bold" }}>Marks</label></td>
          <td>
            <input
              type="number"
              placeholder="Enter the marks"
              value={marks}
              onChange={e => setMarks(e.target.value)}
              style={{ border: "1px solid blue", borderRadius: "12px", padding: "10px", width: "200px" }}
            />
          </td>
        </tr>
      </tbody>
    </table>

    <button style={{
      background: "blue",
      color: "white",
      padding: "10px 30px",
      borderRadius: "20px",
      border: "none",
      marginTop: "15px",
      cursor: "pointer"
    }}>
      ➕ Add Student
    </button>

  </form>
)
}

export default StudentForm


// ============================================
// FILE 2: App.jsx (updated)
// ============================================



import Student from './Student'
import Counter from './Counter'
import StudentForm from './StudentForm'
import { useState } from 'react'
import './App.css'


  const initial=[
          {id: 1,name: "Shyam",course:"Mca",marks:50},
          {id: 2,name: "yethu",course:"bca",marks:90},
          {id: 3,name: "johm",course:"Mca",marks:35},
          {id: 4,name: "lil",course:"ca",marks:20},
          {id: 5,name: "S",course:"Mca",marks:50}

         ];


function App(){

  const[search,setSearch]=useState("");
  const[students,setStudents]=useState(initial)

  const filtered=students.filter(s =>
     s.name.toLowerCase().includes(search.toLowerCase()));

const handleAdd=(newStudent) =>{
setStudents([...students,newStudent])}
  return (
    <div>
       <Counter />
       <StudentForm onAdd={handleAdd} />
      <h1 >My Students</h1>
       <input
       type="text"
       placeholder='Enter the name to search'
       value={search}
       onChange={e => setSearch(e.target.value)}
       style={{
          display: "block",
          margin: "20px auto",
          padding: "10px 20px",
          borderRadius: "8px",
          border: "2px solid yellow",
          width: "300px",
          fontSize: "1rem"
        }}
      />



      
    

      <h1 style={{color:"green"}}>Passed students</h1>
      <div className='card-container'>
         {filtered.filter(s => s.marks>=40)
         .map(s => (
          <Student 
           key={s.id}
           name={s.name}
           course={s.course}
           marks={s.marks}
           />
         ))}

      </div>


      <h1 style={{color:"red"}}>Failed students</h1>
      <div className='card-container'>
        {filtered.filter(s => s.marks<40)
        .map(s => (
          <Student
          key={s.id}
           name={s.name}
           course={s.course}
           marks={s.marks}
           />

        ))}
      </div>
    </div>
   
    
  )
}
export default App;
