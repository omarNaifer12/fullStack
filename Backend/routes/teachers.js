const express=require("express");
const router=express.Router();
const teacherController=require("../Controllers/teachers");
router.get("/teachers",teacherController.GetAllteacher);
router.get("/teacher/:id",teacherController.GetTeacherByID);
router.post("/teacher",teacherController.AddTeacher);
module.exports=router;