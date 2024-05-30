import React, { useState } from 'react';
import "./AddUpdateTeacher.css";
import axios from 'axios';

const AddUpdateTeacher = ({ teacher }) => {
  const [teacherData, setTeacherData] = useState({
    FirstName: teacher === undefined ? "" : teacher.FirstName,
    LastName: teacher === undefined ? "" : teacher.LastName,
    Age: teacher === undefined ? "" : teacher.Age
  });
  const [lblTeacherID, setLblTeacherID] = useState(teacher === undefined ? "????" : teacher.teacherID);

  const handleSubmitUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:3000/api/teacher/${teacher.teacherID}`, {
        FirstName: teacherData.FirstName,
        LastName: teacherData.LastName,
        Age: teacherData.Age
      });
      console.log('Updated teacher:', response.data);
      alert('Teacher updated successfully!');
    } catch (error) {
      console.error('Error updating teacher:', error);
      alert('Failed to update teacher.');
    }
  };

  const handleSubmitAdd = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/teacher", {
        FirstName: teacherData.FirstName,
        LastName: teacherData.LastName,
        Age: teacherData.Age
      });
      console.log("Added success", response.data);
      alert("Success");
      const id = response.data.teacherID;
      console.log("ID is", id);
      setLblTeacherID(id);
    } catch (error) {
      console.error('There was an error adding the teacher!', error);
      alert("Failed to add teacher.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeacherData({ ...teacherData, [name]: value });
    console.log("The data is", teacherData);
  };

  return (
    <div className="form-container">
      <h2>Add Teacher</h2>
      <form className="add-teacher-form">
        <div className="form-group">
          <label htmlFor="teacherID"> Teacher ID:</label>
          <label htmlFor="teacherID">{lblTeacherID}</label>
        </div>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="FirstName"
            onChange={handleChange} value={teacherData.FirstName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="LastName" value={teacherData.LastName}
            onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input type="number" id="age" name="Age"
            onChange={handleChange} value={teacherData.Age} />
        </div>
        <button type="submit" className="submit-btn"
          onClick={teacher === undefined ? handleSubmitAdd : handleSubmitUpdate}>
          {teacher === undefined ? "Add Teacher" : "Update Teacher"}
        </button>
      </form>
    </div>
  );
}

export default AddUpdateTeacher;
