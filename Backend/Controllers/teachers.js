const Teacher=require("../Database/models/teachers");
const teacherController={
    GetAllteacher:(req,res)=>{
        Teacher.GetAll((error,results)=>{
            if(error){
                console.log("error",error);
               return res.status(500).send(error);
            }
            console.log('the result is ',results);
           return  res.json(results);
        })
    },
    GetTeacherByID:(req,res)=>{
        const id=req.params.id;
        Teacher.GetByID(id,(error,results)=>{
            if(error){
                console.log("error",error);
               return res.status(500).send(error);
            }
            if(results.length===0){
                return res.status(404).send({ error: 'student not found' });
            }
            console.log('the result is',results);
           return res.json(results);
        })
    },
    AddTeacher:(req,res)=>{
        const teacher={
            FirstName:req.body.FirstName,
            LastName:req.body.LastName,
            Age:req.body.Age

        };
        Teacher.Add(teacher,(error,results)=>{
            if(error){
                console.log("this error",error);
                return res.status(500).send(err);
            }
            console.log("added good");
            res.send(`User added with ID: ${results.insertId}`);
        })
    }
}
module.exports=teacherController;
