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
},
update: (id, teacher, callback) => {
    const sql = 'UPDATE teachers SET ? WHERE teacherID = ?';
    conn.query(sql, [teacher, id], callback);
},
delete: (id, callback) => {
    const sql = 'DELETE FROM teachers WHERE teacherID = ?';
    conn.query(sql, [id], callback);
}
}
module.exports=teacherModel;
