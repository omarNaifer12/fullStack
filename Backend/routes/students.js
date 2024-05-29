const express=require("express");
const router=express.Router();
const studentController=require("../Controllers/students");
router.get("/students",studentController.GetAllStudents);
router.get("/student/:id",studentController.GetStudentByID)
router.post("/student",studentController.AddStudent);
module.exports=router;