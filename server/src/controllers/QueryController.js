const connection = require('../db.js')

module.exports = {
  async studentWork (req, res) {
    let sid = req.params.sid
    connection.query(`SELECT W.* FROM hand_in H, work W WHERE H.studentID = ? and H.workId = W.workId`, sid, function (err, rows) {
      if (err) throw err
      console.log('The solution is: ', rows)
      res.send(rows)
    })
  },
  async absentStudent (req, res) {
    const q = `SELECT S.Name,S.ClassID,A.Type FROM student S, attendance A WHERE S.ClassID = ? AND S.StudentID = A.StudentID AND A.Type != 'A' AND A.date = ?`
    connection.query(q, [req.params.classID, req.params.day], function (err, rows, fields) {
      if (err) throw err
      console.log('The solution is: ', rows)
      res.send(rows)
    })
  },
  async schoolActivity (req, res) {
    // Fill query
    connection.query('SELECT * from student', function (err, rows, fields) {
      if (err) throw err
      console.log('The solution is: ', rows)
      res.send(rows)
    })
  },
  async teacherStudent (req, res) {
    const q = 'SELECT S.StudentID,S.Name,C.ClassID,C.Year FROM Student S, Class1 C, Teacher T WHERE S.ClassID = C.ClassID AND T.ClassID = C.ClassID AND T.Name = ?'
    connection.query(q, req.params.teacherName, function (err, rows, fields) {
      if (err) throw err
      console.log('The solution is: ', rows)
      res.send(rows)
    })
  },
  async courseGrade (req, res) {
    console.log(req.params)
    let q = 'SELECT S.Name, St.StudentID, St.Grade FROM Student S,Study St,Subject Sj,Teach T,Class1 C WHERE S.StudentID = St.StudentID AND St.SubjectID = ? AND S.Year = C.Year AND C.ClassID = T.ClassID AND C.Year = ?'
    connection.query(q, [req.params.sID, req.params.year], function (err, rows, fields) {
      if (err) throw err
      console.log('The solution is: ', rows)
      res.send(rows)
    })
  }
}
