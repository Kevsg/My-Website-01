const connection = require('../../db.js')

module.exports = {
  async findAssignments (req, res) {
    console.log(req.params.tid)
    const q = `select W.WorkID, SJ.Name as Subject_Name, T.ClassID, W.Name, (case when H.score is not null then 'checked' else '-' end) as checked from Teach T, Subject SJ, Work W, hand_in H where T.TeacherID = ? and T.SubjectID = SJ.SubjectID and W.SubjectID = SJ.SubjectID and W.WorkID = H.WorkID`
    connection.query(q, req.params.tid, function (err, rows) {
      if (err) throw err
      console.log('The solution is: ', rows)
      res.send(rows)
    })
  },
  async getTeachingSubjects (req, res) {
    console.log(req.params.tid)
    const q = 'select distinct SJ.Name from Teacher T, Teach Te,Subject SJ where T.TeacherID = Te.TeacherID and Te.SubjectID = SJ.SubjectID and T.TeacherID = ?;'
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
    console.log(req.body)
    res.send('create Assignments')
  },
  async editAssignment (req, res) {
    res.send('edit Assignments')
  },
  async deleteAssignment (req, res) {
    res.send('delete Assignments')
  }
}
