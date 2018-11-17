const connection = require('../db.js')

module.exports = {
  async index (req, res) {
    connection.query('SELECT * from work', function (err, rows, fields) {
      if (err) throw err
      console.log('The solution is: ', rows)
      res.send(rows)
    })
  },
  async insert (req, res) {
    console.log(req.body)
    let activity = req.body
    var query = await connection.query('INSERT INTO work SET ?', activity, function (error, results, fields) {
      if (error) { console.log('Error -- Trying to insert Homework data'); res.status(200).send('Error') } else {
        console.log(query.sql)
        res.send(results)
      }
    })
  },
  async update (req, res) {
    console.log('Update function activate')
    console.log(req.body)
    var query = await connection.query('UPDATE Work SET ? WHERE WorkID = ?', [req.body, req.body.WorkID], function (error, results, fields) {
      if (error) { console.log('Error -- Trying to Update Work data'); res.status(200).send('Error') } else {
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
    var query = await connection.query('DELETE FROM Work WHERE `WorkID` = ?;', pid, function (error, results, fields) {
      if (error) { console.log('Error -- Trying to Delete Work data'); res.status(200).send('Error') } else {
        console.log(query.sql)
        res.send('Delete Complete')
      }
    })
  }
}
