const connection = require('../../db.js')

module.exports = {
  async index (req, res) {
    connection.query('SELECT * from subject', function (err, rows) {
      if (err) throw err
      console.log('The solution is: ', rows)
      res.send(rows)
    })
  },
  async insert (req, res) {
    console.log(req.body)
    let subject = req.body
    var query = await connection.query('INSERT INTO subject SET ?', subject, function (error, results, fields) {
      if (error) { console.log('Error -- Trying to insert subject data'); res.status(200).send('Error') } else {
        console.log(query.sql)
        res.send(results)
      }
    })
  },
  async update (req, res) {
    console.log('Update function activate')
    console.log(req.body)
    var query = await connection.query('UPDATE subject SET ? WHERE SubjectID = ?', [req.body, req.body.SubjectID], function (error, results, fields) {
      if (error) { console.log('Error -- Trying to Update subject data'); res.status(200).send('Error') } else {
        console.log(query.sql)
        console.log('/n')
        console.log(results)
        res.send('Update Complete')
      }
    })
  },
  async delete (req, res) {
    console.log('Backend Delete function')
    let pid = req.params.id
    console.log(pid)
    var query = await connection.query('DELETE FROM subject WHERE `SubjectID` = ?;', pid, function (error, results, fields) {
      if (error) { console.log('Error -- Trying to Delete subject data'); res.status(200).send('Error') } else {
        console.log(query.sql)
        res.send('Delete Complete')
      }
    })
  }
}
