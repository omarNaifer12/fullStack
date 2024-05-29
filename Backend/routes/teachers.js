const express=require("express");
const router=express.Router();
const teacherController=require("../Controllers/teachers");
router.get("/teachers",teacherController.GetAllteacher);
router.get("/teacher/:id",teacherController.GetTeacherByID);
router.post("/teacher",teacherController.AddTeacher);
router.put("/teacher/:id",teacherController.updateTeacher);
router.delete("/teacher/:id",teacherController.deleteTeacher);


module.exports=router;