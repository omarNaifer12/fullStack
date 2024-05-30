import React, {  useState } from 'react'
import "./AddUpdateStudent.css"
import axios from 'axios';

const AddUpdateStudent = ({student}) => {
const [studentData,setStudentData]=useState({
    FirstName:student===undefined?"":student.FirstName,
    LastName:student===undefined?"":student.LastName,
    Age:student===undefined?"":student.Age
});
const [lblStudentID,setLblStudentID]=useState(student===undefined?"????":student.studentID);
const handleSubmitUpdate=async(e)=>{
   e.preventDefault();
    try{
const response=await axios.put(`http://localhost:3000/api/student/${student.studentID}`,{
    FirstName:studentData.FirstName,
    LastName:studentData.LastName,
    Age:studentData.Age
})
console.log('Updated student:', response.data);
alert('Student updated successfully!');
    }
    catch(error){
        console.error('Error updating student:', error);
        alert('Failed to update student.');
    }
}
const handleSubmitAdd = async(e)=>{
    e.preventDefault();
    try{
const response= await axios.post("http://localhost:3000/api/student",{
    FirstName:studentData.FirstName,
    LastName:studentData.LastName,
    Age:studentData.Age
})
console.log("added success",response.data);
alert("success");
const id=response.data.studentID;
console.log("id is",id);
setLblStudentID(id);
    }
    catch{
        console.error('There was an error adding the student!', error);
    alert("bad");
    }
}
const handleChange=(e)=>{
    const{name,value}=e.target;
    setStudentData({...studentData,[name]:value}    )
console.log("the data is ",studentData);
}
    return (
    <div className="form-container">
    <h2>{student===undefined?"Add Student":"Update Student"}</h2>
    <form className="add-student-form">
      <div className="form-group">
        <label htmlFor="studentID"> Student ID:</label>
        <label htmlFor="studentID" >{lblStudentID}</label>
        
        </div>
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" name="FirstName"
 onChange={handleChange} value={studentData.FirstName}
         />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" name="LastName"   value={studentData.LastName}
        onChange={handleChange}/>
      </div>
      <div className="form-group">
        <label htmlFor="age">Age</label>
        <input type="number" id="age" name="Age"  
        onChange={handleChange} value={studentData.Age}/>
      </div>
      <button type="submit" className="submit-btn" 
      onClick={student===undefined?handleSubmitAdd:handleSubmitUpdate}>
        {student===undefined?"Add Student":"Update Student"}
      </button>
     
    </form>
    <button  className='back' onClick={()=>navigate(-1)}>back</button>
  </div>
  )
}

export default AddUpdateStudent