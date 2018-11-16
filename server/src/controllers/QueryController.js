const connection = require('../db.js')

module.exports = {
  async studentWork (req, res) {
    // Fill query
    console.log('Student Work')
    connection.query('SELECT * from parent', function (err, rows, fields) {
      if (err) throw err
      console.log('The solution is: ', rows)
      res.send(rows)
    })
  },
  async absentStudent (req, res) {
    // Fill query
    connection.query('SELECT * from student', function (err, rows, fields) {
      if (err) throw err
      console.log('The solution is: ', rows)
      res.send(rows)
    })
  },
  async schoolActivity (req, res) {
    // Fill query
    connection.query('SELECT * from student', function (err, rows, fields) {
      if (err) throw err
      console.log('The solution is: ', rows)
      res.send(rows)
    })
  },
  async teacherStudent (req, res) {
    // Fill query
    connection.query('SELECT * from student', function (err, rows, fields) {
      if (err) throw err
      console.log('The solution is: ', rows)
      res.send(rows)
    })
  },
  async courseGrade (req, res) {
    // Fill query
    connection.query('SELECT * from student', function (err, rows, fields) {
      if (err) throw err
      console.log('The solution is: ', rows)
      res.send(rows)
    })
  }
}
