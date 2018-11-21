const connection = require('../../db.js')

module.exports = {
  async findAssignments (req, res) {
    console.log(req.params.tid)
    // fix this query
    const q2 = `select W.WorkID, SJ.name as Subject_Name, A.ClassID as ClassID, W.Name, SJ.SubjectID from Teach T, Subject SJ, Assign A, Work W where T.teacherid = ? and T.subjectid = SJ.subjectid and SJ.subjectid  = A.subjectid and A.workid = W.workid  and T.classid = A.classid and T.year = A.year;`
    connection.query(q2, req.params.tid, function (err, rows) {
      if (err) throw err
      console.log('The solution is: ', rows)
      res.send(rows)
    })
  },
  async getTeachingSubjects (req, res) {
    console.log(req.params.tid)
    const q = 'select distinct SJ.Name,SJ.SubjectID from Teacher T, Teach Te,Subject SJ where T.TeacherID = Te.TeacherID and Te.SubjectID = SJ.SubjectID and T.TeacherID = ?;'
    connection.query(q, req.params.tid, function (err, rows) {
      if (err) throw err
      console.log('The solutions is: ', rows)
      res.send(rows)
    })
  },
  async getTeachingClasses (req, res) {
    console.log(req.params.tid)
    const q = 'select distinct Te.ClassID, C.Name, C.Room from Teacher T, Teach Te, Class1 C where T.TeacherID = Te.TeacherID AND Te.ClassID = C.ClassID and T.TeacherID = ?;'
    connection.query(q, req.params.tid, function (err, rows) {
      if (err) throw err
      console.log('The solutions is: ', rows)
      res.send(rows)
    })
  },
  async createAssignment (req, res) {
    let assignment = req.body.assignment
    const q = `insert into Work (WorkID, Name, Full_Score, Description, Type) values(?,?,?,?,?);insert into assign (Workid, classid, year, subjectid) values(?,?,?,?);`
    let l = ['35', assignment.name, assignment.fullscore, assignment.description, assignment.type, '35', assignment.class, assignment.classYear, assignment.subjectID]
    connection.query(q, l, function (err, rows) {
      if (err) throw err
      console.log('The solutions is: ', rows)
      res.send('Create Complete')
    })
  },
  async editAssignment (req, res) {
    res.send('edit Assignments')
  },
  async deleteAssignment (req, res) {
    console.log('Delete Assignment Request')
    console.log(req.params.aid)
    const q = `DELETE FROM work WHERE WorkID = ?`
    connection.query(q, req.params.aid, function (err, rows) {
      if (err) { res.send('Error') }
      console.log('The solutions is: ', rows)
      res.send('Delete Complete')
    })
  },
  async getClassYear (req, res) {
    let classID = '101'
    connection.query(`select Year from class1 where ClassID = ?`, classID, function (err, rows) {
      if (err) throw err
      console.log(rows)
      res.send(rows)
    })
  }
}
