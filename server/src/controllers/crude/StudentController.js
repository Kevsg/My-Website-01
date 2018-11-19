const connection = require('../../db.js')

module.exports = {
  async index (req, res) {
    connection.query('SELECT * from student', function (err, rows) {
      if (err) throw err
      console.log('The solution is: ', rows)
      res.send(rows)
    })
  },
  async insert (req, res) {
    console.log(req.body)
    let student = req.body
    var query = await connection.query('INSERT INTO student SET ?', student, function (error, results, fields) {
      if (error) { console.log('Error -- Trying to insert student data'); res.status(200).send('Error') } else {
        console.log(query.sql)
        res.send(results)
      }
    })
  },
  async update (req, res) {
    console.log('Update function activate')
    console.log(req.body)
    var query = await connection.query('UPDATE student SET ? WHERE StudentID = ?', [req.body, req.body.StudentID], function (error, results, fields) {
      if (error) { console.log('Error -- Trying to Update student data'); res.status(200).send('Error') } else {
        console.log(query.sql)
        console.log('/n')
        console.log(results)
        res.send('Update Complete')
      }
    })
    // UPDATE student SET pid = 90 WHERE pid = ?
  },
  async delete (req, res) {
    console.log('Backend Delete function')
    let pid = req.params.id
    console.log(pid)
    var query = await connection.query('DELETE FROM student WHERE `StudentID` = ?;', pid, function (error, results, fields) {
      if (error) { console.log('Error -- Trying to Delete student data'); res.status(200).send('Error') } else {
        console.log(query.sql)
        res.send('Delete Complete')
      }
    })
  }
}
