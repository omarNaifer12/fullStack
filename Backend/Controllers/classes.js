const Class=require("../Database/models/classes");
const classController={
    GetAllclasss:(req,res)=>{
        Class.GetAll((error,results)=>{
            if(error){
                console.log("error",error);
               return res.status(500).send(error);
            }
            console.log('the result is ',results);
           return  res.json(results);
        })
    },
    GetClassByID:(req,res)=>{
        const id=req.params.id;
        Class.GetByID(id,(error,results)=>{
            if(error){
            console.log("error",error);
            return res.status(500).send(error);
            }
            if(results.length===0){
            return res.status(404).send({ error: 'class not found' });
            }
            console.log('the result is',results);
           return res.json(results);
        })
    },
    AddClass:(req,res)=>{
        const classe={
           ClassName:req.body.ClassName
        };
        Class.Add(classe,(error,results)=>{
            if(error){
                console.log("this error",error);
                return res.status(500).send(err);
            }
            console.log("added good");
            res.send(`User added with ID: ${results.insertId}`);
        })
    }
}
module.exports=classController;
