const conn=require("../index");
const teacherModel={
GetAll:(callback)=>{
    const sql="select *from teachers";
    conn.query(sql,callback);
},
GetByID:(id,callback)=>{
    const sql="select *from teachers where teacherID = ?";
    conn.query(sql,[id],callback);
},
Add:(teacher,callback)=>{
    const sql = 'INSERT INTO teachers SET ?';
    conn.query(sql, teacher, callback);
}
}
module.exports=teacherModel;
