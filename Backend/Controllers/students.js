const Student=require("../Database/models/students");
const studentController={
    GetAllStudents:(req,res)=>{
        Student.GetAll((error,results)=>{
            if(error){
                console.log("error",error);
               return res.status(500).send(error);
            }
            console.log('the result is ',results);
           return  res.json(results);
        })
    },
    GetStudentByID:(req,res)=>{
        const id=req.params.id;
        Student.GetByID(id,(error,results)=>{
            if(error){
                console.log("error",error);
               return res.status(500).send(error);
            }
            if(results.length===0){
                return res.status(404).send({ error: 'student not found' });
            }
            console.log('the result is ',results);
           return  res.json(results);
        })
    },
    AddStudent:(req,res)=>{
        const student={
            FirstName:req.body.FirstName,
            LastName:req.body.LastName,
            Age:req.body.Age

        };
        Student.Add(student,(error,results)=>{
            if(error){
                console.log("this error",error);
                return res.status(500).send(err);
            }
            console.log("added good");
            res.send(`User added with ID: ${results.insertId}`);
        })
    },
    
}
module.exports=studentController;
