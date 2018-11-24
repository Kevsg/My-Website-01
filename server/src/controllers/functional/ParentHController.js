const connection = require('../../db.js')

module.exports = {
  async index (req, res) {
    console.log('INDEX')
    let q = `select W.due_date as wDueDate, SJ.name as sjName, W.name as wName, S.StudentID as sID, w.WorkID as wID, w.Description as wDescription from Work W, Assign A, Subject SJ, Student S where ? = S.parentid and S.classid = A.classid and A.workid = W.workid and A.subjectid = SJ.subjectid;`
    let l = req.params.pid
    connection.query(q, l, function (err, rows) {
      if (err) {
        console.log(err)
        res.status(200).send('Error')
      } else {
        console.log('The solutions is: ', rows)
        res.send(rows)
      }
    })
  },
  async isThisTaskCheck (req, res) {
    console.log('Checking Task...')
    console.log(req.params)
    let q = `select (case when exists(select * from student S, Hand_in H where S.parentid = ? and H.studentid = S.studentid and H.workid = ?) then '1' else '0' end )as A`
    let l = [req.params.sid, req.params.wid]
    connection.query(q, l, function (err, rows) {
      if (err) {
        console.log(err)
        res.status(200).send('Error')
      } else {
        console.log('The solutions is: ', rows)
        res.send(rows)
      }
    })
  }
}
