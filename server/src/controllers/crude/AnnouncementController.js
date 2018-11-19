const connection = require('../../db.js')

module.exports = {
  async index (req, res) {
    connection.query('SELECT * from School_Activity', function (err, rows, fields) {
      if (err) throw err
      console.log('The solution is: ', rows)
      res.send(rows)
    })
  },
  async insert (req, res) {
    console.log(req.body)
    let activity = req.body
    var query = await connection.query('INSERT INTO School_Activity SET ?', activity, function (error, results, fields) {
      if (error) { console.log('Error -- Trying to insert School_Activity data'); res.status(200).send('Error') } else {
        console.log(query.sql)
        res.send(results)
      }
    })
  },
  async update (req, res) {
    console.log('Update function activate')
    console.log(req.body)
    var query = await connection.query('UPDATE School_Activity SET ? WHERE ActivityID = ?', [req.body, req.body.ParentID], function (error, results, fields) {
      if (error) { console.log('Error -- Trying to Update School_Activity data'); res.status(200).send('Error') } else {
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
    var query = await connection.query('DELETE FROM School_Activity WHERE `ActivityID` = ?;', pid, function (error, results, fields) {
      if (error) { console.log('Error -- Trying to Delete School_Activity data'); res.status(200).send('Error') } else {
        console.log(query.sql)
        res.send('Delete Complete')
      }
    })
  }
}
