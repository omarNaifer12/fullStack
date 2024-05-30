import React from 'react'
import "./AddUpdateStudent.css"
const AddUpdateStudent = () => {
  return (
    <div className="form-container">
    <h2>Add Student</h2>
    <form className="add-student-form">
      <div className="form-group">
        <label htmlFor="studentID"> Student ID:</label>
        <label htmlFor="studentID">????</label>

        
      </div>
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" name="firstName" placeholder="Enter First Name" />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" name="lastName" placeholder="Enter Last Name" />
      </div>
      <div className="form-group">
        <label htmlFor="age">Age</label>
        <input type="number" id="age" name="age" placeholder="Enter Age" />
      </div>
      <button type="submit" className="submit-btn">Add Student</button>
    </form>
  </div>
  )
}

export default AddUpdateStudent