import React, { useEffect, useState } from 'react'
import "./GetStudents.css"
import axios from 'axios'
import AddUpdateStudent from '../AddUpdateStudent/AddUpdateStudent'
import { useNavigate } from 'react-router-dom'

const GetStudents = () => {
  const[students,setStudents]=useState([]);
  const [getAddForm,setGetAddForm]=useState("");
  const[GetStudent,setGetStudent]=useState({});
  const navigate=useNavigate();
useEffect(()=>{
const fetchDataStudents=async()=>{
try{
const response= await axios.get("http://localhost:3000/api/students");
console.log(response.data);
 setStudents(response.data)
}
    catch(err){
console.log("error",err);
    }
   
}
fetchDataStudents();
},[])
const DeleteStudent=async(studentId)=>{
   try{
await axios.delete(`http://localhost:3000/api/student/${studentId}`);
setStudents(students.filter(student=>student.studentID!==studentId));
   }
   catch(err){
console.log("error",err);
   }
}

 if(getAddForm==="Edit"){
    return <AddUpdateStudent student={GetStudent}/>
}
const handleUpdate=(student)=>{
setGetStudent(student);
setGetAddForm("Edit");
}
    return (
    <div className="container">
        <h1>Student Records</h1>
        <button onClick={()=>navigate("/SAdd")} className="add-btn" >Add Student</button>
        <table id="studentsTable">
            <thead>
                <tr>
                    <th>Student ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
              {  

        students.map((student,index)=>{
return(
    <tr key={student.studentID} >
                    <td>{student.studentID}</td>
                    <td>{student.FirstName}</td>
                    <td>{student.LastName}</td>
                    <td>{student.Age}</td>
                    <td>
                        <button className="action-btn update"
                        onClick={()=>handleUpdate(student)}
                        >Update</button>
                        <button onClick={()=>DeleteStudent(student.studentID)} className="action-btn delete">Delete</button>
                    </td>
                </tr>
)
 })
    
}

            </tbody>
        </table>
        <button  className='back' onClick={()=>navigate(-1)}>back</button>
    </div>
  )
}

export default GetStudents