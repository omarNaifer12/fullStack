const conn=require("../index");
const studentModel={
GetAll:(callback)=>{
    const sql="select *from students";
    conn.query(sql,callback);
},
GetByID:(id,callback)=>{
    const sql="select *from students where studentID = ?";
    conn.query(sql,[id],callback);
},
Add:(student,callback)=>{
    const sql = 'INSERT INTO students SET ?';
    conn.query(sql, student, callback);
}
}
module.exports=studentModel;