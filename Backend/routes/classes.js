const express=require("express");
const router=express.Router();
const classController=require("../Controllers/classes");
router.get("/classes",classController.GetAllclasss);
router.get("/class/:id",classController.GetClassByID);
router.post("/class",classController.AddClass);
module.exports=router;