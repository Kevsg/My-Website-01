// NOT FINISH HAVE TO FIND WAYS TO HANDLE DATE

const connection = require('../../db.js')

module.exports = {
  async index (req, res) {
    connection.query('SELECT * from attendance', function (err, rows, fields) {
      if (err) throw err
      console.log('The solution is: ', rows)
      res.send(rows)
    })
  },
  async insert (req, res) {
    console.log(req.body)
    let attendance = req.body
    var query = await connection.query('INSERT INTO attendance SET ?', attendance, function (error, results, fields) {
      if (error) { console.log('Error -- Trying to insert attendance data'); res.status(200).send('Error') } else {
        console.log(query.sql)
        res.send(results)
      }
    })
  },
  async update (req, res) {
    console.log('Update function activate')
    console.log(req.body)
    var query = await connection.query('UPDATE attendance SET ? WHERE Date = ? AND StudentID = ?', [req.body, req.body.Date, req.body.StudentID], function (error, results, fields) {
      if (error) { console.log(error); console.log('Error -- Trying to Update attendance data'); res.status(200).send('Error') } else {
        console.log(query.sql)
        console.log('/n')
        console.log(results)
        res.send('Update Complete')
      }
    })
  },
  async delete (req, res) {
    console.log('Backend Delete function')
    console.log(req)
    res.send('Hi')
    /*
    var query = await connection.query('DELETE FROM attendance WHERE `Date` = ?;', pid, function (error, results, fields) {
      if (error) { console.log('Error -- Trying to Delete attendance data'); res.status(200).send('Error') } else {
        console.log(query.sql)
        res.send('Delete Complete')
      }
    })
    */
  }
}
