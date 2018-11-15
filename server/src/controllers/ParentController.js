const connection = require('../db.js')

module.exports = {
  async index (req, res) {
    connection.query('SELECT * from parent', function (err, rows, fields) {
      if (err) throw err
      console.log('The solution is: ', rows)
      res.send(rows)
    })
  },
  async insert (req, res) {
    console.log(req.body)
    let parent = req.body
    var query = await connection.query('INSERT INTO parent SET ?', parent, function (error, results, fields) {
      if (error) { console.log('Error -- Trying to insert parent data'); res.status(200).send('Error') } else {
        console.log(query.sql)
        res.send(results)
      }
    })
  },
  async update (req, res) {
    console.log('Update function activate')
    console.log(req.body)
    var query = await connection.query('UPDATE parent SET ? WHERE ParentID = ?', [req.body, req.body.ParentID], function (error, results, fields) {
      if (error) { console.log('Error -- Trying to Update parent data'); res.status(200).send('Error') } else {
        console.log(query.sql)
        console.log('/n')
        console.log(results)
        res.send('Update Complete')
      }
    })
    // UPDATE parent SET pid = 90 WHERE pid = ?
  },
  async delete (req, res) {
    console.log('Backend Delete function')
    let pid = req.params.id
    console.log(pid)
    var query = await connection.query('DELETE FROM parent WHERE `ParentID` = ?;', pid, function (error, results, fields) {
      if (error) { console.log('Error -- Trying to Delete parent data'); res.status(200).send('Error') } else {
        console.log(query.sql)
        res.send('Delete Complete')
      }
    })
  }
}
