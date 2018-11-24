const connection = require('../../db.js')

module.exports = {
  async findAssignments (req, res) {
    const q = `select W.WorkID, SJ.name as Subject_Name, A.ClassID as ClassID, W.Name, SJ.SubjectID, W.Description, W.Due_date, W.Full_Score,W.Type from Teach T, Subject SJ, Assign A, Work W where T.teacherid = ? and T.subjectid = SJ.subjectid and SJ.subjectid  = A.subjectid and A.workid = W.workid  and T.classid = A.classid;`
    connection.query(q, req.params.tid, function (err, rows) {
      if (err) throw err
      console.log('The solution is: ', rows)
      res.send(rows)
    })
  },
  async getTeachingSubjects (req, res) {
    const q = 'select distinct SJ.Name,SJ.SubjectID from Teacher T, Teach Te,Subject SJ where T.TeacherID = Te.TeacherID and Te.SubjectID = SJ.SubjectID and T.TeacherID = ?;'
    connection.query(q, req.params.tid, function (err, rows) {
      if (err) throw err
      console.log('The solutions is: ', rows)
      res.send(rows)
    })
  },
  async getTeachingClasses (req, res) {
    const q = 'select distinct Te.ClassID, C.Name, C.Room from Teacher T, Teach Te, Class1 C where T.TeacherID = Te.TeacherID AND Te.ClassID = C.ClassID and T.TeacherID = ?;'
    connection.query(q, req.params.tid, function (err, rows) {
      if (err) throw err
      console.log('The solutions is: ', rows)
      res.send(rows)
    })
  },
  async createAssignment (req, res) {
    let assignment = req.body.assignment
    assignment.fullscore = assignment.fullscore === '' ? null : assignment.fullscore
    assignment.date = assignment.date === '' ? null : assignment.date
    const q = `INSERT INTO s5project.work (Name, Full_Score, Description, Type, Due_date) VALUES (?, ?, ?, ?, ?); SET @pathId := LAST_INSERT_ID(); INSERT INTO s5project.assign (workid, classid, subjectid) VALUES (@pathId, ?, ?);`
    let l = [assignment.name, assignment.fullscore, assignment.description, assignment.assignmentType, assignment.date, assignment.class, assignment.subjectID]
    connection.query(q, l, function (err, rows) {
      if (err) {
        console.log(err)
        res.status(200).send('Error')
      } else {
        console.log('The solutions is: ', rows)
        res.send('Create Complete')
      }
    })
  },
  async editAssignment (req, res) {
    let assignment = req.body.assignment
    console.log(assignment)
    const q = `UPDATE s5project.work SET WorkID = ?, Name = ?, Full_Score = ?, Description = ?, Type = ?, Due_date = ? WHERE (WorkID = ?); UPDATE s5project.assign SET classid = ?, subjectid = ? where (workid = ?)`
    let l = [assignment.WorkID, assignment.Name, assignment.Fullscore, assignment.Description, assignment.Type, assignment.Date, assignment.WorkID, assignment.Class, assignment.SubjectID, assignment.WorkID]
    connection.query(q, l, function (err, rows) {
      if (err) {
        console.log(err)
        res.status(200).send('Error')
      } else {
        console.log('The solutions is: ', rows)
        res.send('Edit Complete')
      }
    })
  },
  async deleteAssignment (req, res) {
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
