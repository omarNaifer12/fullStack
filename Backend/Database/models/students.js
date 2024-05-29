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
},
update: (id, student, callback) => {
    const sql = 'UPDATE students SET ? WHERE studentID = ?';
    conn.query(sql, [student, id], callback);
},
delete: (id, callback) => {
    const sql = 'DELETE FROM students WHERE studentID = ?';
    conn.query(sql, [id], callback);
}
}
module.exports=studentModel;